import { FC } from "react";
interface Item {
  item: { id: number; name: string; price: number; imgUrl: string };
}

const StoreItem: FC<Item> = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default StoreItem;
