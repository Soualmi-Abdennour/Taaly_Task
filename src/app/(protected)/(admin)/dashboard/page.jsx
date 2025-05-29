import ActivityCard from '@/components/admin-dashboard/ActivityCard';
import AttendanceCard from '@/components/admin-dashboard/AttendanceCard';
import LearnersTable from '@/components/admin-dashboard/LearnersTable';
import ManageOrganizationsButton from '@/components/admin-dashboard/ManageOrganizationsButton';
import OrganizationsCarousel from '@/components/admin-dashboard/OrganizationsCarousel';
import SideNavBar from '@/components/admin-dashboard/SideNavBar'
import TotalsCards from '@/components/admin-dashboard/TotalsCards';
import React from 'react'

function Page() {
    return (
      <section className="flex justify-center gap-4">
        <SideNavBar></SideNavBar>
        <main className='flex-1 bg-primary rounded-16 py-10 px-16'>
            <TotalsCards></TotalsCards>
            <LearnersTable></LearnersTable>
            <OrganizationsCarousel></OrganizationsCarousel>
        </main>
        <aside className='w-[267px] flex gap-5 flex-col'>
          <ActivityCard></ActivityCard>
          <AttendanceCard></AttendanceCard>
          <ManageOrganizationsButton></ManageOrganizationsButton>
        </aside>
      </section>
    );
}

export default Page
