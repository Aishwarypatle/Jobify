'use client';

import CustomButton from '@/components/ui/Button';
import CustomInput from '@/components/ui/Input';
import { useRegisterMutation } from '@/service/query/auth/useAuthQuery';
import { Eye, EyeOff, MailOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



export default function SignUpPage() {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setIsLoading] = useState<boolean>(false)

    const { mutate, isPending, isSuccess } = useRegisterMutation()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }   
    console.log(email);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const payload = {
            name: firstName + ' ' + lastName,
            email,
            password
        }

        console.log({payload})
        try {
            
            const response = mutate(payload)
            console.log({response});
            
            // console.log('Login attempt:', { email, password });
        } catch (err) {
            // setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md flex flex-col gap-6 p-8 ">
                <div className='flex justify-center items-center '>
                    <Image
                        src="/applogo.svg"
                        alt="Jobify Logo"
                        width={280}
                        height={100}
                    />
                </div>
                <div className='flex justify-center items-center mb-2'>
                    <h1 className='font-semibold tracking-wide text-3xl'>Register Here</h1>
                </div>

                <div className='flex justify-center items-center mb-2'>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 gap-4 flex flex-col">
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='border border-gray-200 p-2 rounded-xl flex items-center'>
                            <CustomInput 
                                value={firstName}
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='First Name'
                                type='text'
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='border border-gray-200 p-2 rounded-xl flex items-center'>
                            <CustomInput 
                                value={lastName}
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='Last Name'
                                type='text'
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className='border border-gray-200 p-2 rounded-xl flex items-center'>
                            <CustomInput 
                                value={email}
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='Email'
                                type='text'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className='px-4'>
                                <MailOpen size={16} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='border border-gray-200 p-2 rounded-xl flex items-center'>
                            <CustomInput 
                                value={password}
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='Password'
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}       
                            />
                            <div className='px-1'>
                                <CustomButton
                                    handler={handleShowPassword}
                                    className='bg-transparent text-gray-700 hover:!bg-slate-200 rounded-full focus:bg-transparent'
                                >
                                    {!showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                </CustomButton>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}