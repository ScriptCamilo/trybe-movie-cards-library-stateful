(this["webpackJsonpmovie-cards-library-stateful"]=this["webpackJsonpmovie-cards-library-stateful"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(10),o=a.n(r),s=(a(16),a(2)),l=a(3),c=a(5),u=a(4),h=a(0),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"movie-card-header",children:Object(h.jsx)("h1",{className:"page-title",children:"Movie Cards Library"})})}}]),a}(i.a.Component),b=d,m=a(7),p=a(11),g=a(8),v=a(6),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.rating;return Object(h.jsx)("div",{className:"movie-card-rating","data-testid":"rating",children:Object(h.jsx)("span",{className:"rating",children:e})})}}]),a}(i.a.Component);j.defaultProps={rating:"0"};var O=j,f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,i=e.rating,r=e.imagePath;return Object(h.jsxs)("div",{className:"movie-card","data-testid":"movie-card",children:[Object(h.jsx)("img",{alt:"Movie Cover",className:"movie-card-image",src:r}),Object(h.jsxs)("div",{className:"movie-card-body",children:[Object(h.jsx)("h4",{"data-testid":"movie-card-title",className:"movie-card-title",children:t}),Object(h.jsx)("h5",{className:"movie-card-subtitle",children:a}),Object(h.jsx)("p",{className:"movie-card-storyline",children:n})]}),Object(h.jsx)(O,{rating:Number(i)})]})}}]),a}(i.a.Component),y=f,k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.movies;return Object(h.jsx)("div",{"data-testid":"movie-list",className:"movie-list",children:e.map((function(e){return Object(h.jsx)(y,{movie:e},e.title)}))})}}]),a}(i.a.Component),x=k,C=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.CustomTag,a=e.label,n=e.text,i=e.input,r=e.name,o=e.type,s=e.value,l=e.checked,c=e.onChange;return Object(h.jsxs)("label",{htmlFor:i,"data-testid":a,children:[n,Object(h.jsx)(t,{"data-testid":i,name:r,type:o,value:s,checked:l,onChange:c})]})}}]),a}(i.a.Component);C.defaultProps={CustomTag:"input",checked:!1,value:"",type:"text"};var S=C,P=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.value,n=e.text;return Object(h.jsx)("option",{"data-testid":t,value:a,children:n})}}]),a}(i.a.Component),T=P,M=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.select,n=e.name,i=e.text,r=e.options,o=e.value,s=e.onChange;return Object(h.jsxs)("label",{htmlFor:a,"data-testid":t,children:[i,Object(h.jsx)("select",{"data-testid":a,name:n,value:o,onChange:s,children:r.map((function(e){return Object(h.jsx)(T,Object(m.a)({},e),e.value)}))})]})}}]),a}(i.a.Component),G=M,N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getProps=e.getProps.bind(Object(v.a)(e)),e.getInputs=e.getInputs.bind(Object(v.a)(e)),e.getSelects=e.getSelects.bind(Object(v.a)(e)),e}return Object(l.a)(a,[{key:"getProps",value:function(){var e=this.props;return{searchText:e.searchText,onSearchTextChange:e.onSearchTextChange,bookmarkedOnly:e.bookmarkedOnly,onBookmarkedChange:e.onBookmarkedChange,selectedGenre:e.selectedGenre,onSelectedGenreChange:e.onSelectedGenreChange}}},{key:"getInputs",value:function(){return[{label:"text-input-label",text:"Inclui o texto:",input:"text-input",name:"searchText",type:"text",value:this.getProps().searchText,onChange:this.getProps().onSearchTextChange},{label:"checkbox-input-label",text:"Mostrar somente favoritos",input:"checkbox-input",name:"bookmarkedOnly",type:"checkbox",checked:this.getProps().bookmarkedOnly,onChange:this.getProps().onBookmarkedChange}]}},{key:"getSelects",value:function(){var e="select-option";return[{label:"select-input-label",select:"select-input",name:"selectedGenre",text:"Filtrar por g\xeanero",value:this.getProps().selectedGenre,onChange:this.getProps().onSelectedGenreChange,options:[{id:e,value:"",text:"Todos"},{id:e,value:"action",text:"A\xe7\xe3o"},{id:e,value:"comedy",text:"Com\xe9dia"},{id:e,value:"thriller",text:"Suspense"}]}]}},{key:"render",value:function(){var e=this.getInputs(),t=this.getSelects();return Object(h.jsxs)("form",{"data-testid":"search-bar-form",children:[e.map((function(e){return Object(h.jsx)(S,Object(m.a)({},e),e.name)})),t.map((function(e){return Object(h.jsx)(G,Object(m.a)({},e),e.name)}))]})}}]),a}(i.a.Component),w=N,F=[{label:"title-input-label",text:"T\xedtulo",input:"title-input",name:"title"},{label:"subtitle-input-label",text:"Subt\xedtulo",input:"subtitle-input",name:"subtitle"},{label:"image-input-label",text:"Imagem",input:"image-input",name:"imagePath"},{CustomTag:"textarea",label:"storyline-input-label",text:"Sinopse",input:"storyline-input",name:"storyline"},{label:"rating-input-label",text:"Avalia\xe7\xe3o",input:"rating-input",name:"rating",type:"number"}],H="genre-option",A=[{label:"genre-input-label",select:"genre-input",name:"genre",text:"G\xeanero",options:[{id:H,value:"action",text:"A\xe7\xe3o"},{id:H,value:"comedy",text:"Com\xe9dia"},{id:H,value:"thriller",text:"Suspense"}]}],_=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).submitHandle=e.submitHandle.bind(Object(v.a)(e)),e.onChangeHandle=e.onChangeHandle.bind(Object(v.a)(e)),e.getState=e.getState.bind(Object(v.a)(e)),e.state={title:"",subtitle:"",storyline:"",imagePath:"",rating:0,genre:"action"},e}return Object(l.a)(a,[{key:"onChangeHandle",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(g.a)({},a,n))}},{key:"getState",value:function(){var e=this.state;return{title:e.title,subtitle:e.subtitle,storyline:e.storyline,imagePath:e.imagePath,rating:e.rating,genre:e.genre}}},{key:"submitHandle",value:function(e){e.preventDefault(),(0,this.props.onClick)(this.getState()),this.setState({title:"",subtitle:"",storyline:"",imagePath:"",rating:0,genre:"action"})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("form",{"data-testid":"add-movie-form",children:[F.map((function(t){var a=e.getState()[t.name];return Object(h.jsx)(S,Object(m.a)(Object(m.a)({},t),{},{value:a,onChange:e.onChangeHandle}),t.name)})),A.map((function(t){var a=e.getState()[t.name];return Object(h.jsx)(G,Object(m.a)(Object(m.a)({},t),{},{value:a,onChange:e.onChangeHandle}),t.text)})),Object(h.jsx)("button",{type:"submit","data-testid":"send-button",onClick:this.submitHandle,children:"Adicionar filme"})]})}}]),a}(i.a.Component),I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a);var i=(n=t.call(this,e)).props.movies;return n.onChangeHandle=n.onChangeHandle.bind(Object(v.a)(n)),n.filterMovies=n.filterMovies.bind(Object(v.a)(n)),n.addMovie=n.addMovie.bind(Object(v.a)(n)),n.state={searchText:"",bookmarkedOnly:!1,selectedGenre:"",movies:i},n}return Object(l.a)(a,[{key:"onChangeHandle",value:function(e){var t=e.target,a=t.name,n="checkbox"===t.type?t.checked:t.value;this.setState(Object(g.a)({},a,n))}},{key:"bookmarkedMovies",value:function(e){return e.bookmarked}},{key:"genreMovies",value:function(e,t){return e.genre===t}},{key:"textMovies",value:function(e,t){var a=e.title,n=e.subtitle,i=e.storyline;return!!(a.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||i.toLowerCase().includes(t.toLowerCase()))}},{key:"filterMovies",value:function(){var e,t=this,a=this.state,n=a.movies,i=a.searchText,r=a.bookmarkedOnly,o=a.selectedGenre;return r&&(e=n.filter(this.bookmarkedMovies)),""!==o&&(e=e?e.filter((function(e){return t.genreMovies(e,o)})):n.filter((function(e){return t.genreMovies(e,o)}))),e?e.filter((function(e){return t.textMovies(e,i)})):n.filter((function(e){return t.textMovies(e,i)}))}},{key:"addMovie",value:function(e){console.log(e),this.setState((function(t){var a=t.movies;return{movies:[].concat(Object(p.a)(a),[e])}}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:" My awesome movie library "}),Object(h.jsx)(w,Object(m.a)(Object(m.a)({},function(){var t=e.state;return{searchText:t.searchText,bookmarkedOnly:t.bookmarkedOnly,selectedGenre:t.selectedGenre}}()),{},{onSearchTextChange:this.onChangeHandle,onBookmarkedChange:this.onChangeHandle,onSelectedGenreChange:this.onChangeHandle})),Object(h.jsx)(x,{movies:this.filterMovies()}),Object(h.jsx)(_,{onClick:this.addMovie})]})}}]),a}(n.Component),L=[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];a(18);var B=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsx)(I,{movies:L})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),R()}},[[19,1,2]]]);
//# sourceMappingURL=main.0afc3680.chunk.js.map