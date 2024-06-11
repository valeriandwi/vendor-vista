import { create } from "zustand";

type useMaterialProps = {
  selectedSupplier: string;
  setSelectedSupplier: (selectedSupplier: string) => void;
};

const useMaterial = create<useMaterialProps>((set) => ({
  selectedSupplier: "",
  setSelectedSupplier: (selectedSupplier: string) =>
    set(() => ({ selectedSupplier: selectedSupplier })),
}));

export default useMaterial;
