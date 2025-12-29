import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token');
  const { pathname } = req.nextUrl;

  // Permitir acesso às páginas públicas (login)
  if (pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // Redirecionar para /login se não estiver logado
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/dietas', '/treinos', '/receitas'],
};
