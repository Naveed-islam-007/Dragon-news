import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
 const news = [
  { id: 1, description: "AI investment rises." },
  { id: 2, description: "Markets stay uncertain." },
  { id: 3, description: "New energy method found." },
  { id: 4, description: "Sports event trends worldwide." },
  { id: 5, description: "Cyber threats increase." }
];
    return (
        <div className='flex justify-between items-center bg-gray-200 py-3 container mx-auto px-2 gap-4'>
            <button className='btn bg-red-500 text-white p-3'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                   news.map(n=>(
                    <span key={n.id}>{n.description}</span>
                   ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;