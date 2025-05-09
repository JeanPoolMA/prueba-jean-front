export interface ProductStock {
  id: string;
  productId: string;
  quantity: number;
}

export interface ProductStockCreate {
  productId: string;
  quantity: number;
}

export interface ProductCreate {
  name: string;
  categoryName: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  categoryName: string;
  quantity: number;
}

export interface Category {
  categoryName: string;
  totalQuantity: number;
}
