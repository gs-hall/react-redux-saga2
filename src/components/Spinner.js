import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Spinner({ isLoading }) {
  if (!isLoading) return null;

  const divStyle = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={divStyle} >
      <Oval
        height={50}
        width={50}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        strokeWidth={2}
        strokeWidthSecondary={2}
        />
    </div>
  );
};