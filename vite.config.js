import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Content Security Policy (CSP) headers are completely removed
    // for development debugging to prevent conflicts.
    // This section should be re-evaluated and hardened for production deployment.
  }
})