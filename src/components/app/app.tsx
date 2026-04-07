import MainPages from "../../pages/main/main"
import { BookingInfo } from "../..";

function App({bookingOffers}: BookingInfo) {
    return (
        <MainPages
            bookingOffers={bookingOffers}
        />
    )
}

export default App;
