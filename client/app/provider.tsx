'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react'
import '../service/api/intereceptor'
import { Provider } from 'react-redux'
import { store } from '@/lib/store'

export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {children}  
                </Provider>
        </QueryClientProvider>
    )
}
