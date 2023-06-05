export interface NewsItemType {
  id: number;
  title: string;
  text: string;
}

export interface NewsSchema {
  news: NewsItemType[];
  title: string;
  text: string;
}
