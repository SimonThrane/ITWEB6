export class Exercise {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public reps: number,
        public sets: number,
        public isRepetition: boolean,
        public time?: number
    ) {}
}
