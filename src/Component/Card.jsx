/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ card }) => {
   console.log(card);
   const { id, name, image, credit, price, details } = card;
   return (
      <div>
         <div className=" rounded-2xl h-[410px] bg-base-100 shadow-xl">
            <div>
               <img className="w-full h-[150px]" src={image} alt={name} />
            </div>
            <div className="py-6 space-y-3 px-3 relative">
               <h2 className="text-left font-bold text-2xl">{name}</h2>
               <p className="text-left">{details}</p>
               <div className="flex justify-between pr-4 ">
                  <p className="font-semibold">Price : <span className="text-lg font-bold" >{price}$</span></p>
                  <p className="font-semibold">Credit : <span className=" text-lg before:font-bold">{credit} hr</span></p>
               </div>
               <div className="absolute top-48 w-4/5 justify-center">
                  <button className="button btn btn-sm w-full btn-success text-white font-extrabold">
                     EnRole Now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
