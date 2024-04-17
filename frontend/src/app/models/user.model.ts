export class User {
    constructor(
        public _id: string,
        public username: string = '',
        public isAdmin: boolean = false,
        public coins: null | number = null,
        public activity: object[] = []
    ) { }
}
