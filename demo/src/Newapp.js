const NewsApp = () => {
  const [news, setNews] = useState(initialNews);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    date: "",
    content: "",
    category: "",
    tags: [],
    image: "",
    url: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      setNews((prevNews) =>
        prevNews.map((article) =>
          article.id === formData.id ? formData : article
        )
      );
    } else {
      const newArticle = { ...formData, id: Date.now() };
      setNews([...news, newArticle]);
    }

    setFormData({
      id: "",
      title: "",
      author: "",
      date: "",
      content: "",
      category: "",
      tags: [],
      image: "",
      url: ""
    });
  };

  const handleEdit = (id) => {
    const articleToEdit = news.find((article) => article.id === id);
    setFormData(articleToEdit);
  };

  const handleDelete = (id) => {
    setNews(news.filter((article) => article.id !== id));
  };

  return (
    <div>
      <h1>News Management</h1>
      <NewsForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <NewsList news={news} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default NewsApp;
