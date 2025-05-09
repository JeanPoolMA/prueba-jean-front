import {
  getAllProductsStock,
  getProductStockById,
} from "@/app/api/productStock/actions";
import { ProductStock } from "@/models/ProductStock";
import { useQuery } from "@tanstack/react-query";

export interface GetProductStockResponse {
  stocks: ProductStock[];
}

export function useProductStockQuery() {
  return useQuery<GetProductStockResponse>({
    queryKey: ["productStocks"],
    queryFn: () => getAllProductsStock(),
  });
}

export function useGetProductStockById(id: number, mode?: string) {
  return useQuery<ProductStock>({
    queryKey: ["productStock", id],
    queryFn: () => getProductStockById(id),
    enabled: mode ? mode === "edit" : true,
  });
}
