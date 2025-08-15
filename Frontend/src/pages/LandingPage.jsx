import React from 'react';

function LandingPage() {
  return (
    <main>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Welcome to QuizApp</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              The ultimate quiz experience.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Challenge your friends and test your knowledge on thousands of topics.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
