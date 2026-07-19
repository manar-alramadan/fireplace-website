import {Link} from  "react-router-dom";

function BlogCard({ article }) {



    return (
        <div className="blog-card">
            <img src={article.image} alt={article.title} />

            <div className="blog-card-content">
                <h3>{article.title}</h3>

                <p>{article.description}</p>

              <Link to={`https://fireplacephotos.site123.me/%D8%A7%D9%84%D9%85%D9%82%D9%88%D8%A7%D9%84-%D8%A7%D8%A8%D9%88-%D8%A7%D9%8A%D8%A7%D8%AF-%D8%AC%D9%88%D8%A7%D9%84-0566572444`} className="read-more">
                    Read More
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;