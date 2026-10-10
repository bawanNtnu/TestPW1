export function GET({site}){return new Response('User-agent: *\nDisallow: /\nSitemap: '+new URL('sitemap.xml',site).href+'\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}})}
