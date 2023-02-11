import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IBanner } from "types";
import styles from "./homeBanner.module.scss";
import WrapLink from "components/WrapLink";
import { PATH } from "constants/path";
import { Image } from "components/Image";
import { IMAGE_SIZE, resizeImageLoklok } from "constants/global";


interface HomeBannerProps {
  banners: IBanner[];
}



// useEffect(() => {
//   if (!data) return;
//   let historyLS: IHistoryView[] = JSON.parse(localStorage.getItem(LocalStorage.history) || "[]");
//   if (historyLS.length >= 30) {
//     historyLS = historyLS.slice(0, 30);
//   }

const stylesSwiper = {
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#1a1a1a"
};

const HomeBanner = ({ banners }: HomeBannerProps) => {
  return (
    <section>
     
      <Swiper loop navigation={true} modules={[Navigation]} style={stylesSwiper}>
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <WrapLink href={``}>
              <Image
                alt={banner.title}
                className={styles.banner}
                src={resizeImageLoklok(
                  banner.imageUrl,
                  IMAGE_SIZE.banner.width,
                  IMAGE_SIZE.banner.height
                )}
              />
            </WrapLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
