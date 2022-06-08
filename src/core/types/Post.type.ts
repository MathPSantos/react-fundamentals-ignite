export type TPost = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
};
