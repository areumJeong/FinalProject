import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here
    setShowDeleteModal(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <h1>주문 상세 정보</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="받는 분 성함" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="핸드폰 번호" type="tel" value={recipientPhoneNumber} onChange={(e) => setRecipientPhoneNumber(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="받는 분 주소" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} style={{width:"50%"}} /> <br/>
            <Button onClick={handleClick} style={{ height: '40px', marginTop: '10px', width:"50%" }} variant='contained'>주소 찾기</Button>
          </Grid>
          <Grid item xs={12}>
            <TextField label="상품명" value={productName} onChange={(e) => setProductName(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="총 금액" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="주문 날짜(시간)" value={orderDateTime} onChange={(e) => setOrderDateTime(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="배송 조회(운송장 번호)" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="배송시 요청사항" value={deliveryRequest} onChange={(e) => setDeliveryRequest(e.target.value)} style={{width:"50%"}} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleDelete} variant="outlined" startIcon={<DeleteIcon />} style={{width:"50%"}}>주문 취소/삭제</Button>
          </Grid>
        </Grid>
        <Dialog open={showAddressModal} onClose={() => setShowAddressModal(false)}>
          <DialogTitle>주소 찾기</DialogTitle>
          <DialogContent>
            {/* Address search modal content */}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowAddressModal(false)} color="primary">닫기</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
          <DialogTitle>주문 삭제</DialogTitle>
          <DialogContent>
            <p>정말 삭제하시겠습니까?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={confirmDelete} color="error">삭제</Button>
            <Button onClick={() => setShowDeleteModal(false)} color="primary">취소</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default OrderDetails;