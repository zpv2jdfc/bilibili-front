// store.js
import { reactive } from 'vue'

export const logConstant = reactive({
  logState: "notLogged",
  logDisplay: "none"
})

export const loggedUser = reactive({
  id: "",
  name: "",
  avatar: "unlogged",
  singature: "",
  level: "",
  privilege: "",
  status: "",
  setting: "",
})