function QueryStringBuilderTest() {
	this.builder = new QueryStringBuilder();
}
/*
QueryStringBuilderTest.beforeClass = function() {};
QueryStringBuilderTest.afterClass = function() {};
QueryStringBuilderTest.prototype.before = function() {};
QueryStringBuilderTest.prototype.after = function() {};
*/
QueryStringBuilderTest.prototype.testEmpty1 = function() {
	var expected = '';
	var current = this.builder.toString();
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.testEmpty2 = function() {
	var expected = '';
	var current = this.builder.toString('?');
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.testEmpty3 = function() {
	var notExpected = '?';
	var current = this.builder.toString();
	{
		JSUS.assertNotEquals(notExpected, current);
	}
};

QueryStringBuilderTest.prototype.test1ParamWithFirst = function() {
	this.builder.add('n', 'v');
	//
	var expected = '?n=v';
	var current = this.builder.toString('?');
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.test1ParamNoFirst = function() {
	this.builder.add('n', 'v');
	//
	var expected = 'n=v';
	var current = this.builder.toString('');
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.test2ParamsWithFirst = function() {
	this.builder.add('n', 'v');
	this.builder.add('nnaammee', 'vvaalluuee');
	//
	var expected = '?n=v&nnaammee=vvaalluuee';
	var current = this.builder.toString('?');
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.test2ParamsNoFirst = function() {
	this.builder.add('abc', '123');
	this.builder.add('z', '-1');
	//
	var expected = 'abc=123&z=-1';
	var current = this.builder.toString('');
	{
		JSUS.assertEquals(expected, current);
	}
};

QueryStringBuilderTest.prototype.test2ParamsSameName = function() {
	this.builder.add('n', '1');
	this.builder.add('n', '2');
	//
	var expected = 'n=1&n=2';
	var current = this.builder.toString('');
	{
		JSUS.assertEquals(expected, current);
	}
};
