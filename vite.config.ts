import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' — чтобы собранную версию можно было открыть с любого подкаталога хостинга
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    // Папка проекта в OneDrive: синхронизация создаёт временные заблокированные
    // файлы (jpg, tmp), из-за которых падает файловый вотчер. Не следим за ними.
    watch: {
      ignored: [
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.png',
        '**/*.webp',
        '**/*.gif',
        '**/*.pdf',
        '**/*.tmp',
        '**/~$*',
        '**/.DS_Store',
      ],
    },
  },
})
