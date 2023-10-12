/* eslint-disable no-unused-vars */
import React from "react";

const Aside = () => {
    
   return (
      <div className="lg:w-1/3 my-10 rounded-xl bg-white p-5 h-fit">
         <div className="text-left">
            <h3 className="font-bold text-2xl text-[#2f80ed] border-b-2 pb-4">
               Credit Remaining hr
            </h3>
            <h3 className="font-bold md:text-2xl lg:text-3xl py-2">
               Course Name
            </h3>
            <ol className="list-decimal ml-7 my-5">
               <li></li>
            </ol>
            <h3 className="text-2xl font-semibold border-t-2 py-3">
               Total Credit Hour :{" "}
            </h3>
            <h3 className="font-bold text-2xl border-t-2 py-5">Total Price :</h3>
         </div>
      </div>
   );
};

export default Aside;
