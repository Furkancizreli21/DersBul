export interface Teacher {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  tags: string[];
  isTopRated: boolean;
  isVerified: boolean;
  isOnline: boolean;
}

export interface FilterSubject {
  id: string;
  label: string;
}
