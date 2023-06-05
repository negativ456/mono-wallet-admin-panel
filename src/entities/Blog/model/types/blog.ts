export interface Blog {
  id?: number;
  title: string;
  text: string;
  link: string;
}

export interface BlogSchema {
  blogs: Blog[];
  newBlog: Blog;
}
