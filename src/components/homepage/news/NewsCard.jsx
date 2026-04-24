import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({n}) => {
    console.log(n);
    return (
        <div className="card bg-base-100  shadow-sm">
  <div className="card-body">


   <div>
    <div className='flex gap-1 items-center'>
          <Image src={n.author.img} height={40} width={40} alt='author' className='rounded-full'></Image>
          <div>
            <h2 className='font-semibold'>{n.author.name}</h2>
            <h2 className='text-xs'>{n.author.published_date}</h2>
          </div>
    </div>

    <div>

    </div>
   </div>

    <h2 className="card-title">Card Title</h2>
   

      <figure>
    <Image
      src={n.image_url}
      alt="Shoes"
      width={300} height={300} className='w-full' />
  </figure>
  <p>{n.details}</p>
  </div>
  
  <div className='flex justify-between items-center'>
    <div>
        {n.rating.number}
    </div>

    <Link href={`/news/${n._id}`}>
       <button className='btn'>See Details</button>
    </Link>
  </div>
</div>
    );
};

export default NewsCard;