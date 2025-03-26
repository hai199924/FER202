const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.id) {
      // Update existing news
      setNews((prevNews) =>
        prevNews.map((article) =>
          article.id === formData.id ? formData : article
        )
      );
    } else {
      // Add new news
      const newArticle = { ...formData, id: Date.now() }; // Assign a new ID
      setNews([...news, newArticle]);
    }
  
    // Reset the form
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
  