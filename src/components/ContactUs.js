import React from 'react'

const ContactUs = () => {

  const sendMsg = (e) => {
    e.preventDefault(); 
    alert('Mesaj Gönderildi');
  }
  return (
    <div className='contact-u'>
        <div className='contact-us'>
            <div className='contact-us-left'>
                <h2 className='contact-us-h2'>
                <span style={{color: 'red', opacity:'0.7'}}>BeraDev</span> ile
                tanışmaya ne
                dersiniz?
                </h2>
                <p className='contact-us-p'>
                Projelerinize kreatif fikirler ve profesyonel bir dokunuş istiyorsanız bizimle iletişime geçin !
                </p>
                <br></br>
                <span style={{color: 'red', opacity:'0.7'}}> Hemen Arayın</span>
                <p className='contact-us-p bbold'>05XX XXX XXXX</p>
            </div>
            <div className='contact-us-right'>
                <form>
                <label>İsim*</label>
                <br></br>
                <input className='form-input' type='text' placeholder='İsminizi girin'/>
                <br></br>
                <label>Email*</label>
                <br></br>
                <input className='form-input' type='mail' placeholder='isim@sirketismi.com' />
                <br></br>
                <br></br>
                <textarea placeholder='mesajınızı yazın' className='form-input tarea'></textarea>
                <br>
                </br>
                <button  onClick={(e) => sendMsg(e)} className='form-button'>
                    Gönder
                </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs