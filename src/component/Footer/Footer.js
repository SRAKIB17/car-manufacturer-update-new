import React from 'react';
import bgFoote from '../../image/header/logo.png'
import Facebook_oval from './Facebook_oval';
import Messenger_whatsapp_media_social from './Messenger_whatsapp_media_social';
import Youtube_alt from './Youtube_alt';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-800 text-white">
            <div>
                <img src={bgFoote} alt="" />
                <p>Daimier Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
                    <button>
                        <Facebook_oval size='50' color='white' />
                    </button>
                    <button>
                        <Youtube_alt size='60' color='white'/>
                    </button>
                    <button>
                        <Messenger_whatsapp_media_social size='50' color='white'/>
                    </button>
                  
                </div>
            </div>
        </footer>
    );
};

export default Footer;