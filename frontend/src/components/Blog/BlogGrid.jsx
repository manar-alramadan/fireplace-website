import BlogCard from "./BlogCard";
import blogData from "./BlogData";

function BlogGrid() {
    return (
        <section className="blog-grid">
            {blogData.map((article) => (
                <BlogCard key={article.id} article={article} />
            ))}
        </section>
    );
}

export default BlogGrid;