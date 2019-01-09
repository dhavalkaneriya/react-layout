import React from 'react';

const InlineLoader = (style = {}) => {
  return (
    <div className="lds-ring" style={style ? style.style : ''}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default InlineLoader;
