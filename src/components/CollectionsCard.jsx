import React from 'react';

const CollectionsCard = ({ image, name, price }) => {
  return (
    <div style={{
      minWidth: '33vh',         
      borderRadius: '8px',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'cover'
        }}
      />
      <div style={{ padding: '8px' }}>
        <p style={{
          fontSize: '14px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {name}
        </p>
        <strong>₹{price}</strong>
      </div>
    </div>
  );
};

export default CollectionsCard;
