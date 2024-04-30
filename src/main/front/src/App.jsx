import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';

// CSS
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust height as needed
  },
  productReviews: {
    width: '80%', // Adjust width as needed
  },
  imageReviews: {
    whiteSpace: 'nowrap',
  },
  imageReview: {
    display: 'inline-block',
    marginRight: '50px', // 이미지 사이의 간격 조정
  },
  review: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px', // 리뷰 사이의 간격 조정
  },
  thumb: {
    cursor: 'pointer',
    marginRight: '10px', // 따봉 아이콘과 텍스트 사이의 간격 조정
  },
  bar: {
    borderRadius: '20px', // 막대 그래프 모양을 둥글게 조정
    height: '10px', // 막대 그래프 두께 조정
  },
};

// 이미지 리뷰 컴포넌트
const ImageReview = ({ image }) => {
  return (
    <div className="image-review" style={styles.imageReview}>
      <img src={image} alt="Review" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

// 텍스트 리뷰 컴포넌트
const TextReview = ({ content, likes, increaseLikes, image }) => {
  return (
    <div className="review" style={styles.review}>
      <button style={styles.thumb} onClick={increaseLikes}>👍</button>
      <span>{content}</span>
      <span style={{ marginLeft: '20px' }}>{likes}</span>
      {image && <ImageReview image={image} />}
    </div>
  );
};

// 별 그림 컴포넌트
const Star = ({ filled, size }) => {
  return <span style={{ color: filled ? 'gold' : 'gray', fontSize: `${size}px` }}>★</span>;
};

// 별점 평균을 표시하는 컴포넌트
const StarRating = ({ averageRating }) => {
  // 별 그림 개수
  const totalStars = 1;
  // 평균 별점을 소수점 첫째 자리에서 반올림
  const roundedRating = Math.round(averageRating);
  // 별 그림 배열 생성
  const stars = Array.from({ length: totalStars }, (_, index) => index < roundedRating);

  return (
    <div className="star-rating">
      {/* 별 그림 표시 */}
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} size={40} />
      ))}
      {/* 평균 별점 표시 */}
      <span>({averageRating.toFixed(1)})</span>
    </div>
  );
};

// 리뷰 작성 폼 컴포넌트
const ReviewForm = () => {
  return (
    <div className="review-form">
      {/* 리뷰 작성 폼 UI */}
    </div>
  );
};

// 별점 평가 옵션 컴포넌트
const RatingOption = ({ option, count, maxCount, increaseCommentCount }) => {
  const barWidth = (count / maxCount) * 300; // 막대 그래프의 너비 계산

  return (
    <div onClick={increaseCommentCount} style={{ cursor: 'pointer', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100px', marginRight: '10px' }}>{option}</div>
        <div style={{ width: '300px', position: 'relative', height: '30px', backgroundColor: 'lightgray', borderRadius: '20px' }}>
          <div style={{ position: 'absolute', width: `${barWidth}px`, height: '100%', backgroundColor: 'gray', borderRadius: '20px' }}></div>
        </div>
        <div>{count}</div>
      </div>
    </div>
  );
};

// 별점 평가 컴포넌트
const RatingOptions = ({ commentCounts, increaseCommentCount }) => {
  const maxCount = Math.max(...Object.values(commentCounts)); // 최대 댓글 수 계산

  return (
    <div className="bar-chart">
      {['아주 좋아요', '마음에 들어요', '보통이에요', '그냥 그래요', '별로예요'].map((option, index) => (
        <RatingOption
          key={index}
          option={option}
          count={commentCounts[5 - index]}
          maxCount={maxCount}
          increaseCommentCount={() => increaseCommentCount(5 - index)}
        />
      ))}
    </div>
  );
};

const ProductReviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, content: '아주 좋아요!', image: 'review_image1.jpg', date: '2024-04-30' },
    { id: 2, rating: 4, content: '마음에 들어요!', image: 'review_image2.jpg', date: '2024-04-29' },
    { id: 3, rating: 3, content: '보통이에요', image: 'review_image3.jpg', date: '2024-04-28' },
    { id: 4, rating: 2, content: '그냥 그래요', image: 'review_image4.jpg', date: '2024-04-27' },
    { id: 5, rating: 1, content: '별로예요', image: 'review_image5.jpg', date: '2024-04-26' }
  ]);

  const [selectedRating, setSelectedRating] = useState(null);
  const [commentCounts, setCommentCounts] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
  });

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const [sortBy, setSortBy] = useState('latest');

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleWriteReview = () => {
    // 상품 리뷰 작성하기 버튼을 클릭했을 때의 동작
    console.log("상품 리뷰 작성하기 버튼을 클릭했습니다.");
  };

  const getRandomWidth = () => {
    return `${Math.floor(Math.random() * 100)}%`;
  };

  const increaseCommentCount = (rating) => {
    setCommentCounts(prevCounts => ({
      ...prevCounts,
      [rating]: prevCounts[rating] + 1
    }));
  };

  const averageRating = reviews.reduce((acc, cur) => acc + cur.rating, 0) / reviews.length;

  const sortedReviews = reviews.sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return b.rating - a.rating;
    }
  });

  const filteredReviews = selectedRating
    ? sortedReviews.filter(review => review.rating === selectedRating)
    : sortedReviews;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (event, page) => setCurrentPage(page);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div className="product-reviews" style={styles.productReviews}>
        <Stack direction="row" spacing={2} alignItems="center">
          <div className="left-panel">
            <h2>Review</h2>
            <StarRating averageRating={averageRating} />
            <ReviewForm />
            <div className="write-review">
              <button onClick={handleWriteReview}>상품 리뷰 작성하기</button>
            </div>
          </div>

          <Divider orientation="vertical" flexItem />

          <div className="right-panel">
            <h2>별점 평가</h2>
            <RatingOptions
              commentCounts={commentCounts}
              increaseCommentCount={increaseCommentCount}
            />
          </div>
        </Stack>

        <div className="bottom-panel">
          <div className="product-image">
            <img src="product_image.jpg" alt="Product" />
          </div>
          <div className="sort-options">
            <select onChange={handleSortChange}>
              <option value="latest">최신순</option>
              <option value="rating">별점순</option>
            </select>
          </div>
        </div>

        {/* 리뷰 목록 */}
        <div className="reviews" style={styles.imageReviews}>
          {currentReviews.map(review => (
            <div key={review.id}>
              <TextReview
                content={review.content}
                likes={review.likes}
                image={review.image}
              />
              <ImageReview image={review.image} />
            </div>
          ))}
        </div>

        {/* 페이지네이션 UI */}
        
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination count={Math.ceil(filteredReviews.length / reviewsPerPage)} page={currentPage} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
