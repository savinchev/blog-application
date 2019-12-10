const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'], // входные параметры
    output: {
        path: __dirname + '/dist', // путь, куда выкидываем
        filename: 'bundle.js' // название файла
    },
    // настройка работы ДевСервера
    devServer: {
        contentBase: __dirname + '/dist' // путь к папке где запускаем ДевСервер
    },
    // описание плагинов
    plugins: [
        new HTMLPlugin({
            filename: 'index.html', // имя выходного файла
            template: './src/index.html' // путь до нашего шаблона
        })
    ],
    // чтобы каждый раз в названии модулей не писать расширение js
    resolve: {
        extensions: ['.js']
    },
    // настроим лоадер для babel
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
}