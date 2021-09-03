import { ChevronDownIcon } from "@heroicons/react/solid";
import ShiftCard from "./ShiftCard";

function App() {
  return (
    <main className="App bg-gray-100 p-4 lg:px-40 space-y-6 text-xs">
      <header className="flex justify-between">
        <button className="flex items-center text-center justify-between w-28 bg-white border-2 border-green-400 px-2 py-1 rounded-md">
          <p className="font-medium">Tomorrow</p>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
        <button className="bg-green-500 w-28 text-white px-2 py-1 rounded-md font-medium">
          Add new shift
        </button>
      </header>
      <section className="space-y-6">
        <header className="w-full flex items-center text-left justify-between font-medium px-6 py-4 bg-green-500 text-white rounded-md">
          <h3 className="">Staff Name</h3>
          <h3 className="hidden lg:inline-block">Lead</h3>
          <h3 className="hidden lg:inline-block">Title</h3>
          <h3 className="text-right">Shift Time</h3>
        </header>

        <div className="space-y-8">
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
          <ShiftCard />
        </div>
      </section>
    </main>
  );
}

export default App;
