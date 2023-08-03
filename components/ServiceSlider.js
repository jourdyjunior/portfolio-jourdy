import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Build a strong brand identity with consistent visuals and strategies.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creative solutions for graphic, web, and product design.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Expert developers for websites, apps, and custom software.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Engaging content for ads, articles, and video scripts.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boost your website search engine ranking with effective strategies.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[ FreeMode, Pagination ]}
      className='h-[300px] '
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg  sm:px-3 gap-x-5 py-8 flex justify-between 
            group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
