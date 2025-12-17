import Navbar from '@/components/layout/Navbar'
import FilterBar from '@/components/layout/FilterBar'



export default function JobsPage() {
    return ( 
        <div className='min-h-screen bg-slate-100 gap-6 items-center'>
            <div>
                <Navbar />
            </div>
            <main className='mx-12 px-8 mt-8'>
                <FilterBar />
            </main>
        </div>
    )
}