import './globals.css';

export default function Home() {
  return (
    <main className = "min-h-screen bg-gray-100 flex items-center justify-center">
      <div className = "text-center">
        <h1 className = "text-4x1 font-bold text-gray-800">Hi, I am Katrina</h1>
        <p className = "mt-4 text-gray-600">Computer Science Student</p>
        <div className = "mt-6">
          <a
            href="/projects"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Projects
            </a>
        </div>
      </div>
    </main>
  )
}