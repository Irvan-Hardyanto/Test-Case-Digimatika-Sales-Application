import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnUsers1754602405800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "hashed_rt",
                type: "varchar",
                length: "255",
                isNullable: true
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","hashed_rt");
    }

}
