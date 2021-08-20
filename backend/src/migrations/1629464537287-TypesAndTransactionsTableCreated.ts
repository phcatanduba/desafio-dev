import {MigrationInterface, QueryRunner} from "typeorm";

export class TypesAndTransactionsTableCreated1629464537287 implements MigrationInterface {
    name = 'TypesAndTransactionsTableCreated1629464537287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" SERIAL NOT NULL, "ownerName" character varying NOT NULL, "storeName" character varying NOT NULL, "cellphone" character varying NOT NULL, "typeId" integer NOT NULL, "value" integer NOT NULL, "cpf" character varying NOT NULL, "creditCard" character varying NOT NULL, "date" character varying NOT NULL, "hour" character varying NOT NULL, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_a72306bb02be8e96b3bd110f9aa" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_a72306bb02be8e96b3bd110f9aa"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "types"`);
    }

}
