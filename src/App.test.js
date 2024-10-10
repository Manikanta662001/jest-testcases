import { screen } from "@testing-library/react";
import App from "./App";
import { render } from "./test-util";
import { GlobalContext } from "./context/GlobalContext";
import React from "react";

const contextValues = {
  currentUser: {},
  setCurrentUser: jest.fn(),
  isLoggedIn: false,
  setIsLoggedIn: jest.fn(),
};
describe("App Component", () => {
  test("should Match snapshot", () => {
    const { asFragment } = render(
      <GlobalContext.Provider value={contextValues}>
        <App />
      </GlobalContext.Provider>
    );
    expect(asFragment(<App />)).toMatchSnapshot();
  });
  test("should show login page ", () => {
    render(
      <GlobalContext.Provider value={contextValues}>
        <App />
      </GlobalContext.Provider>,
      { route: "/" }
    );
    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
  test("should show register page ", () => {
    render(
      <GlobalContext.Provider value={contextValues}>
        <App />
      </GlobalContext.Provider>,
      { route: "/register" }
    );
    expect(screen.getByText("Register Page")).toBeInTheDocument();
  });
  test("should show Dashboard page ", () => {
    render(
      <GlobalContext.Provider value={{ ...contextValues, isLoggedIn: true }}>
        <App />
      </GlobalContext.Provider>,
      { route: "/dashboard" }
    );
    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
  test("should show Dashboard page if we loggedin and if we goto login page", () => {
    render(
      <GlobalContext.Provider value={{ ...contextValues, isLoggedIn: true }}>
        <App />
      </GlobalContext.Provider>,
      { route: "/" }
    );
    expect(screen.getByText("Dashboard Page")).toBeInTheDocument();
  });
});
