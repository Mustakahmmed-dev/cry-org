"use client"

const Error = () => {
    const goHome = () => {
        window.location.href = '/'
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-gray-50 to-white">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <button
                onClick={goHome}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
                Go Home
            </button>
        </div>
    )
}

export default Error