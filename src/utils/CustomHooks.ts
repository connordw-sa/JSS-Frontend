import { useEffect } from "react";

// imports ----------------------------------------------------------

export function useHandleClickPage(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickPage = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    // need to use mousedown instead of click to fire earlier
    // navbar elements were stoppingg propogation
    document.addEventListener("mousedown", handleClickPage);

    return () => document.removeEventListener("mousedown", handleClickPage);
  }, [ref, callback]);
}
