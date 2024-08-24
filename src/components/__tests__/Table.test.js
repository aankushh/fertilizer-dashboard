import React from "react";
import { render } from "@testing-library/react";
import Table from "../Table";
import data from "../../data.json";

describe("Table Component", () => {
  test("renders table component correctly", () => {
    const { container } = render(<Table rowData={data} />);
    expect(container.querySelector(".ag-theme-alpine")).toBeInTheDocument();
  });

  test("renders correct number of rows", () => {
    const { container } = render(<Table rowData={data} />);
    const grid = container.querySelector(".ag-root-wrapper-body");
    expect(grid.querySelectorAll(".ag-row").length).toBeGreaterThan(0);
  });
});
