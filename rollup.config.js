import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-import-css'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocessor from 'svelte-preprocess'

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        sourcemap: true,
        format: 'iife'
    },
  plugins: [
    svelte({
        dev: isDevelopment,
        extensions: ['.svelte'],
        preprocess: sveltePreprocessor(),
        emitCss: true
    }),
    css({output: 'bundle.css'}),
    copy({
      targets: [{
        src: 'node_modules/bootstrap/dist/**/*',
        dest:'public/vendor/bootstrap'
      }]
    })
  ]
}


