export type ProductOptionType = {
  title: string;
  additionalPrice: number
}

export type ProductType = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: ProductOptionType[];
};

export type MenuType = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};