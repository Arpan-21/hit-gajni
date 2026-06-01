import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  resolve: {
    // This tells Vite it's okay if we left off the ".jsx" extensions in our App.jsx imports
    extensions: ['.js', '.jsx', '.json'],
  },
})
