import { Card, Typography } from "antd";
import React from "react";

const SupplierPerformance: React.FC = () => {
  return (
    <div className="flex gap-4 mb-8">
      <Card className="w-full">
        <Typography className="font-bold text-lg">Overall Rating</Typography>
        <Typography>2.5/5.0</Typography>
      </Card>
      <Card className="w-full">
        <Typography className="font-bold text-lg">
          Performance Rating
        </Typography>
        <Typography>4.0/5.0</Typography>
      </Card>
      <Card className="w-full">
        <Typography className="font-bold text-lg">Success Rate</Typography>
        <Typography>2.5/5.0</Typography>
      </Card>
    </div>
  );
};

export default SupplierPerformance;
