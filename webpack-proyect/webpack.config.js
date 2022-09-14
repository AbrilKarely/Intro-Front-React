const HtmlWebpackPlugin = require ("html-webpack-plugin");
const MiniCSSExtractPlugin = require ("mini-css-extract-plugin");

module.exports = {
    entry: "/src/main.js",
    module:{
        rules: [
            {
                test: /\.html/, //test: REGEX- PARA UNA BUSQUEDA DE ARCHIVOS O EXTENSIONES
                use:[ // use: instrucciones de que va a hacer con esos archivos
                    {
                        loader: "html-loader", 
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /.(css|scss)$/,
                use: [
                    "style-loader", // Procesa estilos en línea
                    "css-loader", // Procesa estulos en archivos css
                    "sass-loader", // Procesar estilos en archivos scss 
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                    presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                ]
                    }
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html"}), // plugin agrega funcionalidad extra al loader y siempre se necescita
        new MiniCSSExtractPlugin()
    ]
}

