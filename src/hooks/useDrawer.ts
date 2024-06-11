import React from "react";

const useDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return { open, showDrawer, onClose };
};

export default useDrawer;
