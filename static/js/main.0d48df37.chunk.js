(this["webpackJsonpanime-app"]=this["webpackJsonpanime-app"]||[]).push([[0],{82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=n(12),o=n(41),l=n(13),m=n(43),u=n(2),d="[animeStreaming] mostrar todos los mejores animes",j="[animeStreaming] lista de espect\xe1culos con animes de g\xe9nero",b="[animeStreaming] mostrar la lista con el personal",h="[animeStreaming] mostrar lista portada promocional",p="[animeStreaming] mostrar tr\xe1iler promocional",f="[animeStreaming] show list with episodes",O="[animeStreaming] lista de espect\xe1culos con episodios",x="[animeStreaming] mostrar m\xe1s informaci\xf3n de este anime",v="[animeStreaming] obtener el nombre del anime y la fecha por tarjeta",g="[animeStreaming] mostrar lista con anime por nombres",N="[animeStreaming] mostrar la lista de nombres",y="[animeStreaming] borrar todas las casillas que contienen los detalles del anime",w="[animeStreaming] agregar anime a la lista de favoritos",S="[animeStreaming] eliminar anime en la lista de favoritos",k={nameList:[],animeList:[],nameAndDate:[],charactersAndStaff:[],picture:[],videos:[],episodes:[],news:[],moreInfo:[],searchAnime:[]},_=n(46),L={favoriteList:[]},A=Object(l.b)({animeStreaming:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case j:return Object(u.a)(Object(u.a)({},e),{},{animeList:t.payload});case v:return Object(u.a)(Object(u.a)({},e),{},{nameAndDate:t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{charactersAndStaff:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{picture:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{videos:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{episodes:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{news:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{moreInfo:t.payload});case g:return Object(u.a)(Object(u.a)({},e),{},{searchAnime:t.payload});case N:return Object(u.a)(Object(u.a)({},e),{},{nameList:t.payload});case y:return Object(u.a)(Object(u.a)({},e),{},{nameAndDate:k.nameAndDate,charactersAndStaff:k.charactersAndStaff,picture:k.picture,videos:k.videos,episodes:k.episodes,news:k.news,moreInfo:k.moreInfo});default:return e}},favoriteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(u.a)(Object(u.a)({},e),{},{favoriteList:[].concat(Object(_.a)(e.favoriteList),[t.payload])});case S:return Object(u.a)(Object(u.a)({},e),{},{favoriteList:e.favoriteList.filter((function(e){return e.id!==t.payload}))});default:return e}}}),G=n(30),E=n(42),C={key:"persist-key",storage:n.n(E).a},M=Object(G.a)(C,A),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,T=Object(l.d)(M,D(Object(l.a)(m.a))),I=Object(G.b)(T),F=n(11),P=n(4),R=n(5),B=n.n(R),V=n(14),H=n(44),W=n.n(H).a.create({baseURL:"https://api.jikan.moe/v3"}),q={getTop:function(e){return W({method:"GET",url:"/top/anime/1/".concat(e)})},getGenre:function(e){return W({method:"GET",url:"search/anime?genre=".concat(e)})},getCharactersStaff:function(e){return W({method:"GET",url:"/anime/".concat(e,"/characters_staff")})},getPictures:function(e){return W({method:"GET",url:"/anime/".concat(e,"/pictures")})},getVideos:function(e){return W({method:"GET",url:"/anime/".concat(e,"/videos")})},getEpisodes:function(e){return W({method:"GET",url:"/anime/".concat(e,"/episodes")})},getNews:function(e){return W({method:"GET",url:"/anime/".concat(e,"/news")})},getMoreInfo:function(e){return W({method:"GET",url:"/anime/".concat(e,"/moreinfo")})},getSearchAnimeByName:function(e){return W({method:"GET",url:"search/anime?q=".concat(e,"&limit=5")})}},J=q.getTop,U=q.getGenre,X=q.getCharactersStaff,z=q.getPictures,K=q.getVideos,Q=q.getEpisodes,Y=q.getNews,Z=q.getMoreInfo,$=q.getSearchAnimeByName,ee=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:a=t.sent,r=a.data.top,n({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},te=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e);case 3:a=t.sent,r=a.data.results,n({type:j,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ne=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r,c,s,i,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X(e);case 3:a=t.sent,r=a.data,c=r.characters,s=r.staff,i=c.slice(0,40),o=s.slice(0,40),n({type:b,payload:{charactersLimit:i,staffLimit:o}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z(e);case 3:a=t.sent,r=a.data.pictures,n({type:h,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:a=t.sent,r=a.data.promo,n({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(e);case 3:a=t.sent,r=a.data.episodes,n({type:f,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:a=t.sent,r=a.data.articles,n({type:O,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(e);case 3:a=t.sent,r=a.data.moreinfo,n({type:x,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var a,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$(e);case 3:a=t.sent,r=a.data.results,n({type:g,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e,t,n){return function(a){a({type:v,payload:{name:e,date:t,id:n}})}},me=function(e){return function(t){t({type:N,payload:e})}},ue=function(){return function(e){e({type:y})}},de=function(e,t,n,a){return function(r){r({type:w,payload:{id:e,img:t,name:n,date:a}})}},je=function(e){return function(t){t({type:S,payload:e})}},be=function(){return{actGetTop:ee,actGetGenre:te,actGetCharactersStaff:ne,actGetPictures:ae,actGetVideos:re,actGetEpisodes:ce,actGetNews:se,actGetMoreInfo:ie,actGetSearchAnimeByName:oe,actGetNameAndDate:le,actGetNameList:me,actgetClearAllDetail:ue,actGetAddAnimeFavorite:de,actGetRemoveAnimeFavorite:je}},he=function(){var e=Object(P.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.animeStreaming})),a=n.nameAndDate,r=n.charactersAndStaff,c=n.picture,s=n.videos,o=n.episodes,l=n.news,m=n.moreInfo,u=Object(i.c)((function(e){return e.favoriteList})).favoriteList,d=be(),j=d.actGetNameAndDate,b=d.actGetCharactersStaff,h=d.actGetPictures,p=d.actGetVideos,f=d.actGetEpisodes,O=d.actGetNews,x=d.actGetMoreInfo,v=d.actgetClearAllDetail,g=d.actGetAddAnimeFavorite,N=d.actGetRemoveAnimeFavorite,y=u.find((function(e){return e.id===a.id}));return{nameAndDate:a,charactersAndStaff:r,picture:c,videos:s,episodes:o,news:l,moreInfo:m,favoriteList:u,handleNameAndDate:function(n,a,r){t(v()),t(j(n,a,r)),t(b(r)),t(h(r)),t(p(r)),t(f(r)),setTimeout((function(){t(O(r)),t(x(r)),e.push("/".concat(r))}),600)},handleFavoriteList:function(e,n,a,r,c){e.preventDefault();var s=u.find((function(e){return e.id===n}));console.log(s),t(s?N(n):g(n,a,r,c))},searchOnList:y}},pe=n(0),fe=function(e){var t=he().handleNameAndDate;return Object(pe.jsx)("div",{onClick:function(){return t(e.title,e.start_date,e.mal_id)},className:"card",children:Object(pe.jsxs)("div",{children:[Object(pe.jsx)("div",{className:"img1",style:{backgroundImage:"url(".concat(e.image_url,")")}}),Object(pe.jsx)("div",{className:"title",children:e.title})]})})},Oe=n(15),xe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.animeStreaming})),n=t.animeList,r=t.nameList,c=be(),s=c.actGetTop,o=c.actGetGenre,l=c.actGetNameList,m=Object(a.useState)(!1),u=Object(Oe.a)(m,2),d=u[0],j=u[1],b=Object(a.useState)(!1),h=Object(Oe.a)(b,2),p=h[0],f=h[1];Object(a.useEffect)((function(){0===n.length&&(e(l("TV")),e(s("tv")))}),[]);return{click:d,handleClick:function(){return j(!d)},closeMobileMenu:function(){return j(!1)},dropdown:p,onMouseEnter:function(){window.innerWidth<300?f(!1):f(!0)},onMouseLeave:function(){window.innerWidth,f(!1)},animeList:n,nameList:r,handleAnimeList:function(t,n){e(s(t)),e(l(n))},handleAnimeByGenre:function(t,n){e(o(t)),e(l(n))}}},ve=function(){var e=xe(),t=e.animeList,n=e.nameList;return Object(pe.jsxs)("div",{className:"anime_wrapper",children:[Object(pe.jsx)("h3",{children:n}),Object(pe.jsx)("div",{className:"container_card",children:t.map((function(e,t){return Object(pe.jsx)(fe,Object(u.a)({},e),t)}))})]})},ge=n(25),Ne=n(7),ye=n(6),we=function(){var e=he(),t=e.nameAndDate,n=e.charactersAndStaff,a=e.picture,r=e.videos,c=e.episodes,s=e.news,i=e.moreInfo,o=e.handleFavoriteList,l=e.searchOnList;return Object(pe.jsxs)("div",{className:"detail_wrapper",children:[Object(pe.jsxs)("div",{className:"detail_main",children:[Object(pe.jsx)("div",{className:"picture",children:Object(pe.jsx)("img",{src:a[0]?a[0].large:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",alt:"anime cover"})}),Object(pe.jsxs)("div",{className:"text",children:[Object(pe.jsxs)("div",{className:"text_title1",children:[Object(pe.jsx)("h2",{children:t.name}),Object(pe.jsx)("h3",{children:t.date})]}),Object(pe.jsxs)("div",{className:"text_title2",children:[Object(pe.jsx)("h2",{children:"M\xe1s Informaci\xf3n"}),Object(pe.jsx)(ye.a,{style:l&&{color:"#e63946"},onClick:function(e){return o(e,t.id,a[0].large,t.name,t.date)},icon:l?Ne.e:ge.b})]}),Object(pe.jsx)("div",{className:"text_content",children:Object(pe.jsx)("h3",{children:i&&i.length>0?i:"Lo sentimos pero por el momento no tenemos informaci\xf3n de este anime"})}),Object(pe.jsxs)("div",{className:"text_character",children:[Object(pe.jsxs)("div",{className:"text_characters",children:[Object(pe.jsx)("h3",{children:"Personajes"}),Object(pe.jsx)("div",{className:"avatar-group",children:n.charactersLimit?n.charactersLimit.map((function(e,t){return Object(pe.jsxs)("div",{className:"avatar ",children:[Object(pe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(pe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(pe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos personajes para mostrar"})})]}),Object(pe.jsxs)("div",{className:"text_staff",children:[Object(pe.jsx)("h3",{children:"Personal"}),Object(pe.jsx)("div",{className:"avatar-group",children:n.staffLimit?n.staffLimit.map((function(e,t){return Object(pe.jsxs)("div",{className:"avatar",children:[Object(pe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(pe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(pe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos personal para mostrar"})})]})]}),r[0]&&Object(pe.jsx)("a",{style:{textDecoration:"none"},href:r[0].video_url,className:"btn btn-trailer",children:"Trailer"})]})]}),Object(pe.jsxs)("div",{className:"detail_episodes",children:[Object(pe.jsxs)("h3",{className:"detail_episodes_title",children:[t.name,Object(pe.jsx)("span",{style:{marginLeft:"8px"},children:"Episodios"})]}),Object(pe.jsx)("div",{className:"cards_episodes",children:c?c.map((function(e,t){return Object(pe.jsxs)("div",{className:"card_episode",children:[Object(pe.jsx)("a",{style:{textDecoration:"none"},href:e.video_url,children:Object(pe.jsx)("img",{src:a[0].large,alt:"caps"})}),"Ep-",e.episode_id]},t)})):Object(pe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos episodios para mostrar"})})]}),Object(pe.jsxs)("div",{className:"detail_new",children:[Object(pe.jsx)("h3",{children:"Novedades de este anime"}),Object(pe.jsx)("div",{className:"detail_new_deck",children:s?s.map((function(e,t){return Object(pe.jsx)("div",{className:"deck",children:Object(pe.jsx)("a",{style:{textDecoration:"none"},href:e.url,children:Object(pe.jsxs)("div",{className:"card-new",children:[Object(pe.jsxs)("header",{className:"cardHeader",children:[Object(pe.jsx)(ye.a,{style:{color:"#FFD433",margin:"10px"},icon:ge.c}),Object(pe.jsxs)("span",{className:"cardHeader_account",children:["@",e.title]}),Object(pe.jsx)("span",{className:"cardHeader_date",children:e.date})]}),Object(pe.jsxs)("div",{className:"cardBody",children:[Object(pe.jsx)("p",{className:"cardText",children:e.intro}),Object(pe.jsx)("section",{className:"cardStats",children:Object(pe.jsxs)("span",{className:"cardStats_stat cardStats_stat-comments",children:[e.comments,Object(pe.jsx)(ye.a,{style:{marginLeft:"4px"},icon:ge.a})]})})]})]})})},t)})):Object(pe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos noticias para mostrar"})})]})]})},Se=[{name:"Action",number:1},{name:"Adventure",number:2},{name:"Cars",number:3},{name:"Comedy",number:4},{name:"Avante Garde",number:5},{name:"Demons",number:6},{name:"Mystery",number:7},{name:"Drama",number:8},{name:"Ecchi",number:9},{name:"Fantasy",number:10},{name:"Game",number:11},{name:"Hentai",number:12},{name:"Historical",number:13},{name:"Horror",number:14},{name:"Kids",number:15},{name:"Martial Arts",number:17},{name:"Mecha",number:18},{name:"Music",number:19},{name:"Parody",number:20},{name:"Samurai",number:21},{name:"Romance",number:22},{name:"School",number:23},{name:"Sci Fi",number:24},{name:"Shoujo",number:25},{name:"Girls Love",number:26},{name:"Shounen",number:27},{name:"Boys Love",number:28},{name:"Space",number:29},{name:"Sports",number:30},{name:"Super Power",number:31},{name:"Vampire",number:32},{name:"Harem",number:35},{name:"Slice Of Life",number:36},{name:"Supernatural",number:37},{name:"Military",number:28},{name:"Police",number:39},{name:"Psychological",number:40},{name:"Suspense",number:41},{name:"Seinen",number:42},{name:"Josei",number:43},{name:"Award Winning",number:46},{name:"Gourmet",number:47},{name:"Work Life",number:48},{name:"Erotica",number:49}],ke=function(){var e=xe(),t=e.click,n=e.handleClick,a=e.closeMobileMenu,r=e.handleAnimeByGenre;return Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsx)("ul",{onClick:n,className:t?"dropdown-menu clicked":"dropdown-menu",children:Se.map((function(e,t){return Object(pe.jsx)("li",{onClick:function(){return r(e.number,e.name)},children:Object(pe.jsxs)(F.b,{to:"/",className:"dropdown-link",onClick:a,children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px"},icon:Ne.f}),e.name]})},t)}))})})},_e=function(){var e=xe(),t=e.click,n=e.handleClick,a=e.closeMobileMenu,r=e.dropdown,c=e.onMouseEnter,s=e.onMouseLeave,i=e.handleAnimeList;return Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsxs)("nav",{className:"navbar",children:[Object(pe.jsxs)(F.b,{onClick:function(){return i("tv","TV")},to:"/",className:"navbar-logo",children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px"},icon:Ne.c}),Object(pe.jsx)("span",{children:"CODE"}),"Anime"]}),Object(pe.jsx)("div",{className:"menu-icon",onClick:n,children:Object(pe.jsx)(ye.a,{icon:t?Ne.k:Ne.a})}),Object(pe.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(pe.jsx)("li",{onClick:function(){return i("upcoming","Pr\xf3ximos")},className:"nav-item",children:Object(pe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:a,children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px"},icon:Ne.g}),"Pr\xf3ximamente"]})}),Object(pe.jsx)("li",{className:"nav-item",children:Object(pe.jsxs)(F.b,{to:"/favoritesList",className:"nav-links",onClick:a,children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px",color:"#e63946"},icon:Ne.d}),"Mis Animes Favoritos"]})}),Object(pe.jsx)("li",{onClick:function(){return i("airing","M\xe1s Populares")},className:"nav-item",children:Object(pe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:a,children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:Ne.b}),"Los M\xe1s Populares"]})}),Object(pe.jsxs)("li",{className:"nav-item",onMouseEnter:c,onMouseLeave:s,children:[Object(pe.jsxs)("div",{className:"nav-links",onClick:a,children:["G\xe9nero",Object(pe.jsx)(ye.a,{style:{marginLeft:"10px"},icon:Ne.i})]}),r&&Object(pe.jsx)(ke,{})]})]})]})})},Le=function(){return Object(pe.jsxs)("div",{className:"img-notFound",children:[Object(pe.jsx)("img",{src:"https://raw.githubusercontent.com/riimuru/AnimeLazer/a98a2f1b1127a68011c600f1bc43b967a5735d1f/public/404light.svg",alt:"notFoundPage404"}),Object(pe.jsxs)("div",{className:"text-notFound",children:["No tienes ning\xfan anime agregado a tu lista, te recomiendo que agregues uno ",Object(pe.jsx)(F.b,{to:"/",children:"aqu\xed"})]})]})},Ae=function(e){var t=he().handleNameAndDate;return Object(pe.jsxs)("div",{onClick:function(){return t(e.name,e.start_date,e.id)},className:"favorite_card",style:{marginTop:"20px"},children:[Object(pe.jsx)("div",{className:"favorite_img",children:Object(pe.jsx)("img",{src:e.img,alt:"img_favorite"})}),Object(pe.jsx)("div",{className:"favorite_text",children:Object(pe.jsx)("h2",{children:e.name})})]})},Ge=function(){var e=he().favoriteList;return Object(pe.jsxs)("div",{className:"favorite_wrapper",children:[Object(pe.jsx)("h3",{children:" Tu lista de animes favoritos "}),Object(pe.jsx)("div",{className:"container_card",style:{marginTop:"20px"},children:e.length>0?e.map((function(e,t){return Object(pe.jsx)(Ae,Object(u.a)({},e),t)})):Object(pe.jsx)(Le,{})})]})},Ee=n(23),Ce=function(){var e=Object(i.b)(),t=be().actGetSearchAnimeByName,n=Object(i.c)((function(e){return e.animeStreaming})).searchAnime,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Oe.a)(t,2),r=n[0],c=n[1];return[r,function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(Ee.a)({},t.name,t.value)))},function(){c(e)}]}({animeName:""}),c=Object(Oe.a)(r,2),s=c[0],o=c[1],l=s.animeName;Object(a.useEffect)((function(){e(t(l))}),[t,l,e]);var m=Object(a.useState)(!1),d=Object(Oe.a)(m,2),j=d[0],b=d[1],h=Object(a.useRef)(null);return{animeName:l,handleInputChange:o,searchAnime:n,searchContainer:h,showSearchDiv:j,onMouseEnterSearch:function(){b(!0)},onMouseLeaveSearch:function(){b(!1)}}},Me=function(){var e=Ce().searchAnime;return Object(pe.jsx)("div",{className:"searchWindow_wrapper",children:e.map((function(e,t){return Object(pe.jsxs)("div",{className:"search-card",children:[Object(pe.jsx)("img",{src:e.image_url,alt:"art"}),Object(pe.jsxs)("div",{className:"search-content",children:[Object(pe.jsxs)("div",{className:"search-header",children:[Object(pe.jsx)("h1",{className:"search-title",children:e.title}),Object(pe.jsxs)("h4",{className:"search-info",children:[Object(pe.jsx)(ye.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:Ne.j}),"Puntaje: ",e.score]})]}),Object(pe.jsx)("p",{className:"search-desc",children:e.synopsis}),Object(pe.jsx)("div",{style:{marginTop:"15px"},children:Object(pe.jsx)("a",{href:e.url,style:{textDecoration:"none",textAlign:"end"},className:"btn btn-more-infor",children:"M\xe1s Informaci\xf3n"})})]})]},t)}))})},De=function(){var e=Ce(),t=e.animeName,n=e.handleInputChange,a=e.showSearchDiv,r=e.onMouseEnterSearch,c=e.onMouseLeaveSearch;return Object(pe.jsxs)("div",{className:"search-toggle",children:[Object(pe.jsx)("input",{onFocus:r,onBlur:c,type:"text",placeholder:"Buscar Anime",name:"animeName",onChange:n,value:t,autoComplete:"off"}),Object(pe.jsx)("i",{children:Object(pe.jsx)(ye.a,{icon:Ne.h})}),a&&t.length>3&&Object(pe.jsx)(Me,{})]})},Te=function(){return Object(pe.jsx)("div",{children:Object(pe.jsx)(F.a,{children:Object(pe.jsxs)("div",{className:"main_wrapper",children:[Object(pe.jsx)(_e,{}),Object(pe.jsxs)("div",{className:"streaming_wrapper",children:[Object(pe.jsx)(De,{}),Object(pe.jsxs)(P.d,{children:[Object(pe.jsx)(P.b,{exact:!0,path:"/",children:Object(pe.jsx)(ve,{})}),Object(pe.jsx)(P.b,{exact:!0,path:"/favoritesList",children:Object(pe.jsx)(Ge,{})}),Object(pe.jsx)(P.b,{path:"/:id",children:Object(pe.jsx)(we,{})}),Object(pe.jsx)(P.a,{to:"/"})]})]})]})})})};var Ie=function(){return Object(pe.jsx)(i.a,{store:T,children:Object(pe.jsx)(o.a,{persistor:I,children:Object(pe.jsx)(Te,{})})})};n(82);s.a.render(Object(pe.jsx)(r.a.StrictMode,{children:Object(pe.jsx)(Ie,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.0d48df37.chunk.js.map