import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';
import { extname, relative } from 'path';
import dts from 'vite-plugin-dts';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      tsconfigPath: 'tsconfig.app.json',
      include: ['src/components'],
    })
  ],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
      'react-dom',
      'react/jsx-runtime',
      ],
      input: {
        ...Object.fromEntries(
          glob.sync('src/components/**/*.{tsx,ts}', {
            ignore: [
              'src/components/**/*.stories.{tsx,ts}',
              'src/components/**/*.test.{tsx,ts}',
              'src/components/**/*.d.ts',
            ],
          }).map((file: string) => {
            const ext = extname(file);
            const path = relative('src/components', file);
            const name = path.slice(0, path.length - ext.length);
            return [name, file];
          })
        ),
        'index': 'src/components/index.ts',
        'global': 'src/global.css',
      },
      output: {
        entryFileNames: '[name].[format].js',
        assetFileNames: 'assets/[name][extname]',
      },
    }
  },
  resolve: {
    alias: {
      '@': 'src',
    },
  },
});
