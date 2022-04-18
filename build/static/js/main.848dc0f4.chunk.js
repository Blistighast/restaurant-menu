(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(20),i=a(34),c=a(6),o=a(16),l=a(17),u=a(18),h=a(19);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function j(e){return e[Math.floor(Math.random()*e.length)]}function b(){var e=["Delicious","Hungry","Appetizing","Aromatic","Crisp","Cool","Boiled","Classic","Cheesy","Chunked","Hot","Fresh","Grilled","Fried","Juicy","Large","Luscious","Lavish","Steamy","Fruity","Flaky","Flavored","Flavorful","Fluffy","Delectable","Doughy","Candied","Plain"];return"".concat(j(e),"-").concat(j(e),"-").concat(j(["Burgers","Fish","Shrimp","Pizza","Soup","Salsa","Burritos","Tacos","Sandwiches","Waffles","Pancakes","Pastries"]))}var f=a(1),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).myInput=n.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("form",{className:"store-selector",onSubmit:function(t){return e.goToStore(t)},children:[Object(f.jsx)("h2",{children:"Please Enter A Restaurant"}),Object(f.jsx)("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:b()}),Object(f.jsx)("button",{type:"submit",children:"Visit Store"})]})}}]),a}(n.a.Component),m=p,O=a(8),x=function(e){var t=e.tagline;return Object(f.jsxs)("header",{className:"top",children:[Object(f.jsxs)("h1",{children:["Catch",Object(f.jsxs)("span",{className:"ofThe",children:[Object(f.jsx)("span",{className:"of",children:"Of"}),Object(f.jsx)("span",{className:"the",children:"The"})]}),"Day"]}),Object(f.jsx)("h3",{className:'"tagline',children:Object(f.jsx)("span",{children:t})})]})},v=a(26),g=a(31),y=a(21),S=a.n(y),F=a(14),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:"fish-edit",onSubmit:this.createFish,children:[Object(f.jsx)("input",{name:"name",ref:this.nameRef,placeholder:"Fish Name",type:"text"}),Object(f.jsx)("input",{name:"price",ref:this.priceRef,placeholder:"Fish Price",type:"text"}),Object(f.jsxs)("select",{name:"status",ref:this.statusRef,children:[Object(f.jsx)("option",{value:"available",children:"Fresh"}),Object(f.jsx)("option",{value:"unavailable",children:"Sold Out"})]}),Object(f.jsx)("textarea",{name:"desc",ref:this.descRef,placeholder:"Fish Desc"}),Object(f.jsx)("input",{name:"image",ref:this.imageRef,placeholder:"Image",type:"text"}),Object(f.jsx)("button",{type:"submit",children:"+ Add Fish"})]})}}]),a}(n.a.Component),w=k,N=a(25),C=function(e){var t=e.fish,a=e.updateFish,s=e.deleteFish,n=e.index,r=function(e){var s=Object(O.a)(Object(O.a)({},t),{},Object(N.a)({},e.target.name,e.target.value));a(n,s)};return Object(f.jsxs)("div",{className:"fish-edit",children:[Object(f.jsx)("input",{type:"text",name:"name",onChange:r,value:t.name}),Object(f.jsx)("input",{type:"text",name:"price",onChange:r,value:t.price}),Object(f.jsxs)("select",{name:"status",onChange:r,value:t.status,children:[Object(f.jsx)("option",{value:"available",children:"Fresh"}),Object(f.jsx)("option",{value:"unavailable",children:"Sold Out"})]}),Object(f.jsx)("textarea",{name:"desc",onChange:r,value:t.desc}),Object(f.jsx)("input",{type:"text",onChange:r,value:t.image,name:"image"}),Object(f.jsx)("button",{type:"button",onClick:function(){return s(n)},children:"Remove fish"})]})},R=function(e){var t=e.authenticate;return Object(f.jsxs)("nav",{className:"login",children:[Object(f.jsx)("h2",{children:"Inventory Login"}),Object(f.jsx)("p",{children:"Sign in to manage your store's inventory."}),Object(f.jsx)("button",{className:"github",onClick:function(){return t("Github")},children:"Log In With GitHub"}),Object(f.jsx)("button",{className:"facebook",onClick:function(){return t("Facebook")},children:"Log In With Facebook"}),Object(f.jsx)("button",{className:"twitter",onClick:function(){return t("Twitter")},children:"Log In With Twitter"})]})},I=a(33),T=a.n(I),A=(a(45),a(49),F.default.initializeApp({apiKey:"AIzaSyDdXrlRBkfqSHi4CXi5AVaNuRtVC-QpFac",authDomain:"restaurant-menu-5a4f5.firebaseapp.com",databaseURL:"https://restaurant-menu-5a4f5-default-rtdb.firebaseio.com",appId:"1:267132498643:web:0b63d688cd60b6547d1a26"})),L=T.a.createClass(A.database()),D=function(e){var t=e.setUid,a=function(){var e=Object(v.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.default.auth().signOut();case 2:t(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:a,children:"Log Out"})})},P=function(e){var t=e.addFish,a=e.updateFish,n=e.deleteFish,r=e.loadSample,i=e.fishes,c=e.storeId,o=Object(s.useState)(null),l=Object(g.a)(o,2),u=l[0],h=l[1],d=Object(s.useState)(null),j=Object(g.a)(d,2),b=j[0],p=j[1],m=function(){var e=Object(v.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.fetch(c,{context:undefined});case 2:if((a=e.sent).owner){e.next=6;break}return e.next=6,L.post("".concat(c,"/owner"),{data:t.user.uid});case 6:h(t.user.uid),p(a.owner||t.user.uid);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){F.default.auth().onAuthStateChanged((function(e){e&&m({user:e})}))}));return u?u!==b?Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"Sorry, you are not the owner of this store"}),Object(f.jsx)(D,{setUid:h})]}):Object(f.jsxs)("div",{className:"inventory",children:[Object(f.jsx)("h2",{children:"Inventory"}),Object(f.jsx)(D,{setUid:h}),Object.keys(i).map((function(e){return Object(f.jsx)(C,{fish:i[e],index:e,updateFish:a,deleteFish:n},e)})),Object(f.jsx)(w,{addFish:t}),Object(f.jsx)("button",{onClick:r,type:"button",children:"Load Sample Fishes"})]}):Object(f.jsxs)("div",{children:[Object(f.jsx)(R,{authenticate:function(e){var t=new(F.default.auth["".concat(e,"AuthProvider")]);A.auth().signInWithPopup(t).then(m)}}),Object(f.jsx)("button",{onClick:r,type:"button",children:"Load Sample Menu"})]})},M=a(58),U=a(59),W=function(e){var t=e.fishes,a=e.order,s=e.deleteFromOrder,n=Object.keys(a),r=n.reduce((function(e,s){var n=t[s],r=a[s];return n&&"available"===n.status?e+r*n.price:e}),0);return Object(f.jsxs)("div",{className:"order-wrap",children:[Object(f.jsx)("h2",{children:"Order"}),Object(f.jsx)(U.a,{component:"ul",className:"order",children:n.map((function(e){var n=t[e],r=a[e],i=n&&"available"===n.status,c={classNames:"order",key:e,timeout:{enter:500,exit:500}};return n?i?Object(f.jsx)(M.a,Object(O.a)(Object(O.a)({},c),{},{children:Object(f.jsx)("li",{children:Object(f.jsxs)("span",{children:[Object(f.jsx)(U.a,{component:"span",className:"count",children:Object(f.jsx)(M.a,{classNames:"count",timeout:{enter:500,exit:500},children:Object(f.jsx)("span",{children:r})},r)}),"lbs ",n.name,d(r*n.price),Object(f.jsx)("button",{type:"button",onClick:function(){return s(e)},children:"\xd7"})]})},e)})):Object(f.jsx)(M.a,Object(O.a)(Object(O.a)({},c),{},{children:Object(f.jsxs)("li",{children:["Sorry, ",n?n.name:"fish"," is no longer available"]},e)})):null}))}),Object(f.jsxs)("div",{className:"total",children:["Total:",Object(f.jsx)("strong",{children:d(r)})]})]})},B={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},z=function(e){var t=e.addToOrder,a=e.index,s=e.details,n=s.name,r=s.image,i=s.price,c=s.desc,o="available"===s.status;return Object(f.jsxs)("li",{className:"menu-fish",children:[Object(f.jsx)("img",{src:""+r,alt:n}),Object(f.jsxs)("h3",{className:"fish-name",children:[n,Object(f.jsx)("span",{className:"price",children:d(i)})]}),Object(f.jsx)("p",{children:c}),Object(f.jsx)("button",{disabled:!o,type:"button",onClick:function(){return t(a)},children:o?"Add To Cart":"Sold Out!"})]})},J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(O.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var s=Object(O.a)({},e.state.fishes);s[t]=a,e.setState({fishes:s})},e.deleteFish=function(t){var a=Object(O.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.addToOrder=function(t){var a=Object(O.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.deleteFromOrder=function(t){var a=Object(O.a)({},e.state.order);delete a[t],e.setState({order:a})},e.loadSample=function(){e.setState({fishes:B})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=L.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params;localStorage.setItem(e.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){L.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"catch-of-the-day",children:[Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)(x,{tagline:"Fresh Seafood Market"}),Object(f.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(f.jsx)(z,{index:t,details:e.state.fishes[t],addToOrder:e.addToOrder},t)}))})]}),Object(f.jsx)(W,{fishes:this.state.fishes,order:this.state.order,deleteFromOrder:this.deleteFromOrder}),Object(f.jsx)(P,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSample:this.loadSample,fishes:this.state.fishes,storeId:this.props.match.params.storeId})]})}}]),a}(n.a.Component),H=J,V=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("h2",{children:"Store Not Found"})})},q=function(){return Object(f.jsx)(i.a,{children:Object(f.jsxs)(c.c,{children:[Object(f.jsx)(c.a,{exact:!0,path:"/",component:m}),Object(f.jsx)(c.a,{path:"/store/:storeId",component:H}),Object(f.jsx)(c.a,{component:V})]})})};a(55);Object(r.render)(Object(f.jsx)(q,{}),document.querySelector("#main"))}},[[56,1,2]]]);
//# sourceMappingURL=main.848dc0f4.chunk.js.map