import { NextResponse, NextRequest } from 'next/server'


export default function middleware(req) {
    const {token} = req.cookies
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = '/login'
    const {pathname} = req.nextUrl
    console.log('Middleware Dashboard pathname = ' + pathname);
    if(!token) {
        return NextResponse.redirect(loginUrl)
    }
}