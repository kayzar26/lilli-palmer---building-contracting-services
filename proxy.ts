import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 1. Comprehensive Bot List
 * Includes aggressive scrapers, SEO crawlers (except Google/Bing), and headless clients.
 */
const botPattern =
  /AhrefsBot|SemrushBot|MJ12bot|PetalBot|Baiduspider|YandexBot|DotBot|MauiBot|MegaIndex|BLEXBot|ZoominfoBot|Barkrowler|Applebot|CriteoBot|SurdotlyBot|SeznamBot|GrapeshotCrawler|Mail.RU_Bot|Exabot|MonsterBot|HubSpot|Seekport|Nimbustools|CheckMarkNetwork|Sematext|LinkPreview|BrandVerity|IndeedBot|python-requests|Go-http-client|Java\/|curl\/|Wget\/|PostmanRuntime\/|HeadlessChrome|Headless|Lucidworks|Node-Fetch|Axios|Got|Indy Library|Sqlmap|Nmap|BackDoor|Zmeu|Morfeus|Prowler|Masscan/i;

/**
 * 2. Malicious & Junk Path List
 * Blocks common automated scanner paths and missing legacy assets.
 */
const blocklistPathPattern =
  /\.(env|git|htaccess|php|asp|aspx|jsp|cgi|sql|bak|swp|zip|rar|7z)$|^\/(wp-admin|wp-includes|wp-content|xmlrpc\.php|login\.php|admin\.php|config\.php|setup\.config|phpinfo\.php|eval-stdin\.php|temp-setup\.php|\.well-known\/.*\.php|api\/v1\/auth|shell|console|jenkins|grafana|prometheus|\.aws|\.ssh|apple-touch-icon.*\.png|favicon-.*\.png|android-chrome-.*\.png|mstile-.*\.png|browserconfig\.xml)/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // A. Block malicious path probes or junk paths
  if (blocklistPathPattern.test(pathname)) {
    return new NextResponse(null, { status: 403 });
  }

  // B. Block aggressive/malicious bots
  if (botPattern.test(userAgent)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico
     * - sitemap.xml, robots.txt, llm.txt
     */
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt|llm.txt).*)",
  ],
};
