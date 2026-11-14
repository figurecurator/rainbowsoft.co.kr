const samlgateHost = "samlgate.rainbowsoft.co.kr";
const samlgateHome = new Set(["/samlgate", "/samlgate/", "/samlgate/index.html"]);

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (samlgateHome.has(url.pathname)) {
      return Response.redirect("https://" + samlgateHost + "/" + url.search, 302);
    }
    return env.ASSETS.fetch(request);
  },
};
