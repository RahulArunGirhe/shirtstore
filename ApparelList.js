import React from "react";

import Shirt from "./shirt";

const ApparelList = ({ products }) => {
  return (
    <section className="store">
      {products.map((product, index) => {
        return <Shirt {...product} key={index} />;
      })}
    </section>
  );
};

export default ApparelList;
