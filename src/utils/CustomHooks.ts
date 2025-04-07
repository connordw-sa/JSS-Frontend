import { useEffect } from "react";

// useRef for sidebar so react detects outside click

export function useHandleClickPage(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickPage = (event: MouseEvent) => {
      // ref is sidebar
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    // need to use mousedown instead of click to fire earlier
    // navbar elements were stoppingg propogation
    document.addEventListener("mousedown", handleClickPage);
    // clean up the event listener
    return () => document.removeEventListener("mousedown", handleClickPage);
  }, [ref, callback]);
}
