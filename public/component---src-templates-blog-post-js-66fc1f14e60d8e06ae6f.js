(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(34);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(160),c=a(157),d=a(158),u=a(154),A=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,i=a.next;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("span",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,i&&s.a.createElement(o.a,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},t}(s.a.Component);t.default=A;var f="4001943619"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(155);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(165),i=a.n(r),n=a(166),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,a){"use strict";a(34);var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(153),l=a(154),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,i),s.a.createElement("footer",null,"© ",(new Date).getFullYear()))},t}(s.a.Component);t.a=c},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(167),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Grow Build Serve",description:"Grow yourself. Build something. Serve others.",author:"Alec HP"}}}}},160:function(e,t,a){"use strict";a(161);var r=a(163),i=a(0),n=a.n(i),s=a(153),o=a(164),l=a.n(o),c=a(154);var d="4007731267";t.a=function(){return n.a.createElement(s.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by"," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Alec HP")))},data:r})}},161:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},162:function(e,t,a){var r=a(11),i=a(18),n=a(19),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAGXlP3hpKCyfQLqiD//xAAdEAACAgEFAAAAAAAAAAAAAAABAgADExESFCIy/9oACAEBAAEFAmxoWAN3FM2qLHfSzOY1KKLfC9k//8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwFqK//EABURAQEAAAAAAAAAAAAAAAAAABAC/9oACAECAQE/ASz/xAAfEAACAAYDAQAAAAAAAAAAAAAAAQIDESEycRIxQZH/2gAIAQEABj8C4xTPhDLV6+mR3VGjNlkJibSro//EAB0QAQACAQUBAAAAAAAAAAAAAAEAEUEhMVFh0YH/2gAIAQEAAT8hF6q4MQFB0e0KNny/Y3oEpNcTIcjqUek4YQBULqOzqI//2gAMAwEAAgADAAAAEJ8IPP/EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxBIXDoZ/8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQESH/2gAIAQIBAT8QNXIAuP/EAB4QAQACAwEAAwEAAAAAAAAAAAEAESExQWFRcZGh/9oACAEBAAE/EGeXdhA9zLzC7jotFPmoAYfASBLfSApFfxgMC6F2TKfu4Gqjy8FlZy5tOt9gOYUtOVr6h3CpUfLP/9k=",width:50,height:50,src:"/static/5ca8371df2d9f46361c686dbb903b339/c15d6/profile-pic.jpg",srcSet:"/static/5ca8371df2d9f46361c686dbb903b339/c15d6/profile-pic.jpg 1x,\n/static/5ca8371df2d9f46361c686dbb903b339/43c20/profile-pic.jpg 1.5x,\n/static/5ca8371df2d9f46361c686dbb903b339/da97e/profile-pic.jpg 2x,\n/static/5ca8371df2d9f46361c686dbb903b339/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Alec HP",social:{twitter:"alechp"}}}}}},164:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(75)),l=r(a(76)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+s+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.Tag,y=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,v=(0,l.default)({opacity:S?1:0,transition:w?"opacity 0.5s":"none"},o),j="boolean"==typeof b?"lightgray":b,x={transitionDelay:"0.5s"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},w&&x,o,A),B={title:t,alt:this.state.isVisible?"":a,style:R,className:f};if(p){var L=p;return c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),j&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&x)}),L.base64&&c.default.createElement(m,(0,l.default)({src:L.base64},B)),L.tracedSVG&&c.default.createElement(m,(0,l.default)({src:L.tracedSVG},B)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(m,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},L))}}))}if(h){var O=h,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},n);return"inherit"===n.display&&delete C.display,c.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},j&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:j,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},w&&x)}),O.base64&&c.default.createElement(m,(0,l.default)({src:O.base64},B)),O.tracedSVG&&c.default.createElement(m,(0,l.default)({src:O.tracedSVG},B)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(m,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:E,sizes:y,fixed:E,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-66fc1f14e60d8e06ae6f.js.map