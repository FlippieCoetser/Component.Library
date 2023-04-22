type Components = {
    [key in "Test" | "Pin" | "Dots" | "Left" | "Right" | "Up" | "Down" | "Restore" | "Maximize" | "Minimize" | "Close" | "Header" | "Hamburger" | "Contents" | "Fullscreen" | "Taskbar" | "Modal"]: string;
};
/**
 * Provides a list of all the web components with tags
 * @enum {Components}
 */
export declare const components: Components;
export {};
