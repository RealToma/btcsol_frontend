import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 2,
        img:'polygon',
        title:'Polygon'
    },
    {
        id: 3,
        img:'optimism',
        title:'Optimism'
    },
    {
        id: 4,
        img:'gnosis',
        title:'Gnosis'
    },
    {
        id: 5,
        img:'avalache',
        title:'Avalanche'
    },
    {
        id: 6,
        img:'eth',
        title:'Ethereum'
    },
    {
        id: 7,
        img:'base',
        title:'Base'
    },
    {
        id: 8,
        img:'zksync',
        title:'zkSync'
    },
    {
        id: 9,
        img:'aurora',
        title:'Aurora'
    },
    {
        id: 10,
        img:'klaytn',
        title:'Klaytn'
    },
    {
        id: 12,
        img:'fantom',
        title:'Fantom'
    },
    {
        id: 13,
        img:'arbitrum',
        title:'Arbitrum'
    }
]

import Image from "next/image";

function CustomSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow:<></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        {data.map((item) => (
          <div className="h-[150px] " key={item.id} >
            <div className="flex flex-col items-center justify-center w-full cursor-pointer">
                <Image
                src={`/assets/img/networks/${item.img}.png`}
                width={100}
                height={100}
                className=""
                alt={item.title}
                />
                <p>{item.title}</p>
            </div>
          </div>
        ))}
        
      </Slider>
    </div>
  );
}

export default CustomSlider;
