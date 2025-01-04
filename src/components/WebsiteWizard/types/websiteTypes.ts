export type WebsiteStyle = "modern" | "classic" | "bold";

export type WebsiteStyleOption = {
  id: WebsiteStyle;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
  };
};