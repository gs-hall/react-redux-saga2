import React from "react";
import { useDispatch } from "react-redux";
import useFetchObservable from "../hooks/useFetchObservable";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

export const withObservable = (WrappedComponent) => (props) => {
  const dispatch = useDispatch();
  const { selector, fetchAction, fetchUrl, reloadAction, ...rest } = props;
  const injected = useFetchObservable(selector, fetchAction, fetchUrl);
  const { isLoading, error } = injected;

  // TBD: replace fetchAction -> reload - done!
  return (
    <>
      <Spinner isLoading={ isLoading } />
      <Error onRetry={ () => dispatch(reloadAction()) } error={ error } />
      { !isLoading && !error && <WrappedComponent { ...injected } { ...rest } /> }
    </>
  );
};