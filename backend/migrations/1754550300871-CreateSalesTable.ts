import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSalesTable1754550300871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "sales",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'sales_date',
                        type: 'timestamp'
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "user_name",
                        type: "varchar",
                        length: "255"
                    },
                    {
                        name: "items_sold",
                        type: "int"
                    },
                    {
                        name: "total_price",
                        type: "decimal"
                    },
                    {
                        name: "status",// PENDING_PAYMENT/PAID/CANCELLED/DELIVERED/PENDING_DELIVERY,etc.
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "notes",
                        type: "varchar",
                        length: "255"
                    }
                ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sales");
    }
}
