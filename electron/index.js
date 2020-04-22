"use strict"
const { app } = require("electron")

app.on("ready", () => {
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  app.exit()
})
