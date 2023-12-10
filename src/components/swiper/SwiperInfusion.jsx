import { useApi } from "../../data/Context";
import CardIfusion from "../cards/CardIfusion";

function SwiperInfusion() {
  const { getInfusion } = useApi();
  return (
    <>
      <div className="caroussel-container">
        <ul className="caroussel">
          {getInfusion.map((infusion) => (
            <CardIfusion infusion={infusion} key={infusion.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SwiperInfusion;
