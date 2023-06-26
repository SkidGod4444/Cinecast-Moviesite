import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import MobileFooter from './Footer/MobileFooter'

function Layout({ children}) {
    return (
        <>
        <div className="bg-main text-white">
            <Navbar />
            {children}
            <Footer />
            {/* MOBILE FOOTER */}
            <MobileFooter />
        </div>
        </>
    )
}

export default Layout
