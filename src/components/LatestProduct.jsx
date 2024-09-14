import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import axios from "axios";

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("products.json");
        setProducts(response.data.products); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  console.log(products);
  return (
    <div>
      <SectionTitle title="Latest Product" />

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6">
      {products.map(product => (
          <div className="bg-slate-100 p-4 rounded-2xl" key={product.id}>
            <img className="w-full" src={product.product_img} alt={product.title} />
            <h2 className="text-sm md:text-lg py-2 font-semibold">{product.title}</h2>
            <p className="md:text-xl text-sm font-bold">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
