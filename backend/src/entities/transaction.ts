import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Type from './types';

@Entity('transactions')
export default class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ownerName: string;

    @Column()
    storeName: string;

    @Column()
    cellphone: string;

    @Column()
    typeId: number;

    @ManyToOne(() => Type, (type) => type.name)
    type: Type;

    @Column()
    value: number;

    @Column()
    cpf: string;

    @Column()
    creditCard: string;

    @Column()
    date: string;

    @Column()
    hour: string;
}
