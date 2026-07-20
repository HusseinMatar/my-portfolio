import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
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
});
