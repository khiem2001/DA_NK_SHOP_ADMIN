import styled from 'styled-components';
import React from 'react';

const LoadingCenterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Loader = styled.span`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid #db1d24;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const Loading = () => {
  return (
    <Loader>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Loader>
  );
};

export default Loading;

export const LoadingCenter = () => {
  return (
    <LoadingCenterWrapper>
      <Loading />
    </LoadingCenterWrapper>
  );
};
