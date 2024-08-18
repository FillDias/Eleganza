export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[]; // Adiciona a propriedade images como um array de strings
  description: string; // Adiciona a propriedade description como uma string
}