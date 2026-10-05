const SITE_URL = "https://tambur.canliol.com";

const SEO = `
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<meta name="author" content="Soylu Oltu KAYA">
<meta name="theme-color" content="#fafaf9">
`;

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

    // Static assets are served normally. Clean documentation URLs are
    // explicitly mapped to their directory index so /firmware and
    // /firmware/ both resolve reliably on every deployment.
    let assetRequest = request;
    if (url.pathname === "/") {
      assetRequest = new Request(`${url.origin}/index.html`, request);
    } else if (!url.pathname.includes(".")) {
      const clean = url.pathname.replace(/\/+$/, "");
      assetRequest = new Request(`${url.origin}${clean}/index.html`, request);
    }

    let response = await env.ASSETS.fetch(assetRequest);

    // If a path is an actual asset, retry the original request.
    if (!response.ok && assetRequest !== request) {
      response = await env.ASSETS.fetch(request);
    }

    if (!response.ok) return response;

    // Add lightweight crawler directives to HTML responses without
    // replacing page-specific canonical/title/structured data.
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      const html = await response.text();
      const body = html.includes("</head>") ? html.replace("</head>", `${SEO}</head>`) : html;
      const headers = new Headers(response.headers);
      headers.set("content-type", "text/html; charset=UTF-8");
      return new Response(body, { status: response.status, headers });
    }

    return response;
  }
};
