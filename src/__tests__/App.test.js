import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import data from "../data.json";

describe("App Component", () => {
  test("renders top bar with title", () => {
    render(<App />);
    expect(screen.getByText("Fertilizer Dashboard")).toBeInTheDocument();
  });

  test("renders navbar links", () => {
    render(<App />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Top Fertilizers")).toBeInTheDocument();
    expect(screen.getByText("Data Table")).toBeInTheDocument();
  });

  test("renders TopFertilizers component", () => {
    render(<App />);
    expect(
      screen.getByText("Top 5 Fertilizers with Most Requirement")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Top 5 Fertilizers with Least Availability")
    ).toBeInTheDocument();
  });

  test("switches to chart tab when clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Chart"));
    expect(screen.getByText("Chart")).toHaveClass("active");
  });

  test("switches to table tab when clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("Table"));
    expect(screen.getByText("Table")).toHaveClass("active");
  });
});
