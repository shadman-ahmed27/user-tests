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

test("calls onUserAdd when the form is submitted", async () => {
  const mock = jest.fn();

  //render component
  render(<UserForm onUserAdd={mock} />);

  // find 2 inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("John Doe");

  // simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("nake@nake.com");

  // find button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  // assert that onUserAdd is called with email and name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "John Doe",
    email: "nake@nake.com",
  });
});
