module.exports = {
    entry : './src/app.js', // The source 
    output : {
        filename: './dist/bundle.js' // File and location of the output
    },
    devtool: 'source-map',
    // 2
    module : {
        rules : [
            {
                test    : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                use     : {
                    loader  : 'babel-loader',
                    options : {
                        presets : [
                            ["env", {
                                "targets": {
                                    "browsers": {
                                        'chrome': 60
                                    }
                                }
                            }],
                            "react"
                        ]
                    }
                }
            }
        ]
    }
}