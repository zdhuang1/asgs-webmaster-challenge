// src/App.tsx
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Static Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold tracking-tight">Studio Logo</div>
        <div className="flex gap-6">
          <button className="text-gray-600 hover:text-black transition-colors">Services</button>
          <button className="text-gray-600 hover:text-black transition-colors">Portfolio</button>
          <button className="text-gray-600 hover:text-black transition-colors">About</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Main Hero Area */}
      <main className="flex flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Welcome to the homepage demo. This is a responsive, single-page layout built with React, TypeScript, and Tailwind CSS v4.
        </p>
      </main>
    </div>
  )
}

export default App