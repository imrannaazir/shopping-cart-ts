import { FC } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
interface Item {
  item: { id: number; name: string; price: number; imgUrl: string };
}

const StoreItem: FC<Item> = ({ item: { id, imgUrl, name, price } }) => {
  return (
    <div className="w-[320px] border-2 shrink-0 bg-white ">
      <img src={imgUrl} alt="" />
      <div className="p-5 text-lg flex justify-between">
        <p>{name}</p>
        <p className="text-blue-500"> {formatCurrency(price)}</p>
      </div>
    </div>
  );
};

export default StoreItem;
