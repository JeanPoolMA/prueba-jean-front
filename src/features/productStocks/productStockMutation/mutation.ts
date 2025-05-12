import {
  createProductStock,
  updateProductStock,
} from "@/app/api/productStock/actions";
import { queryClient } from "@/app/components/providers/TanstackQueryProvider";
import { useMutation } from "@tanstack/react-query";

export function useCreateProductStock() {
  return useMutation({
    mutationFn: createProductStock,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["productStocks"],
        refetchType: "all",
      });
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
export function useUpdateProductStock() {
  return useMutation({
    mutationFn: updateProductStock,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["productStocks"],
        refetchType: "all",
      });
      queryClient.invalidateQueries({ queryKey: ["productStock", data.id] });
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
