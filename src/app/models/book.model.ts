export class Book {
    constructor(
        public _id?: string,
        public title: string = '',
        public author: string = '',
        public description: string = '',
        public price: null | number = null
    ) { }
}
