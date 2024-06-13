import React from 'react'

const WhyUs = () => {
  return (
    <div className='why-us-bgc'>
    <div className='why-us'>
        <div className='why-us-left'>
            <h2 className='why-us-h2'>
            Neden
            <br></br>
             <span style={{color: 'red', opacity:'0.7', textDecoration: 'underline'}}>BeraDev</span>'i
            <br></br>
            seçmelisiniz?
            </h2>
            <p className='wul-p'>
            Kurulduğumuz günden bu yana kaliteli hizmet anlayışımızın, müşteri memnuniyetimizin ve daha iyisi için çalışma arzumuzun en büyük getirisi olan işlerimizi görmek için devam edin.
            </p>
            <p className='wul-work'>
            İletişim
            </p>
        </div>
        <div className='why-us-right'>
            <div className='why-us-grid'>              
                <div className='why-uss'>
                    <div className='why-uss-logo'>
                        <img className='why-uss-logo-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_29.svg' />
                    </div>
                    <h2 className='why-uss-h2'>
                    Dosya Paylaşımı

                    </h2>
                    <p className='why-uss-p'>
                    Tüm çalışma dosyalarını sizinle açık şekilde paylaşıyoruz.


                    </p>
                </div> 
                <div className='why-uss'>
                    <div className='why-uss-logo'>
                        <img className='why-uss-logo-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_30.svg' />
                    </div>
                    <h2 className='why-uss-h2'>
                    Takım Yönetimi

                    </h2>
                    <p className='why-uss-p'>
                    Aldığınız hizmet ile ilgili arkadaşlarımız konularının uzmanları!


                    </p>
                </div> 
                <div className='why-uss'>
                    <div className='why-uss-logo'>
                        <img className='why-uss-logo-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_31.svg' />
                    </div>
                    <h2 className='why-uss-h2'>
                    Bulut Depolama

                    </h2>
                    <p className='why-uss-p'>
                    Projelerinize her yerden sınırsız erişim ve yedekleme hizmeti


                    </p>
                </div> 
                <div className='why-uss'>
                    <div className='why-uss-logo'>
                        <img className='why-uss-logo-img' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_32.svg' />
                    </div>
                    <h2 className='why-uss-h2'>
                    Sesli ve Görüntülü arama

                    </h2>
                    <p className='why-uss-p'>
                    Projeniz ile ilgili alacağınız desteklerde 7/24 canlı destek sunuyoruz.


                    </p>
                </div> 
            </div>     
        </div>
    </div>
    </div>
  )
}

export default WhyUs