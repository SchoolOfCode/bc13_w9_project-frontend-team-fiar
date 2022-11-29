import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentInput from "./index.js";

test("Render username input", async () => {
  const handler = jest.fn();
  render(<CommentInput handleSubmit={handler} />);
  const inputUN = screen.getByPlaceholderText("Username here");
  expect(inputUN).toBeInTheDocument();
  expect(inputUN).toHaveAttribute("type", "text");
});

test("pass valid comment to test comment input field", () => {
  const handler = jest.fn();
  render(<CommentInput handleSubmit={handler} />);
  const inputUN = screen.getByPlaceholderText("comment here");
  userEvent.type(inputUN, "Test comment");
  expect(inputUN).toHaveValue("Test comment");
});

test("testing for whether jest.fn() is called", () => {
  const handler = jest.fn();
  render(<CommentInput handleSubmit={handler} />);
  const buttonClick = screen.getByRole("button");
  userEvent.click(buttonClick);
  expect(handler).toHaveBeenCalled();
});
