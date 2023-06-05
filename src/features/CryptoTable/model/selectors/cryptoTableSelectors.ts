import { CryptoTableCategory } from "../const/coinCategories";
import { StateSchema } from "app/providers/store";

export const getCryptoTableSearch = (state: StateSchema) =>
  state.cryptoTable?.search ?? "";
export const getCryptoTableCategory = (state: StateSchema) =>
  state.cryptoTable?.category ?? CryptoTableCategory.ALL;
