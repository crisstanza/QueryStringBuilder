(function() {

	function start() {
		var jsus = new JSUS(QueryStringBuilderTest);
		jsus.start('display');
		jsus.end();
	}

	window.addEventListener('load', start, false);

})();
