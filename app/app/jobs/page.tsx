import { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

'use client';


export default function JobsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');

    const featuredJobs = [
        {
            id: 1,
            title: 'Senior React Developer',
            company: 'Tech Corp',
            location: 'San Francisco, CA',
            salary: '$120k - $160k',
            type: 'Full-time',
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            company: 'Creative Studios',
            location: 'New York, NY',
            salary: '$90k - $130k',
            type: 'Full-time',
        },
        {
            id: 3,
            title: 'Backend Engineer',
            company: 'Cloud Systems',
            location: 'Remote',
            salary: '$100k - $150k',
            type: 'Full-time',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="bg-indigo-600 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
                    <p className="text-lg mb-8 text-indigo-100">
                        Search millions of jobs and get the insights you need.
                    </p>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1 flex items-center bg-white rounded-lg px-4">
                            <Search className="text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-3 px-4 text-gray-700 outline-none"
                            />
                        </div>
                        <div className="flex-1 flex items-center bg-white rounded-lg px-4">
                            <MapPin className="text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full py-3 px-4 text-gray-700 outline-none"
                            />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Jobs */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Jobs</h2>
                <div className="grid gap-6">
                    {featuredJobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                                    <p className="text-gray-600">{job.company}</p>
                                </div>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                    {job.type}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase size={18} />
                                    {job.salary}
                                </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-800 font-semibold">
                                View Details →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}