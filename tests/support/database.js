import pg from 'pg';
const { Client } = pg;

const DbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'Nick'
}

export async function executeSQL(sqlScript) {
    const client = new Client(DbConfig)

    try {
        await client.connect()
        console.log('Conexão com banco feita com sucesso!')
        console.log('Executando SQL:', sqlScript)

        const result = await client.query(sqlScript)
        console.log('Linhas afetadas:', result.rowCount)
    } catch (error) {
        console.error('Erro ao executar SQL:', error.message)
    } finally {
        await client.end()
    }
}

