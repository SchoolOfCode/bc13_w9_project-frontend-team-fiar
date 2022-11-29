import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavigationArrows from "./index.js";

test("check whether nav next button renders", async () => {
  const handler = jest.fn();
  render(<NavigationArrows dispatch={handler} />);
  const buttonClick = screen.getByText("Next");
  userEvent.click(buttonClick);
  expect(handler).toHaveBeenCalled();
});

test("check whether nav previous button renders", async () => {
  const handler = jest.fn();
  render(<NavigationArrows dispatch={handler} />);
  const buttonClick = screen.getByText("Previous");
  userEvent.click(buttonClick);
  expect(handler).toHaveBeenCalled();
});
