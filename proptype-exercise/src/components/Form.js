import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = 'Tên không được để trống, từ 3-50 kí tự';
    }

    const age = Number(formData.age);
    if (!formData.age || age < 18 || age > 100) {
      newErrors.age = 'Tuổi không được để trống, từ 18-100 tuổi';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại phải từ 10-15 chữ số';
    }

    if (!formData.terms) {
      newErrors.terms = 'Bạn phải đồng ý với điều khoản';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label>Tuổi:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        {errors.age && <p>{errors.age}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Số điện thoại:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p>{errors.phone}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> Tôi đồng ý với điều khoản
        </label>
        {errors.terms && <p>{errors.terms}</p>}
      </div>

      <button type="submit">Gửi</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;