import React from "react";
import img from './book.jpg'
function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200  dark:bg-slate-700 shadow-lg shadow-green-500 hover:shadow-blue-600 dark:shadow-blue-600 dark:hover:shadow-green-600 dark:text-white dark:border">
          <figure>
            {/* <img src={require(item.img)} alt="Shoes" /> */}
            <img src={img} alt="books"  className=""/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;









// import React from "react";
// import img from './book.jpg';

// function Cards({ item, addToCart }) {
//   return (
//     <div className="mt-4 my-3 p-3">
//       <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-700 shadow-lg shadow-green-500 hover:shadow-blue-600 dark:shadow-blue-600 dark:hover:shadow-green-600 dark:text-white dark:border">
//         <figure>
//           <img src={img} alt="books" className=""/>
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//             {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p className="text-sm">{item.title}</p>
//           <div className="card-actions justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div
//               className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
//               onClick={() => addToCart(item)}
//             >
//               Add to Cart
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



