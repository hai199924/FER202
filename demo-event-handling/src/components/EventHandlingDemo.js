import { useState } from "react";

const EventHandlingDemo = () => {
  // Khởi tạo trạng thái count với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  // Hàm xử lý sự kiện click, tăng giá trị count lên 1
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Event Handling Demo</h1>
      <p className="mb-4">Giá trị count: {count}</p>
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Tăng count
      </button>
    </div>
  );
};

export default EventHandlingDemo;
