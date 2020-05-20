import React from 'react';

import AppLayout from '../../layout/AppLayout';

import './styles.scss';

const CardLoading = () => {
  return (
    <AppLayout>
      <div className="loading-container">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CardLoading;
