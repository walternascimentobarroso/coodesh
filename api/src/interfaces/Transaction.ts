export interface Transaction {
  id?: string,
  date: Date | string,
  product: string,
  value: number,
  seller: string,
  typeId: number
}