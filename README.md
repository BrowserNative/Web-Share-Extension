# Web Share Extension

Chrome extension to share web pages and selected text using the Web Share API. Requires Chrome 89+.

Visit home page for more information: https://browsernative.com/web-share-api-extension/


Based on [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/).

See [Web Share API documentation](https://web.dev/web-share/).

## Extension Compatibility Notes
* In Chrome 89+, web sharing is available on Windows and ChromeOS, while registering as a share target is supported on ChromeOS. 

* On these platforms, sites can now use navigator.share() on desktop to trigger a share dialog box. And an entry to the web app manifest allows a PWA to act as a share target. ->[source](https://blog.chromium.org/2021/01/chrome-89-beta-advanced-hardware.html)