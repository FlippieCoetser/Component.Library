// Component Unit Tests
import { Components } from "../src/Components.js";

describe("Given components imported", () => {
  it("Then components should be defined", () => {
    expect(Components).toBeDefined();
  });
  describe("Given components contains a list of component names", () => {
    it("Then components should have Test key", () => {
      expect(Components.Test).toBeDefined();
    });
    it("Then components should have Pin key", () => {
      expect(Components.Pin).toBeDefined();
    });
    it("Then components should have Dots key", () => {
      expect(Components.Dots).toBeDefined();
    });
    it("Then components should have Left key", () => {
      expect(Components.Left).toBeDefined();
    });
    it("Then components should have Right key", () => {
      expect(Components.Right).toBeDefined();
    });
    it("Then components should have Up key", () => {
      expect(Components.Up).toBeDefined();
    });
    it("Then components should have Down key", () => {
      expect(Components.Down).toBeDefined();
    });
    it("Then components should have Restore key", () => {
      expect(Components.Restore).toBeDefined();
    });
    it("Then components should have Maximize key", () => {
      expect(Components.Maximize).toBeDefined();
    });
    it("Then components should have Minimize key", () => {
      expect(Components.Minimize).toBeDefined();
    });
    it("Then components should have Close key", () => {
      expect(Components.Close).toBeDefined();
    });
    it("Then components should have Header key", () => {
      expect(Components.Header).toBeDefined();
    });
    it("Then components should have Hamburger key", () => {
      expect(Components.Hamburger).toBeDefined();
    });
    it("Then components should have Contents key", () => {
      expect(Components.Contents).toBeDefined();
    });
    it("Then components should have Fullscreen key", () => {
      expect(Components.Fullscreen).toBeDefined();
    });
    it("Then components should have Taskbar key", () => {
      expect(Components.Taskbar).toBeDefined();
    });
    it("Then components should have Modal key", () => {
      expect(Components.Modal).toBeDefined();
    });
  });
});
