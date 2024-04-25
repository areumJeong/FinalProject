import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FUNniture</h1>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>회사 소개</p>
        </section>
        <section id="members">
          <h2>Members</h2>
          <p>로그인, <a href="회원가입 페이지 URL" target="_blank">회원가입</a></p>
        </section>
        <section id="cs">
          <h2>CS Center</h2>
          <p>1577-1577</p>
        </section>
        <section id="mypage">
          <h2>My Page</h2>
          <p><a href="주문 조회 페이지 URL" target="_blank">주문 조회</a>찜 목록</p>
        </section>
        <section id="help">
          <h2>Help</h2>
          <p><a href="공지사항 페이지 URL" target="_blank">공지사항</a>, <a href="문의사항 페이지 URL" target="_blank">문의사항</a></p>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li onClick={() => window.location.href = '#about'}>
              <h2>About Us</h2>
              <p><a href="회사 소개 페이지 URL" target="_blank">회사 소개</a></p>
            </li>
            <li onClick={() => window.location.href = '#members'}>
              <h2>Members</h2>
              <p><a href="로그인 페이지 URL" target="_blank">로그인</a><br /><a href="회원가입 페이지 URL" target="_blank">회원가입</a></p>
            </li>
            <li onClick={() => window.location.href = '#cs'}>
              <h2>CS Center</h2>
              <p>1577-1577</p>
            </li>
            <li onClick={() => window.location.href = '#mypage'}>
              <h2>My Page</h2>
              <p><a href="주문 조회 페이지 URL" target="_blank">주문 조회</a><br /><a href="찜 목록 페이지 URL" target="_blank">찜 목록</a></p>
            </li>
            <li onClick={() => window.location.href = '#help'}>
              <h2>Help</h2>
              <p><a href="공지사항 페이지 URL" target="_blank">공지사항</a><br /><a href="문의사항 페이지 URL" target="_blank">문의사항</a></p>
            </li>
          </ul>
        </nav>
        <div class="nd-footer-info nd-footer-bank"></div>
          <h2>Bank account</h2>
          <p>카카오뱅크 3333-33333-3333</p>
          <p>예금주 - 이강성</p>
      
        <div style={{ marginTop:30}}>
        </div>

      </footer>
        <span>상호명 : (주)FUNniture | </span> 
        <span>대표 : 이강성 | </span>
        <span>주소 : 수원시 팔달구 매산로 30 | </span>
        <span>메일 : daniel07@gmail.com | </span>
        <span>사업자 번호 : 105-55-55555 | </span><br />
        <span>copyright 2024 www.FUNniture.com All rights reserved. </span>

    </div>
  );
}

export default App;
