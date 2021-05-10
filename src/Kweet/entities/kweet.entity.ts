import * as typeorm from 'typeorm';

@typeorm.Entity()
export default class Kweet {
    constructor() {
        this.id = '';
        this.name = '';
        this.kweet = '';
        this.ownerId = '';
        this.created = new Date();
        this.updated = new Date();
    }

    @typeorm.PrimaryGeneratedColumn('uuid')
    id?: string;

    @typeorm.Column()
    name!: string;

    @typeorm.Column()
    kweet!: string;

    @typeorm.Column()
    ownerId!: string;

    @typeorm.CreateDateColumn()
    created?: Date;
  
    @typeorm.UpdateDateColumn()
    updated?: Date;
}