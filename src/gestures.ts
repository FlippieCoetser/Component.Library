type Gestures = {
  [key in "Click" | "MouseDown"]: string;
};

/**
 * Provides a list of all UI Gestures with event names
 * @enum {Gestures}
 */
export const gestures: Gestures = {
  Click: "click",
  MouseDown: "onmousedown",
};
