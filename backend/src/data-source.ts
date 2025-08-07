import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import 'dotenv/config'

//used by typeorm CLI to create migrations

export const dataSourceOptions: DataSourceOptions = {
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5531,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      migrations: ["dist/migrations/*.js"],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false,
      migrationsTableName: 'typeorm_migrations',
      migrationsRun: false,
    };

const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;