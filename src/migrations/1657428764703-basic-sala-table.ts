import { MigrationInterface, QueryRunner } from "typeorm";

export class basicSalaTable1657428764703 implements MigrationInterface {
    name = 'basicSalaTable1657428764703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" ADD "products" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP COLUMN "products"`);
    }

}
