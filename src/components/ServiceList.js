import React from "react";
import { Link } from "react-router-dom";

export default function ServiceList({ data, isLoading, error }) {
  if (data == null) return <h2>Сервисов не найдено</h2>;

  return (
    <ul>
      {data.map(service =>
        <li key={service.id}>
          <Link to={ `/${service.id}/details` } >{ `${service.name} (${service.price})` }</Link>
        </li>
      )}
    </ul>
  );
};