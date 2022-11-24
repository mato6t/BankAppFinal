export interface Profil {
    id: number,
    name: string,
    surname: string,
    titleBeforeName: string,
    titleAfterName: string,
    address: string,
    correspondanceAddress: string,
    imgUrl: string,
    img?: File,
    cardNumber: number
}