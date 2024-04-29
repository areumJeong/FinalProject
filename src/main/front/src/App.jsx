import React, { useState } from 'react';
import './ReviewForm.css'; // Import CSS file for styling

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    review: '',
    product: '',
    rating: 0,
    hoveredRating: 0,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingClick = (selectedRating) => {
    setFormData({ ...formData, rating: selectedRating });
  };

  const handleRatingHover = (selectedRating) => {
    setFormData({ ...formData, hoveredRating: selectedRating });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the review data to your backend or perform any necessary actions
    console.log(formData);
  };

  return (
    <div>
      <h2>리뷰 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="review">리뷰:</label>
          <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="product">상품:</label>
          <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} />
        </div>
        <div className="rating">
          <label>평점:</label>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`icon ${index + 1 <= (formData.hoveredRating || formData.rating) ? 'active' : ''}`}
              onClick={() => handleRatingClick(index + 1)}
              onMouseEnter={() => handleRatingHover(index + 1)}
              onMouseLeave={() => handleRatingHover(0)}
            >
              ★
            </span>
          ))}
        </div>
        <div>
          <label htmlFor="image">이미지:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default ReviewForm;
