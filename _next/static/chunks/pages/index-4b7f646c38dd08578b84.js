(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{348:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return J}});var r=t(5893),a=t(6229),o=t(2979),i=t.n(o);function s(){return(0,r.jsx)("div",{style:{flex:1}})}var c=t(4951),l=t.n(c);function u(e){var n=e.icon,t=e.disabled,o=e.onClick;return(0,r.jsx)("button",{className:l().button,type:"button",disabled:t,onClick:o,children:(0,r.jsx)(a.JO,{icon:n})})}var p,d,f=t(6265),h=t(7294),_=t(2077),m=t.n(_),v=t(1208),g=t.n(v);!function(e){e.READY="ready",e.PROCESSING="processing",e.NO_RECORDS="no-records",e.FAILED="failed"}(d||(d={}));var b=(p={},(0,f.Z)(p,d.READY,"app:file"),(0,f.Z)(p,d.PROCESSING,"app:file"),(0,f.Z)(p,d.NO_RECORDS,"app:file-unknown"),(0,f.Z)(p,d.FAILED,"app:file-alert"),p);function x(e){var n=e.item,t=(0,h.useState)(d.PROCESSING),o=t[0],i=t[1],c=(0,h.useState)(0),l=c[0],p=c[1],_=(0,h.useState)(""),v=_[0],x=_[1],y=(0,h.useCallback)((function(){i(function(e){return void 0!==e.failureReason?d.FAILED:e.processedPages===e.pagesCount?e.records.length?d.READY:d.NO_RECORDS:d.PROCESSING}(n)),p(n.pagesCount?n.processedPages/n.pagesCount:0);var e=m()(n.records.length).format("0,0"),t="".concat(e," Record").concat("1"!==e?"s":"");n.failureReason?x(n.failureReason):n.processedPages===n.pagesCount?x(t):void 0===n.pagesCount?x("Loading document"):x("Processing page ".concat(n.processedPages+1,"/").concat(n.pagesCount))}),[n]);(0,h.useEffect)((function(){return y(),n.onUpdate=y,function(){delete n.onUpdate}}),[y,n]);var k=(0,h.useCallback)((function(){n.exportAndSaveRecords()}),[n]),C=Math.floor(1e4*l)/100;return(0,r.jsxs)("div",{className:g().outer_container,"data-state":o,children:[o===d.PROCESSING&&(0,r.jsx)("div",{className:g().progress_bar,style:(0,f.Z)({},"--progress","".concat(C,"%"))}),(0,r.jsxs)("div",{className:g().inner_container,children:[(0,r.jsx)("div",{className:g().icon_container,children:(0,r.jsx)(a.JO,{icon:b[o]})}),(0,r.jsx)("div",{className:g().document_label,children:n.file.name}),(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:g().sub_label,children:o===d.NO_RECORDS?"No records":v}),o===d.READY&&(0,r.jsx)(u,{icon:"app:download",onClick:k})]})]})}var y=t(9999),k=t(809),C=t.n(k),S=t(2447),w=t(4121),j=t(4047),N=t(2700),R=t(9299),E=t(4725),A=t(3162),Z=t(5733),O=t.n(Z),P=t(381),D=t.n(P),T=t(7565),U=t.n(T);function Y(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw o}}}}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var M=0,F=function(){function e(n){(0,j.Z)(this,e),this.file=n,(0,f.Z)(this,"id",M++),(0,f.Z)(this,"records",[]),(0,f.Z)(this,"onUpdate",void 0),(0,f.Z)(this,"_pagesCount",void 0),(0,f.Z)(this,"_processedPages",0),(0,f.Z)(this,"_failureReason",void 0),(0,f.Z)(this,"processingStarted",!1),(0,f.Z)(this,"document",void 0)}return(0,N.Z)(e,[{key:"exportRecords",value:function(){var e=JSON.stringify(this.records,void 0,"\t"),n=new Blob([e],{type:"application/json;charset=utf-8"});return[this.file.name.replace(/.pdf$/,".json"),n]}},{key:"exportAndSaveRecords",value:function(){var e=this.exportRecords(),n=(0,w.Z)(e,2),t=n[0],r=n[1];(0,A.saveAs)(r,t)}},{key:"startProcessing",value:function(){var e=(0,S.Z)(C().mark((function e(){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.processingStarted){e.next=2;break}throw new Error("The processing was already started/attempted.");case 2:if("application/pdf"===this.file.type){e.next=6;break}return this._failureReason="Unsupported document format",this.triggerUpdate(),e.abrupt("return");case 6:return e.prev=6,e.next=9,this.process();case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(6),console.error("Error while processing document:",e.t0),this._failureReason=void 0===this._pagesCount?"Failed to load document":"Failed to process page ".concat(this._processedPages+1,"/").concat(this._pagesCount),this.triggerUpdate();case 16:this.document&&(this.document.destroy(),delete this.document);case 17:case"end":return e.stop()}}),e,this,[[6,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"process",value:function(){var e=(0,S.Z)(C().mark((function e(){var n,t,r,a,o,i;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.file.arrayBuffer();case 2:return n=e.sent,t=new Uint8Array(n),e.next=6,(0,R.getDocument)(t).promise;case 6:this.document=e.sent,this._pagesCount=this.document.numPages,this.triggerUpdate(),r=1;case 10:if(!(r<=this.document.numPages)){e.next=23;break}return e.next=13,this.document.getPage(r);case 13:return o=e.sent,e.next=16,(0,E.$g)(o);case 16:i=e.sent,(a=this.records).push.apply(a,(0,y.Z)(i)),this._processedPages++,this.triggerUpdate();case 20:r++,e.next=10;break;case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"triggerUpdate",value:function(){if(this.onUpdate)try{this.onUpdate(this)}catch(e){console.error("Error while triggering 'onUpdate':",e)}}},{key:"pagesCount",get:function(){return this._pagesCount}},{key:"processedPages",get:function(){return this._processedPages}},{key:"failureReason",get:function(){return this._failureReason}}],[{key:"exportAndSaveMultipleDocuments",value:function(){var e=(0,S.Z)(C().mark((function e(n){var t,r,a;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(O()),n.forEach((function(e){var n=e.exportRecords(),r=(0,w.Z)(n,2),a=r[0],o=r[1];t.file(a,o)})),e.next=4,t.generateAsync({type:"blob"});case 4:r=e.sent,a=D()().format("[marks_]YYYY-MM-DD_HH-mm[.zip]"),(0,A.saveAs)(r,a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"createAndSaveCSVTable",value:function(e){var n,t=new Set,r=[],a=[],o=new Set,i={},s=Y(e);try{var c=function(){var e=n.value,s=e.file.name.replace(/.pdf$/,"");o.add(s),i[s]={},e.records.forEach((function(e){var n,o,c=e.studentId,l=e.studentName,u=e.studentFatherName,p=e.examMark;t.add(c),null!==l&&l.length>(null!==(n=r[c])&&void 0!==n?n:"").length&&(r[c]=l),null!==u&&u.length>(null!==(o=a[c])&&void 0!==o?o:"").length&&(a[c]=u),null!==p&&(i[s][c]=p)}))};for(s.s();!(n=s.n()).done;)c()}catch(f){s.e(f)}finally{s.f()}var l=[];t.forEach((function(e){var n,t,s=[e,null!==(n=r[e])&&void 0!==n?n:null,null!==(t=a[e])&&void 0!==t?t:null];o.forEach((function(n){var t;return s.push(null!==(t=i[n][e])&&void 0!==t?t:0)})),l.push(s)}));var u=U()(l,{header:!0,columns:["id","name","father"].concat((0,y.Z)(Array.from(o.values()))),quoted_string:!0}),p=new Blob([u],{type:"text/csv;charset=utf-8"}),d=D()().format("[marks_]YYYY-MM-DD_HH-mm[.csv]");(0,A.saveAs)(p,d)}}]),e}();function B(e){var n=e.allowClearAll,t=e.onClearAll;return(0,r.jsxs)("div",{className:i().top_bar,children:[(0,r.jsxs)("span",{className:i().title,children:["MarksBench - v","1.0.0"]}),(0,r.jsx)(s,{}),(0,r.jsx)(u,{icon:"app:clear-all",onClick:t,disabled:!n}),(0,r.jsx)(u,{icon:"app:github",onClick:function(){return window.open("https://github.com/Rami-Sabbagh/MarksBench/","_blank","noopener,noreferrer")}}),(0,r.jsx)(u,{icon:"app:help",onClick:function(){return window.open("https://github.com/Rami-Sabbagh/MarksBench/wiki","_blank","noopener,noreferrer")}})]})}function L(e){var n=e.allowCreateCSVTable,t=e.onCreateCSVTable,o=e.allowSaveZip,c=e.onSaveZip,l=e.onFilesSelection,p=(0,h.useRef)(null),d=(0,h.useCallback)((function(){var e;null===(e=p.current)||void 0===e||e.click()}),[]),f=(0,h.useCallback)((function(e){e.target.files&&l&&l(e.target.files)}),[l]);return(0,r.jsxs)("div",{className:i().bottom_bar,children:[(0,r.jsxs)("span",{className:i().footer,children:["Made with ",(0,r.jsx)(a.JO,{className:i().heart,icon:"app:heart",inline:!0})," ","by ",(0,r.jsx)("a",{href:"https://github.com/Rami-Sabbagh/",rel:"noreferrer",target:"_blank",children:"Rami Sabbagh"})]}),(0,r.jsx)(s,{}),(0,r.jsx)(u,{icon:"app:table",onClick:t,disabled:!n}),(0,r.jsx)(u,{icon:"app:zip",onClick:c,disabled:!o}),(0,r.jsx)(u,{icon:"app:add-file",onClick:d}),(0,r.jsx)("input",{type:"file",ref:p,onChange:f,style:{display:"none"},accept:"application/pdf",multiple:!0})]})}function G(){return(0,r.jsxs)("div",{className:i().placeholder,children:[(0,r.jsx)(a.JO,{className:i().icon,icon:"app:document"}),(0,r.jsx)("div",{className:i().title,children:"Drop exams marks documents here"}),(0,r.jsxs)("div",{className:i().sub_title,children:["Which you can download from the"," ",(0,r.jsxs)("a",{href:"http://damascusuniversity.edu.sy/ite/index.php?func=7&set=14",rel:"noreferrer noopener",target:"_blank",children:["faculty","'","s website"]})]}),(0,r.jsxs)("div",{className:i().select_files_hint,children:[(0,r.jsx)("span",{children:"or you can select the files"}),(0,r.jsx)(a.JO,{className:i().arrow,icon:"app:arrow-down"})]})]})}function H(e){var n=e.entries;return(0,r.jsx)("div",{className:i().documents_list,children:(0,r.jsx)("div",{className:i().item_container,children:n.map((function(e){return(0,r.jsx)(x,{item:e},e.id)}))})})}function J(){var e=(0,h.useState)([]),n=e[0],t=e[1],a=(0,h.useCallback)((function(e){var r,a;e.preventDefault();var o=[];if(null!==(r=e.dataTransfer)&&void 0!==r&&r.items)for(var i=e.dataTransfer.items,s=0;s<i.length;s++){if("file"===i[s].kind){var c=i[s].getAsFile();null!==c&&o.push(c)}}else if(null!==(a=e.dataTransfer)&&void 0!==a&&a.files)for(var l=e.dataTransfer.files,u=0;u<l.length;u++)o.push(l[u]);var p=o.map((function(e){return new F(e)}));p.forEach((function(e){return e.startProcessing().catch(console.error)})),t(n.concat(p))}),[n]),o=(0,h.useCallback)((function(e){e.preventDefault()}),[]),s=(0,h.useCallback)((function(e){for(var r=[],a=0;a<e.length;a++)r.push(e[a]);var o=r.map((function(e){return new F(e)}));o.forEach((function(e){return e.startProcessing().catch(console.error)})),t(n.concat(o))}),[n]);(0,h.useEffect)((function(){return document.addEventListener("drop",a),document.addEventListener("dragover",o),function(){document.removeEventListener("dragover",o),document.removeEventListener("drop",a)}}),[a,o]);var c=(0,h.useCallback)((function(){F.createAndSaveCSVTable(n)}),[n]),l=(0,h.useState)(!1),u=l[0],p=l[1],d=(0,h.useCallback)((function(){p(!0),F.exportAndSaveMultipleDocuments(n).then((function(){return p(!1)})).catch(console.error)}),[n]);return(0,r.jsx)("div",{className:i().drop_zone,children:(0,r.jsxs)("div",{className:i().application,children:[(0,r.jsx)(B,{allowClearAll:0!==n.length,onClearAll:function(){return t([])}}),0===n.length&&(0,r.jsx)(G,{}),0!==n.length&&(0,r.jsx)(H,{entries:n}),(0,r.jsx)(L,{onFilesSelection:s,allowCreateCSVTable:0!==n.length,onCreateCSVTable:c,allowSaveZip:0!==n.length&&!u,onSaveZip:d})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(348)}])},1208:function(e){e.exports={outer_container:"document-item_outer_container__2m4pT",progress_bar:"document-item_progress_bar__33u03",inner_container:"document-item_inner_container__OnrHr",icon_container:"document-item_icon_container__1kg-5",document_label:"document-item_document_label__1GSji",sub_label:"document-item_sub_label__2nOSt"}},4951:function(e){e.exports={button:"icon-button_button__dfFBL"}},2979:function(e){e.exports={application:"application_application__qoxPm",top_bar:"application_top_bar__2mD_Q",title:"application_title__dfcWh",bottom_bar:"application_bottom_bar__tlB4c",footer:"application_footer__1GRph",heart:"application_heart__2IwBb",placeholder:"application_placeholder__17c21",icon:"application_icon__eYNlR",sub_title:"application_sub_title__1Z03Y",select_files_hint:"application_select_files_hint___vHUm",arrow:"application_arrow__17_-0",documents_list:"application_documents_list__2s73d",items_container:"application_items_container__YvF7k"}},9862:function(){},964:function(){}},function(e){e.O(0,[885,535,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);