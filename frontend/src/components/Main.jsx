
function Main() {
    return (
        <>
            <main className="flex-1 bg-gray-950 text-gray-200 flex items-center justify-center">
                <div className="max-w-xl w-full mx-auto px-4 sm:px-6 py-16">

                    {/* Card */}
                    <div className="bg-gray-900/80 border border-white/10 rounded-xl shadow-lg p-10 text-center">

                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                        Stock Prediction Portal
                    </h1>

                    <p className="mt-4 text-gray-400 text-lg">
                        Predict stock trends using Machine Learning with React & Django REST Framework.
                    </p>

                    <div className="mt-8">
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-2 rounded text-white">Log In</button>
                    </div>

                    </div>
                </div>
            </main>


        </>
    )
}

export default Main