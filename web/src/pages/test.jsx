import { useState } from 'react';

export default function Home() {
  const [domains, setDomains] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const checkDomains = async () => {
    setIsLoading(true);
    const response = await fetch('/api/check-domains', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domains }),
    });

    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  const clearResults = () => {
    setResults([]);
    setDomains('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Domain Blacklist Checker</h1>
        <p className="text-gray-600 mb-6">
          Enter a list of domains below to check if they are blacklisted.
        </p>
        <textarea
          id="domains"
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          className="w-full h-40 p-4 mb-4 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          placeholder="example.com
anotherdomain.net"
        />

        <button
          onClick={checkDomains}
          disabled={isLoading}
          className={`w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Checking...' : 'Check Domains'}
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Results:</h2>
            {results.map((item, index) => (
              <div key={index} className="mb-2">
                <span className={`font-semibold ${item.isBlacklisted ? 'text-red-600' : 'text-green-600'}`}>
                  {item.domainName}:
                </span>{' '}
                {item.isBlacklisted ? 'Blacklisted' : 'Not blacklisted'}
              </div>
            ))}
            <button
              onClick={clearResults}
              className="mt-4 text-blue-500 hover:underline focus:outline-none"
            >
              Clear Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
