import { render, screen, within } from "@testing-library/react";
import UserList from "../UserList";

test("render one row per user", () => {
  // render the component
  const users = [
    { name: "John Doe", email: "ayo@ayo.com" },
    { name: "Jane Doe", email: "aya@aya.com" },
  ];

  render(<UserList users={users} />);

  // find the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assert correct number of rows in the table
  expect(rows).toHaveLength(2);
});

// test('renders email and name of each user', () => {});
