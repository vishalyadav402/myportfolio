'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function NotFound(){

    const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Clear the timer on unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, [router]);


    return (
        <div style={{
            backgroundColor: '#333',
            color: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <h1 style={{ fontSize: '3rem' }}>404 - Page Not Found</h1>
            <p style={{ fontSize: '1.5rem' }}>You will be redirected to the homepage shortly...</p>
          </div>
    )
}