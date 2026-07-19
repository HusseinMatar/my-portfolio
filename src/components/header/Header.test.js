import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import Header from "./Header";
import {StyleProvider} from "../../contexts/StyleContext";

jest.mock(
  "react-headroom",
  () =>
    ({children}) =>
      children
);

describe("Header", () => {
  let container;
  let changeTheme;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    changeTheme = jest.fn();

    act(() => {
      ReactDOM.render(
        <StyleProvider value={{isDark: false, changeTheme}}>
          <Header />
        </StyleProvider>,
        container
      );
    });
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  const click = element => {
    act(() => {
      element.dispatchEvent(
        new MouseEvent("click", {bubbles: true, cancelable: true})
      );
    });
  };

  it("renders one accessible hamburger menu with the expected links", () => {
    const button = container.querySelector(".menu-button");

    expect(button.getAttribute("aria-controls")).toBe("primary-navigation");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(
      container.querySelector('input[aria-label="Toggle color theme"]')
    ).not.toBeNull();

    click(button);

    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(
      Array.from(container.querySelectorAll("#primary-navigation a")).map(
        link => link.getAttribute("href")
      )
    ).toEqual([
      "#greeting",
      "#skills",
      "#professional-experience",
      "#education",
      "#projects",
      "#contact"
    ]);
  });

  it("closes after navigation, outside clicks, and Escape", () => {
    const button = container.querySelector(".menu-button");

    click(button);
    click(container.querySelector('#primary-navigation a[href="#skills"]'));
    expect(button.getAttribute("aria-expanded")).toBe("false");

    click(button);
    act(() => {
      document.body.dispatchEvent(new Event("pointerdown", {bubbles: true}));
    });
    expect(button.getAttribute("aria-expanded")).toBe("false");

    click(button);
    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", {key: "Escape"}));
    });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(button);
  });

  it("keeps the theme toggle functional", () => {
    click(container.querySelector('input[aria-label="Toggle color theme"]'));
    expect(changeTheme).toHaveBeenCalledTimes(1);
  });
});
