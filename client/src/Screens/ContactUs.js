import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/Head';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { RiUserFollowLine } from 'react-icons/ri';

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'Interactively grow backend ideas for cross-platform models.',
      icon: FiMail,
      contact: 'cinecast@gmail.com',
    },
    {
      id: 2,
      title: 'Follow Us',
      info: 'Distinctively exploit optimal alignments for intuitive bandwidth.',
      icon: RiUserFollowLine,
      contact: '@cinecast_in',
    },
    {
      id: 3,
      title: 'Location',
      info: 'Dar es salaam, Tanzania. 345 Kigamboni, Street No. 12,',
      icon: FiMapPin,
      contact: '',
    }
  ];

  return (
    <div>
      <Layout>
        <div className='min-h-screen container mx-auto px-2 my-6'>
          <Head title="Contact Us" />
          <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
            {ContactData.map((item) => (
              <div key={item.id} className='p-8 bg-dry rounded-lg border border-subMain'>
                <span className='text-3xl block font-extrabold text-subMain'>
                  {React.createElement(item.icon)}
                </span>
                <h4 className='text-lg font-semibold my-2'>
                  {item.title}
                </h4>
                <p className='mb-0 text-text leading-7 text-sm hover:text-subMain'>
                  {item.contact}
                </p>
                <p className='mb-0 text-text leading-7 text-sm'>
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ContactUs;
