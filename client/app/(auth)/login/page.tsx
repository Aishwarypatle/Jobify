'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomInput from '@/components/ui/Input';
import { Eye, EyeOff, MailOpen } from 'lucide-react';
import CustomButton from '@/components/ui/Button';
import { useLoginMutation } from '@/service/query/auth/useAuthQuery';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/slice/user';
import { toast } from 'react-toastify';



export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false) 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const { mutateAsync,  isSuccess, isError} = useLoginMutation()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const payload = {
            email, password
        }
        try {
            const response:any = await toast.promise(mutateAsync(payload),{
                pending: 'Logging in...',
                success: 'User Login Succesfully',
                error: 'Login failed. Please try again.'
            })
            localStorage.setItem('token', response.token)
            dispatch(setUser(response.user))
            router.push("/jobs")
        } catch (err:any) {
            console.log({err})
            await toast.error("Login failed. Please try again.")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md flex flex-col gap-6 p-8 ">
                <div className='flex justify-center items-center '>
                    <Link href={'/jobs'}>
                        <Image 
                            src="/applogo.svg"
                            alt="Jobify Logo"
                            width={280}
                            height={100}
                        />
                    </Link>
                </div>
                <div className='flex justify-center items-center mb-2'>
                    <h1 className='font-semibold tracking-wide text-3xl'>Log in to Remote Talent</h1>
                </div>

                <div className='flex justify-center items-center mb-2'>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
                </div>

                
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 gap-4 flex flex-col">
                    <div>
                        <div className='border border-gray-200 p-2 rounded-xl flex items-center'>
                            <CustomInput 
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='Email'
                                type='e-mail'
                                value={email}
                                onChange={({target}) => setEmail(target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                                className='border-none shadow-none focus:ring-0 bg-transparent'
                                placeholder='Password'
                                type={showPassword ? 'text' : 'password'}
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
                        className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}