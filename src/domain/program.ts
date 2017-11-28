import { Exercise } from './exercise';

export class Program {
    constructor(
        public id: number,
        public exercises: any[], 
        public name: string,
        public creater: string,
        public create_date: Date
    ) {}
}
