type Rating = {
  count: number;
  rate: number;
}
type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}