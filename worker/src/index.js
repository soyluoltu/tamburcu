const SITE_URL = "https://tambur.canliol.com";

const SEO = `
<link rel="canonical" href="${SITE_URL}/">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="author" content="Soylu Oltu KAYA">
<meta name="theme-color" content="#fafaf9">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Tambur S3009">
<meta property="og:title" content="Tambur S3009 | Teknik Dokümantasyon">
<meta property="og:description" content="Tambur S3009 mekanik yapı, tahrik, kontrol mimarisi ve HMI teknik dokümantasyonu.">
<meta property="og:url" content="${SITE_URL}/">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Tambur S3009 | Teknik Dokümantasyon">
<meta name="twitter:description" content="Tambur S3009 mekanik yapı, tahrik, kontrol mimarisi ve HMI teknik dokümantasyonu.">
<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${SITE_URL}/#article`,
      "headline": "Tambur S3009 — Teknik Dokümantasyon",
      "description": "Tambur S3009 mekanik yapı, tahrik, kontrol mimarisi ve HMI teknik dokümantasyonu.",
      "inLanguage": "tr-TR",
      "author": {
        "@type": "Person",
        "name": "Soylu Oltu KAYA",
        "url": "https://www.youtube.com/@soyluoltu"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Canliol",
        "url": "https://canliol.com"
      },
      "mainEntityOfPage": `${SITE_URL}/`,
      "isPartOf": { "@id": `${SITE_URL}/#website` }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": `${SITE_URL}/`,
      "name": "Tambur S3009",
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Tambur S3009", "item": `${SITE_URL}/` }
      ]
    }
  ]
})}</script>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ service: "tambur", status: "ok" }), {
        headers: { "content-type": "application/json; charset=UTF-8" }
      });
    }

    if (url.pathname === "/robots.txt" || url.pathname === "/sitemap.xml") {
      return env.ASSETS.fetch(request);
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const response = await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
      if (!response.ok) return response;
      const html = await response.text();
      const body = html.replace("</head>", `${SEO}</head>`);
      return new Response(body, {
        status: response.status,
        headers: new Headers(response.headers)
      });
    }

    return env.ASSETS.fetch(request);
  }
};
