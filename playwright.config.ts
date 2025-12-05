import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
   workers: 1,
  testDir: './tests',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
// Timeout that is applicable in each of the test steps. By default: 30 secs
timeout: 10 * 1000,

//retries: 2,

expect: {
  // Timeout for assertion, separate from the test timeout. By default: 5 secs
  timeout: 5 * 1000
},


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
screenshot: 'on',

video: 'off',

    /* Browser that we are using */
  browserName: 'chromium',

  /* Headless testing on/off  headless--> browser ui open or not too see our test executing*/
  headless: false,
  },

  
});
