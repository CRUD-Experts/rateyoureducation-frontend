// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContent } from "./SliderContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HomeCarousel = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				slidesPerView={1}
				navigation={{
					nextEl: ".nextBtn",
					prevEl: ".prevBtn",
				}}
				pagination={{ clickable: true }}
				autoplay={{ delay: 5000 }}
				loop={true}
				className="w-full h-full bg-black">
				<button
					className="nextBtn">
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
				<button
					className="prevBtn">
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>

				<SwiperSlide>
					<SliderContent
						imgSrc="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
						title="Rate, Rank, and Revolutionize."
						subTitle="Transform your university experience. Share your insights and help shape the future of education."
						actionText="Get Started"
						actionRef="/"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<SliderContent
						imgSrc="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						title="Unleash the Power of Your Opinion."
						subTitle="Your ratings matter! Contribute to the academic community by sharing your valuable feedback and ratings."
						actionText="Rate Now"
						actionRef="/"
					/>
				</SwiperSlide>

				<SwiperSlide>
					<SliderContent
						imgSrc="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
						title="Discover the Best Lecturers and Universities"
						subTitle="Make informed decisions about your education. Explore our rankings based on student ratings, research, and citations."
						actionText="Explore Rankings"
						actionRef="/"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SliderContent
						imgSrc="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
						title="Your Voice Matters."
						subTitle="Empower yourself and fellow students by sharing your experiences. Help others find the best learning environments."
						actionText="Share Your Feedback"
						actionRef="/"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
