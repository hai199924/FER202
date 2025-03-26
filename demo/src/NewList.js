const NewsList = ({ news, handleDelete, handleEdit }) => {
    return (
      <div>
        {news.map((article) => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Date:</strong> {article.date}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <button onClick={() => handleEdit(article.id)}>Edit</button>
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  