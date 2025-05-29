import Image from 'next/image';
import React from 'react'

function Layout({children}) {
    return (
      <div className="bg-primary  flex items-center justify-center py-20 min-h-screen">
        <div className="flex rounded-14 w-[1269px] bg-white">
          <div className="flex bg-secondary gap-20 flex-1  flex-col items-center justify-center rounded-14">
            <Image
              src="/images/taaly-logo-1.png"
              alt="Taaly logo"
              width={240}
              height={82}
            ></Image>
            <h2 className="text-white font-semibold text-heading-2 max-w-[450px] text-center">
              ‘Het verbinden van nieuwkomers met de samenleving door hun taal te
              verbeteren’
            </h2>
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    );
}

export default Layout
