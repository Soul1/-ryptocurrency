export type TCoin = {
  fullName: string;
  name: string;
  imageUrl: string;
  id: number;
  price: number;
  'volume24hour': number;
}

export type TCoinDiff = { [key: string]: string }