import CreditSpentCard from "@/components/user-profile/CreditSpentCard";
import HoursSpentCard from "@/components/user-profile/HoursSpentCard";
import ImpactMeasurment from "@/components/user-profile/ImpactMeasurment";
import UserInfoSideBar from "@/components/user-profile/UserInfoSideBar";
import UserLangsInfo from "@/components/user-profile/UserLangsInfo";
import { cookies } from "next/headers";
import axios from "axios";
import { BASE_URL, USERS_URL } from "@/constants/routes";
import { getUserIdFromToken } from "@/lib/utils/getUserIdFromToken";
async function Page() {
  const token = cookies().get("jwt")?.value;
  const { user_id } = await getUserIdFromToken(token);
  const user = await axios
    .get(`${BASE_URL}${USERS_URL}/profile?user_id=${user_id}`, {
      headers: {
        Cookie: `jwt=${token}`,
      },
    })
    .then((response) => response.data)
    .catch();

  return (
    <section className="container pb-10">
      <section className="grid grid-cols-4 gap-5">
        <UserInfoSideBar user={user}></UserInfoSideBar>
        <main className="col-start-2 col-span-3">
          <UserLangsInfo user={user}></UserLangsInfo>
          <section className="grid grid-cols-3 gap-5">
            <div className="flex flex-col items-center gap-5">
              <HoursSpentCard user={user}></HoursSpentCard>
              <CreditSpentCard user={user}></CreditSpentCard>
            </div>
            <div className="col-span-2 col-start-2">
              <ImpactMeasurment user={user}></ImpactMeasurment>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
}

export default Page;
