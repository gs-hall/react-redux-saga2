import React from "react";
import { fetchServiceListRequest, reloadServiceList, selectServiceList } from "../features/serviceList/serviceListSlice";
import { withObservable } from "../hoc/withObservable";
import ServiceList from "./ServiceList";
import "../css/main.css";

export default function Main() {

  const ServiceListObservable = withObservable(ServiceList);
  
  return (
    <ServiceListObservable
      fetchAction={ fetchServiceListRequest }
      reloadAction={ reloadServiceList }
      fetchUrl = { process.env.REACT_APP_SERVICE_URL }
      selector={ selectServiceList }
      />
  );
};
