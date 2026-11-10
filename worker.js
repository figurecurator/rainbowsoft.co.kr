const samlgateHost = "samlgate.rainbowsoft.co.kr";
const samlgateHome = new Set(["/samlgate", "/samlgate/", "/samlgate/index.html"]);
const samlgateAssets = new Map([
  ["/", "/samlgate/"],
  ["/styles.css", "/samlgate/styles.css"],
]);

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === samlgateHost) {
      if (url.protocol === "http:") {
        url.protocol = "https:";
        return Response.redirect(url, 301);
      }
      if (url.pathname === "/index.html") {
        return Response.redirect(new URL("/" + url.search, url), 301);
      }
      const assetPath = samlgateAssets.get(url.pathname);
      if (!assetPath) return new Response("Not found", { status: 404 });

      url.pathname = assetPath;
      return env.ASSETS.fetch(new Request(url, request));
    }

    if (samlgateHome.has(url.pathname)) {
      return Response.redirect("https://" + samlgateHost + "/" + url.search, 302);
    }
    return env.ASSETS.fetch(request);
  },
};
