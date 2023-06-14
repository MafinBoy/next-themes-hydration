import { TestComponent } from "./testComponent";

export default function Home() {
  return (
    <main>
      <p>This text is rendered on the server</p>
      <TestComponent />
    </main>
  );
}
