// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/alechp/Code/alechp/.repositories/growbuildserve/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/alechp/Code/alechp/.repositories/growbuildserve/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/alechp/Code/alechp/.repositories/growbuildserve/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-blog-post-js": () => import("/Users/alechp/Code/alechp/.repositories/growbuildserve/src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/alechp/Code/alechp/.repositories/growbuildserve/.cache/data.json")

