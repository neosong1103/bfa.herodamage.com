(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{513:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),l=a(1),o=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("h1",null,"Blog"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt))}))};o.propTypes={data:a.n(l).a.object.isRequired},t.default=o;var u="767128315"}}]);