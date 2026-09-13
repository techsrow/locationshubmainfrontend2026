export interface SetupType {
  id: string;
  title: string;
  slug: string;
  mainImage: string;
  content: string;
  displayOrder: number;
  createdAt: string;
  gallery: {
    id: string;
    imageUrl: string;
    setupId: string;
    displayOrder: number;
  }[];
}
