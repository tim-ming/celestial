import { derived, writable } from "svelte/store";

export const screen = writable({
  x: 0,
  y: 0,
});

export const screenSize = derived(screen, ($screen) => {
  if ($screen.x >= 1280) {
    return "xl";
  } else if ($screen.x >= 1024) {
    return "lg";
  } else if ($screen.x >= 768) {
    return "md";
  } else if ($screen.x >= 640) {
    return "sm";
  } else {
    return "xs";
  }
});
