(function(mod){if("object"==typeof exports&&"object"==typeof module)mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)define(["../../lib/codemirror"],mod);else mod(CodeMirror)})(function(CodeMirror){"use strict";CodeMirror.defineMode("oz",function(conf){function wordRegexp(words){return new RegExp("^(("+words.join(")|(")+"))\\b")}var singleOperators=/[\^@!\|<>#~\.\*\-\+\\/,=]/,doubleOperators=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,tripleOperators=/(:::)|(\.\.\.)|(=<:)|(>=:)/,middle=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],end=["end"],atoms=wordRegexp(["true","false","nil","unit"]),commonKeywords=wordRegexp(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),openingKeywords=wordRegexp(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),middleKeywords=wordRegexp(middle),endKeywords=wordRegexp(end);function tokenBase(stream,state){if(stream.eatSpace()){return null}if(stream.match(/[{}]/)){return"bracket"}if(stream.match(/(\[])/)){return"keyword"}if(stream.match(tripleOperators)||stream.match(doubleOperators)){return"operator"}if(stream.match(atoms)){return"atom"}var matched=stream.match(openingKeywords);if(matched){if(!state.doInCurrentLine)state.currentIndent++;else state.doInCurrentLine=!1;if("proc"==matched[0]||"fun"==matched[0])state.tokenize=tokenFunProc;else if("class"==matched[0])state.tokenize=tokenClass;else if("meth"==matched[0])state.tokenize=tokenMeth;return"keyword"}if(stream.match(middleKeywords)||stream.match(commonKeywords)){return"keyword"}if(stream.match(endKeywords)){state.currentIndent--;return"keyword"}var ch=stream.next();if("\""==ch||"'"==ch){state.tokenize=tokenString(ch);return state.tokenize(stream,state)}if(/[~\d]/.test(ch)){if("~"==ch){if(!/^[0-9]/.test(stream.peek()))return null;else if("0"==stream.next()&&stream.match(/^[xX][0-9a-fA-F]+/)||stream.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}if("0"==ch&&stream.match(/^[xX][0-9a-fA-F]+/)||stream.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number";return null}if("%"==ch){stream.skipToEnd();return"comment"}else if("/"==ch){if(stream.eat("*")){state.tokenize=tokenComment;return tokenComment(stream,state)}}if(singleOperators.test(ch)){return"operator"}stream.eatWhile(/\w/);return"variable"}function tokenClass(stream,state){if(stream.eatSpace()){return null}stream.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/);state.tokenize=tokenBase;return"variable-3"}function tokenMeth(stream,state){if(stream.eatSpace()){return null}stream.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/);state.tokenize=tokenBase;return"def"}function tokenFunProc(stream,state){if(stream.eatSpace()){return null}if(!state.hasPassedFirstStage&&stream.eat("{")){state.hasPassedFirstStage=!0;return"bracket"}else if(state.hasPassedFirstStage){stream.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/);state.hasPassedFirstStage=!1;state.tokenize=tokenBase;return"def"}else{state.tokenize=tokenBase;return null}}function tokenComment(stream,state){var maybeEnd=!1,ch;while(ch=stream.next()){if("/"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="*"==ch}return"comment"}function tokenString(quote){return function(stream,state){var escaped=!1,next,end=!1;while(null!=(next=stream.next())){if(next==quote&&!escaped){end=!0;break}escaped=!escaped&&"\\"==next}if(end||!escaped)state.tokenize=tokenBase;return"string"}}return{startState:function(){return{tokenize:tokenBase,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(stream,state){if(stream.sol())state.doInCurrentLine=0;return state.tokenize(stream,state)},indent:function(state,textAfter){var trueText=textAfter.replace(/^\s+|\s+$/g,"");if(trueText.match(endKeywords)||trueText.match(middleKeywords)||trueText.match(/(\[])/))return conf.indentUnit*(state.currentIndent-1);if(0>state.currentIndent)return 0;return state.currentIndent*conf.indentUnit},fold:"indent",electricInput:function(){var allClosings=middle.concat(end);return new RegExp("[\\[\\]]|("+allClosings.join("|")+")$")}(),lineComment:"%",blockCommentStart:"/*",blockCommentEnd:"*/"}});CodeMirror.defineMIME("text/x-oz","oz")});