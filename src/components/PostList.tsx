import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsApiSlice";

const PostList = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({
    limit: 5,
    offset: 0,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <button
        onClick={() => {
          const post = {
            title: "My new post",
          };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "Creating..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
