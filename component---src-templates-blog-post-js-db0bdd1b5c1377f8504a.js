webpackJsonp([0x620f737b6699],{400:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=l(3),n=a(r),u=l(4),d=a(u),f=l(93),o=a(f),m=l(54),i=a(m),c=function(e){var t=e.data,l=e.pathContext,a=t.markdownRemark,r=l.previous,u=l.next;return n.default.createElement("div",null,n.default.createElement(o.default,{title:a.frontmatter.title+" | "+t.site.siteMetadata.title}),n.default.createElement("h1",null,a.frontmatter.title),n.default.createElement("p",null,a.frontmatter.date),n.default.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),n.default.createElement("hr",null),n.default.createElement("ul",null,r&&n.default.createElement("li",null,n.default.createElement(i.default,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),u&&n.default.createElement("li",null,n.default.createElement(i.default,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))};c.propTypes={data:d.default.object,pathContext:d.default.object},t.default=c;t.query="** extracted graphql fragment **"}});