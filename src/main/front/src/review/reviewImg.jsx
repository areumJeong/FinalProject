import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '50%', md: '60%' , lg:'80%'}, // 모달 창의 너비를 80%로 설정
  maxWidth: 600, // 모달 창의 최대 너비를 600px로 제한
  maxHeight: '80%', // 모달 창의 최대 높이를 80%로 설정
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center', // 텍스트 가운데 정렬
};

const imgStyle = {
  maxWidth: '100%', // 이미지 최대 너비를 100%로 설정하여 부모 요소에 맞춤
  maxHeight: '100%', // 이미지 최대 높이를 100%로 설정하여 부모 요소에 맞춤
};

export default function ReviewImg() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <Button onClick={handleImageClick}>Open modal</Button>
        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src="/img/gallery_896d13e7fe3629f3.jpg" alt="Gallery" style={imgStyle} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div>
        <img src="/img/gallery_896d13e7fe3629f3.jpg" alt="Gallery" onClick={handleImageClick} />
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
