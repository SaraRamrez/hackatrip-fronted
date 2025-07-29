import Header from "../../components/Header/Header";
import PostsList from "../../components/PostsList/PostsList";
import usePosts from "../../hooks/usePosts";

const CommunityPage = () => {

    const { posts } = usePosts();

  return (
    <>
        <Header imgSrc='/Home.jpg' />
        <main className='comunidad'>
        <h1>Últimos posts de nuestra comunidad</h1>

        <PostsList posts={posts} />

        </main>
    </>
  );
};

export default CommunityPage;
