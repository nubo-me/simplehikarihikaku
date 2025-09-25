export function sendAffiliateClick(opts: { brand: string; location: string }) {
  try {
    const device = (typeof window !== "undefined" && window.innerWidth <= 768) ? "mobile" : "desktop";
    const page_path = (typeof window !== "undefined") ? window.location.pathname : "/";
    // @ts-ignore
    if (typeof gtag === "function") {
      // @ts-ignore
      gtag("event", "click_affiliate", { ...opts, page_path, device });
    }
  } catch (_) {}
}

export function wireAffiliateLinks(root: Document | HTMLElement = document) {
  const scope = (root as Document).querySelectorAll ? (root as Document) : (root as HTMLElement);
  scope.querySelectorAll<HTMLAnchorElement>("a[data-offer]").forEach((a) => {
    const brand = a.getAttribute("data-offer") || "unknown";
    const location = a.getAttribute("data-location") || "unknown";
    a.addEventListener("click", () => sendAffiliateClick({ brand, location }), { passive: true });
  });
}
