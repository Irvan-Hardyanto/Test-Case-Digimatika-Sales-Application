import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSalesDetailsTable1754551471483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales_details",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'sales_id',
                        type: 'int'
                    },
                    {
                        name: 'product_id',
                        type: 'int'
                    },
                    {
                        name: 'product_name',
                        type: 'varchar',
                        length: '255'
                    },
                    {
                        name: 'quantity',
                        type: 'int'
                    },
                    {
                        name: 'product_price',
                        type: 'decimal'
                    },
                    {
                        name: 'subtotal',
                        type: 'decimal'
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales_details");
    }

}
