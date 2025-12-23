// ==UserScript==
// @name        YouTube auto-timestamper
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 12/17/2025, 5:12:31 PM
// ==/UserScript==

// interval in ms
const interval = 1000;
// start delay in ms
const startDelay = 10000;
// substracted time in seconds
const timeDelay = 0;

const timeRegex = /(([&?])t=[0-9]+)/

const tick = () => {
  const ytplayer = document.getElementById("movie_player");
  if (!ytplayer) {
    return
  }

  let time = ytplayer.getCurrentTime();
  time = Math.floor(time)

  time -= timeDelay

  if (time <= 0) {
    return
  }

  let currentUrl = window.location.href

  if (currentUrl.includes("t=")) {
    const match = currentUrl.match(timeRegex, "t=")
    currentUrl = currentUrl.replace(timeRegex, match[2] + "t=" + time)
  } else {
    currentUrl = currentUrl + "&t=" + time
  }
  history.replaceState(currentUrl, "", currentUrl)
}

const script =
setTimeout(() => {
  setInterval(tick, interval)
  console.debug("autotimestamper initialized")
}, startDelay)
