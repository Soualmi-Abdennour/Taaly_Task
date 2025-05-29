"use client"

import { DASHBOARD_SIDEBARE_TABS } from '@/constants/constants';
import { ADMINS_URL } from '@/constants/routes';
import { useUser } from '@/providers/UserContextProvider';
import axios from 'axios';
import { useRouter } from 'next/navigation';


function SideNavBar() {
  const {  logout } = useUser();
  const router = useRouter();
 
  const handleLogout = async () => {
    await axios.post(`${ADMINS_URL}/logout`);
    logout();
    router.push("/admin");
  };

    return (
      <aside className="rounded-16  bg-primary pt-10 pb-32 px-3 w-[267px] flex justify-between flex-col">
        <div className="flex flex-col items-center gap-3">
          {DASHBOARD_SIDEBARE_TABS.slice(0, 6).map((field, index) => (
            <button
              className={`${
                index === 0 && "bg-secondary text-white"
              } rounded-8 flex items-center justify-start gap-2 w-full pl-2 py-2`}
            >
              {field.icon}
              <h2 className="text-heading-4 font-medium ">{field.label}</h2>
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          {DASHBOARD_SIDEBARE_TABS.slice(6).map((field, index) => (
            <div
              className={` rounded-8 flex items-center justify-start gap-2 w-full pl-2 py-2`}
            >
              {field.icon}
              <h2 className="text-heading-4 font-medium ">{field.label}</h2>
            </div>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="text-heading-4 font-medium text-center rounded-8  w-full pl-2 py-2 bg-red-300"
        >
          Logout
        </button>
      </aside>
    );
}

export default SideNavBar
