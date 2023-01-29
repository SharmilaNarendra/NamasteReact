import { render } from "@testing-library/react";
import Header from "../Header/HeaderComponent";

test("test loading header", async () => {
  const header = render(<Header />);
  expect(header).toMatchSnapshot();
});
