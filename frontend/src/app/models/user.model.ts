export interface User {
    id: string,
    username: string,
    fullname: string
    isAdmin?: boolean,
    coins?: null | number,
    activity?: object[]
}
