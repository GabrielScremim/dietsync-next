'use client';

import Layout from '../components/Layout';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Layout>
                <main >
                    {children}
                </main>
            </Layout>
        </>
    );
}
