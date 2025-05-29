import React from 'react'
import {LuSettings} from "react-icons/lu"

function ManageOrganizationsButton() {
    return (
        <button className='rounded-16 bg-secondary flex flex-col items-center gap-5 py-8 px-10'>
            <LuSettings size={56} color='#ffffff'></LuSettings>
            <h2 className='text-white text-center font-semibold text-heading-4 max-w-[162]'>Manage Organizations</h2>
        </button>
    )
}

export default ManageOrganizationsButton
