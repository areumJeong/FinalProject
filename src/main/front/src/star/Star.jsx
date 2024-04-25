import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={linkContainerStyle}>
        <a href="/about" style={linkStyle}>회사소개</a>
        <span style={separatorStyle}>|</span>
        <a href="/customer-service" style={linkStyle}>고객센터</a>
        <span style={separatorStyle}>|</span>
        <a href="/notice" style={linkStyle}>공지사항</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#fff', // 흰색 배경색
  color: '#000', // 검정색 글씨색
  padding: '30px',
  textAlign: 'center',
  position: 'fixed', // 고정 위치
  bottom: '0', // 화면 하단에 고정
  width: '100%', // 전체 너비를 차지
};

const linkContainerStyle = {
  margin: '0 auto', // 가운데 정렬
};

const linkStyle = {
  marginRight: '30px', // 링크 사이 간격
  textDecoration: 'none',
  color: '#000' // 검정색 글씨색
};

const separatorStyle = {
  margin: '0 15px' // 구분자 간격
};

export default Footer;
