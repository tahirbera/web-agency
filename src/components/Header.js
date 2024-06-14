import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from 'react';
const Header = () => {
    const [sideBar, setSideBar] = useState(false)
    const [scrollActive, setScrollActive] = useState(false)


    const setNav = () => {
        if(window.scrollY >=10){
            setScrollActive(true)
        } else {
            setScrollActive(false)
        }
    }

    window.addEventListener('scroll', setNav);

    const animationStart = () => {
        setSideBar(!sideBar)
    }
  return (
    <>
    <div className={`header ${scrollActive? 'active-top' : ''}`}>
        <div className={`header-inner ${scrollActive ? 'active-inner': ''}`}>
            <div className='header-logo'>
                <img className='logo' src='https://www.dveb.com.tr/image/logo-png.svg' />
            </div>
            <div className='header-nav' >
                <ul className='header-options'>
                    <li>
                    <a href='' className='header-li'>Ana sayfa</a>      
                    </li>
                    <li>
                    <a href='' className='header-li'>Kurumsal</a>
                    </li>
                    <li>
                    <a href='' className='header-li'>Neler Yapıyoruz?</a>
                    </li>
                    <li>
                    <a href='' className='header-li'>Projeler</a>
                    </li>
                    <li>
                    <a href='' className='header-li'>Kariyer</a>
                    </li>
                </ul>
            </div>
            <div className='header-contact'>
                <a className='iletisim' href=''>İletişim</a>
            </div>
            <div className='tri-line-header' >
            {!sideBar ? 
            <IoIosMenu 
            onClick={animationStart}
             size={'40'}
              />
             : 
            <IoCloseOutline
            onClick={animationStart}
            
            size={'40'}  />  }
            </div>
        </div>
    </div>
    
    <div className={`side-bar ${sideBar ? 'open' : ''}`}>   
            <div className='header-logo'>
                <img className='logo' src='https://www.dveb.com.tr/image/logo-png.svg' />
            </div>
            <div className='side-bar-nav'>
                <ul>
                    <li>
                        <a href='' className='side-bar-li'>
                            Ana Sayfa
                        </a>
                    </li>
                    
                    <li>
                        <a href='' className='side-bar-li'>
                            Kurumsal
                        </a>
                    </li>
                    
                    <li>
                        <a href='' className='side-bar-li'>
                            Neler Yapıyoruz?
                        </a>
                    </li>
                    
                    <li>
                        <a href='' className='side-bar-li'>
                            Projeler
                        </a>
                    </li>
                    
                    <li>
                        <a href='' className='side-bar-li'>
                            Kariyer
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div 
            className='side-bar-footer'
            >
                <span className='side-adress'>Adres</span>
                <br></br>
                <p style={{marginTop: '10px', marginBottom: '20px'}}>Küçükbakkalköy Mah. Mor Orkide Sk. No: 3 İç Kapı No: 2 Ataşehir/İstanbul</p>
                <span>Bizi Arayın</span>
                <br></br>
                <span className='side-number'>08XX XX XXXX</span>
            </div>
    </div>
    </>
  )
}

export default Header