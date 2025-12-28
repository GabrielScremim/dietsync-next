'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) return null;

    return (
        <>
            <Layout>
                <main style={{ marginLeft: 240, padding: 20 }}>
                    {children}
                </main>
            </Layout>
        </>
    );
}
