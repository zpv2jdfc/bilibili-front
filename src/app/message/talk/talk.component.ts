import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {WebsocketService} from "../../services/websocket.service";
import {InfoService} from "../../services/info.service";
import {UserqueryService} from "../../profile/user-info/userquery.service";
import {makeTemplateObject} from "@angular/localize/src/utils";

@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit{
  constructor(public uiService : UiService,
              private websocketService : WebsocketService,
              private infoService:InfoService,
              private userqueryService: UserqueryService) {
  }

  /**
   * {
   *   id
   *   name
   *   url
   *   avatar
   *   talk []
   * }
   */
  userList = [] //会话人列表 [{},{},{}]


  currentTalk = [] // 当前对话
  currentTo ; //当前对话人id
  currentUser;
  intputMessage = ''; //对话框的输入

  user = {
    id : '',
    name : '',
    avatar : '',
  }
  ngOnInit(){
    this.user.id = this.infoService.info.id;
    this.websocketService.connect("ws://localhost:8080/api/websocket"+`/${this.user.id}`);
    this.currentTo = localStorage.getItem("talkWith");

    //初始化用户列表
    if(localStorage.getItem("userList")==null || localStorage.getItem("userList").length<2){
      this.userList = []
    }else {
      this.userList = JSON.parse(localStorage.getItem("userList"));
    }
    // 通过点击私信进入页面
    let flag = false;
    for(let item of this.userList){
      if(item.id==this.currentTo) {
        flag = true;
        this.currentTalk =  item.talk
        break;
      }
    }
    if(this.infoService.info.id == this.currentTo){
      flag = true;
    }
    // 要对话的用户信息还没加载, 先加载
    if(flag == false){
      this.addTalkObject(this.currentTo)
    }
    setTimeout(
      ()=>{this.websocketService.sendMessage('online');},
      1000
    )

    //  接受消息
    this.websocketService.messageSubject.subscribe(
      data => {
        console.log(data)
        // 收消息 send:from:to:content:uuid
        let uuid = data.split(":")[4]
        let from = data.split(":")[1]
        let content = data.split(":")[3]
        this.sendCheck(uuid)
        //新消息插入最前面
        for(let item of this.userList){
          if(item.id == from){
            item.talk.push(content);
            return;
          }
        }
        //用户不在当前消息列表中
        this.userqueryService.quryById(from).subscribe(
          res=>{
            let temp = []
            temp.push(content);
            let tempInfo = {
              id:from,
              name:res.data.nickName,
              url:'/profile/'+from,
              avatar:res.data.avatar,
              talk : []
            }
            tempInfo.talk = temp;
            if(tempInfo.avatar == 'default' || tempInfo.avatar==null || tempInfo.avatar==''){
              tempInfo.avatar = 'http://www.v-ming.com/avatar/default.jpg'
            }
            this.userList.push(tempInfo)
          }
        )

      }
    );
    //  心跳包
    setInterval(()=>{this.websocketService.sendMessage('heartbeat');},10000);

  }

  sendCheck(uuid : string){
    let msg = 'ack:'+uuid;
    // 发送
    this.websocketService.sendMessage(msg);
  }

  //发送消息
  send() {
    // 创建消息对象
    // const msg = {
    //   msg: this.message,                                                    // 消息内容
    //   type: this.type === SEND_TYPE.ALL ? SEND_TYPE.ALL : SEND_TYPE.SINGLE, // 类型
    //   to: this.type === SEND_TYPE.SINGLE ? this.sendToUser : undefined            // 要发送的对象
    // };
    this.currentTalk.push(this.intputMessage)
    if(this.intputMessage==null || this.intputMessage=='')
      return
    let msg = 'send:'+this.user.id+":"+this.currentTo+":"+this.intputMessage;
    // 发送
    this.websocketService.sendMessage(msg);
    for(let item of this.userList){
      if(item.id==this.currentTo){
        item.talk.push(this.intputMessage);
      }
    }
    // 发送完成,情况message内容
    this.intputMessage = '';
    localStorage.removeItem('userList');
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
  addTalkObject(id:number){
    this.userqueryService.quryById(id).subscribe(
      data=>{
        let temp = []
        let tempInfo = {
          id:id,
          name:data.data.nickName,
          url:'/profile/'+id,
          avatar:data.data.avatar,
          talk : []
        }
        if(tempInfo.avatar == 'default' || tempInfo.avatar==null || tempInfo.avatar==''){
          tempInfo.avatar = 'http://www.v-ming.com/avatar/default.jpg'
        }
        tempInfo.talk = temp;
        this.userList.push(tempInfo)
      }
    )
  }
  choose(id){
    this.currentTo = id;
    for(let item of this.userList){
      if(item.id==id){
        console.log(item.talk)
        this.currentTalk = item.talk;
        break;
      }
    }
  }
}
