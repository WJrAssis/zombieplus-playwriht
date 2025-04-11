import { test as base, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { MoviesPage } from '../pages/MoviesPage.js';
import { Toast } from '../pages/Components.js';

const test = base.extend({
    page: async ({ page }, use) => {
      // ✅ Aqui você adiciona as páginas ao `page`, mas mantém os métodos nativos como `.goto()`
      Object.assign(page, {
        landing: new LandingPage(page),
        login: new LoginPage(page),
        movies: new MoviesPage(page),
        toast: new Toast(page),
      });
  
      await use(page); // 🔁 mantém a instância original de `page`
    },
  })

export { test, expect };


