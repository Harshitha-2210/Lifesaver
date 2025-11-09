import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'Lifesaver', // replace with your GitHub repo name
  plugins: [react()],
});
