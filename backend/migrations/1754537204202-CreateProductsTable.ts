import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1754537204202 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "products",
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'picture',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'is_active',
                    type: 'boolean',
                },
                {
                    name: 'is_deleted',
                    type: 'boolean',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    isNullable: false,
                },
                {
                    name: 'stock',
                    type: 'int'
                },
                {
                    name: 'volume',
                    type: 'decimal'
                },
                {
                    name: 'unit',
                    type: 'varchar',
                    length: '100',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    isNullable: true,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
