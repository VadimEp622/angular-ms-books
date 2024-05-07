export interface Book {
    _id: string,
    title: string,
    authors?: any[],
    author_key?: string[],
    author_name?: string[],
    openLibBookId: string,
    openLibCoverId: number,
    description?: string,
    price?: null | number
}

// TODO: as opposed to miniBook, this will be Book, and Book interface will have description/price/reviews/etc...