// Component Unit Tests
import { Tag } from "../src/tag.js";

describe("Given tag imported", () => {
  it("Then tag should be defined", () => {
    expect(Tag).toBeDefined();
  });
  describe("Given tag contains a list of component names", () => {
    it("Then tag should have Test key", () => {
      expect(Tag.TEST).toBeDefined();
    });
    it("Then tag should have PIN key", () => {
      expect(Tag.PIN).toBeDefined();
    });
    it("Then tag should have DOTS key", () => {
      expect(Tag.DOTS).toBeDefined();
    });
    it("Then tag should have LEFT key", () => {
      expect(Tag.LEFT).toBeDefined();
    });
    it("Then tag should have RIGHT key", () => {
      expect(Tag.RIGHT).toBeDefined();
    });
    it("Then tag should have UP key", () => {
      expect(Tag.UP).toBeDefined();
    });
    it("Then tag should have DOWN key", () => {
      expect(Tag.DOWN).toBeDefined();
    });
    it("Then tag should have RESTORE key", () => {
      expect(Tag.RESTORE).toBeDefined();
    });
    it("Then tag should have MAXIMIZE key", () => {
      expect(Tag.MAXIMIZE).toBeDefined();
    });
    it("Then tag should have MINIMIZE key", () => {
      expect(Tag.MINIMIZE).toBeDefined();
    });
    it("Then tag should have CLOSE key", () => {
      expect(Tag.CLOSE).toBeDefined();
    });
    it("Then tag should have HEADER key", () => {
      expect(Tag.HEADER).toBeDefined();
    });
    it("Then tag should have HAMBURGER key", () => {
      expect(Tag.HAMBURGER).toBeDefined();
    });
    it("Then tag should have CONTENTS key", () => {
      expect(Tag.CONTENTS).toBeDefined();
    });
    it("Then tag should have FULLSCREEN key", () => {
      expect(Tag.FULLSCREEN).toBeDefined();
    });
    it("Then tag should have TASKBAR key", () => {
      expect(Tag.TASKBAR).toBeDefined();
    });
    it("Then tag should have MODAL key", () => {
      expect(Tag.MODAL).toBeDefined();
    });
  });
});
