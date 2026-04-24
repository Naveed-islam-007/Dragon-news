import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategories } from '@/lib/data';



const NewsByCategory = async ({ params }) => {
  const { id } = await params;

  const categories = await getCategories();
  const news = await getNewsByCategories(id);

  return (
    <div className="grid grid-cols-12 my-12 container mx-auto gap-3">
      
      {/* Left Sidebar */}
      <div className="col-span-3">
        <LeftSideBar categories={categories} ActiveId={id} />
      </div>

      {/* News Section */}
      <div className="col-span-6">
        <h2 className="text-2xl font-bold mb-4">All News</h2>
        <div className="space-y-3">
          {news.length > 0 ? (
            news.map((n) => (
              <NewsCard key={n._id} n={n}>
              </NewsCard>
            ))
          ) : (
            <p className="text-gray-500">No news found for this category.</p>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">
        <RightSideBar />
      </div>

    </div>
  );
};

export default NewsByCategory;