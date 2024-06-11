import { Segmented } from "antd";
import React from "react";
import withBidAmountForm from "./hocs/withBidAmountForm";
import BuyingForm from "./buying-form";
import withBuyForm from "./hocs/withBuyForm";

const BiddingForm = withBidAmountForm(BuyingForm);
const BuyForm = withBuyForm(BuyingForm);

const MaterialForm: React.FC = () => {
  const [selectedBuyingType, setSelectedBuyingType] =
    React.useState<string>("Place a Bid");

  return (
    <div>
      <Segmented
        options={["Place a Bid", "Buy"]}
        block
        size="large"
        onChange={(value) => setSelectedBuyingType(value)}
        value={selectedBuyingType}
      />
      {selectedBuyingType === "Place a Bid" ? <BiddingForm /> : <BuyForm />}
    </div>
  );
};

export default MaterialForm;
