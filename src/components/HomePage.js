import React from 'react'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='banner-left'>

          <div className='banner-text'>
            İşiniz dijitalde,
            <br></br>
            çözümü <span className='banner-span'>BeraDev'de</span>
          </div>
          <p className='banner-text-2'>
          Size özel çözümleriyle oluşturduğu işlerin mimarı 
          <br></br>
          BeraDev, performans odaklı dijital bir ajanstır.
          </p>
          <div className='banner-buttons'>
            <div className='hizmet'>
            <a className='hizmet-a' href=''> Hizmetlerimiz</a>

            </div>
            <div className='call-you'>
              <a href=''> Sizi Arayalım</a>
              <img className='call-you-icon' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_23.svg' />
            </div>
          </div>
          <div className='bl-imgs'>
            <div className='bl-imgs-l'>
              <div className='bl-imgs-l1'>
                <img src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_02.png' />
              </div>
            </div>
            <div className='bl-imgs-r'>
              <div className='bl-imgs-r1'>
                <img src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_03.png' />
              </div>
              <div className='bl-imgs-r2'>
              <img src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_04.png' />

              </div>
            </div>
          </div>
        </div>



        <div className='banner-right'>
          <div className='banner-right-main-flex'>
            <div className='banner-right-1'>
                <div className='up-down-icon'>
                  <img className='up-down-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/shape/shape_03.svg' />
                </div>
                <div className='br1-im1'>
                <img src="https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_05.png" />
                </div>
                <div className='br1-im2'>
                <img src="https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_06.png" />

                </div>
            </div>
            <div className='banner-right-2'>
                <div className='br2-im1'>
                  <img src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_07.png' />
                </div>
                <div className='br2-im2'>
                  <img src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/assets/screen_08.png' />
                </div>
            </div>
          </div>
        </div>

    
        <div className='banner-images-mobile'>
        </div>
      </div>
    </div>
  )
}

export default HomePage