import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, ActiveId }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">All Categories</h2>

      <ul className="flex flex-col gap-2 mt-6">
        {categories.news_category.map(category => (
          <li
            key={category.category_id}
            className={`rounded-md p-2 font-bold text-xl text-center cursor-pointer
              ${category.category_id === ActiveId 
                ? "bg-purple-500 text-white" 
                : "bg-slate-100 text-black"
              }`}
          >
           <Link className='block' href={`/category/${category.category_id}`}>  {category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;