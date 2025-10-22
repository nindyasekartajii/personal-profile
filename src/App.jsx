import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Tailwind CSS Test
          </h1>
          <p className="text-gray-600">Testing if Tailwind is working properly</p>
        </div>

        {/* Counter Section */}
        <div className="text-center mb-8">
          <div className="bg-gray-100 rounded-lg p-6 mb-4">
            <span className="text-6xl font-bold text-gray-800">{count}</span>
            <p className="text-gray-600 mt-2">Current Count</p>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Decrease
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Increase
            </button>
          </div>
        </div>

        {/* Tailwind Features Test */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tailwind Features Test:</h2>

          {/* Colors */}
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded"></div>
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <div className="w-8 h-8 bg-green-500 rounded"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded"></div>
            <div className="w-8 h-8 bg-purple-500 rounded"></div>
            <span className="text-sm text-gray-600 flex items-center">Colors</span>
          </div>

          {/* Typography */}
          <div className="space-y-1">
            <p className="text-xs text-gray-500">Extra Small Text (xs)</p>
            <p className="text-sm text-gray-600">Small Text (sm)</p>
            <p className="text-base text-gray-700">Base Text</p>
            <p className="text-lg text-gray-800">Large Text (lg)</p>
          </div>

          {/* Spacing & Layout */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <div className="bg-blue-300 p-2 rounded">
              <div className="bg-blue-500 p-1 rounded text-white text-sm text-center">
                Nested Padding Test
              </div>
            </div>
          </div>

          {/* Responsive */}
          <div className="bg-green-200 p-4 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="hidden sm:inline">🖥️ Desktop View</span>
              <span className="sm:hidden">📱 Mobile View</span>
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mt-8 p-4 bg-green-100 border border-green-300 rounded-lg">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-800 font-medium">✅ Tailwind CSS is working!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
