import Markdown from 'markdown-to-jsx'
export default function Page() {
  const str = `
  # useEffect
  - **Purpose**: **useEffect** is a powerful hook in React that allows you to **perform side effects** within functional components.
  This includes actions that don't directly update the component's state or render, such as:
    - Setting up subscriptions
    - Updating DOM elements
    - Cleaning up
    - Best Practices:
      - Avoid using **useEffect** for side effects that can be handled within the component's render function.
      - Keep the **dependencyArray** as specific as possible to prevent unnecessary re-renders.
      - Use the return statement for **cleanup** to avoid memory leaks.
  - **Dependency Array**:
    - The optional **dependencyArray** is crucial for controlling when the side effect runs.
    - If **empty**, the side effect will run only once after the initial render.
    - If **non-empty**, the side effect will run whenever any of the dependencies change.
    - Use **useEffect** without a dependency array for side effects that should run after every render.
  `
  return (
    <div className="no-twp font-Source_Code_Pro">
      <Markdown options={{ wrapper: 'article', forceBlock: true }}>
        {str}
      </Markdown>
    </div>
  )
}
