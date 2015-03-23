var QueryStringBuilder = function() {
	this.params = [];
}

QueryStringBuilder.EMPTY = '';
QueryStringBuilder.SEP = '&';

QueryStringBuilder.prototype.add = function(name, value) {
	this.params.push({ name: name, value: value });
}

QueryStringBuilder.prototype.toString = function(first) {
	var buffer = [];
	var length = this.params.length;
	for ( var i = 0 ; i < length ; i++) {
		var param = this.params.shift()
		buffer.push(param.name + '=' + escape(param.value));
	}
	if (length > 0) {
		return first + buffer.join(QueryStringBuilder.SEP);
	} else {
		return QueryStringBuilder.EMPTY;
	}
}
