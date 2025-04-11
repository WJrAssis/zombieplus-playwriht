import { test } from '../support/index.js'
import data from '../support/fixtures/movies.json' assert { type: "json" }
import { executeSQL } from '../support/database.js'

test('deve poder cadastrar um novo filme', async ({ page }) => {
    const movie = data.create
    await executeSQL(`DELETE from movies WHERE title = '${movie.title}';`)

    await page.login.visit()
    await page.login.submit('admin@zombieplus.com', 'pwd123')
    await page.movies.isLoggedIn()

    await page.movies.create(movie.title, movie.overview, movie.company, movie.release_year)

    await page.toast.containText('Cadastro realizado com sucesso!')
});
