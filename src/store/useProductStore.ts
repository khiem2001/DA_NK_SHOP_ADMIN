import { create } from 'zustand';

export interface ProductStore {
  productId: string;
  setProductId: (productId: string) => void;
}

const useProductStore = create((set, get) => ({
  productId: null,
  setProductId: (productId: string) => {
    set({
      productId
    });
  }
}));
export default useProductStore;
