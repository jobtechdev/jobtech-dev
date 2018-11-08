(function(mod){if("object"==("undefined"===typeof exports?"undefined":babelHelpers.typeof(exports))&&"object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module)))mod(require("../../lib/codemirror"));else if("function"==typeof define&&define.amd)define(["../../lib/codemirror"],mod);else mod(CodeMirror)})(function(CodeMirror){"use strict";function errorIfNotEmpty(stream){var nonWS=stream.match(/^\s*\S/);stream.skipToEnd();return nonWS?"error":null}CodeMirror.defineMode("asciiarmor",function(){return{token:function token(stream,state){var m;if("top"==state.state){if(stream.sol()&&(m=stream.match(/^-----BEGIN (.*)?-----\s*$/))){state.state="headers";state.type=m[1];return"tag"}return errorIfNotEmpty(stream)}else if("headers"==state.state){if(stream.sol()&&stream.match(/^\w+:/)){state.state="header";return"atom"}else{var result=errorIfNotEmpty(stream);if(result)state.state="body";return result}}else if("header"==state.state){stream.skipToEnd();state.state="headers";return"string"}else if("body"==state.state){if(stream.sol()&&(m=stream.match(/^-----END (.*)?-----\s*$/))){if(m[1]!=state.type)return"error";state.state="end";return"tag"}else{if(stream.eatWhile(/[A-Za-z0-9+\/=]/)){return null}else{stream.next();return"error"}}}else if("end"==state.state){return errorIfNotEmpty(stream)}},blankLine:function blankLine(state){if("headers"==state.state)state.state="body"},startState:function startState(){return{state:"top",type:null}}}});CodeMirror.defineMIME("application/pgp","asciiarmor");CodeMirror.defineMIME("application/pgp-encrypted","asciiarmor");CodeMirror.defineMIME("application/pgp-keys","asciiarmor");CodeMirror.defineMIME("application/pgp-signature","asciiarmor")});