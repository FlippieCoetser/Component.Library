type Components = {
  [key in
    | "Test"
    | "Pin"
    | "Dots"
    | "Left"
    | "Right"
    | "Up"
    | "Down"
    | "Restore"
    | "Maximize"
    | "Minimize"
    | "Close"
    | "Header"
    | "Hamburger"
    | "Contents"
    | "Fullscreen"
    | "Taskbar"
    | "Modal"]: string;
};

/**
 * Provides a list of all the web components with tags
 * @enum {Components}
 */
export const components: Components = {
  Test: "component-test",
  Pin: "button-pin",
  Dots: "button-dots",
  Left: "button-left",
  Right: "button-right",
  Up: "button-up",
  Down: "button-down",
  Restore: "button-restore",
  Maximize: "button-maximize",
  Minimize: "button-minimize",
  Close: "button-close",
  Header: "bar-header",
  Hamburger: "button-hamburger",
  Contents: "button-contents",
  Fullscreen: "button-fullscreen",
  Taskbar: "task-bar",
  Modal: "app-modal",
};
