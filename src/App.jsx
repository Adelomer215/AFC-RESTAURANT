import React, { useState } from "react";
import CardItems from "./components/CardItems";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { items } from "./data";
const App = () => {
  const [Items, setItems] = useState(items);

  const handlefilter = (filter) => {
    if (filter !== "all") {
      const itemsFilterd = items.filter((item) => item.category === filter);
      setItems(itemsFilterd);
    } else {
      setItems(items);
    }
  };
  const handleSearch = (searched) => {
    const itemsFilterd = items.filter((item) => item.category === searched);
    setItems(itemsFilterd);
  };
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Hero handlefilter={handlefilter} Items={items} />
      {Items.length >= 1 ? (
        Items.map((ele) => {
          return (
            <CardItems
              key={ele.id}
              title={ele.title}
              description={ele.description}
              price={ele.price}
              imgUrl={ele.imgUrl}
            />
          );
        })
      ) : (
        <h3>There are no Items</h3>
      )}
    </div>
  );
};

export default App;
