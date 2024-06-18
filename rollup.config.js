import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript';

const config = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
  external: [/@babel\/runtime/, 'react', 'tslib'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
    }),
    babel({ babelHelpers: 'runtime', extensions: ['.js', '.jsx', '.ts', '.tsx'], plugins: ['@babel/plugin-transform-runtime'] }),
    filesize(),
  ],
};

export default config;
