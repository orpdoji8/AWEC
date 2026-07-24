export type ContentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ContentSection = {
  heading: string;
  paragraphs: readonly string[];
};
