import React, { useState } from 'react';


const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [product, setProduct] = useState('');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleRatingHover = (selectedRating) => {
    setHoveredRating(selectedRating);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the review data to your backend or perform any necessary actions
    console.log({ review, product, rating, image });
  };

  return (
    <div>
      <h2>리뷰 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="review">리뷰:</label>
          <textarea id="review" value={review} onChange={handleReviewChange} />
        </div>
        <div>
          <label htmlFor="product">상품:</label>
          <input type="text" id="product" value={product} onChange={handleProductChange} />
        </div>
        <div className="rating">
          <label>평점:</label>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`icon ${index + 1 <= (hoveredRating || rating) ? 'active' : ''}`}
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
