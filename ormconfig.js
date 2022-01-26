const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = {
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
