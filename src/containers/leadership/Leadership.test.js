import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import Leadership from "./Leadership";
import LeadershipCard from "../../components/leadershipCard/LeadershipCard";
import {StyleProvider} from "../../contexts/StyleContext";

describe("Leadership", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  const renderWithTheme = component => {
    act(() => {
      ReactDOM.render(
        <StyleProvider value={{isDark: true, changeTheme: jest.fn()}}>
          {component}
        </StyleProvider>,
        container
      );
    });
  };

  it("renders the introduction and all three delegate cards", () => {
    renderWithTheme(<Leadership />);

    expect(
      container.querySelector("#leadership-global-engagement")
    ).not.toBeNull();
    expect(container.querySelectorAll(".leadership-card")).toHaveLength(3);
    expect(
      container.querySelectorAll(".leadership-card-details li")
    ).toHaveLength(12);
    expect(container.textContent).toContain("Berlin, Germany");
    expect(container.textContent).toContain("Brussels, Belgium");
    expect(container.textContent).toContain("Tirana, Albania");
    expect(container.textContent).toContain("Youth Development Forum 2026");
    expect(container.textContent).toContain(
      "Leadership Conference on Global Development 2026"
    );
    expect(container.textContent).toContain("Future Leaders Assembly 2026");
    expect(container.textContent).toContain(
      "Headway Institute of Strategic Alliance (HISA)"
    );
    expect(container.textContent).not.toContain("representing Lebanon");
    expect(container.textContent).not.toContain(
      "Selected as a fully funded delegate"
    );
    expect(container.textContent).toContain(
      "Beyond software development, I take part"
    );
  });

  it("does not render empty optional card content", () => {
    renderWithTheme(
      <LeadershipCard
        isDark={false}
        engagement={{
          location: "Test Location",
          country: "Test Country",
          details: []
        }}
      />
    );

    expect(container.querySelector(".leadership-card-date")).toBeNull();
    expect(container.querySelector(".leadership-card-organization")).toBeNull();
    expect(container.querySelector(".leadership-card-role")).toBeNull();
    expect(container.querySelector(".leadership-card-details")).toBeNull();
  });

  it("renders card metadata in the intended visual order", () => {
    renderWithTheme(<Leadership />);

    const card = container.querySelector(".leadership-card");
    const classes = Array.from(card.children).map(child => child.className);

    expect(classes).toEqual([
      "leadership-card-location-row",
      "leadership-card-programme",
      "leadership-card-date",
      "leadership-card-organization",
      "leadership-card-role",
      "leadership-card-details"
    ]);
  });
});
