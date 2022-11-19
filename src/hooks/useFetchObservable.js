import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useFetchObservable(selector, fetchAction, url) {
  const { data, isLoading, error, isReloadRequired } = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && isReloadRequired) {
      dispatch(fetchAction({ url }));
    };
  }, [dispatch, data, isLoading, error, fetchAction, url, isReloadRequired]);

  return { data, isLoading, error };
};