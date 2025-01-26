import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-3xl font-bold py-4 px-8 rounded-md shadow-md">
        Todo App
      </header>

      {/* Main Content */}
      <main className="w-full max-w-md bg-white rounded-lg shadow-lg mt-8 p-6">
        {/* Input Section */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-4">
          {/* Todo Item */}
          <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-800">Sample Task 1</span>
            <div className="flex space-x-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-sm">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm">
                Delete
              </button>
            </div>
          </li>

          <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-800">Sample Task 2</span>
            <div className="flex space-x-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-sm">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
