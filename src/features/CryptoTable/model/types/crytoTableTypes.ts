import { CryptoTableCategory } from '../const/coinCategories';

export interface CryptoTableCategories {
  type: CryptoTableCategory;
  title: string;
  elements: Coin[];
}

export interface Coin {
  name: string;
  img: string;
  price: number;
  send: boolean;
  exchange: boolean;
  stake: number;
}

export interface CryptoTableSchema {
  search: string;
  category: CryptoTableCategory;
}
