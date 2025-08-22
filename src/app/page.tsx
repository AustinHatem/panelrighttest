export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to My Test Site
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          This is a simple Next.js app ready for Vercel deployment
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Learn More
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Fast</h2>
            <p className="text-gray-600 dark:text-gray-300">Built with Next.js for optimal performance</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Modern</h2>
            <p className="text-gray-600 dark:text-gray-300">Using React 18 and TypeScript</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Scalable</h2>
            <p className="text-gray-600 dark:text-gray-300">Ready to deploy on Vercel</p>
          </div>
        </div>
      </div>
    </main>
  );
}