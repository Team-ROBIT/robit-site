// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://team-robit.github.io',
    base: '/robit-site/',
    
    vite: {
    plugins: [tailwindcss()],
    },
});