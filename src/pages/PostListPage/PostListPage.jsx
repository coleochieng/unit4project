

function PostListPage() {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        async function getPosts() {
            const posts = await postsAPI.getALL();
            setPosts(posts);
        }
    })
}

export default PostListPage;