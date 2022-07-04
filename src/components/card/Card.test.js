import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const testRepo = {
  name: "another repo",
  description: "long description",
  id: 123,
  url: "https://exampleurl.io",
  language: "js",
  forks: 1,
  open_issues: 2,
  watchers: 3,
  subscribers_count: 4,
  private: true
};

test("Renders Card Content", () => {
  const { container } = render(<Card repo={testRepo} />);

  // should render every field in repo object
  const cardContent = container.firstChild.firstChild.children;
  expect(cardContent.length).toBe(Object.keys(testRepo).length + 1);

  // should render repo name
  const repoName = screen.getByText(testRepo.name);
  expect(repoName).toBeInTheDocument();
});
