// .eslintrc.mjs
import { withNuxt } from "./.nuxt/eslint.config.mjs";

const config = withNuxt();

config[0].extends = [
  ...config[0].extends,
  'plugin:prettier/recommended', // Gunakan ini untuk menggabungkan ESLint dan Prettier
];

// Jika kamu ingin menambahkan aturan tambahan, kamu bisa melakukannya di sini
// config[0].rules = {
//   ...config[0].rules,
//   // Contoh: 'vue/max-attributes-per-line': 'off'
// };

export default config;
