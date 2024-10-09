import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreseItemQty, increseItemQty } from "./cartSlice";

const UpdateItemQty = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreseItemQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increseItemQty(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQty;
