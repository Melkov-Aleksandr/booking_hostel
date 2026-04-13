import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AutorizateStatus } from '../../pages/const';
import MainPages from "../../pages/main/main";
import PagesNotFound from '../../pages/404/pages-not-found';
import { BookingInfo } from "../..";
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';

function App({bookingOffers}: BookingInfo) {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPages bookingOffers={bookingOffers}/>}
                />

                <Route
                    path={AppRoute.Login}
                    element={<Login/>}
                />

                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute
                            autorizateStatus={AutorizateStatus.NoAuth}
                        >
                            <Favorites/>
                        </PrivateRoute>
                    }
                />

                <Route
                    path={AppRoute.Offer}
                    element={<Offer />}>
                    <Route
                        path={':id'} element={<Offer />}
                    />
                </Route>


                <Route
                    path='*'
                    element={<PagesNotFound/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
