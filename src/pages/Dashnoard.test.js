import { screen } from "@testing-library/react";
import { render } from "../test-util";
import { GlobalContext } from "../context/GlobalContext";
import React from "react";
import Dashboard from "./Dashboard";
const contextValues = {
  currentUser: {},
  setCurrentUser: jest.fn(),
  isLoggedIn: true,
  setIsLoggedIn: jest.fn(),
};
describe("Dashboard Component", () => {
  test("should show heading", () => {
    render(
      <GlobalContext.Provider value={contextValues}>
        <Dashboard />
      </GlobalContext.Provider>
    );
    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
});
