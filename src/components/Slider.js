import React from 'react'

const Slider = () => {
  return (
    <div className='slider'>
        <div className='slider-flex'>
            <div className='slider-text'>
                <h2 className='slider-text-heading'>
                Başarılı müşteri hikayeleri
                </h2>
                <p className='slider-text-p'>
                Dijital hedeflerinizi verilere dayalı strateji üzerine kurgulayarak markanıza güç katarız.
                </p>

                <p className='slider-text-p bbold'>
                  Tüm çalışmalarımızı gör   
                </p>
            </div>
            <div className='slider-images'>
                <SliderImages />
            </div>
        </div>

        <div className='slider-dots'>
          <ul className='slider-dots-ul'>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
            <li>
              <button className='dots'></button>
            </li>
          </ul>
        </div>
    </div>
  )
}

const SliderImages = () => {
  return(
    <>
    <div className='sliders'>
      <div className='sliderImage no-mobile'>
        <img src='https://www.dveb.com.tr/image/fenumi-png.png' className='slıderImageImg' />
      </div>
      <div className='sliderImage '>
        <img src='https://www.dveb.com.tr/image/bisuaritma-png.png' className='slıderImageImg' />
      </div>
      <div className='sliderImage no-mobile'>
        <img src='https://www.dveb.com.tr/image/hanifisahin-png.png' className='slıderImageImg' />
      </div>
    </div>
    </>
  )
}

export default Slider