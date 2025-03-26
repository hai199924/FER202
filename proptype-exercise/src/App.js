import React from "react";
import Form from "./components/Form";

const App = () => {
  const handleSubmit = (formData) => {
    alert("Dữ liệu gửi đi: " + JSON.stringify(formData, null, 2));
    console.log("Dữ liệu gửi đi:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6">Form Đăng Ký</h1>
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default App;