import uglifyJs from 'uglify-js'
import fs from 'fs'

const uglifyOptions = {
    warnings: undefined,
    compress: {},
    mangle: true,
    output:
    {
        shebang: true,
        comments: /^\**!|@preserve|@license|@cc_on/i,
        beautify: false,
        semicolons: true
    },
    sourceMap: true,
    toplevel: undefined,
    nameCache: undefined,
    ie8: undefined,
    keep_fnames: undefined
}

const { code } = uglifyJs.minify({
    'jss.esm.js': fs.readFileSync('./node_modules/jss/dist/jss.esm.js').toString()
}, uglifyOptions);

fs.writeFileSync('after_uglify.js', code)
