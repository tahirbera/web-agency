import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className='footer-up'>

    </div>
    <div className='footer-contact'>
      <div className='footer-contact-1'>
        <div className='footer-image'>
          <img className='footer-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_34.svg' />
        </div>
        <div className='footer-contact-r'>
          <h2 className='footer-h2'>
            Adres
          </h2>
          <p className='footer-p'>
          Küçükbakkalköy, Mor Orkide Sk No:3, 34750 Ataşehir/İstanbul
          </p>
        </div>
      </div>
      <div className='footer-contact-2'>
      <div className='footer-image'>
          <img className='footer-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_35.svg' />
        </div>
        <div className='footer-contact-r'> 
          <h2 className='footer-h2'>
          İletişim

          </h2>
          <p className='footer-p'>
          BeraDev ile tanışmaya ne dersiniz?
          <br></br>
          05xx xxx xxxx
          </p>
        </div>
      </div>
    </div>
    <div className='footer-down'>
      <div className='footer-list'>
        <div className='footer-logo-container'>
        <img src='https://www.dveb.com.tr/image/logo-white.svg' className='footer-logo' />
 
        </div>
        <p className='footer-p2'><a href='/'>Gizlilik Sözleşmesi</a></p>       
        <p className='footer-p2'><a href='/'>Kullanıcı Sözleşmesi</a></p>       
        <p className='footer-p2'><a href='/'>Hakkımızda</a></p>       
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer