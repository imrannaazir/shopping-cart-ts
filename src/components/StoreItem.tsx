import { FC } from "react";
import { formatCurrency } from "../utilities/formatCurrency";
interface Item {
  item: { id: number; name: string; price: number; imgUrl: string };
}
const quantity = 2;

const StoreItem: FC<Item> = ({ item: { id, imgUrl, name, price } }) => {
  return (
    <div className="w-[320px] border-2 shrink-0 bg-white ">
      <img src={imgUrl} alt="" />
      <div className="p-5 flex flex-col gap-4">
        <div className="text-lg flex justify-between">
          <p>{name}</p>
          <p className="text-blue-500"> {formatCurrency(price)}</p>
        </div>

        <div>
          {quantity === 0 ? (
            <button className="w-full bg-blue-500 py-2 uppercase rounded-sm text-white">
              + Add to Cart
            </button>
          ) : (
            <div className="flex justify-center gap-3 items-center">
              {/* btn */}
              <div className="flex flex-col gap-2">
                <button className="bg-blue-500 px-3 text-white rounded-sm">
                  +
                </button>
                <button className="bg-blue-500 px-3 text-white rounded-sm">
                  -
                </button>
              </div>
              {/* quantity */}
              <p>
                <span className="text-xl ">{quantity}</span> in cart
              </p>
              {/* remove */}
              <button className="bg-red-500  px-3 text-white py-2 rounded-sm">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
