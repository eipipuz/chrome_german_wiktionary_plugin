function onClick(info, tab) {
	var url = "http://de.wiktionary.org/w/index.php?search=" + info.selectionText;
	chrome.tabs.create({"url": url});
}

var createProperties = {
	"title": "Open German Wiktionary",
	"contexts": ["selection"],
	"onclick": onClick,
}

chrome.contextMenus.create(createProperties);
