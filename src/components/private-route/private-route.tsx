import { Navigate } from "react-router-dom";
import { AppRoute, AutorizateStatus } from "../../pages/const";

type PrivateRouteProps = {
  autorizateStatus: AutorizateStatus;
  children: JSX.Element;
}

function PrivateRoute({ autorizateStatus, children }: PrivateRouteProps): JSX.Element {
  return(
    autorizateStatus === AutorizateStatus.Auth ? children : <Navigate to={AppRoute.Login}/>
  )
}

export default PrivateRoute;
