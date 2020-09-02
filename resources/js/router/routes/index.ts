const requireRoute = require.context(".", false, /.*\.ts$/);
let routes = [];
requireRoute.keys().forEach(fileName => {
    if (fileName == "./index.ts") return;
    const data = requireRoute(fileName).default;
    const combined = routes.concat(data);
    routes = combined;
});

export function page(path) {
    return () =>
        import(/* webpackChunkName: '' */ `../../pages/${path}`).then(
            m => m.default || m
        );
}

export default routes;
