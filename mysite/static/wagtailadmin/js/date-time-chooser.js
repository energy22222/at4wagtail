(()=>{"use strict";var e,t={8002:(e,t,n)=>{var a=n(5311),i=n.n(a);function o(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getYear()===t.getYear()}function r(e,t){o(new Date(t[0].value),e)||i()(this).find(".xdsoft_datepicker .xdsoft_current:not(.xdsoft_today)").removeClass("xdsoft_current")}i().fn.datetimepicker.defaults.i18n.wagtail_custom_locale={months:wagtailConfig.STRINGS.MONTHS,dayOfWeek:wagtailConfig.STRINGS.WEEKDAYS,dayOfWeekShort:wagtailConfig.STRINGS.WEEKDAYS_SHORT},i().datetimepicker.setLocale("wagtail_custom_locale"),window.dateEqual=o,window.hideCurrent=r,window.initDateChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,timepicker:!1,scrollInput:!1,format:"Y-m-d",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{})):i()("#"+e).datetimepicker(i().extend({timepicker:!1,scrollInput:!1,format:"Y-m-d",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{}))},window.initTimeChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,datepicker:!1,scrollInput:!1,format:"H:i",onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{})):i()("#"+e).datetimepicker(i().extend({datepicker:!1,format:"H:i",onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{}))},window.initDateTimeChooser=function(e,t){window.dateTimePickerTranslations?i()("#"+e).datetimepicker(i().extend({closeOnDateSelect:!0,format:"Y-m-d H:i",scrollInput:!1,onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{})):i()("#"+e).datetimepicker(i().extend({format:"Y-m-d H:i",onGenerate:r,onChangeDateTime(e,t){t.get(0).dispatchEvent(new Event("change"))}},t||{}))}},5311:e=>{e.exports=jQuery}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,n,i,o)=>{if(!n){var r=1/0;for(s=0;s<e.length;s++){for(var[n,i,o]=e[s],c=!0,d=0;d<n.length;d++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](n[d])))?n.splice(d--,1):(c=!1,o<r&&(r=o));if(c){e.splice(s--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=465,(()=>{var e={465:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[r,c,d]=n,l=0;if(r.some((t=>0!==e[t]))){for(i in c)a.o(c,i)&&(a.m[i]=c[i]);if(d)var s=d(a)}for(t&&t(n);l<r.length;l++)o=r[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},n=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[751],(()=>a(8002)));i=a.O(i)})();