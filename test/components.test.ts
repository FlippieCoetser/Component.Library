// Component Unit Tests
import { components } from "../src/components.js";

describe("Given components imported", () => {
  it("Then components should be defined", () => {
    expect(components).toBeDefined();
  });
  describe("Given components contains a list of component names", () => {
    it("Then components should have Test key", () => {
      expect(components.Test).toBeDefined();
    });
    it("Then components should have Pin key", () => {
      expect(components.Pin).toBeDefined();
    });
    it("Then components should have Dots key", () => {
      expect(components.Dots).toBeDefined();
    });
    it("Then components should have Left key", () => {
      expect(components.Left).toBeDefined();
    });
    it("Then components should have Right key", () => {
      expect(components.Right).toBeDefined();
    });
    it("Then components should have Up key", () => {
      expect(components.Up).toBeDefined();
    });
    it("Then components should have Down key", () => {
      expect(components.Down).toBeDefined();
    });
    it("Then components should have Restore key", () => {
      expect(components.Restore).toBeDefined();
    });
    it("Then components should have Maximize key", () => {
      expect(components.Maximize).toBeDefined();
    });
    it("Then components should have Minimize key", () => {
      expect(components.Minimize).toBeDefined();
    });
    it("Then components should have Close key", () => {
      expect(components.Close).toBeDefined();
    });
    it("Then components should have Header key", () => {
      expect(components.Header).toBeDefined();
    });
    it("Then components should have Hamburger key", () => {
      expect(components.Hamburger).toBeDefined();
    });
    it("Then components should have Contents key", () => {
      expect(components.Contents).toBeDefined();
    });
    it("Then components should have Fullscreen key", () => {
      expect(components.Fullscreen).toBeDefined();
    });
    it("Then components should have Taskbar key", () => {
      expect(components.Taskbar).toBeDefined();
    });
    it("Then components should have Modal key", () => {
      expect(components.Modal).toBeDefined();
    });
  });
});
