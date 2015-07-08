NType.prototype.utils.normalizeLetterSet(window.TYPE);

var ntype = new NType(window);

if ( !ntype.importSettings() )
	ntype.addString(GLOBALSTRING.toUpperCase());

ntype.begin();
