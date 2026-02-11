import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
    const base = command === 'serve' ? '/' : '/portfolio/'

    return {
        plugins: [vue(), tailwindcss()],
        base,
        build: {
            outDir: 'dist',
            assetsDir: 'assets'
        }
    }
})
