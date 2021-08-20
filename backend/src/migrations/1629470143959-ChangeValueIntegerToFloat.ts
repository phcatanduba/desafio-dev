import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeValueIntegerToFloat1629470143959 implements MigrationInterface {
    name = 'ChangeValueIntegerToFloat1629470143959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "value" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD "cellphone" character varying NOT NULL`);
    }

}
