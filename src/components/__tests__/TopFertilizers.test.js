import React from "react";
import { render, screen } from "@testing-library/react";
import TopFertilizers from "../TopFertilizers";
import data from "../../data.json";

describe("TopFertilizers Component", () => {
  test("renders Top 5 Fertilizers with Most Requirement", () => {
    render(<TopFertilizers data={data} />);
    expect(
      screen.getByText("Top 5 Fertilizers with Most Requirement")
    ).toBeInTheDocument();
  });

  test("renders Top 5 Fertilizers with Least Availability", () => {
    render(<TopFertilizers data={data} />);
    expect(
      screen.getByText("Top 5 Fertilizers with Least Availability")
    ).toBeInTheDocument();
  });

  test("renders fertilizer items", () => {
    render(<TopFertilizers data={data} />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(0); // Ensure items are rendered
  });
});
