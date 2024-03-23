export interface Page {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author?: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
}