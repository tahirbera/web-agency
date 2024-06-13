import React from 'react';
import { useInView } from 'react-intersection-observer';




const ListsDesc = () => {
    const {ref: homeRef4, inView: homeInView4} = useInView({
        threshold: 0.1,
    })
    
    return(
        <>
        <div className='lists-desc'>
            <div className='lists-desc-image'>
                <img src='https://dveb.com.tr/frontend/view/theme/default/assets/images/media/img_04.jpg' className='ldi' />
            </div>
            <div className='lists-description'>
                <h3 className='ldh'>
                    Müşterilerimize 
                    <br></br>
                    <span
                    style={{color: 'red', opacity: '0.7'}}
                    >
                        360
                    </span> yardımcı
                    <br />
                    oluyoruz
                </h3>
                <div className='ldd'>
                    
                    Markanızı dijital ile tanıştırarak ihtiyacınız olan yazılım geliştirme çözümlerini sunuyoruz. Yazılım projelerinizi programlama süreçleriyle tamamlayarak markanızın dijitale ayak uydurmasını sağlıyoruz.
                </div>
                    <a href='/' className='lda'>
                        Hakkımızda daha fazlası
                    </a>
            </div>
        </div>


        
        <div className={`number-list ${homeInView4 ? 'vant': ''}`} ref={homeRef4}>
            <div className='nl'>
                 <span className='counter'>
                    10
                </span>                
                <br></br>
                <span className='under-counter'>
                    Yıllık Tecrübe
                </span>
            </div>
            
            <div className='nl'>
                 <span className='counter'>
                    60
                </span>                
                <br></br>
                <span className='under-counter'>
                    Sektör
                </span>
            </div>
            
            <div className='nl'>
                <span className='counter'>
                    500
                </span>                
                <br></br>
                <span className='under-counter'>
                    Proje
                </span>
            </div>
            
        </div>
        </>
    )
}



const Lists = () => {
    const { ref: homeRef3, inView: homeInView3} = useInView({
        threshold: 0.1,
    });
    
    return (
        <>
        <div className={`list-area ${homeInView3 ? 'vvisible' : ''}`} ref={homeRef3}>
            <div className='list-area-lists'>
                <div className='list-area-logo-container'>
                    <img className='list-area-logo' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_24.svg' />
                </div>
                <br/>

                <a href='/' className='list-area-a'>Yazılım Geliştirme</a>
                
                <ul className='list-area-options'>
                    <li>E-ticaret Sitesi</li>
                    <li>Kurumsal Web Sitesi</li>
                    <li>Responsive Web Site</li>
                    <li>Mikro Site Geliştirme</li>
                    <li>Portal Geliştirme</li>
                    <li>İntranet Yazılım</li>
                    <li>Mobil APP Geliştirme</li>
                </ul>
            </div>
            <div className='list-area-lists'>
                <div className='list-area-logo-container'>
                     <img className='list-area-logo' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_25.svg' />
                 </div>
                <br/>

                <a href='/' className='list-area-a'>Kreatif Çözümler</a>
                <ul className='list-area-options'>
                    <li>UI/UX Tasarım</li>
                    <li>Web Tasarım</li>
                    <li>Logo Tasarımı</li>
                    <li>Kurumsal Kimlik
                    </li>
                    <li>Landing Page Tasarımı</li>
                    <li>Banner Tasarımı
                    </li>
                    <li>Afiş Tasarım</li>
                </ul>
            </div>
            <div className='list-area-lists'>
                <div className='list-area-logo-container'>
                    <img className='list-area-logo' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_26.svg' />
                </div>
                <br/>
                <a href='/' className='list-area-a'>Dijital Pazarlama</a>
                <ul className='list-area-options'>
                    <li>Blog İçeriği Üretimi ve Yönetimi</li>
                    <li>E-Mail Marketing</li>
                    <li>Sosyal Medya Pazarlaması</li>
                    <li>Performans Pazarlaması</li>
                    <li>Google Haritalara Kayıt</li>
                    <li>Mobil Uygulama Reklamları</li>
                    <li>Influencer Marketing</li>
                </ul>
            </div>
            <div className='list-area-lists'>
                <div className='list-area-logo-container'>
                    <img className='list-area-logo' src='https://www.dveb.com.tr/frontend/view/theme/default/assets/images/icon/icon_27.svg' />
                </div>
                <br/>
                <a href='/' className='list-area-a'>Sosyal Medya Yönetimi</a>
                <ul className='list-area-options'>
                    <li>Facebook Yönetimi
                    </li>
                    <li>Instagram Yönetimi</li>
                    <li>Twitter Yönetimi</li>
                    <li>Linkedin Yönetimi</li>
                    <li>Sosyal Medya Hesap Yönetimi</li>
                    
                </ul>
            </div>
            
        </div>
        
        </>
    )
}


const HomePage2 = () => {
    const { ref: homeRef, inView: homeInView } = useInView({
        threshold: 0.1,
    });
    const { ref: homeRef2, inView: homeInView2 } = useInView({
        threshold: 0.1,
    });
    
    

    return (
        <>
        <div 
            className={'section-home'} 
        >
            <div 
            className={`section-home-left ${homeInView ? 'visible' : ''}`}
            ref={homeRef}

            >
                Daha iyisi için <br/> 
                <span className='shl'>Çalışıyoruz!</span>
            </div>
            <div 
            className={`section-home-right ${homeInView2 ? 'visible' : ''}`}
            ref={homeRef2}
            >
            BeraDev, müşterilerine kreatif ve performans odaklı deneyim hizmetleri sunarak, yazılım ve görsel ihtiyaçlarını tam hizmet modeli ile çözen dijital reklam ajansıdır.
            </div>
        </div>

        <Lists />
        <ListsDesc />
    </>
    )
}



export default HomePage2;
