// src/test-util.jsx
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// Import additional providers if needed, e.g., AuthProvider

const customRender = (ui, { route = "/", ...options } = {}) => {
  window.history.pushState({}, "Test page", route);

  const Wrapper = ({ children }) => (
    <BrowserRouter>
      {/* Include other providers here if necessary */}
      {children}
    </BrowserRouter>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
