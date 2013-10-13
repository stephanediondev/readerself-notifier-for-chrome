var url = window.location.href;

function refresh() {
	chrome.extension.sendRequest({'msg': 'refresh_from_content'});
}

chrome.storage.local.get(null, function(cfg) {
	if(cfg) {
		options = cfg;

		if(options.url) {
			if(options.url.slice(-1) === '/') {
				options.url = options.url.slice(0, -1);
			}
			if(url.indexOf(options.url + '/home') != -1) {
				setInterval('refresh()', 5000);
			}
		}
	}
});
