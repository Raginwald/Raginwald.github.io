(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{410:function(e,t,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(21).default)("00437f63",content,!0,{sourceMap:!1})},429:function(e,t,r){"use strict";r(410)},430:function(e,t,r){var o=r(20)(!1);o.push([e.i,"#frontBack{font-size:.8vw;background-color:#5a6f8b}#frontBack .tooltipStyle{background-color:rgba(39,39,39,.9);padding:.4em .8em;border-radius:7px;margin:auto}#frontBack .backSide{background-color:#1f3e5e;border-left:1px solid}#frontBack #header>.col{height:15vh}#frontBack #footer>.col{height:11vh}#frontBack #footer .btnStep{font-size:1em;width:15em;padding:2em 1em}#frontBack #main>.col{height:74vh}#frontBack #main .frontSide .screen{border:10px solid #000;border-radius:7px;width:100%;aspect-ratio:614/407;margin:50px auto 0}#frontBack #main .frontSide .screen .screenNavigators{padding:2em 1em}#frontBack #main .frontSide .screen .screenNavigators .row{margin-bottom:2em}#frontBack #main .frontSide .screen .screenNavigators .v-image{margin:50px auto 0}#frontBack #main .frontSide .screenFootOne{background-color:#000;width:100px;height:50px;margin:auto}#frontBack #main .frontSide .screenFootTwo{background-color:#000;width:140px;height:10px;margin:auto;border-radius:7px}#frontBack #main .backSide .serverElement{margin:160px auto 0}#frontBack #main .backSide .serverElement .v-image{border:1px solid;border-radius:100%;height:calc(8.33333vw - 24px);aspect-ratio:1;margin:auto}#frontBack #main .backSide .serverElement.active .v-image{background-color:#4caf50}#frontBack #main .backSide .serverElement.finished .v-image{background-color:#ff9800}#frontBack .askRequest,#frontBack .responseRequest{position:relative}#frontBack .askRequest .v-icon,#frontBack .responseRequest .v-icon{position:absolute;top:-1rem;font-size:2.5rem;color:#4caf50}#frontBack .askRequest .tooltipStyle,#frontBack .responseRequest .tooltipStyle{position:absolute;left:0}#frontBack .askRequest{margin-top:175px}#frontBack .askRequest .v-icon{right:-18px}#frontBack .askRequest .tooltipStyle{bottom:5px}#frontBack .askRequest.askApache{width:160%}#frontBack .responseRequest{margin-top:calc(5.95238vw - 24px)}#frontBack .responseRequest .v-icon{left:-18px;color:#ff9800}#frontBack .responseRequest .tooltipStyle{top:17px}#frontBack .responseRequest.responseApache{width:160%}#frontBack .tooltipStep11{margin-top:140px;margin-left:10px}",""]),e.exports=o},458:function(e,t,r){"use strict";r.r(t);var o={layout:"support",name:"InspirePage",data:function(){return{step:0}},methods:{prevStep:function(){this.step>0&&(this.step=this.step-1)},nextStep:function(){this.step<11&&(this.step=this.step+1)},serverColorCircle:function(e,t){return this.step>=t?"finished":this.step>=e?"active":void 0}}},n=(r(429),r(66)),c=r(88),l=r.n(c),v=r(262),d=r(454),m=r(181),f=r(158),h=r(397),k=r(455),_=r(456),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center",attrs:{id:"frontBack"}},[r("v-row",{attrs:{id:"header"}},[r("v-col",{attrs:{cols:"6"}},[r("h1",[e._v("CLIENT")]),e._v(" "),r("h3",[e._v("Le client représente le navigateur du client")])]),e._v(" "),r("v-col",{staticClass:"backSide",attrs:{cols:"6"}},[r("h1",[e._v("SERVEUR")]),e._v(" "),r("h3",[e._v("Le serveur représente la machine qui héberge les pages du site visité")])])],1),e._v(" "),r("v-row",{attrs:{id:"main"}},[r("v-col",{staticClass:"frontSide",attrs:{cols:"6"}},[r("v-row",[r("v-col",{attrs:{cols:"2"}},[e.step>=11?r("div",{staticClass:"tooltipStyle d-inline-block tooltipStep11"},[e._v("\n            Le navigateur récupère le code HTML/CSS/JS fourni par le serveur, puis il l'interprête pour afficher la page\n          ")]):e._e()]),e._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"8"}},[r("div",{staticClass:"screen"},[e.step>=11?r("v-img",{attrs:{src:"/front-back/oclock.png"}}):r("div",{staticClass:"screenNavigators"},[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-img",{staticClass:"mb-5",attrs:{width:"7em",src:"/front-back/chrome.png"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-img",{staticClass:"mb-5",attrs:{width:"7em",src:"/front-back/firefox.png"}})],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-img",{staticClass:"mb-5",attrs:{width:"7em",src:"/front-back/internet-explorer.png"}})],1)],1),e._v(" "),r("v-text-field",{attrs:{outlined:"",disabled:"",dense:"",value:e.step>0?"https://oclock.io":""}})],1)],1),e._v(" "),r("div",{staticClass:"screenFootOne"}),e._v(" "),r("div",{staticClass:"screenFootTwo"}),e._v(" "),e.step>=1?r("div",{staticClass:"tooltipStyle d-inline-block mt-3"},[e._v("\n            L'utilisateur tape un nom de domaine sur son navigateur\n          ")]):e._e()]),e._v(" "),r("v-col",{attrs:{cols:"2"}},[e.step>=2?r("div",{staticClass:"askRequest askApache"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"green"}}),e._v(" "),r("v-icon",[e._v("mdi-menu-right")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              Le client contacte le serveur pour lui demander la page à afficher\n            ")])],1):e._e(),e._v(" "),e.step>=10?r("div",{staticClass:"responseRequest responseApache"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"orange",reverse:""}}),e._v(" "),r("v-icon",[e._v("mdi-menu-left")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              Apache envoi au client le code HTML/CSS/JS qui a été fabriqué\n            ")])],1):e._e()])],1)],1),e._v(" "),r("v-col",{staticClass:"backSide",attrs:{cols:"6"}},[r("v-row",[r("v-col",{staticClass:"offset-1",attrs:{cols:"2"}},[r("div",{staticClass:"serverElement apache",class:e.serverColorCircle(3,10)},[r("v-img",e._g(e._b({attrs:{src:"/front-back/apache.png",contain:""}},"v-img",e.attrs,!1),e.on)),e._v(" "),e.step>=3?r("div",{staticClass:"tooltipStyle d-inline-block mt-3"},[e._v("\n              Apache reçoit la requête et cherche les fichiers liés à la page demandée\n            ")]):e._e()],1)]),e._v(" "),r("v-col",{attrs:{cols:"2"}},[e.step>=4?r("div",{staticClass:"askRequest askPhp"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"green"}}),e._v(" "),r("v-icon",[e._v("mdi-menu-right")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              Apache demande à PHP de construire le HTML/CSS/JS de la page\n            ")])],1):e._e(),e._v(" "),e.step>=9?r("div",{staticClass:"responseRequest responsePhp"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"orange",reverse:""}}),e._v(" "),r("v-icon",[e._v("mdi-menu-left")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              PHP envoi le code HTML/CSS/JS qu'il a fabriqué à Apache\n            ")])],1):e._e()]),e._v(" "),r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"serverElement php",class:e.serverColorCircle(5,9)},[r("v-img",e._g(e._b({attrs:{src:"/front-back/php.png",contain:""}},"v-img",e.attrs,!1),e.on)),e._v(" "),e.step>=5?r("div",{staticClass:"tooltipStyle d-inline-block mt-3"},[e._v("\n              PHP va chercher toutes les infos nécessaire pour construire le HTML/CSS/JS\n            ")]):e._e()],1)]),e._v(" "),r("v-col",{attrs:{cols:"2"}},[e.step>=6?r("div",{staticClass:"askRequest askDatabase"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"green"}}),e._v(" "),r("v-icon",[e._v("mdi-menu-right")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              Si nécessaire, PHP demande à la BDD de lui donner certaines infos\n            ")])],1):e._e(),e._v(" "),e.step>=8?r("div",{staticClass:"responseRequest responseDatabase"},[r("v-progress-linear",{attrs:{indeterminate:"",height:"8",color:"orange",reverse:""}}),e._v(" "),r("v-icon",[e._v("mdi-menu-left")]),e._v(" "),r("div",{staticClass:"tooltipStyle d-inline-block mb-3"},[e._v("\n              La BDD donne à PHP les données demandées\n            ")])],1):e._e()]),e._v(" "),r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"serverElement database",class:e.serverColorCircle(7,8)},[r("v-img",e._g(e._b({attrs:{src:"/front-back/database.png",contain:""}},"v-img",e.attrs,!1),e.on)),e._v(" "),e.step>=7?r("div",{staticClass:"tooltipStyle d-inline-block mt-3"},[e._v("\n              La BDD traite la demande\n            ")]):e._e()],1)])],1)],1)],1),e._v(" "),r("v-row",{attrs:{id:"footer"}},[r("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[r("v-btn",{staticClass:"btnStep btnStepPrev mr-5",on:{click:function(t){return e.prevStep()}}},[e._v("Étape précédente")])],1),e._v(" "),r("v-col",{staticClass:"text-left backSide",attrs:{cols:"6"}},[r("v-btn",{staticClass:"btnStep btnStepNext ml-5",on:{click:function(t){return e.nextStep()}}},[e._v("Étape suivante")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:v.a,VCol:d.a,VIcon:m.a,VImg:f.a,VProgressLinear:h.a,VRow:k.a,VTextField:_.a})}}]);