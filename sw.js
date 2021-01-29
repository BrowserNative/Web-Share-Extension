// toolbar button
chrome.action.onClicked.addListener(tab => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ["js/page.js"]
	});
});

// handle context menu
function onClickHandler(info, tab){
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: [`js/${info.menuItemId}.js`]
	});
}
chrome.contextMenus.onClicked.addListener(onClickHandler);


// first run
chrome.runtime.onInstalled.addListener( function(details) {

	// create context menus
	let contexts = ["page", "selection"];
	for (let i = 0; i < contexts.length; i++) {
		let context = contexts[i];
		let title = "Web Share this " + context;
		chrome.contextMenus.create({
			"title": title,
			"contexts": [context],
			"id": context
		});
	}
	
	// launch tutorial page
	if(details.reason == "install"){
		chrome.tabs.create({url: "https://browsernative.com/web-share-api-extension/"});
	}
});