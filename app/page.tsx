import Featured from "./components/Featured/featured"
import CategoryList from "./components/CategoryList/CategoryList"
import PostList from "./components/PostList/PostList"
import { getAllCategories, getRecentPosts, getFeaturedPosts } from "./api/functions";


const Home = async () => {
  const categories = await getAllCategories();
  const featuredPosts = await getFeaturedPosts();
  const recentPosts = await getRecentPosts();

  return (
    <main className="flex min-h-screen flex-col items-left p-24 pt-60">
      {/* Title */}
      <h1 className='text-[96px]'>
      <b>Alex Crooks Literature</b><br/>
      <span className='text-[60px]'>I'm a writer based out of San Diego, California, with a passion for </span>
      </h1>
    <Featured
      featuredPosts = {featuredPosts}
    />
      <CategoryList
      categories = {categories}
      />
    <PostList 
      recentPosts = {recentPosts}
    />
    </main>
  );
}

export default Home
