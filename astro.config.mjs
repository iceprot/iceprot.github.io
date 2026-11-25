// @ts-check
import { defineConfig } from 'astro/config';

// Le site est une page unique générée à partir de src/modele/index.html et de contenu.json.
export default defineConfig({
  build: { format: 'file' },
});
