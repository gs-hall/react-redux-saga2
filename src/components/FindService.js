import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchServiceRequest, selectService, reloadService } from '../features/service/serviceSlice';
import NoService from './NoService';
import Service from './Service';
import { withObservable } from '../hoc/withObservable';
import { useDispatch } from 'react-redux';

export default function FindService() {
    const params = useParams();

    const dispatch = useDispatch();
  
    // TBD: replace somehow
    dispatch(reloadService());

    const serviceID = Number(params.id);
    const ServiceObservable = withObservable(Service);

    if (params?.id === undefined) return <NoService />;
    
    return (
      <ServiceObservable
        fetchAction={ fetchServiceRequest }
        reloadAction={ reloadService }
        fetchUrl={ `${process.env.REACT_APP_SERVICE_URL}/${serviceID}` }
        selector={ selectService }
        returnLink="/"
        />
    );
};