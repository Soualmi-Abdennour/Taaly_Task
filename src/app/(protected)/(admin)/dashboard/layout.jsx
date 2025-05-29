import Header from '@/components/admin-dashboard/Header'
import React from 'react'

function Layout({children}) {
    return (
        <section className='container pb-10'>
            <Header></Header>
            <section>
                {children}
            </section>
        </section>
    )
}

export default Layout
