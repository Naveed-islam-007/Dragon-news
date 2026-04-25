import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ n }) => {
  return (
    <div className="card bg-base-100 shadow-sm">

      <div className="card-body">

        <div className='flex gap-1 items-center'>
          {n.author?.img && (
            <Image
              src={n.author.img}
              height={40}
              width={40}
              alt='author'
              className='rounded-full'
            />
          )}
          <div>
            <h2 className='font-semibold'>{n.author?.name || 'Unknown Author'}</h2>
            <h2 className='text-xs'>{n.author?.published_date || ''}</h2>
          </div>
        </div>

        <h2 className="card-title">{n.title}</h2>

        <figure>
          <Image
            src={n.image_url}
            alt={n.title}
            width={300}
            height={300}
            className='w-full'
          />
        </figure>

        <p>{n.details}</p>

      </div>

      <div className='flex justify-between items-center px-4 pb-4'>
        <div>⭐ {n.rating?.number}</div>
        <Link href={`/news/${n._id}`}>
          <button className='btn'>See Details</button>
        </Link>
      </div>

    </div>
  );
};

export default NewsCard;