import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AlterSalesDetailsTable1754553182932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "sales_details",
            new TableForeignKey({
                columnNames: ["sales_id"],
                referencedTableName: "sales",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "sales_details",
            new TableForeignKey({
                columnNames: ["product_id"],
                referencedTableName: "products",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("sales_details");
        const fkSales = table.foreignKeys.find(
            fk => fk.columnNames.indexOf("sales_id") !== -1,
        );
        const fkProduct = table.foreignKeys.find(
            fk => fk.columnNames.indexOf("product_id") !== -1
        );
        await queryRunner.dropForeignKey("sales_details",fkSales);
        await queryRunner.dropForeignKey("sales_details",fkProduct);
    }

}
