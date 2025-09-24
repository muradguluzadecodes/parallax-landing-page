import { useEffect, useState } from "react";

/**
 * React hook to track a CSS media query in TypeScript
 * @param query CSS media query string (e.g. "(min-width: 1024px)")
 * @returns boolean - true if the query currently matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList: MediaQueryList = window.matchMedia(query);

    // Initialize
    setMatches(mediaQueryList.matches);

    // Listener with correct type
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
