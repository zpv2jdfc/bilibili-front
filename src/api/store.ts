// store.js
import { reactive } from 'vue'

export const logConstant = reactive({
  logState: "notLogged",
  logDisplay: "none"
})

export const loggedUser = reactive({
  id: "",
  name: "",
  avatar: "",
  signatuer: "",
  level: "",
  privilege: "",
  status: "",
  setting: "",
})