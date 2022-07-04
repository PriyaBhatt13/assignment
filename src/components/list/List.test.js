import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "./List";

const repoArr = [
  {
    name: "repo1",
    language: "ts",
    forks: 1,
    archieved: false,
    watchers: 2
  },
  {
    name: "repo2",
    language: "js",
    forks: 3,
    archieved: true,
    watchers: 4
  }
];

test("Renders List Component", () => {
  const { container } = render(<List data={repoArr} />);

  // should render repos in the given data
  const tableContent = container.getElementsByTagName("tbody")[0].children;
  expect(tableContent.length).toBe(repoArr.length);

  // should render repo name
  const firstRepoName = screen.getByText(repoArr[0].name);
  expect(firstRepoName).toBeInTheDocument();
});
