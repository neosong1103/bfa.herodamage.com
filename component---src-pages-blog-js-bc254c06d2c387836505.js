webpackJsonp([0xc19374f83753],{353:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(3),r=l(n),u=a(4),d=l(u),o=function(e){var t=e.data;return r.default.createElement("div",null,r.default.createElement("h1",null,"Blog"),r.default.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.default.createElement("div",{key:t.id},r.default.createElement("h3",null,t.frontmatter.title," ",r.default.createElement("span",null,"— ",t.frontmatter.date)),r.default.createElement("p",null,t.excerpt))}))};o.propTypes={data:d.default.object},t.default=o;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-js-bc254c06d2c387836505.js.map