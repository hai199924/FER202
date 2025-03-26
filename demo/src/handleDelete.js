const handleDelete = (id) => {
    setNews(news.filter((article) => article.id !== id));
  };
  