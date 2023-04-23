/**
 * Web component have a specific tag naming convention defined in the {@link https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name| Spec}.
 * This enum provides a list of all the web components with mappings to valid tags.
 * @enum
 */
export const Tag = {
  /**
   * Test component made available for quick experimentation
   */
  TEST: "component-test",
  /**
   * Switch Button
   */
  PIN: "button-pin",
  /**
   * Touch Button
   */
  DOTS: "button-dots",
  /**
   * Touch Button
   */
  LEFT: "button-left",
  /**
   * Touch Button
   */
  RIGHT: "button-right",
  /**
   * Touch Button
   */
  UP: "button-up",
  /**
   * Touch Button
   */
  DOWN: "button-down",
  /**
   * Switch Button
   */
  RESTORE: "button-restore",
  /**
   * Touch Button
   */
  MAXIMIZE: "button-maximize",
  /**
   * Touch Button
   */
  MINIMIZE: "button-minimize",
  /**
   * Touch Button
   */
  CLOSE: "button-close",
  HEADER: "bar-header",
  /**
   * Switch Button
   */
  HAMBURGER: "button-hamburger",
  /**
   * Switch Button
   */
  CONTENTS: "button-contents",
  /**
   * Switch Button
   */
  FULLSCREEN: "button-fullscreen",
  TASKBAR: "task-bar",
  MODAL: "app-modal",
} as const;

export type ComponentTag = keyof typeof Tag;
