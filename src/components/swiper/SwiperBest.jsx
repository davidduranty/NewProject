import Card from "../cards/Card";
import { useApi } from "../../data/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const SwiperBest = () => {
  const { tea, getDataFilter } = useApi();
  const { t } = useTranslation();

  return (
    <div>
      <div className="title-best-container">
        <div className="title-best">
          <h1>{t("title.best")}</h1>
          <div className="container-search-icon">
            <img src="search.png" alt="icon search" />
            <input
              type="text"
              placeholder={t("title.input")}
              onChange={(e) => getDataFilter(e.target.value)}
            />
          </div>
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
