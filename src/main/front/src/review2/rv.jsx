import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Pagination from '@mui/material/Pagination';


// CSS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  productReviews: {
    width: '100%', // 전체 폭을 사용하도록 변경
    maxWidth: '800px', // 최대 폭 설정
  },
  imageReviews: {
    display: 'flex',
    flexWrap: 'wrap', // 화면 크기에 따라 이미지가 자동으로 다음 줄로 이동하도록 설정
    justifyContent: 'center',
    margin: '20px 0',
  },
  imageReview: {
    flex: '0 0 auto', // 자동으로 크기가 조정되도록 설정
    width: '150px', // 이미지의 너비 설정
    margin: '10px', // 이미지 사이의 간격 조정
  },
  review: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px', // 리뷰 사이의 간격 조정
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
  const handleLikeIncrease = () => {
    // 좋아요 수를 증가시키는 함수
    console.log("좋아요를 눌렀습니다.");
    increaseLikes(); // increaseLikes 함수 호출
  };

  return (
    <div className="review" style={styles.review}>
      <button style={styles.thumb} onClick={handleLikeIncrease}>👍</button>
      <span>{content}</span>
      <span style={{ marginLeft: '20px' }}>{likes}</span>
      {image && <ImageReview image={image} />}
    </div>
  );
};

// 나머지 컴포넌트 및 변수들은 이전 코드와 동일하게 유지합니다.

function ProductReviews() {
  // 여기에 나머지 코드를 넣어주세요.
}

export default ProductReviews;
