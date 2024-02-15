import Card from "../cards/Card";
import { useApi } from "../../data/Context";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperBest = () => {
  const { tea, getDataFilter } = useApi();

  return (
    <div className="container-response">
      <div className="title">
        <h1>MEILLEURES VENTES DU MOIS</h1>
        <div className="container-search-icon">
          <img src="search.png" alt="icon search" />
          <input
            type="text"
            placeholder="Recherche"
            onChange={(e) => getDataFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="caroussel-container">
        <ul className="caroussel">
          <Swiper id="swiperInfusion" spaceBetween={10} slidesPerView={3}>
            {tea.map((tea) => (
              <SwiperSlide key={tea.id}>
                <Card tea={tea} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
};

export default SwiperBest;
