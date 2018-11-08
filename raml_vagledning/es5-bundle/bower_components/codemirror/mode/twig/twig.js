(function(mod){if("object"==("undefined"===typeof exports?"undefined":babelHelpers.typeof(exports))&&"object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module)))mod(require("../../lib/codemirror"),require("../../addon/mode/multiplex"));else if("function"==typeof define&&define.amd)define(["../../lib/codemirror","../../addon/mode/multiplex"],mod);else mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("twig:inner",function(){var keywords=["and","as","autoescape","endautoescape","block","do","endblock","else","elseif","extends","for","endfor","embed","endembed","filter","endfilter","flush","from","if","endif","in","is","include","import","not","or","set","spaceless","endspaceless","with","endwith","trans","endtrans","blocktrans","endblocktrans","macro","endmacro","use","verbatim","endverbatim"],operator=/^[+\-*&%=<>!?|~^]/,sign=/^[:\[\(\{]/,atom=["true","false","null","empty","defined","divisibleby","divisible by","even","odd","iterable","sameas","same as"],number=/^(\d[+\-\*\/])?\d+(\.\d+)?/;keywords=new RegExp("(("+keywords.join(")|(")+"))\\b");atom=new RegExp("(("+atom.join(")|(")+"))\\b");function tokenBase(stream,state){var ch=stream.peek();if(state.incomment){if(!stream.skipTo("#}")){stream.skipToEnd()}else{stream.eatWhile(/\#|}/);state.incomment=!1}return"comment"}else if(state.intag){if(state.operator){state.operator=!1;if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}}if(state.sign){state.sign=!1;if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}}if(state.instring){if(ch==state.instring){state.instring=!1}stream.next();return"string"}else if("'"==ch||"\""==ch){state.instring=ch;stream.next();return"string"}else if(stream.match(state.intag+"}")||stream.eat("-")&&stream.match(state.intag+"}")){state.intag=!1;return"tag"}else if(stream.match(operator)){state.operator=!0;return"operator"}else if(stream.match(sign)){state.sign=!0}else{if(stream.eat(" ")||stream.sol()){if(stream.match(keywords)){return"keyword"}if(stream.match(atom)){return"atom"}if(stream.match(number)){return"number"}if(stream.sol()){stream.next()}}else{stream.next()}}return"variable"}else if(stream.eat("{")){if(stream.eat("#")){state.incomment=!0;if(!stream.skipTo("#}")){stream.skipToEnd()}else{stream.eatWhile(/\#|}/);state.incomment=!1}return"comment"}else if(ch=stream.eat(/\{|%/)){state.intag=ch;if("{"==ch){state.intag="}"}stream.eat("-");return"tag"}}stream.next()}return{startState:function startState(){return{}},token:function token(stream,state){return tokenBase(stream,state)}}});CodeMirror.defineMode("twig",function(config,parserConfig){var twigInner=CodeMirror.getMode(config,"twig:inner");if(!parserConfig||!parserConfig.base)return twigInner;return CodeMirror.multiplexingMode(CodeMirror.getMode(config,parserConfig.base),{open:/\{[{#%]/,close:/[}#%]\}/,mode:twigInner,parseDelimiters:!0})});CodeMirror.defineMIME("text/x-twig","twig")});