import { useEffect } from "react";

// Sets the document title and meta description for a page.
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}

// Fades in every `.reveal` element when it scrolls into view.
export function useReveal(deps = []) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps);
}
