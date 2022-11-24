export interface Transaction {
    id?: number,
    owner: string,
    category: Category,
    isDebet: boolean,
    amount: number,
    date: Date,
    iban: string
}

export enum Category {
    None = 0,
    Work,
    Grocerries,
    Technologies,
    Investment,
    Bills
}