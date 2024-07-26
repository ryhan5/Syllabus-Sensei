import React, { useState, useEffect } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);

  const getSideBanners = () => {
    GlobalApi.getSideBanner().then((resp) => {
      console.log(resp);
      setSideBannerList(resp.sideBanners);
    });
  };

  useEffect(() => {
    getSideBanners();
  }, []);

  return (
    <div>
      {sideBannerList.map((item, index) => (
        <div key={index}>
          <Image
            src={item.banner.url} 
            alt="banner"
            width={500}
            height={300}
            onClick={()=>window.open(item?.url)}
            className='rounded-xl cursor-pointer'
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
