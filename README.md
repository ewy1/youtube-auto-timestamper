# youtube-auto-timestamper.user.js

## Purpose

This script stores the YouTube video time in the URL. This means when the page is reloaded, bookmarked or even visited in history, the current watch time gets preserved.

I think Google already does this for you if you have an account, but I don't (and I don't think you should either.)

## Installation

1. Install Violentmonkey (untested on other userscript managers)
2. Click [here](https://github.com/ewy1/youtube-auto-timestamper/raw/refs/heads/master/youtube-auto-timestamper.user.js) to install this script.
3. _(Optional)_ Change the interval, start delay or time delay. The time delay will get substracted from the timestamp. For example, set this to 60 so your bookmarks will be a minute before your actual watch time, so you don't have to rewind to get a refresher.

## Details

* The script has a startup delay of ten seconds. This is to prevent it from mangling the URL when following links from `youtu.be`, where it would mangle the link and make the script (and site) stop functioning.

