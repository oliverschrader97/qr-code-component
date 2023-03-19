import image from '../../assets/images/image-qr-code.png';

import './qr-code.scss';

import React from 'react';

const QRCode = () => {
  return (
    <div className='qr-code'>
      <img src={image} alt='QR Code' />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
};

export default QRCode;
