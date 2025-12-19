import Navbar from '@/components/layout/Navbar'
import FilterBar from '@/components/layout/FilterBar'
import JobLists from '@/components/Jobs/JobLists'
import Footer from '@/components/layout/Footer'



export default function JobsPage() {
    return ( 
        <div className='min-h-screen bg-slate-100 gap-6 items-center'>
            <div className='pb-12'>
                <Navbar />
            </div>
            <main className='px-8 my-16 max-w-5xl mx-auto'>
                <FilterBar />
                    <div className='mt-8'>
                        <JobLists />
                    </div>
            </main>
            <Footer />
        </div>
    )
}