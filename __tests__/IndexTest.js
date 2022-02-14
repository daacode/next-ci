/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

describe('Home', () => {
  it('renders without crashing', () => {
      render(<Home />);
      expect(
        screen.getByRole("heading", { name: "Welcome to Next.js!" })
      ).toBeInTheDocument();
  });
  
  it("Check for Getting Started Text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Get started by editing")).toBeInTheDocument();
  });
});