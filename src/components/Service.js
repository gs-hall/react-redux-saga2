import React from "react";
import ReturnButton from "./ReturnButton";
import NoService from "./NoService";

export default function Service({ data, isLoading, error, returnLink }) {
  if (data == null) return <NoService />;
  const { id, name, price, content } = data;
  if (!id) return <NoService />;
  
  return (
    <>
      <div className="service" >
        <span>Название: {name}</span>
        <span>Цена: {price}</span>
        <span>Описание: {content}</span>
      </div>
      {returnLink && <ReturnButton returnLink={ returnLink } />}
    </>
  );
};