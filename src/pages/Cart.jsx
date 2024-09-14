import React from "react";
import product_1 from "../assets/products/product1-min.png";
import product_2 from "../assets/products/product2-min.png";
import product_3 from "../assets/products/product3-min.png";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className="grid md:grid-cols-2 grid-rows-1 gap-4">
      <div className="">
        <h1 className="text-4xl font-bold py-4">Your cart</h1>
        <div className="bg-slate-200 rounded-2xl p-6 space-y-3">
          <div className="flex justify-between bg-slate-100 p-2 rounded-2xl">
            <div className="flex items-center gap-5">
              <img className="h-24 rounded-xl" src={product_1} alt="Product" />
              <div className="space-y-1">
                <h2 className="text-xl font-bold">Gradient Graphic T-shirt</h2>
                <p className="text-sm">
                  <span className="font-semibold">Size:</span> Large
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Color:</span> White
                </p>
                <h2 className="font-semibold text-xl">Price: $123</h2>
              </div>
            </div>
            <div className="grid card-actions justify-end">

              <div className="flex justify-end">
                <button className="text-3xl text-red-500 p-2">
                  <RiDeleteBin5Line />
                </button>
              </div>

              <div className="bg-white rounded-full h-10 flex items-center overflow-hidden px-2">
                <button className="text-3xl"> - </button>
                <input className="text-center outline-none w-20" type="text" />
                <button className="text-3xl"> + </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-slate-100 p-2 rounded-2xl">
            <div className="flex items-center gap-5">
              <img className="h-24 rounded-xl" src={product_2} alt="Product" />
              <div className="space-y-1">
                <h2 className="text-xl font-bold">Gradient Graphic T-shirt</h2>
                <p className="text-sm">
                  <span className="font-semibold">Size:</span> Large
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Color:</span> White
                </p>
                <h2 className="font-semibold text-xl">Price: $123</h2>
              </div>
            </div>
            <div className="grid card-actions justify-end">

              <div className="flex justify-end">
                <button className="text-3xl text-red-500 p-2">
                  <RiDeleteBin5Line />
                </button>
              </div>

              <div className="bg-white rounded-full h-10 flex items-center overflow-hidden px-2">
                <button className="text-3xl"> - </button>
                <input className="text-center outline-none w-20" type="text" />
                <button className="text-3xl"> + </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-slate-100 p-2 rounded-2xl">
            <div className="flex items-center gap-5">
              <img className="h-24 rounded-xl" src={product_3} alt="Product" />
              <div className="space-y-1">
                <h2 className="text-xl font-bold">Gradient Graphic T-shirt</h2>
                <p className="text-sm">
                  <span className="font-semibold">Size:</span> Large
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Color:</span> White
                </p>
                <h2 className="font-semibold text-xl">Price: $123</h2>
              </div>
            </div>
            <div className="grid card-actions justify-end">

              <div className="flex justify-end">
                <button className="text-3xl text-red-500 p-2">
                  <RiDeleteBin5Line />
                </button>
              </div>

              <div className="bg-white rounded-full h-10 flex items-center overflow-hidden px-2">
                <button className="text-3xl"> - </button>
                <input className="text-center outline-none w-20" type="text" />
                <button className="text-3xl"> + </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="flex flex-col">
      <h1 className="text-4xl font-bold py-4 text-start">Your cart</h1>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
