import { NextResponse, NextRequest } from 'next/server'

export default function middleware(req) {
  const { token } = req.cookies;
  console.log(token);
  const { pathname } = req.nextUrl
  console.log(pathname);
  
  // const res = NextResponse.next()
  // console.log(res);

  res.cookie('session_from_server', 'abcd', {

    httpOnly: true,
  })

    console.log(req.cookies);
return res;
  // if (token  && pathname == '/login') {
  //   const url =  req.nextUrl.clone()
  //   url.pathname = '/dashboard'
  //   return NextResponse.redirect(url)
  //   // return NextResponse.rewrite(new URL('/dashbard', req.url))
  //   // return NextResponse.redirect(new URL('/dashbard', req.url))
  // }

  // if(pathname === '/none') {
  //   return NextResponse.rewrite(new URL('/notFound', req.url))
  // }

}
