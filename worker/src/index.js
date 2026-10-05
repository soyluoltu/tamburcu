export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ service: "tambur", status: "ok" }), {
        headers: { "content-type": "application/json; charset=UTF-8" }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
