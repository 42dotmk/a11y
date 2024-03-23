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
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  author?: User;
  featuredImage?: MediaFile;
}

export interface User {
  id: number;
  username: string;
  email: string;
}


export interface MediaFile {
  id: number;
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: null[];
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
}