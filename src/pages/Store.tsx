import { useState, useEffect } from "react";
import StoreItem from "../components/StoreItem";
const Store = () => {
  interface Item {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }
  const [items, setItems] = useState<Item[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("items.json");
      const data = await response.json();
      setItems(data);
    })();
  }, []);
  console.log();
  console.log(items);

  return (
    <div className="lg:px-[10%]">
      <p>Store</p>
      <div className="flex flex-wrap justify-center gap-5">
        {items?.map((item) => (
          <StoreItem item={item} />
        ))}
      </div>
    </div>
  );
};
/* 

  
*/
export default Store;
