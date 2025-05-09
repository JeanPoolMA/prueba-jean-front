import { getAllProducts, getProductById } from "@/app/api/product/actions";
import { getAllCategories } from "@/app/api/productStock/actions";
import { Category, Product } from "@/models/ProductStock";
import { useQuery } from "@tanstack/react-query";

export interface GetProductResponse {
  products: Product[];
}
export interface GetCategoryResponse {
  categories: Category[];
}

export function useProductQuery() {
  return useQuery<GetProductResponse>({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
}

export function useGetProductById(id: string, mode?: string) {
  return useQuery<Product>({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: mode ? mode === "edit" : true,
  });
}

export function useCategoryQuery() {
  return useQuery<GetCategoryResponse>({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
}
