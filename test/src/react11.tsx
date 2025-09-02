import { useState } from "react";

// --- Task 1 ---
function Header() {
  return (
    <header className="p-4 bg-blue-500 text-white text-center text-xl font-bold">
      Welcome to My React Page
    </header>
  );
}

function Content() {
  return (
    <main className="p-4 text-center">
      <p>This is the main content area of the page.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      © 2025 My Website. All Rights Reserved.
    </footer>
  );
}

export function AppTask1() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// --- Task 2 ---
type ChildProps = { message: string };

function Child({ message }: ChildProps) {
  return <h2 className="text-center mt-4 text-lg">Message from Parent: {message}</h2>;
}

function Parent() {
  const greeting = "Hello from the Parent Component!";
  return <div className="p-4"><Child message={greeting} /></div>;
}

export function AppTask2() {
  return <Parent />;
}

// --- Task 3 ---
export function CounterApp() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

// --- TaskSwitcher (DEFAULT EXPORT) ---
export default function TaskSwitcher() {
  const [task, setTask] = useState("task1");

  return (
    <div>
      <div className="flex gap-4 p-4 justify-center">
        <button
          onClick={() => setTask("task1")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Task 1
        </button>
        <button
          onClick={() => setTask("task2")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Task 2
        </button>
        <button
          onClick={() => setTask("task3")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Task 3
        </button>
      </div>

      <div className="mt-6">
        {task === "task1" && <AppTask1 />}
        {task === "task2" && <AppTask2 />}
        {task === "task3" && <CounterApp />}
      </div>
    </div>
  );
}
