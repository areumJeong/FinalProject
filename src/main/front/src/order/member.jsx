import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

function OrderDetails() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [shippingStatus, setShippingStatus] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhoneNumber, setRecipientPhoneNumber] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [productName, setProductName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [orderDateTime, setOrderDateTime] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [deliveryRequest, setDeliveryRequest] = useState('');

  const [showAddressModal, setShowAddressModal] = useState(false);

  const openPostcodeModal = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");

  const handleFindAddress = () => {
    setShowAddressModal(true);
  };

  const handleAddressSelect = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setRecipientAddress(fullAddress);
    setShowAddressModal(false);
  };

  const handleClick = () => {
    openPostcodeModal({ onComplete: handleAddressSelect });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <h1>주문 상세 정보</h1>
        <table>
          <tbody>
            <tr>
              <td>주문번호</td>
              <td><input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>이메일(F.B)</td>
              <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>배송상황</td>
              <td><input type="text" value={shippingStatus} onChange={(e) => setShippingStatus(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>받는 분 성함</td>
              <td><input type="text" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>핸드폰 번호</td>
              <td><input type="tel" value={recipientPhoneNumber} onChange={(e) => setRecipientPhoneNumber(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>받는 분 주소</td>
              <td>
              <input type="text" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} style={{ marginBottom: '10px' }} />
              <button onClick={handleClick} style={{ marginLeft: '20px' }}>주소 찾기</button>
              </td>
            </tr>
            <tr>
              <td>상품명</td>
              <td><input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>총 금액</td>
              <td><input type="text" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>주문 날짜(시간)</td>
              <td><input type="text" value={orderDateTime} onChange={(e) => setOrderDateTime(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>배송 조회(운송장 번호)</td>
              <td><input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>배송시 요청사항</td>
              <td><input type="text" value={deliveryRequest} onChange={(e) => setDeliveryRequest(e.target.value)} style={{ marginBottom: '10px' }} /></td>
            </tr>
            <tr>
              <td>주문 삭제/취소</td>
              <td><button onClick={() => {}}>삭제</button></td>
            </tr>
          </tbody>
        </table>
        {showAddressModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
              <h2>주소 찾기</h2>
              {/* 여기에 주소 검색 모달 내용을 추가 */}
              <button onClick={() => setShowAddressModal(false)} style={{ marginRight: '10px' }}>닫기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
