const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        app: "./src/Frontend/JS/index.js"
    },
    output: {
        filename: "[projet_5].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};