<template>
    <ul class="left-entry">
        <li class="left-entry-item">
            <a href="/" target="_blank" class="channel-item">
                <span>番剧</span>
            </a>
        </li>
        <li class="left-entry-item">
            <a href="/" target="_blank" class="channel-item">
                <span>番剧</span>
            </a>
        </li>
    </ul>

</template>

<style scoped>
a:visited{
    color: black;
}
.left-entry{
    margin: 0px 20px 0px 0px;
    width: 608px;
    height: 64px;
    list-style: none;
    border: 1px solid black;
}
.left-entry-item{
    float: left;
    width: 43px;
    height: 64px;
    margin: 0px 0px 0px 0px;

}
.channel-item{
    float: left;
    width: 28px;
    height: 64px;
    margin: 0px 15px 0px 0px;

}
a{
    text-decoration: none;
}
.channel-item:hover{
    animation-duration: 500ms;
    animation-name: jumpup;
}
@keyframes jumpup {
  from {
    margin-top: 20px;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>