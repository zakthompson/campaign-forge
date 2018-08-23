import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: 'client/index.js',
  output: {
    file: 'client/dist/bundle.js',
    format: 'iife',
  },
  plugins: [
    postcss({
      extensions: ['.css', '.less'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    serve('client'),
    livereload(),
  ],
};
