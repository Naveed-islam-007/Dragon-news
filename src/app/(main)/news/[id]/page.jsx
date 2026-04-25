import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsArray = await getNewsDetails(id);
  const news = newsArray?.[0];

  if (!news) {
    return <div className="container mx-auto my-12">News not found.</div>;
  }

  return (
    <div className="container mx-auto my-12">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">

          <div className='flex gap-1 items-center'>
            {news.author?.img && (
              <Image
                src={news.author.img}
                height={40} width={40}
                alt='author'
                className='rounded-full'
              />
            )}
            <div>
              <h2 className='font-semibold'>{news.author?.name || 'Unknown Author'}</h2>
              <h2 className='text-xs'>{news.author?.published_date || ''}</h2>
            </div>
          </div>

          <h2 className="card-title">{news.title}</h2>

          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={800} height={400}
              className='w-full'
            />
          </figure>

          <p>{news.details}</p>

        </div>

        <div className='flex justify-between items-center px-4 pb-4'>
          <div>⭐ {news.rating?.number}</div>
          <Link href={`/`}>
            <button className='btn'>Back to Category</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;