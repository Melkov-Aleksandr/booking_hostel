import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AutorizateStatus } from '../../pages/const';
import MainPages from "../../pages/main/main";
import PagesNotFound from '../../pages/404/pages-not-found';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import PrivateRoute from '../private-route/private-route';
import { OffersProps } from '../../types/offer';

type AppProps = {
    offers: OffersProps[]
}

function App({offers}: AppProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={AppRoute.Main}
                    element={<MainPages offers={offers}/>}
                />

                <Route
                    path={AppRoute.Login}
                    element={<Login/>}
                />

                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute
                            autorizateStatus={AutorizateStatus.Auth}
                        >
                            <Favorites offer={offers}/>
                        </PrivateRoute>
                    }
                />


                <Route
                    path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers}/>}
                />

                <Route
                    path='*'
                    element={<PagesNotFound/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
