import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "../UserForm";

test("renders 2 inputs for name and email and 1 button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component and find the element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assert the expected result
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("calls onUserAdd when the form is submitted", () => {
  // NOT BEST IMPLEMENTATION
  
  
});
