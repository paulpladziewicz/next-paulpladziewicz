import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from "next/server";

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocale(request) {
    const headers = { 'accept-language': request.headers.get('accept-language') };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname === '/') {
        const locale = getLocale(request);
        request.nextUrl.pathname = `/${locale}/`;
        return NextResponse.redirect(request.nextUrl);
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)'
    ],
};