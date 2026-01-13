import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';
import { getAutorizationStatus } from '../../authorization-status';


type PrivateRoutePropsType = {
  children: JSX.Element;
}

export const PrivateRoute = ({children}: PrivateRoutePropsType) => {

  const autorizationStatus = getAutorizationStatus();

  return (
    autorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
};
