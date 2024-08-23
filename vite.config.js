import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove the external option if it's not needed
      // external: ['@mui/icons-material/phone']
    }
  }
})
