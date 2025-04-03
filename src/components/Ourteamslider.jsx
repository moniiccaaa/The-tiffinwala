
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Ourteamslider=()=>{
 return (
    <>
  
    <div className=" my-5">
     <h3 className="text-center text-3xl py-5" style={{fontFamily:"cursive"}}>Our Team</h3>
      
     <Swiper spaceBetween={30}
        loop={true}
        speed={900}
        autoplay={{
          delay: 3500,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay,Navigation]}
        className="mySwiper" >
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQEp3W-a31_UJw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702550521359?e=1749081600&v=beta&t=V5S4zNrY0LG6KWPWoQA_1GWfnZpFAoO2AmM7o4JXR6E" alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium">Madhumsita Jena</h4>
                 <p >Developer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=" flex flex-col items-center text-center">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHjsE_Q_rcKXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723987184377?e=1749081600&v=beta&t=YVcHzj86Q32T_OvqWPR1frZs595xiPfe4IXMi3lOfTk" alt="teammember img" style={{width:"11.4rem",borderRadius:"50%"}}/>
                <h4 className="mt-2 text-xl font-medium">Mahima Pandey</h4>
                 <p >Developer</p>
                 <p className="px-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur voluptatibus consequatur veritatis harum sunt sapiente! Ratione quae, officiis adipisci dolorem mollitia nihil at voluptatibus.</p>
            </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
    </>
 );
};
export default Ourteamslider;