import { useApi } from "../../data/Context";
import CardInfusion from "../cards/CardInfusion";

function SwiperInfusion() {
  const { getInfusion } = useApi();
  return (
    <>
      <div className="caroussel-container">
        <ul className="caroussel">
          {getInfusion.map((infusion) => (
            <CardInfusion infusion={infusion} key={infusion.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperInfusion;
