import {withAuth} from 'next-auth/middleware';
import {authOptions} from "@/app/auth-config";

export default withAuth({
    pages: authOptions.pages
});

export const config = {
    matcher: [
        '/((?!api/|_next/|_proxy|_static|_vercel|favicon.ico|sitemap.xml).*)'
    ]
}
