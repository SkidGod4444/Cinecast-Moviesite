import React from 'react';
import MainModals from './MainModals';
import {  FaFacebook,  FaLinkedin,  FaPinterest,  FaReddit,  FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { EmailShareButton, FacebookShareButton,LinkedinShareButton,PinterestShareButton,RedditShareButton,TelegramShareButton,TwitterShareButton, WhatsappShareButton } from 'react-share';
import { MdEmail } from 'react-icons/md';

function ShareModals({ modelOpen, setModelOpen, movie }) {
    const shareData = [
        {
            icon: FaFacebook,
            shareButton: FacebookShareButton,
        },
        {
            icon: FaTwitter,
            shareButton: TwitterShareButton,
        },
        {
            icon: FaWhatsapp,
            shareButton: WhatsappShareButton,
        },
        {
            icon: FaTelegram,
            shareButton: TelegramShareButton,
        },
        {
            icon: FaPinterest,
            shareButton: PinterestShareButton,
        },
        {
            icon: MdEmail,
            shareButton: EmailShareButton,
        },
        {
            icon: FaReddit,
            shareButton: RedditShareButton,
        },
        {
            icon: FaLinkedin,
            shareButton: LinkedinShareButton,
        }
    ];
    const url = `${window.location.protocol}//${window.location.host}/movies/${movie?._id}`;
  return (
    <MainModals modelOpen={modelOpen} setModelOpen={setModelOpen}>
<div className='online-block w-full sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 mx-auto align-middle p-10 overflow-y-auto h-auto sm:h-4/5 lg:h-auto xl:h-auto xl:h-2/5 tablet:w-2/5 tablet:h-auto tablet:max-w-3xl bg-main text-white rounded-2xl' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
  <h2 className='text-2xl'><span className='text-xl font-bold italic'>Share '{movie?.name}' and enjoy together!</span></h2>
  <form className='flex-rows flex-wrap gap-6 mt-6 sm:flex-row sm:items-center'>
    {shareData.map((data, index) => (
      <data.shareButton key={index} url={url} quote='Cinecast | Watch all brand new favourite series & movies only on Cinecast.'>
        <div className='w-12 transitions hover:bg-subMain flex items-center justify-center text-lg h-12 bg-white rounded bg-opacity-30'>
          <data.icon className='' style={{ fontSize: '24px' }}/>
        </div>
      </data.shareButton>
    ))}
  </form>
</div>







    </MainModals>
  );
}

export default ShareModals;
