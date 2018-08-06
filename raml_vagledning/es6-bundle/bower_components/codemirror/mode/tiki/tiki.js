(function(mod){if("object"==typeof exports&&"object"==typeof module)mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)define(["../../lib/codemirror"],mod);else mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("tiki",function(config){function inBlock(style,terminator,returnTokenizer){return function(stream,state){while(!stream.eol()){if(stream.match(terminator)){state.tokenize=inText;break}stream.next()}if(returnTokenizer)state.tokenize=returnTokenizer;return style}}function inLine(style){return function(stream,state){while(!stream.eol()){stream.next()}state.tokenize=inText;return style}}function inText(stream,state){function chain(parser){state.tokenize=parser;return parser(stream,state)}var sol=stream.sol(),ch=stream.next();switch(ch){case"{":stream.eat("/");stream.eatSpace();stream.eatWhile(/[^\s\u00a0=\"\'\/?(}]/);state.tokenize=inPlugin;return"tag";case"_":if(stream.eat("_"))return chain(inBlock("strong","__",inText));break;case"'":if(stream.eat("'"))return chain(inBlock("em","''",inText));break;case"(":if(stream.eat("("))return chain(inBlock("variable-2","))",inText));break;case"[":return chain(inBlock("variable-3","]",inText));break;case"|":if(stream.eat("|"))return chain(inBlock("comment","||"));break;case"-":if(stream.eat("=")){return chain(inBlock("header string","=-",inText))}else if(stream.eat("-")){return chain(inBlock("error tw-deleted","--",inText))}break;case"=":if(stream.match("=="))return chain(inBlock("tw-underline","===",inText));break;case":":if(stream.eat(":"))return chain(inBlock("comment","::"));break;case"^":return chain(inBlock("tw-box","^"));break;case"~":if(stream.match("np~"))return chain(inBlock("meta","~/np~"));break;}if(sol){switch(ch){case"!":if(stream.match("!!!!!")){return chain(inLine("header string"))}else if(stream.match("!!!!")){return chain(inLine("header string"))}else if(stream.match("!!!")){return chain(inLine("header string"))}else if(stream.match("!!")){return chain(inLine("header string"))}else{return chain(inLine("header string"))}break;case"*":case"#":case"+":return chain(inLine("tw-listitem bracket"));break;}}return null}var indentUnit=config.indentUnit,pluginName,type;function inPlugin(stream,state){var ch=stream.next(),peek=stream.peek();if("}"==ch){state.tokenize=inText;return"tag"}else if("("==ch||")"==ch){return"bracket"}else if("="==ch){type="equals";if(">"==peek){stream.next();peek=stream.peek()}if(!/[\'\"]/.test(peek)){state.tokenize=inAttributeNoQuote()}return"operator"}else if(/[\'\"]/.test(ch)){state.tokenize=inAttribute(ch);return state.tokenize(stream,state)}else{stream.eatWhile(/[^\s\u00a0=\"\'\/?]/);return"keyword"}}function inAttribute(quote){return function(stream,state){while(!stream.eol()){if(stream.next()==quote){state.tokenize=inPlugin;break}}return"string"}}function inAttributeNoQuote(){return function(stream,state){while(!stream.eol()){var ch=stream.next(),peek=stream.peek();if(" "==ch||","==ch||/[ )}]/.test(peek)){state.tokenize=inPlugin;break}}return"string"}}var curState,setStyle;function pass(){for(var i=arguments.length-1;0<=i;i--)curState.cc.push(arguments[i])}function cont(){pass.apply(null,arguments);return!0}function pushContext(pluginName,startOfLine){var noIndent=curState.context&&curState.context.noIndent;curState.context={prev:curState.context,pluginName:pluginName,indent:curState.indented,startOfLine:startOfLine,noIndent:noIndent}}function popContext(){if(curState.context)curState.context=curState.context.prev}function element(type){if("openPlugin"==type){curState.pluginName=pluginName;return cont(attributes,endplugin(curState.startOfLine))}else if("closePlugin"==type){var err=!1;if(curState.context){err=curState.context.pluginName!=pluginName;popContext()}else{err=!0}if(err)setStyle="error";return cont(endcloseplugin(err))}else if("string"==type){if(!curState.context||"!cdata"!=curState.context.name)pushContext("!cdata");if(curState.tokenize==inText)popContext();return cont()}else return cont()}function endplugin(startOfLine){return function(type){if("selfclosePlugin"==type||"endPlugin"==type)return cont();if("endPlugin"==type){pushContext(curState.pluginName,startOfLine);return cont()}return cont()}}function endcloseplugin(err){return function(type){if(err)setStyle="error";if("endPlugin"==type)return cont();return pass()}}function attributes(type){if("keyword"==type){setStyle="attribute";return cont(attributes)}if("equals"==type)return cont(attvalue,attributes);return pass()}function attvalue(type){if("keyword"==type){setStyle="string";return cont()}if("string"==type)return cont(attvaluemaybe);return pass()}function attvaluemaybe(type){if("string"==type)return cont(attvaluemaybe);else return pass()}return{startState:function(){return{tokenize:inText,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(stream,state){if(stream.sol()){state.startOfLine=!0;state.indented=stream.indentation()}if(stream.eatSpace())return null;setStyle=type=pluginName=null;var style=state.tokenize(stream,state);if((style||type)&&"comment"!=style){curState=state;while(!0){var comb=state.cc.pop()||element;if(comb(type||style))break}}state.startOfLine=!1;return setStyle||style},indent:function(state,textAfter){var context=state.context;if(context&&context.noIndent)return 0;if(context&&/^{\//.test(textAfter))context=context.prev;while(context&&!context.startOfLine)context=context.prev;if(context)return context.indent+indentUnit;else return 0},electricChars:"/"}});CodeMirror.defineMIME("text/tiki","tiki")});