(this.webpackJsonpgql=this.webpackJsonpgql||[]).push([[0],{19:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return m}));var n=t(15),r=t.n(n),c=t(10),o=t(9),l=t(18),i=t.n(l),s=t(37),u=t.n(s),m=new(function(){function a(){Object(c.a)(this,a),i.a.initializeApp({apiKey:"AIzaSyA7WmZEazcdFPFbpE6CGoEjrU75VxbBf0U",authDomain:"campground-ce7a4.firebaseapp.com",databaseURL:"https://campground-ce7a4.firebaseio.com",projectId:"campground-ce7a4"})}return Object(o.a)(a,[{key:"recentAuthorSearches",value:function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/searchHistory")).limitToLast(5).once("value"));case 2:if(!(e=a.sent).val()){a.next=5;break}return a.abrupt("return",Object.values(e.val()).reverse());case 5:return a.abrupt("return",[]);case 6:case"end":return a.stop()}}))}},{key:"recentKeywordSearches",value:function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/keywordSearchHistory")).limitToLast(5).once("value"));case 2:if(!(e=a.sent).val()){a.next=5;break}return a.abrupt("return",Object.values(e.val()).reverse());case 5:return a.abrupt("return",[]);case 6:case"end":return a.stop()}}))}},{key:"setToken",value:function(e){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.a.auth().signInWithCustomToken(e));case 2:case"end":return a.stop()}}))}},{key:"updateProfile",value:function(e){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(i.a.auth().currentUser){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,r.a.awrap(i.a.auth().currentUser.updateProfile({displayName:e.name,photoURL:e.picture}));case 4:case"end":return a.stop()}}))}},{key:"signOut",value:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(i.a.auth().signOut());case 2:case"end":return e.stop()}}))}},{key:"addRecentSearch",value:function(e,a){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=e,n.next="authors"===n.t0?3:"keywords"===n.t0?5:7;break;case 3:return t="searchHistory",n.abrupt("break",8);case 5:return t="keywordSearchHistory",n.abrupt("break",8);case 7:t="searchHistory";case 8:i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/").concat(t)).push(a);case 9:case"end":return n.stop()}}))}},{key:"getAuthorList",value:function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/authorLists")).once("value"));case 2:if((e=a.sent).val()){a.next=5;break}return a.abrupt("return",{});case 5:return a.next=7,r.a.awrap(e.val());case 7:return a.abrupt("return",a.sent);case 8:case"end":return a.stop()}}))}},{key:"removeAuthorList",value:function(a){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.from(a).toString("base64"),i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/authorLists/").concat(t)).set(null);case 2:case"end":return n.stop()}}))}},{key:"removeAuthor",value:function(a){var t,n,c,o=arguments;return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=o.length>1&&void 0!==o[1]?o[1]:"uncategorized",n=e.from(a).toString("base64"),c=e.from(t).toString("base64"),i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/authorLists/").concat(c,"/names/").concat(n)).set(null);case 4:case"end":return r.stop()}}))}},{key:"addAuthorToList",value:function(a){var t,n,c,o=arguments;return r.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=o.length>1&&void 0!==o[1]?o[1]:"uncategorized",n=e.from(a).toString("base64"),c=e.from(t).toString("base64"),i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/authorLists/").concat(c,"/lastupdated")).set(u()().unix()),i.a.database().ref("/users/".concat(i.a.auth().currentUser.uid,"/authorLists/").concat(c,"/names/").concat(n)).set(u()().unix());case 5:case"end":return r.stop()}}))}}]),a}())}).call(this,t(49).Buffer)},248:function(e,a,t){"use strict";(function(e){var n=t(7),r=t(0),c=t.n(r),o=t(36),l=t(458),i=t(465),s=t(462),u=t(463),m=t(460),d=t(19);a.a=function(a){var t=c.a.useState({}),r=Object(n.a)(t,2),h=r[0],p=r[1],f=c.a.useState(0),y=Object(n.a)(f,2),g=y[0],E=y[1],b=c.a.useState(!1),k=Object(n.a)(b,2),v=k[0],S=k[1],_=c.a.useRef(null);c.a.useEffect((function(){d.a.getAuthorList().then((function(e){p(e)}))}),[g]);var w=function(){S(!0),setTimeout((function(){return S(!1)}),2e3)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{alignRight:!0,title:"Add to my saved authors",variant:"outline-secondary",size:"sm",ref:_,className:"ml-3 mb-3 d-inline-block align-middle saved-authors-dropdown-shadow",onClick:function(){w(),d.a.addAuthorToList(a.author),E(g+1)}},function(){if(0===Object.keys(h).length)return null;var t=Object.keys(h).map((function(t,n){var r=e.from(t,"base64").toString("ascii");return c.a.createElement(o.a.Item,{eventKey:n,key:n,onClick:function(){d.a.addAuthorToList(a.author,r),E(g+1),w()}},"uncategorized"===r?c.a.createElement("em",{className:"text-muted"},r):r," ",c.a.createElement(l.a,{variant:"secondary",className:"ml-2"},Object.keys(h[t].names).length))}));return t.push(c.a.createElement(o.a.Divider,{key:"iHadToPutThisHereToSilenceTheError"})),t}(),c.a.createElement(s.a,{className:"mx-3 my-2 w-auto newlistentry",placeholder:"Create a new list...",onKeyPress:function(e){if(13===e.charCode){var t=document.querySelector(".newlistentry").value;t&&(d.a.addAuthorToList(a.author,t),document.querySelector(".newlistentry").value="",w(),E(g+1))}}})),c.a.createElement(u.a,{target:_.current,show:v,placement:"top"},(function(e){return c.a.createElement(m.a,e,"Added!")})))}}).call(this,t(49).Buffer)},253:function(e,a,t){"use strict";(function(e){var n=t(7),r=t(0),c=t.n(r),o=t(135),l=t(136),i=t(102),s=t(459),u=t(19),m=t(93),d=t(94),h=t(56),p=t.n(h),f=t(27),y=t(37),g=t.n(y);a.a=function(a){var t=c.a.useState({}),r=Object(n.a)(t,2),h=r[0],y=r[1],E=c.a.useState(0),b=Object(n.a)(E,2),k=b[0],v=b[1],S=c.a.useState(0),_=Object(n.a)(S,2),w=_[0],A=_[1],x=c.a.useState(0),j=Object(n.a)(x,2),N=j[0],C=j[1];c.a.useEffect((function(){u.a.getAuthorList().then((function(e){for(var a=Object.keys(e),t=0,n=0,r=a;n<r.length;n++){var c=r[n];t+=Object.keys(e[c].names).length}v(a.length),A(t),y(e)}))}),[N]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{fluid:!0,className:"bg-light py-4"},c.a.createElement(o.a,{className:"mt-5 mb-3"},c.a.createElement(l.a,null,c.a.createElement(i.a,{sm:"auto"},c.a.createElement("h2",null,"My Saved Authors"),c.a.createElement("p",null,k," Lists with ",w," Authors"))))),c.a.createElement(p.a,{translateY:["-2em",0],opacity:[0,1],easing:"easeOutBack",duration:300,delay:function(e,a){return 200*a}},0===Object.keys(h).length?c.a.createElement(f.a,{text:"Search for authors and keywords to create your first list."}):Object.keys(h).map((function(t,n){var r=h[t].lastupdated,p=e.from(t,"base64").toString("ascii");if(!h[t].names)return u.a.removeAuthorList(p),null;var f=Object.entries(h[t].names).reverse().map((function(t,n){var r=e.from(t[0],"base64").toString("ascii");return c.a.createElement("tr",{key:n},c.a.createElement("td",null,c.a.createElement("span",{style:{cursor:"pointer",textDecoration:"underline"},onClick:function(){return a.changeSearch("authors",r)}},r)),c.a.createElement("td",null,g()(g.a.unix(t[1])).calendar()),c.a.createElement("td",{style:{textAlign:"center"}},c.a.createElement(m.a,{icon:d.a,size:"lg",color:"#aaa",style:{cursor:"pointer"},onClick:function(){window.confirm('Are you sure you want to remove "'.concat(r,'" from this list?'))&&(u.a.removeAuthor(r,p),C(N+1))}})))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{className:"bg-light my-5 rounded border"},c.a.createElement(l.a,{className:"align-items-top"},c.a.createElement(i.a,{className:"p-3"},c.a.createElement("h4",null,p),c.a.createElement("small",null,"Last updated: ",g()(g.a.unix(r)).calendar())),c.a.createElement(i.a,{xs:"auto pt-4 pr-4"},c.a.createElement(m.a,{icon:d.b,size:"lg",color:"#aaa",style:{cursor:"pointer"},onClick:function(){window.confirm('Are you sure you want to delete the "'.concat(p,'" list?'))&&(u.a.removeAuthorList(p),C(N+1))}}))),c.a.createElement(l.a,null,c.a.createElement(i.a,null,c.a.createElement(s.a,{className:"mt-2 mb-2",striped:!0,responsive:!0},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",{style:{width:250}},"Added"),c.a.createElement("th",{style:{width:100}},"Remove"))),f)))))}))))}}).call(this,t(49).Buffer)},259:function(e,a,t){e.exports=t(454)},264:function(e,a,t){},266:function(e,a,t){},268:function(e,a,t){},27:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(135),o=t(136),l=t(102),i=t(461),s=t(56),u=t.n(s),m=t(93),d=t(94);a.a=function(e){return r.a.createElement(u.a,{translateY:["-2em",0],opacity:[0,1],easing:"easeInOutQuart",duration:e.instant?0:850},r.a.createElement(c.a,{className:"".concat(e.transparent?"bg-transparent":"bg-light"," my-5 py-5 rounded text-black-50 ").concat(e.noborder||"border")},r.a.createElement(o.a,{className:"align-items-center text-center"},r.a.createElement(l.a,null,e.error&&r.a.createElement(m.a,{icon:d.a,size:"lg",color:"#aaa"}),e.loading&&r.a.createElement(i.a,{animation:"grow",variant:"secondary",size:"sm",className:"mb-2"}),r.a.createElement("p",{className:"my-0"},e.text)))))}},286:function(e,a){},288:function(e,a){},439:function(e,a,t){},440:function(e,a,t){},454:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(40),o=t.n(c),l=(t(264),t(15)),i=t.n(l),s=t(100),u=t(7),m=(t(266),t(267),t(80)),d=t(57),h=(t(268),t(233)),p=t.n(h),f="\n  query GetAuthors($name: String!){\n      Author(name: $name){\n        Article_Archive(name: $name){\n          URL,\n          Date {\n            year,\n            month,\n            day\n          },\n          Title,\n        }\n      }\n    }",y=t(135),g=t(136),E=t(102),b=t(474),k=t(459),v=t(131),S=t(56),_=t.n(S),w=t(234),A=t(171),x=t(236),j=t.n(x),N=function(e){var a=Object(n.useState)({width:"100%",height:350,latitude:0,longitude:0,zoom:0,mapStyle:"mapbox://styles/mtdvis/ck5fqgnby0s951ip1t3x0mvq5",mapboxApiAccessToken:"pk.eyJ1IjoibXRkdmlzIiwiYSI6ImNpazhnem0zNjAyaXJ0emt3ZTg3MXZwdGsifQ.W0OFTnmR-h6SeV_zm8VfmQ"}),t=Object(u.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){j()().geocode(e.location).end((function(e,a){console.log(a),a[0]&&o(Object(w.a)({},c,{latitude:parseFloat(a[0].lat),longitude:parseFloat(a[0].lon),zoom:10}))}))}),[]),r.a.createElement("div",{className:"d-flex justify-content-center my-3 border"},r.a.createElement(A.b,c,r.a.createElement(A.a,{latitude:c.latitude,longitude:c.longitude,offsetTop:-30},r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":"Marker",className:"h2"},"\ud83d\udccd")))))},C=t(237),O=t(37),D=t.n(O),R=function(e){var a,t,n,c=e.query.data.Author[0].Article_Archive;if(0===c.length)return"Not enough information to display.";var o=[],l={};(a=c.filter((function(e){return e.Date.year})).map((function(e,a){return D()("".concat(e.Date.year,"-").concat(e.Date.month,"-").concat(e.Date.day)).unix()}))).sort((function(e,a){return e-a})),t=D.a.unix(a[a.length-1]).format("YYYY-MM-DD"),n=parseInt(t.split("-")[0])-2018>=0?140*(parseInt(t.split("-")[0])-2018+1)+50:0,a.forEach((function(e){var a=D.a.unix(e).format("YYYY-MM-DD");l[a]=(l[a]||0)+1}));for(var i=0,s=Object.entries(l);i<s.length;i++){var m=s[i],d=Object(u.a)(m,2),h=d[0],p=d[1];o.push({day:h,value:p})}return r.a.createElement("div",{style:{width:"800px",height:n,margin:"0 auto"}},r.a.createElement(C.a,{data:o,from:"2018-01-02",to:t,margin:{top:30,right:0,bottom:40,left:20},align:"top-left",minValue:1,emptyColor:"#eeeeee",colors:["#61cdbb","#46ad9c","#e8c1a0","#f47560"],yearSpacing:40,monthBorderColor:"#ffffff",dayBorderWidth:2,daySpacing:1,dayBorderColor:"#ffffff",legends:[{anchor:"bottom-right",direction:"row",translateY:40,itemCount:4,itemWidth:42,itemHeight:36,itemsSpacing:14,itemDirection:"right-to-left"}]}))},T=t(120),L=t(458),q=function(e){var a;return a=e.query?e.query.data.Author[0].Similar_Authors.map((function(a,t){return r.a.createElement(T.a,{variant:"info",key:t,size:"sm",className:"mr-2 mb-2",onClick:function(){return e.changeSearch("authors",a.Similar_Author)}},a.Similar_Author," ",r.a.createElement(L.a,{variant:"light"},parseFloat(100*a.Similarity_Score).toFixed(0),"% Match"))})):e.data.map((function(a,t){return r.a.createElement(T.a,{variant:"info",key:t,size:"sm",className:"mr-2 mb-2",onClick:function(){return e.changeAuthor("authors",a[e.kv])}},a[e.kv])})),r.a.createElement("div",{style:{width:800}},a)},M=function(e){var a=e.query.data.Author[0].Main_Categories;if(0===a.length)return"Not enough information to display.";var t=0,n=a.map((function(e,a){if(0===a){var n=parseFloat(e.Percent_of_Coverage.toFixed(0));return t+=n,r.a.createElement("tr",{className:"bg-warning",key:a,style:{marginBottom:5}},r.a.createElement("td",{style:{paddingLeft:10}},a+1),r.a.createElement("td",null,e.Main_Topic),r.a.createElement("td",null,n,"%"))}if(a<5){var c=parseFloat(e.Percent_of_Coverage.toFixed(0));return t+=c,r.a.createElement("tr",{key:a,style:{marginBottom:5}},r.a.createElement("td",{style:{paddingLeft:10}},a+1),r.a.createElement("td",null,e.Main_Topic),r.a.createElement("td",null,c,"%"))}return 5===a?r.a.createElement("tr",{key:a,style:{marginBottom:5}},r.a.createElement("td",{style:{paddingLeft:10}},a+1),r.a.createElement("td",null,"Other"),r.a.createElement("td",null,100-t,"%")):null}));return r.a.createElement(k.a,{responsive:!0,hover:!0,borderless:!0,size:"sm"},r.a.createElement("thead",{className:"bg-secondary text-white"},r.a.createElement("tr",{style:{marginBottom:5}},r.a.createElement("td",{style:{borderRadius:"3px 0 0 0",paddingLeft:10}},"Rank"),r.a.createElement("td",null,"Topic"),r.a.createElement("td",{style:{borderRadius:"0 3px 0 0"}},"Percentage of Coverage"))),r.a.createElement("tbody",null,n))},P=t(62),I=t.n(P),z=(t(439),function(e){var a=e.query.data.Author[0].Published_Domains,t=e.query.data.Author[0].Article_Archive,n=r.a.useState(10),c=Object(u.a)(n,2),o=c[0],l=c[1],i=r.a.useState(a.sort((function(e,a){return a.Number_Of_Articles-e.Number_Of_Articles}))),s=Object(u.a)(i,2),m=s[0],d=(s[1],r.a.useState()),h=Object(u.a)(d,2),p=h[0],f=h[1],y=r.a.useState(!1),g=Object(u.a)(y,2),E=g[0],b=g[1],v=function(e){b(!1),p===e?f():f(e)},S=function(e){var a=t.filter((function(a){return I()(a.URL).domain+"."+I()(a.URL).tld===e}));if(0===a.length)return r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item",key:"noitemsfound"},"No items found."));var n=a.filter((function(e,a){return!!E||a<5})).map((function(e,a){return r.a.createElement("li",{className:"list-group-item",key:a},r.a.createElement("a",{href:e.URL,key:e.URL,target:"_blank",rel:"noopener noreferrer"},e.Title))}));return r.a.createElement("ul",{className:"list-group list-group-flush publishedin-links"},r.a.createElement(_.a,{translateY:["-1em",0],opacity:[0,1],easing:"easeOutBack",duration:200,delay:function(e,a){return a>5?50:10*a}},n),a.length>5&&!E?r.a.createElement("li",{className:"list-group-item",key:"expander"},r.a.createElement("span",{onClick:function(){return b(!0)},style:{cursor:"pointer"},className:"text-primary",key:"showallarticles"},"+ Show all articles")):null)},w=m.map((function(e,a){var t=parseFloat(e.Open_Page_Rank.toFixed(2));return o>a?0===a?r.a.createElement(r.a.Fragment,{key:e+"thing"},r.a.createElement("tr",{className:"bg-warning",key:a,style:{marginBottom:5,cursor:"pointer"},onClick:function(){return v(a)}},r.a.createElement("td",{style:{paddingLeft:10},key:"firstdomain"},"\u25b8 ",r.a.createElement("u",null,e.Domain_Name)),r.a.createElement("td",{key:"roundedprmain"},t),r.a.createElement("td",{key:"domnumarticles"},e.Number_Of_Articles)),p===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{style:{backgroundColor:"transparent"}},r.a.createElement("td",{colSpan:3,key:"articlehandler",style:{padding:"10px 0"}},S(e.Domain_Name)))):null):r.a.createElement(r.a.Fragment,{key:e+a},r.a.createElement("tr",{key:a,style:{cursor:"pointer"},onClick:function(){return v(a)}},r.a.createElement("td",{style:{paddingLeft:10},key:"domainname"},"\u25b8 ",r.a.createElement("u",null,e.Domain_Name)),r.a.createElement("td",{key:"roundedpr"},t),r.a.createElement("td",{key:"numarticles"},e.Number_Of_Articles)),p===a?r.a.createElement("tr",{style:{backgroundColor:"transparent"}},r.a.createElement("td",{colSpan:3,key:"articlehandler",style:{padding:"10px 0"}},S(e.Domain_Name))):null):null}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{responsive:!0,hover:!0,borderless:!0,size:"sm"},r.a.createElement("thead",{className:"bg-secondary text-white"},r.a.createElement("tr",{style:{marginBottom:5}},r.a.createElement("td",{style:{borderRadius:"3px 0 0 0",paddingLeft:10},key:"domain"},"Domain"),r.a.createElement("td",{key:"openpr"},"Open Page Rank"),r.a.createElement("td",{style:{borderRadius:"0 3px 0 0"},key:"numpubd"},"Num. Articles Published"))),r.a.createElement("tbody",null,w)),10===o&&a.length>o?r.a.createElement("div",{className:"mt-1 mb-2"},r.a.createElement("u",{onClick:function(){return l(o+5)},style:{cursor:"pointer"},className:"text-muted"},"+ Show 10 more domains")):null)}),$=t(479),U=function(e){var a;switch(console.log("thisdata",e.data),e.page){case"keywords":a=e.data;break;case"authors":a=e.query.data.Author[0].Article_Archive;break;default:a=e.query.data.Author[0].Article_Archive}var t=r.a.useState(5),n=Object(u.a)(t,2),c=n[0],o=n[1],l=a.map((function(e,a){return c>a?r.a.createElement($.a,{className:"p-3 mb-2",key:a},r.a.createElement($.a.Title,null,r.a.createElement("a",{href:e.URL,target:"blank",key:a},e.Title)),e.Date.year?r.a.createElement($.a.Subtitle,{className:"text-muted font-weight-normal"},I()(e.URL).domain+"."+I()(e.URL).tld," - Published on ",e.Date.month,"/",e.Date.day,"/",e.Date.year):r.a.createElement($.a.Subtitle,{className:"text-muted font-weight-normal"},I()(e.URL).domain+"."+I()(e.URL).tld)):null}));return r.a.createElement(r.a.Fragment,null,l,a.length>c?r.a.createElement("div",{className:"my-2"},r.a.createElement("u",{onClick:function(){return o(c+5)},style:{cursor:"pointer"},className:"text-muted"},"+ Load 5 more articles")):null)},F=(t(440),function(e){var a;a=e.query?e.query.data.Author[0][e.endpoint].map((function(a){return a[e.kv]})):e.data.map((function(a){return a[e.kv]}));var t={xl:{fontSize:"2em",backgroundColor:"#fff",borderRadius:"4px",cursor:"pointer"},lg:{fontSize:"1.5em",backgroundColor:"#fff",borderRadius:"4px",cursor:"pointer"},md:{fontSize:"1.25em",backgroundColor:"#fff",borderRadius:"4px",cursor:"pointer"},sm:{fontSize:"1em",backgroundColor:"#fff",borderRadius:"4px",cursor:"pointer"},xs:{fontSize:".75em",backgroundColor:"#fff",borderRadius:"4px",cursor:"pointer"}},n=function(a){e.changeSearch&&e.changeSearch("keywords",a)},c=a.map((function(e,a){return a<5?r.a.createElement("span",{style:t.xl,className:"border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem",onClick:function(){return n(e)},key:a},e):a<10?r.a.createElement("span",{style:t.lg,className:"border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem",onClick:function(){return n(e)},key:a},e):a<20?r.a.createElement("span",{style:t.md,className:"border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem",onClick:function(){return n(e)},key:a},e):a<30?r.a.createElement("span",{style:t.sm,className:"border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem",onClick:function(){return n(e)},key:a},e):r.a.createElement("span",{style:t.xs,className:"border mr-1 mb-1 py-2 px-3 d-inline-block wordCloudItem",onClick:function(){return n(e)},key:a},e)}));return r.a.createElement(r.a.Fragment,null,c)}),B=t(248),K=function(e){return e.oneColumn?r.a.createElement("tr",null,r.a.createElement("td",{colspan:2},e.children)):r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",{role:"img","aria-label":e.emojiDescription},e.emoji)," ",e.emojiDescription),r.a.createElement("td",null,e.children))},W=t(27),Y=function(e){var a=Object(d.b)({query:e.query,variables:e.variables}),t=Object(u.a)(a,1)[0];return t.fetching?r.a.createElement(W.a,{text:"Collecting additional results...",loading:!0,noborder:!0,transparent:!0}):t.error||0===t.data.Author.length?r.a.createElement(W.a,{text:"Information not available.",noborder:!0,error:!0,transparent:!0}):r.a.cloneElement(e.children,{query:t})},G=function(e){var a=Object(d.b)({query:"\n  query GetAuthors($name: String!)\n    {\n      Author(name: $name){\n        name,\n        emails,\n        twitter,\n        position,\n        company,\n        companies,\n        current_company,\n        current_company_size,\n        current_company_website,\n        emails,\n        facebook,\n        klout,\n        known_domains,\n        linkedin,\n        location,\n        medium,\n        phone_number\n      }\n    }\n  ",variables:{name:e.authorName}}),t=Object(u.a)(a,1)[0];if(e.authorName){if(t.fetching)return r.a.createElement(W.a,{text:"Collecting results...",loading:!0});if(t.error||0===t.data.Author.length)return r.a.createElement(W.a,{text:"An error occurred. Please try again."});var n=t.data.Author[0];return r.a.createElement(y.a,{fluid:!0,className:"my-5"},r.a.createElement(y.a,null,r.a.createElement(g.a,{className:"mb-4"},r.a.createElement(E.a,{sm:"auto",className:"mb-2"},r.a.createElement(b.a,{src:n.emails?"https://s.gravatar.com/avatar/".concat(p()(n.emails),"?s=80"):"https://s.gravatar.com/avatar/fa5bba24186a52aed45eba94d5543fa6?s=80",roundedCircle:!0})),r.a.createElement(E.a,null,r.a.createElement("h2",{className:"d-inline-block"},n.name?n.name:null),r.a.createElement(B.a,{author:n.name}),r.a.createElement("hr",{style:{margin:"0 0 .75em"}}),r.a.createElement("div",{className:"author-email-list"},r.a.createElement(_.a,{translateY:["-2em",0],opacity:[0,1],easing:"easeOutBack",duration:300,delay:function(e,a){return a<10?700+200*a:a<20?2100+40*a:2800+10*a}},n.emails?function(e){var a=e.split(", ");return a.map((function(e,t){return r.a.createElement("span",{key:t,className:"mb-2 mr-1"},r.a.createElement("small",null,e,a.length>1&&t+1!==a.length&&","))}))}(n.emails):r.a.createElement("span",{key:"noemails",className:"mb-2 mr-1"},r.a.createElement("small",null,"No emails found for this author")))))),r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(k.a,{className:"bg-light",striped:!0,responsive:!0,bordered:!0},r.a.createElement("tbody",null,(n.twitter||n.facebook||n.linkedin)&&r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",{role:"img","aria-label":"Social Media"},"\ud83d\udcac")," Social Media"),r.a.createElement("td",null,n.twitter&&r.a.createElement(v.SocialIcon,{url:"http://twitter.com/".concat(n.twitter)}),n.facebook&&r.a.createElement(v.SocialIcon,{url:"".concat(n.facebook)}),n.linkedin&&r.a.createElement(v.SocialIcon,{url:"".concat(n.linkedin)}))),n.location&&r.a.createElement(K,{emoji:"\ud83c\udf0e",emojiDescription:"Location"},n.location,r.a.createElement(N,{location:n.location})),n.position&&r.a.createElement(K,{emoji:"\ud83d\udcdd",emojiDescription:"Position"},n.position),n.current_company&&r.a.createElement(K,{emoji:"\ud83c\udf06",emojiDescription:"Current Company"},n.current_company),n.current_company_size&&r.a.createElement(K,{emoji:"\ud83d\udcca",emojiDescription:"Company Size"},n.current_company_size),n.current_company_website&&r.a.createElement(K,{emoji:"\ud83d\udda5",emojiDescription:"Current Company Website"},n.current_company_website),n.company&&r.a.createElement(K,{emoji:"\ud83c\udfe2",emojiDescription:"Associated Workplaces"},n.company),r.a.createElement(K,{emoji:"\ud83d\udce2",emojiDescription:"Associated topics"},r.a.createElement(Y,{query:"\n  query GetAuthors($name: String!){\n      Author(name: $name){\n        Main_Categories(name: $name){\n          Main_Topic,\n          Percent_of_Coverage,\n        }\n      }\n    }",variables:{name:e.authorName}},r.a.createElement(M,null))),r.a.createElement(K,{emoji:"\ud83d\udcc6",emojiDescription:"Days Published"},r.a.createElement(Y,{query:f,variables:{name:e.authorName}},r.a.createElement(R,null))),r.a.createElement(K,{emoji:"\ud83d\udcc4",emojiDescription:"Latest Articles Published"},r.a.createElement(Y,{query:f,variables:{name:e.authorName}},r.a.createElement(U,{page:"authors"}))),r.a.createElement(K,{emoji:"\ud83d\udd17",emojiDescription:"Published in"},r.a.createElement(Y,{query:"\n  query GetAuthors($name: String!){\n      Author(name: $name){\n        Published_Domains(name: $name){\n          Domain_Name,\n          Open_Page_Rank,\n          Number_Of_Articles,\n          Alexa_Rank,\n          Domain_Authority,\n          Location,\n          Moz_Rank,\n        },\n        Article_Archive(name: $name){\n          URL,\n          Date {\n            year,\n            month,\n            day\n          },\n          Title,\n        }\n      }\n    }",variables:{name:e.authorName}},r.a.createElement(z,null))),r.a.createElement(K,{emoji:"\ud83d\udd0d",emojiDescription:"Similar Authors"},r.a.createElement(Y,{query:"\n  query GetAuthors($name: String!, $pagerank: Float!){\n      Author(name: $name){\n        Similar_Authors(name: $name, min_pagerank: $pagerank){\n          Similar_Author,\n          Emails,\n          MuckRack,\n          Similarity_Score,\n        }\n      }\n    }",variables:{name:e.authorName,pagerank:7.5}},r.a.createElement(q,{changeSearch:e.changeSearch}))),r.a.createElement(K,{emoji:"\ud83d\udd36",emojiDescription:"Discussed Entities"},r.a.createElement(Y,{query:"\n  query GetAuthors($name: String!){\n      Author(name: $name){\n        Discusses_Entities(name: $name){\n          Entity,\n          Mentions,\n        }\n      }\n    }",variables:{name:e.authorName}},r.a.createElement(F,{endpoint:"Discusses_Entities",kv:"Entity",changeSearch:e.changeSearch}))),r.a.createElement(K,{emoji:"\ud83d\udd20",emojiDescription:"Discussed Keywords"},r.a.createElement(Y,{query:"\n  query GetAuthors($name: String!){\n      Author(name: $name){\n         Discusses_Keywords(name: $name){\n          Keyword,\n          Mentions,\n        }\n      }\n    }",variables:{name:e.authorName}},r.a.createElement(F,{endpoint:"Discusses_Keywords",kv:"Keyword",changeSearch:e.changeSearch})))))))))}return r.a.createElement(W.a,{text:"Enter a full name above to get started.",instant:!0})},H=function(e){var a,t,n;switch(e.pageName){case"authors":a="Enter a full name:",t="John Smith",n=e.recentAuthors;break;case"keywords":a="Enter a keyword:",t="Politics",n=e.recentKeywords;break;default:a="Enter a search term:",t="John Smith"}var c=n.map((function(a,t){return t<5?r.a.createElement("span",{key:t},r.a.createElement("u",{onClick:function(){return e.changeSearch(e.pageName,a)},style:{cursor:"pointer"}},a),t<4?", ":null):null}));return r.a.createElement(y.a,{fluid:!0,className:"bg-light py-5"},r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement("form",{onSubmit:e.setSearch},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,r.a.createElement("span",{role:"img","aria-label":"Search"},"\ud83d\udd0d")," ",a),r.a.createElement("input",{type:"text",name:"name",placeholder:t,className:"form-control form-control-lg",id:"searchComponentInput"})),c.length>0&&r.a.createElement("div",{className:"mb-3 text-muted"},"Your Recent Searches: ",c),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary btn-lg"}))))))},J=function(){return r.a.createElement(y.a,{className:"bg-light my-5 py-5 rounded text-black-50 border"},r.a.createElement(g.a,{className:"align-items-center text-center"},r.a.createElement(E.a,null,"Please log in to get started")))},V=t(477),Q=t(480),X=t(475),Z=t(119),ee=t(252),ae=t.n(ee),te=t(19),ne=function(){return window.history.replaceState({},document.title,window.location.pathname)},re=r.a.createContext(),ce=function(){return Object(n.useContext)(re)},oe=function(e){var a=ce(),t=a.isAuthenticated,n=a.loginWithRedirect,c=a.logout,o=a.user;return r.a.createElement(y.a,{fluid:!0,className:"bg-dark"},r.a.createElement(y.a,null,r.a.createElement(V.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",className:"px-0 py-3"},r.a.createElement(V.a.Brand,{href:"#home"},r.a.createElement("span",{role:"img","aria-label":"Campground",className:"font-weight-bold"},"\u26fa Campground")),r.a.createElement(V.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(V.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(Q.a,{className:"mr-auto"},r.a.createElement(Q.a.Link,{href:"#AuthorSearch",onClick:function(){e.setPage("authors")}},"Author Search"),r.a.createElement(Q.a.Link,{href:"#Keyword",onClick:function(){e.setPage("keywords")}},"Keyword Search")),r.a.createElement(Q.a,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{src:o.picture,alt:"Profile",roundedCircle:!0,style:{height:32,width:32,alignSelf:"center"},className:"d-none d-lg-block"}),r.a.createElement(X.a,{title:o.name,id:"collasible-nav-dropdown",alignRight:!0},r.a.createElement(X.a.Item,{href:"#MySavedAuthors",onClick:function(){e.setPage("lists")}},"My Saved Authors"),r.a.createElement(X.a.Divider,null),r.a.createElement(X.a.Item,{disabled:!0},o.email),r.a.createElement(X.a.Item,{href:"#action/3.3",onClick:function(){te.a.signOut(),c()}},"Log Out"))):r.a.createElement(T.a,{size:"sm",variant:"outline-light",onClick:function(){return n({})}},"Log in"))))))},le=t(253),ie=function(e){var a=Object(d.b)({query:"\n  query Term_Search($search_input:String, $min_pagerank:Float){\n    Term_Search_Most_Associated_Keywords(search_input:$search_input){\n      Keyword,\n      Ranking,\n    },\n    Term_Search_Most_Associated_Entities(search_input:$search_input){\n      Entity,\n      Ranking,\n    },\n    Term_Search_Most_Associated_Domains (search_input:$search_input, min_pagerank:$min_pagerank){\n      Domain,\n      Open_Page_Rank,\n      Domain_Authority,\n      Ranking,\n    },\n    Term_Search_Most_Associated_Authors(search_input:$search_input, min_pagerank:$min_pagerank){\n      Name,\n      Emails,\n      Twitter,\n      MuckRack,\n      Ranking,\n    },\n    Term_Search_Most_Associated_Topics(search_input:$search_input){\n      Topic,\n      Ranking,\n    },\n    Term_Search_Most_Associated_Articles(search_input:$search_input){\n        URL,\n        Date {\n          year,\n          month,\n          day,\n        },\n        Title,\n        Domain_Name,\n        Score,\n    }\n  }\n",variables:{search_input:e.keywordName,min_pagerank:7.5}}),t=Object(u.a)(a,1)[0];return e.keywordName?t.fetching?r.a.createElement(W.a,{text:"Collecting results...",loading:!0}):t.error?r.a.createElement(W.a,{text:"An error occurred. Please try again."}):r.a.createElement(y.a,{fluid:!0,className:"my-5"},r.a.createElement(y.a,null,r.a.createElement(g.a,{className:"mb-4"},r.a.createElement(E.a,null,r.a.createElement("h2",{className:"d-inline-block"},e.keywordName))),r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(k.a,{className:"bg-light",striped:!0,responsive:!0,bordered:!0},r.a.createElement("tbody",null,r.a.createElement(K,{emoji:"\ud83d\udd20",emojiDescription:"Most Associated Keywords"},r.a.createElement(F,{data:t.data.Term_Search_Most_Associated_Keywords,kv:"Keyword",changeSearch:e.changeSearch})),r.a.createElement(K,{emoji:"\ud83d\udd23",emojiDescription:"Most Associated Entities"},r.a.createElement(F,{data:t.data.Term_Search_Most_Associated_Entities,kv:"Entity",changeSearch:e.changeSearch})),r.a.createElement(K,{emoji:"\ud83d\udcbb",emojiDescription:"Most Associated Articles"},r.a.createElement(U,{data:t.data.Term_Search_Most_Associated_Articles,page:"keywords"})),r.a.createElement(K,{emoji:"\ud83c\udf0e",emojiDescription:"Most Associated Domains"},r.a.createElement(F,{data:t.data.Term_Search_Most_Associated_Domains,kv:"Domain",changeSearch:e.changeSearch})),r.a.createElement(K,{emoji:"\ud83d\udcd5",emojiDescription:"Most Associated Authors"},r.a.createElement(q,{data:t.data.Term_Search_Most_Associated_Authors,kv:"Name",changeAuthor:e.changeAuthor,changeSearch:e.changeSearch})),r.a.createElement(K,{emoji:"\ud83d\udcda",emojiDescription:"Most Associated Topics"},r.a.createElement(F,{data:t.data.Term_Search_Most_Associated_Topics,kv:"Topic",changeSearch:e.changeSearch})))))))):r.a.createElement(W.a,{text:"Enter any search term above to get started."})},se=Object(m.a)({url:"https://graphql.frac.tl:3333/graphql"}),ue=function(){var e=r.a.useState(""),a=Object(u.a)(e,2),t=a[0],c=a[1],o=r.a.useState([]),l=Object(u.a)(o,2),m=l[0],h=l[1],p=r.a.useState([]),f=Object(u.a)(p,2),y=f[0],g=f[1],E=r.a.useState("authors"),b=Object(u.a)(E,2),k=b[0],v=b[1],S=ce(),_=S.loading,w=S.isAuthenticated;Object(n.useEffect)((function(){!_&&w&&te.a.recentAuthorSearches().then((function(e){return h(e)})),!_&&w&&te.a.recentKeywordSearches().then((function(e){return g(e)}))}),[_,w]);function A(e,a){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(c(a));case 2:return t.next=4,i.a.awrap(v(e));case 4:return t.next=6,i.a.awrap(x(e,a));case 6:case"end":return t.stop()}}))}var x=function(e,a){document.querySelector("#searchComponentInput").value=a;var t=document.querySelector("#searchComponentInput").value;switch(te.a.addRecentSearch(e,t),e){case"authors":h([t].concat(Object(s.a)(m)));break;case"keywords":g([t].concat(Object(s.a)(y)))}c(document.querySelector("#searchComponentInput").value)};return _?r.a.createElement(W.a,{text:"Loading Campground...",loading:!0}):r.a.createElement(d.a,{value:se},r.a.createElement(oe,{setPage:function(e){document.querySelector("#searchComponentInput")&&(document.querySelector("#searchComponentInput").value=""),c(""),v(e)}}),w&&"lists"!==k&&r.a.createElement(H,{setSearch:function(e){e.preventDefault();var a=document.querySelector("#searchComponentInput").value;switch(te.a.addRecentSearch(a,k),k){case"authors":h([a].concat(Object(s.a)(m)));break;case"keywords":g([a].concat(Object(s.a)(y)))}c(document.querySelector("#searchComponentInput").value)},changeSearch:x,recentAuthors:m,recentKeywords:y,pageName:k}),w&&"authors"===k&&r.a.createElement(G,{authorName:t,changeSearch:A}),w&&"keywords"===k&&r.a.createElement(ie,{keywordName:t,changeSearch:x,changeAuthor:A}),w&&"lists"===k&&r.a.createElement(le.a,{changeSearch:A}),!w&&r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=t(254),de=Object(me.a)();o.a.render(r.a.createElement((function(e){var a=e.children,t=e.onRedirectCallback,c=void 0===t?ne:t,o=Object(Z.a)(e,["children","onRedirectCallback"]),l=Object(n.useState)(),s=Object(u.a)(l,2),m=s[0],d=s[1],h=Object(n.useState)(),p=Object(u.a)(h,2),f=p[0],y=p[1],g=Object(n.useState)(),E=Object(u.a)(g,2),b=E[0],k=E[1],v=Object(n.useState)(!0),S=Object(u.a)(v,2),_=S[0],w=S[1],A=Object(n.useState)(!1),x=Object(u.a)(A,2),j=x[0],N=x[1];Object(n.useEffect)((function(){!function(){var e,a,t,n,r,l,s,u;i.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,i.a.awrap(ae()(o));case 2:if(e=m.sent,k(e),!window.location.search.includes("code=")||!window.location.search.includes("state=")){m.next=10;break}return m.next=7,i.a.awrap(e.handleRedirectCallback());case 7:a=m.sent,t=a.appState,c(t);case 10:return m.next=12,i.a.awrap(e.isAuthenticated());case 12:if(n=m.sent,d(n),!n){m.next=32;break}return m.next=17,i.a.awrap(e.getUser());case 17:return r=m.sent,y(r),m.next=21,i.a.awrap(e.getIdTokenClaims());case 21:return l=m.sent,m.next=24,i.a.awrap(fetch("https://campground.frac.tl:3001/firebase",{headers:{Authorization:"Bearer ".concat(l.__raw)}}));case 24:return s=m.sent,m.next=27,i.a.awrap(s.json());case 27:return u=m.sent,m.next=30,i.a.awrap(te.a.setToken(u.firebaseToken));case 30:return m.next=32,i.a.awrap(te.a.updateProfile(r));case 32:w(!1);case 33:case"end":return m.stop()}}))}()}),[]);return r.a.createElement(re.Provider,{value:{isAuthenticated:m,user:f,loading:_,popupOpen:j,loginWithPopup:function(){var e,a,t=arguments;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:{},N(!0),n.prev=2,n.next=5,i.a.awrap(b.loginWithPopup(e));case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.error(n.t0);case 10:return n.prev=10,N(!1),n.finish(10);case 13:return n.next=15,i.a.awrap(b.getUser());case 15:a=n.sent,y(a),d(!0);case 18:case"end":return n.stop()}}),null,null,[[2,7,10,13]])},handleRedirectCallback:function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return w(!0),a.next=3,i.a.awrap(b.handleRedirectCallback());case 3:return a.next=5,i.a.awrap(b.getUser());case 5:e=a.sent,w(!1),d(!0),y(e);case 9:case"end":return a.stop()}}))},getIdTokenClaims:function(){return b.getIdTokenClaims.apply(b,arguments)},loginWithRedirect:function(){return b.loginWithRedirect.apply(b,arguments)},getTokenSilently:function(){return b.getTokenSilently.apply(b,arguments)},getTokenWithPopup:function(){return b.getTokenWithPopup.apply(b,arguments)},logout:function(){return b.logout.apply(b,arguments)}}},a)}),{domain:"dev-bv453lq2.auth0.com",client_id:"HSlzOwtfr7NCgQ9hM56JhJRpP0a4iYMV",redirect_uri:window.location.href,onRedirectCallback:function(e){de.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[259,1,2]]]);
//# sourceMappingURL=main.86510c21.chunk.js.map