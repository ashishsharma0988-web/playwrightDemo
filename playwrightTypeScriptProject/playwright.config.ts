
import { defineConfig, devices } from '@playwright/test';
import config from './config.json';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL: config.baseUrl,
    headless: config.headless,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: config.browser,
      use: Object.assign({}, devices['Desktop Chrome'], { slowMo: config.slowMo }),
    },
  ],
});
