export const Donation = () => (
  <div className="fixed bottom-4 left-4 mr-4 bg-white text-black shadow rounded-lg max-w-2xl z-999">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-24 leading-6 font-medium text-gray-900">
        We support Ukraine!
      </h3>
      <div className="mt-2 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-xl text-sm text-gray-500 richtext">
          <p>
            Share our site, tell a friend or just send happy vibrations our way.
            Push the button when you are done, and we will donate 20 kroner to
            `Insert were the money goes``.
          </p>

          <p>Total donated: 10.000 kr.</p>
          <p className="text-10">Limited to 500 kr per day</p>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button
            // type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-pink hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Did it! Now donate.
          </button>
        </div>
      </div>
    </div>
  </div>
);
