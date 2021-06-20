import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Createestablishments1624202195403
implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable (new Table({
            name: "establishments",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },

                {
                    name: 'cnpj',
                    type: 'varchar',
                    isUnique: true,
                },

                {
                    name: 'name',
                    type: 'varchar',
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },

                {
                    name: 'password',
                    type: 'varchar',
                },

                {
                    name: 'latitude',
                    type: 'varchar',
                },

                {
                    name: 'longitude',
                    type: 'varchar',
                },

                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },

                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('establishments');
    }
}
