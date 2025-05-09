import { createProduct, updateProduct } from "@/app/api/product/actions";
import { queryClient } from "@/app/components/providers/TanstackQueryProvider";
import { useMutation } from "@tanstack/react-query";

export function useCreateProduct() {
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "all",
      });
    },
  });
}
export function useUpdateProduct() {
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({ queryKey: ["product", data.id] });
    },
  });
}
