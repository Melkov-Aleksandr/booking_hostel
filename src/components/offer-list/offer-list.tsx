import { useState } from "react";
import { OffersProps } from "../../types/offer";
import CitesCard from "../citys-card/citys-card";

type OffersListProps = {
  offers: OffersProps[]
}

function OfferList ({offers}: OffersListProps) {
  const [chosenId, setChosenId] = useState<OffersProps['id'] | null>(null);
  return (
    <>
      {offers.map((item) => (
        <CitesCard
          key={item.id}
          offer={item}
          onMouseEnter={() => setChosenId(item.id)}
          onMouseLeave={() => setChosenId(null)}
        />
      ))}
    </>
  )
}

export default OfferList;
