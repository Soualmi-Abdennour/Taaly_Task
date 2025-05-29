import GeneralInfoEdit from '@/components/user-profile/GeneralInfoEdit'
import LoginInfoEdit from '@/components/user-profile/LoginInfoEdit'
import { BASE_URL, USERS_URL } from '@/constants/routes';
import { getUserIdFromToken } from '@/lib/utils/getUserIdFromToken';
import axios from 'axios';
import { cookies } from 'next/headers';
import React from 'react'

async function Page() {
    const token = cookies().get("jwt")?.value;
    const {user_id} = await getUserIdFromToken(token);
    const user = await axios.get(`${BASE_URL}${USERS_URL}/profile?user_id=${user_id}`, {
        headers: {
          Cookie: `jwt=${token}`,
        },
      })
      .then((response) => response.data)
      .catch();
    return (
        <section className='grid grid-cols-3 gap-20 container mt-10'>
            <LoginInfoEdit user={user}></LoginInfoEdit>
            <main className='col-span-2 col-start-2 bg-primary rounded-16 p-10'>
                <GeneralInfoEdit user={user}></GeneralInfoEdit>
            </main>
        </section>
    )
}

export default Page
