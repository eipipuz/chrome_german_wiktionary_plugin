function onClick(info, tab) {
	var url = "http://de.wiktionary.org/w/index.php?search=" + info.selectionText;
	var tabProperties = {
		"url": url,
		"active": false,
		"index": tab.index,
	};
	chrome.tabs.create(tabProperties);
}

var createProperties = {
	"title": "Open German Wiktionary",
	"contexts": ["selection"],
	"onclick": onClick,
}

chrome.contextMenus.create(createProperties);
