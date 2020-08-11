const path = require("path");
const mix = require("laravel-mix");
const fs = require("fs-extra");
const tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");
require("laravel-mix-versionhash");

mix.js("resources/js/app.ts", "public/dist/js")
    .sass("resources/sass/app.scss", "public/dist/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    })
    .disableNotifications();
// .purgeCss();

if (mix.inProduction()) {
    mix
        // .extract() // Disabled until resolved: https://github.com/JeffreyWay/laravel-mix/issues/1889
        // .version() // Use `laravel-mix-versionhash` for the generating correct Laravel Mix manifest file.
        .versionHash();
} else {
    mix.sourceMaps();
}

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
        alias: {
            "@/(.*)": path.join(__dirname, "./resources/js")
        }
    },
    output: {
        chunkFilename: "dist/js/[chunkhash].js",
        path: mix.config.hmr ? "/" : path.resolve(__dirname, "./public/build")
    }
});

mix.then(() => {
    if (!mix.config.hmr) {
        process.nextTick(() => publishAseets());
    }
});

function publishAseets() {
    const publicDir = path.resolve(__dirname, "./public");

    if (mix.inProduction()) {
        fs.removeSync(path.join(publicDir, "dist"));
    }

    fs.copySync(
        path.join(publicDir, "build", "dist"),
        path.join(publicDir, "dist")
    );
    fs.removeSync(path.join(publicDir, "build"));
}
