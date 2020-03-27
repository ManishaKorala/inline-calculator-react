module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            {pattern: 'test/**/*.spec.js', watched: false},
        ],
        exclude: [],

        preprocessors: {
            'test/**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: {
            mode : 'development',
            resolve: {
                extensions: ['.jsx', '.js']
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['react', 'env', 'stage-0'],
                                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                            }
                        }
                    }
                ]
            },
            devtool: 'inline-source-map',
        },
        reporters: ['progress'],
        browsers: ['ChromeHeadless'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: false,
        autoWatch: true,
        concurrency: Infinity
    })
};
