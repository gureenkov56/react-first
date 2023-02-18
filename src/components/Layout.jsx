import React, { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './part/Header'
import Footer from './part/Footer'



function Layout() {
    const app = useRef(null)

    return (
        <div className='App' ref={app}>
            <Header appNode={app} />
            <section className="content">
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}

export default Layout