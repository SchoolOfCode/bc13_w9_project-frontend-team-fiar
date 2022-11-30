import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Finds morning button", () => {
  render(<App />);
  screen.debug();
  const morningButton = screen.getByText(/Morning/i);
  expect(morningButton).toBeInTheDocument();
});

test("Finds Afternoon button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/adsfasdf/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

test("Finds Monday button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/Monday/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

test("Finds Tuesday button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/Tuesday/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

test("Finds Wednesday button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/Wednesday/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

test("Finds Thursday button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/Thursday/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

test("Finds Friday button and clicks", async () => {
  render(<App />);
  const Button = screen.getByText(/Friday/i);
  expect(Button).toBeInTheDocument();
  await userEvent.click(Button);
});

// afterAll(() => {
//   pool.end();
// });
