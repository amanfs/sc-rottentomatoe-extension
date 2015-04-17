// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
            console.log(request.data);
        case "movie-loaded":
        	console.log(request.data);    

        break;
    }
    return true;
});

var reviewItem = function(e){
	if(e.selectionText){
		
		
		
		alert(e.selectionText);
	}
};

chrome.contextMenus.create({
		"title": "Get Review",
		"contexts": ["page", "selection", "image", "link"],
		"onclick": reviewItem
    });
    
    
    
