import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { fileURLToPath } from 'url'
// import path from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
//   css: {
//     devSourcemap: true,
//   },
//   resolve: {
//     alias: {
//       '~': path.resolve(__dirname, './src'),
//     },
//   },
// }) 
// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import vitePluginImp from 'vite-plugin-imp';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//     plugins: [
//         react,
//         reactRefresh(),
//         vitePluginImp({
//             libList: [
//                 {
//                     libName: 'antd',
//                     style: (name) => `antd/es/${name}/style`,
//                 },
//             ],
//         }),
//     ],
// });
