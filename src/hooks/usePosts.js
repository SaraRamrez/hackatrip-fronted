import { useState, useEffect, useContext } from 'react';

import toast from 'react-hot-toast';

import { selectPostsService } from '../services/tripService';

import { AuthContext } from '../contexts/AuthContext';

const usePosts = () => {
  const [posts, setPosts] = useState(null);

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await selectPostsService(authToken);

        setPosts(posts);
      } catch (err) {
        toast.error(err.message);
      }
    };

    fetchPosts();
  }, [authToken]);

  return { posts };
};

export default usePosts;
