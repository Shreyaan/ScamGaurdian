import { useState } from 'react'

export default function Home() {
  const [domains, setDomains] = useState('')
  const [results, setResults] = useState([])

  const checkDomains = async () => {
    const response = await fetch('/api/check-domains', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domains }),
    })

    const data = await response.json()
    setResults(data)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center w-6/12">
        <textarea
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          className="w-full h-64 p-4 mb-4 bg-white border border-gray-300 rounded shadow appearance-none hover:border-gray-700"
          placeholder="Enter domains separated by newlines"
        />

        <button
          onClick={checkDomains}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Check Domains
        </button>

        {results.length > 0 && (
          <div className="w-full mt-4">
            <h2 className="mb-4 text-lg font-bold text-center">Results:</h2>
            {results.map((item, index) => (
              <div key={index} className="mb-2 text-center">
                <span className="font-bold">{item.domainName}:</span> {item.isBlacklisted ? 'Blacklisted' : 'Not blacklisted'}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}