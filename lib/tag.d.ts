/**
 * Web component have a specific tag naming convention defined in the {@link https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name| Spec}.
 * This enum provides a list of all the web components with mappings to valid tags.
 * @enum
 */
export declare const Tag: {
    /**
     * Test component made available for quick experimentation
     */
    readonly TEST: "component-test";
    /**
     * Test component made available for quick experimentation
     */
    readonly COMPONENT: "component-test";
    /**
     * Switch Button
     */
    readonly PIN: "button-pin";
    /**
     * Touch Button
     */
    readonly DOTS: "button-dots";
    /**
     * Touch Button
     */
    readonly LEFT: "button-left";
    /**
     * Touch Button
     */
    readonly RIGHT: "button-right";
    /**
     * Touch Button
     */
    readonly UP: "button-up";
    /**
     * Touch Button
     */
    readonly DOWN: "button-down";
    /**
     * Switch Button
     */
    readonly RESTORE: "button-restore";
    /**
     * Touch Button
     */
    readonly MAXIMIZE: "button-maximize";
    /**
     * Touch Button
     */
    readonly MINIMIZE: "button-minimize";
    /**
     * Touch Button
     */
    readonly CLOSE: "button-close";
    readonly HEADER: "bar-header";
    /**
     * Switch Button
     */
    readonly HAMBURGER: "button-hamburger";
    /**
     * Switch Button
     */
    readonly CONTENTS: "button-contents";
    /**
     * Switch Button
     */
    readonly FULLSCREEN: "button-fullscreen";
    readonly TASKBAR: "task-bar";
    readonly MODAL: "app-modal";
};
export type ComponentTag = keyof typeof Tag;
