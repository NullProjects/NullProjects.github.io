/*! jQuery UI - v1.10.3 - 2013-12-10
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(n,t){function i(t,i){var u,f,e,o=t.nodeName.toLowerCase();return"area"===o?(u=t.parentNode,f=u.name,t.href&&f&&"map"===u.nodeName.toLowerCase()?(e=n("img[usemap=#"+f+"]")[0],!!e&&r(e)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&r(t)}function r(t){return n.expr.filters.visible(t)&&!n(t).parents().addBack().filter(function(){return"hidden"===n.css(this,"visibility")}).length}var u=0,f=/^ui-id-\d+$/;n.ui=n.ui||{};n.extend(n.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});n.fn.extend({focus:function(t){return function(i,r){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){n(t).focus();r&&r.call(t)},i)}):t.apply(this,arguments)}}(n.fn.focus),scrollParent:function(){var t;return t=n.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(n.css(this,"position"))&&/(auto|scroll)/.test(n.css(this,"overflow")+n.css(this,"overflow-y")+n.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(n.css(this,"overflow")+n.css(this,"overflow-y")+n.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?n(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var u,f,r=n(this[0]);r.length&&r[0]!==document;){if(u=r.css("position"),("absolute"===u||"relative"===u||"fixed"===u)&&(f=parseInt(r.css("zIndex"),10),!isNaN(f)&&0!==f))return f;r=r.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})},removeUniqueId:function(){return this.each(function(){f.test(this.id)&&n(this).removeAttr("id")})}});n.extend(n.expr[":"],{data:n.expr.createPseudo?n.expr.createPseudo(function(t){return function(i){return!!n.data(i,t)}}):function(t,i,r){return!!n.data(t,r[3])},focusable:function(t){return i(t,!isNaN(n.attr(t,"tabindex")))},tabbable:function(t){var r=n.attr(t,"tabindex"),u=isNaN(r);return(u||r>=0)&&i(t,!u)}});n("<a>").outerWidth(1).jquery||n.each(["Width","Height"],function(i,r){function u(t,i,r,u){return n.each(o,function(){i-=parseFloat(n.css(t,"padding"+this))||0;r&&(i-=parseFloat(n.css(t,"border"+this+"Width"))||0);u&&(i-=parseFloat(n.css(t,"margin"+this))||0)}),i}var o="Width"===r?["Left","Right"]:["Top","Bottom"],f=r.toLowerCase(),e={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:n.fn.outerHeight};n.fn["inner"+r]=function(i){return i===t?e["inner"+r].call(this):this.each(function(){n(this).css(f,u(this,i)+"px")})};n.fn["outer"+r]=function(t,i){return"number"!=typeof t?e["outer"+r].call(this,t):this.each(function(){n(this).css(f,u(this,t,!0,i)+"px")})}});n.fn.addBack||(n.fn.addBack=function(n){return this.add(null==n?this.prevObject:this.prevObject.filter(n))});n("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(n.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,n.camelCase(i)):t.call(this)}}(n.fn.removeData));n.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());n.support.selectstart="onselectstart"in document.createElement("div");n.fn.extend({disableSelection:function(){return this.bind((n.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(n){n.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});n.extend(n.ui,{plugin:{add:function(t,i,r){var u,f=n.ui[t].prototype;for(u in r)f.plugins[u]=f.plugins[u]||[],f.plugins[u].push([i,r[u]])},call:function(n,t,i){var r,u=n.plugins[t];if(u&&n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType)for(r=0;u.length>r;r++)n.options[u[r][0]]&&u[r][1].apply(n.element,i)}},hasScroll:function(t,i){if("hidden"===n(t).css("overflow"))return!1;var r=i&&"left"===i?"scrollLeft":"scrollTop",u=!1;return t[r]>0?!0:(t[r]=1,u=t[r]>0,t[r]=0,u)}})})(jQuery),function(n,t){var r=0,i=Array.prototype.slice,u=n.cleanData;n.cleanData=function(t){for(var i,r=0;null!=(i=t[r]);r++)try{n(i).triggerHandler("remove")}catch(f){}u(t)};n.widget=function(i,r,u){var h,e,f,s,c={},o=i.split(".")[0];i=i.split(".")[1];h=o+"-"+i;u||(u=r,r=n.Widget);n.expr[":"][h.toLowerCase()]=function(t){return!!n.data(t,h)};n[o]=n[o]||{};e=n[o][i];f=n[o][i]=function(n,i){return this._createWidget?(arguments.length&&this._createWidget(n,i),t):new f(n,i)};n.extend(f,e,{version:u.version,_proto:n.extend({},u),_childConstructors:[]});s=new r;s.options=n.widget.extend({},s.options);n.each(u,function(i,u){return n.isFunction(u)?(c[i]=function(){var n=function(){return r.prototype[i].apply(this,arguments)},t=function(n){return r.prototype[i].apply(this,n)};return function(){var i,r=this._super,f=this._superApply;return this._super=n,this._superApply=t,i=u.apply(this,arguments),this._super=r,this._superApply=f,i}}(),t):(c[i]=u,t)});f.prototype=n.widget.extend(s,{widgetEventPrefix:e?s.widgetEventPrefix:i},c,{constructor:f,namespace:o,widgetName:i,widgetFullName:h});e?(n.each(e._childConstructors,function(t,i){var r=i.prototype;n.widget(r.namespace+"."+r.widgetName,f,i._proto)}),delete e._childConstructors):r._childConstructors.push(f);n.widget.bridge(i,f)};n.widget.extend=function(r){for(var u,f,o=i.call(arguments,1),e=0,s=o.length;s>e;e++)for(u in o[e])f=o[e][u],o[e].hasOwnProperty(u)&&f!==t&&(r[u]=n.isPlainObject(f)?n.isPlainObject(r[u])?n.widget.extend({},r[u],f):n.widget.extend({},f):f);return r};n.widget.bridge=function(r,u){var f=u.prototype.widgetFullName||r;n.fn[r]=function(e){var h="string"==typeof e,o=i.call(arguments,1),s=this;return e=!h&&o.length?n.widget.extend.apply(null,[e].concat(o)):e,h?this.each(function(){var i,u=n.data(this,f);return u?n.isFunction(u[e])&&"_"!==e.charAt(0)?(i=u[e].apply(u,o),i!==u&&i!==t?(s=i&&i.jquery?s.pushStack(i.get()):i,!1):t):n.error("no such method '"+e+"' for "+r+" widget instance"):n.error("cannot call methods on "+r+" prior to initialization; attempted to call method '"+e+"'")}):this.each(function(){var t=n.data(this,f);t?t.option(e||{})._init():n.data(this,f,new u(e,this))}),s}};n.Widget=function(){};n.Widget._childConstructors=[];n.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=n(i||this.defaultElement||this)[0];this.element=n(i);this.uuid=r++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=n.widget.extend({},this.options,this._getCreateOptions(),t);this.bindings=n();this.hoverable=n();this.focusable=n();i!==this&&(n.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(n){n.target===i&&this.destroy()}}),this.document=n(i.style?i.ownerDocument:i.document||i),this.window=n(this.document[0].defaultView||this.document[0].parentWindow));this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:n.noop,_getCreateEventData:n.noop,_create:n.noop,_init:n.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:n.noop,widget:function(){return this.element},option:function(i,r){var u,f,e,o=i;if(0===arguments.length)return n.widget.extend({},this.options);if("string"==typeof i)if(o={},u=i.split("."),i=u.shift(),u.length){for(f=o[i]=n.widget.extend({},this.options[i]),e=0;u.length-1>e;e++)f[u[e]]=f[u[e]]||{},f=f[u[e]];if(i=u.pop(),r===t)return f[i]===t?null:f[i];f[i]=r}else{if(r===t)return this.options[i]===t?null:this.options[i];o[i]=r}return this._setOptions(o),this},_setOptions:function(n){for(var t in n)this._setOption(t,n[t]);return this},_setOption:function(n,t){return this.options[n]=t,"disabled"===n&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,r,u){var e,f=this;"boolean"!=typeof i&&(u=r,r=i,i=!1);u?(r=e=n(r),this.bindings=this.bindings.add(r)):(u=r,r=this.element,e=this.widget());n.each(u,function(u,o){function s(){return i||f.options.disabled!==!0&&!n(this).hasClass("ui-state-disabled")?("string"==typeof o?f[o]:o).apply(f,arguments):t}"string"!=typeof o&&(s.guid=o.guid=o.guid||s.guid||n.guid++);var h=u.match(/^(\w+)\s*(.*)$/),c=h[1]+f.eventNamespace,l=h[2];l?e.delegate(l,c,s):r.bind(c,s)})},_off:function(n,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;n.unbind(t).undelegate(t)},_delay:function(n,t){function r(){return("string"==typeof n?i[n]:n).apply(i,arguments)}var i=this;return setTimeout(r,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:function(t){n(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){n(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(t,{focusin:function(t){n(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){n(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,r){var u,f,e=this.options[t];if(r=r||{},i=n.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],f=i.originalEvent)for(u in f)u in i||(i[u]=f[u]);return this.element.trigger(i,r),!(n.isFunction(e)&&e.apply(this.element[0],[i].concat(r))===!1||i.isDefaultPrevented())}};n.each({show:"fadeIn",hide:"fadeOut"},function(t,i){n.Widget.prototype["_"+t]=function(r,u,f){"string"==typeof u&&(u={effect:u});var o,e=u?u===!0||"number"==typeof u?i:u.effect||i:t;u=u||{};"number"==typeof u&&(u={duration:u});o=!n.isEmptyObject(u);u.complete=f;u.delay&&r.delay(u.delay);o&&n.effects&&n.effects.effect[e]?r[t](u):e!==t&&r[e]?r[e](u.duration,u.easing,f):r.queue(function(i){n(this)[t]();f&&f.call(r[0]);i()})}})}(jQuery),function(n){var t=!1;n(document).mouseup(function(){t=!1});n.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(n){return t._mouseDown(n)}).bind("click."+this.widgetName,function(i){return!0===n.data(i.target,t.widgetName+".preventClickEvent")?(n.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i);this._mouseDownEvent=i;var r=this,u=1===i.which,f="string"==typeof this.options.cancel&&i.target.nodeName?n(i.target).closest(this.options.cancel).length:!1;return u&&!f&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===n.data(i.target,this.widgetName+".preventClickEvent")&&n.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(n){return r._mouseMove(n)},this._mouseUpDelegate=function(n){return r._mouseUp(n)},n(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return n.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return n(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(n){return Math.max(Math.abs(this._mouseDownEvent.pageX-n.pageX),Math.abs(this._mouseDownEvent.pageY-n.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(n,t){function e(n,t,i){return[parseFloat(n[0])*(a.test(n[0])?t/100:1),parseFloat(n[1])*(a.test(n[1])?i/100:1)]}function r(t,i){return parseInt(n.css(t,i),10)||0}function v(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:n.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}n.ui=n.ui||{};var f,u=Math.max,i=Math.abs,o=Math.round,s=/left|center|right/,h=/top|center|bottom/,c=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,y=n.fn.position;n.position={scrollbarWidth:function(){if(f!==t)return f;var u,r,i=n("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),e=i.children()[0];return n("body").append(i),u=e.offsetWidth,i.css("overflow","scroll"),r=e.offsetWidth,u===r&&(r=i[0].clientWidth),i.remove(),f=u-r},getScrollInfo:function(t){var i=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),u="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,f="scroll"===r||"auto"===r&&t.height<t.element[0].scrollHeight;return{width:f?n.position.scrollbarWidth():0,height:u?n.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=n(t||window),r=n.isWindow(i[0]);return{element:i,isWindow:r,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:r?i.width():i.outerWidth(),height:r?i.height():i.outerHeight()}}};n.fn.position=function(t){if(!t||!t.of)return y.apply(this,arguments);t=n.extend({},t);var b,f,a,w,p,d,g=n(t.of),tt=n.position.getWithinInfo(t.within),it=n.position.getScrollInfo(tt),k=(t.collision||"flip").split(" "),nt={};return d=v(g),g[0].preventDefault&&(t.at="left top"),f=d.width,a=d.height,w=d.offset,p=n.extend({},w),n.each(["my","at"],function(){var i,r,n=(t[this]||"").split(" ");1===n.length&&(n=s.test(n[0])?n.concat(["center"]):h.test(n[0])?["center"].concat(n):["center","center"]);n[0]=s.test(n[0])?n[0]:"center";n[1]=h.test(n[1])?n[1]:"center";i=c.exec(n[0]);r=c.exec(n[1]);nt[this]=[i?i[0]:0,r?r[0]:0];t[this]=[l.exec(n[0])[0],l.exec(n[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===t.at[0]?p.left+=f:"center"===t.at[0]&&(p.left+=f/2),"bottom"===t.at[1]?p.top+=a:"center"===t.at[1]&&(p.top+=a/2),b=e(nt.at,f,a),p.left+=b[0],p.top+=b[1],this.each(function(){var y,d,h=n(this),c=h.outerWidth(),l=h.outerHeight(),rt=r(this,"marginLeft"),ut=r(this,"marginTop"),ft=c+rt+r(this,"marginRight")+it.width,et=l+ut+r(this,"marginBottom")+it.height,s=n.extend({},p),v=e(nt.my,h.outerWidth(),h.outerHeight());"right"===t.my[0]?s.left-=c:"center"===t.my[0]&&(s.left-=c/2);"bottom"===t.my[1]?s.top-=l:"center"===t.my[1]&&(s.top-=l/2);s.left+=v[0];s.top+=v[1];n.support.offsetFractions||(s.left=o(s.left),s.top=o(s.top));y={marginLeft:rt,marginTop:ut};n.each(["left","top"],function(i,r){n.ui.position[k[i]]&&n.ui.position[k[i]][r](s,{targetWidth:f,targetHeight:a,elemWidth:c,elemHeight:l,collisionPosition:y,collisionWidth:ft,collisionHeight:et,offset:[b[0]+v[0],b[1]+v[1]],my:t.my,at:t.at,within:tt,elem:h})});t.using&&(d=function(n){var r=w.left-s.left,v=r+f-c,e=w.top-s.top,y=e+a-l,o={target:{element:g,left:w.left,top:w.top,width:f,height:a},element:{element:h,left:s.left,top:s.top,width:c,height:l},horizontal:0>v?"left":r>0?"right":"center",vertical:0>y?"top":e>0?"bottom":"middle"};c>f&&f>i(r+v)&&(o.horizontal="center");l>a&&a>i(e+y)&&(o.vertical="middle");o.important=u(i(r),i(v))>u(i(e),i(y))?"horizontal":"vertical";t.using.call(this,n,o)});h.offset(n.extend(s,{using:d}))})};n.ui.position={fit:{left:function(n,t){var h,e=t.within,r=e.isWindow?e.scrollLeft:e.offset.left,o=e.width,s=n.left-t.collisionPosition.marginLeft,i=r-s,f=s+t.collisionWidth-o-r;t.collisionWidth>o?i>0&&0>=f?(h=n.left+i+t.collisionWidth-o-r,n.left+=i-h):n.left=f>0&&0>=i?r:i>f?r+o-t.collisionWidth:r:i>0?n.left+=i:f>0?n.left-=f:n.left=u(n.left-s,n.left)},top:function(n,t){var h,o=t.within,r=o.isWindow?o.scrollTop:o.offset.top,e=t.within.height,s=n.top-t.collisionPosition.marginTop,i=r-s,f=s+t.collisionHeight-e-r;t.collisionHeight>e?i>0&&0>=f?(h=n.top+i+t.collisionHeight-e-r,n.top+=i-h):n.top=f>0&&0>=i?r:i>f?r+e-t.collisionHeight:r:i>0?n.top+=i:f>0?n.top-=f:n.top=u(n.top-s,n.top)}},flip:{left:function(n,t){var o,s,r=t.within,y=r.offset.left+r.scrollLeft,c=r.width,h=r.isWindow?r.scrollLeft:r.offset.left,l=n.left-t.collisionPosition.marginLeft,a=l-h,v=l+t.collisionWidth-c-h,u="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,f="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,e=-2*t.offset[0];0>a?(o=n.left+u+f+e+t.collisionWidth-c-y,(0>o||i(a)>o)&&(n.left+=u+f+e)):v>0&&(s=n.left-t.collisionPosition.marginLeft+u+f+e-h,(s>0||v>i(s))&&(n.left+=u+f+e))},top:function(n,t){var o,s,r=t.within,y=r.offset.top+r.scrollTop,a=r.height,h=r.isWindow?r.scrollTop:r.offset.top,v=n.top-t.collisionPosition.marginTop,c=v-h,l=v+t.collisionHeight-a-h,p="top"===t.my[1],u=p?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,e=-2*t.offset[1];0>c?(s=n.top+u+f+e+t.collisionHeight-a-y,n.top+u+f+e>c&&(0>s||i(c)>s)&&(n.top+=u+f+e)):l>0&&(o=n.top-t.collisionPosition.marginTop+u+f+e-h,n.top+u+f+e>l&&(o>0||l>i(o))&&(n.top+=u+f+e))}},flipfit:{left:function(){n.ui.position.flip.left.apply(this,arguments);n.ui.position.fit.left.apply(this,arguments)},top:function(){n.ui.position.flip.top.apply(this,arguments);n.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,r,u,f,e=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(e?"div":"body");r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};e&&n.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in r)t.style[f]=r[f];t.appendChild(o);i=e||document.documentElement;i.insertBefore(t,i.firstChild);o.style.cssText="position: absolute; left: 10.7432222px;";u=n(o).offset().left;n.support.offsetFractions=u>10&&11>u;t.innerHTML="";i.removeChild(t)}()}(jQuery)