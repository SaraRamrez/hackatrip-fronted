const { VITE_API_URL } = import.meta.env;
import './PostList.css'

const PostsList = ({ posts }) => {
    return (
        posts?.map((post, index) => (
            <>
                <div className="content">
                    <img src={`${VITE_API_URL}/${post?.photo}`} alt={post?.photo} className="main-image" />
                    <div className="info">
                        <h3 className="title">{post.title}</h3>
                        <p className="description">{post.description}</p>
                        <p className="destino">Destino: {post.destino}</p>
                        <p className="value">Valoración del viaje: {post.value}</p>
                        <div className="user">
                            <img className="user-image" src={post?.avatar ? `${VITE_API_URL}/${post?.avatar}` : '/default-avatar.jpg'} alt={post?.username} />
                            <p className="user-name">{post.username}</p>
                        </div>
                    </div>
                </div>
            </>
        ))
    );
};

export default PostsList;
