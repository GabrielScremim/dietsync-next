import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  console.log("Token no server-side:", token);

  if (token) {
    redirect('/home');
  } else {
    redirect('/login');
  }
}
