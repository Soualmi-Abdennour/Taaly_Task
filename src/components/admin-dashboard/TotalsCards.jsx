import { TOTALS_CARDS } from '@/constants/constants'
import React from 'react'

function TotalsCards() {
    return (
        <div className='mb-5 grid grid-cols-4 items-center gap-5'>
            {TOTALS_CARDS.map((total)=>(
                <div className='rounded-16 p-3 bg-secondary flex items-center gap-3 h-full'>
                    <div className='size-14 bg-white flex items-center justify-center rounded-full'>
                        {total.icon}
                    </div>
                    <div className='flex-1'>
                        <h2 className='text-white font-bold text-heading-6 text-wrap'>{total.label}</h2>
                        <h2 className='font-bold text-white text-heading-4'>{total.value}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TotalsCards
