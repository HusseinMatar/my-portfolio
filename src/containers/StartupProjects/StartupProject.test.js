import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import StartupProject from "./StartupProject";
import {StyleProvider} from "../../contexts/StyleContext";
import {bigProjects} from "../../portfolio";

describe("StartupProject", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <StyleProvider value={{isDark: true, changeTheme: jest.fn()}}>
          <StartupProject />
        </StyleProvider>,
        container
      );
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it("renders the project introduction as two compact paragraphs", () => {
    const lines = container.querySelectorAll(".project-subtitle-line");

    expect(lines).toHaveLength(2);
    expect(lines[0].textContent).toBe(bigProjects.subtitle[0]);
    expect(lines[1].textContent).toBe(bigProjects.subtitle[1]);
  });

  it("caps the card reveal stagger so the section completes quickly", () => {
    const cards = Array.from(container.querySelectorAll(".flip-card"));
    const delays = cards.map(card =>
      Number.parseInt(card.style.animationDelay)
    );

    expect(cards).toHaveLength(bigProjects.projects.length);
    expect(Math.max(...delays)).toBeLessThanOrEqual(1200);
  });

  it("toggles a project with click or touch-style activation", () => {
    const toggle = container.querySelector(".flip-card-toggle");
    const card = container.querySelector(".flip-card");

    act(() => Simulate.click(toggle));
    expect(card.classList.contains("flip-card-open")).toBe(true);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");

    act(() => Simulate.click(toggle));
    expect(card.classList.contains("flip-card-open")).toBe(false);
  });

  it.each(["Enter", " "])("toggles a focused project with %p", key => {
    const toggle = container.querySelector(".flip-card-toggle");
    const card = container.querySelector(".flip-card");

    act(() => Simulate.keyDown(toggle, {key}));
    expect(card.classList.contains("flip-card-open")).toBe(true);
  });

  it("closes an open project with Escape", () => {
    const toggle = container.querySelector(".flip-card-toggle");
    const card = container.querySelector(".flip-card");

    act(() => Simulate.click(toggle));
    act(() => Simulate.keyDown(card, {key: "Escape"}));

    expect(card.classList.contains("flip-card-open")).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });

  it("keeps reverse-side links independently actionable", () => {
    const toggle = container.querySelector(".flip-card-toggle");

    act(() => Simulate.click(toggle));
    const link = container.querySelector(".project-button");
    act(() => Simulate.click(link));

    expect(link.getAttribute("tabindex")).toBe("0");
    expect(
      link.closest(".flip-card").classList.contains("flip-card-open")
    ).toBe(true);
  });

  it("uses the shared anchor and project-scoped layout classes", () => {
    expect(
      container.querySelector("#projects.section-container")
    ).not.toBeNull();
    expect(container.querySelector(".startup-projects-main")).not.toBeNull();
    expect(container.querySelector("#projects .main")).toBeNull();
  });
});
