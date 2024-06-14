import React from "react";
import SupplierTable from "./supplier-table";
import AppTitle from "@/components/app-title";
import AppSubtitle from "@/components/app-subtitle";

const Supplier: React.FC = () => {
  return (
    <>
      <AppTitle>Supplier List</AppTitle>
      <AppSubtitle className="mb-8">
        List of your recommendation supplier
      </AppSubtitle>
      <SupplierTable />
    </>
  );
};

export default Supplier;
