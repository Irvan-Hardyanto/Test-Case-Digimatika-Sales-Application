import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AlterSalesTable1754553003250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "sales",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
        );
		
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("sales");
        const foreignKey = table.foreignKeys.find(
            fk => fk.columnNames.indexOf("user_id") !== -1,
        );
        await queryRunner.dropForeignKey("sales",foreignKey);
    }

}
