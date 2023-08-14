// pages/domain-checker.js
import { useState } from 'react';

export default function DomainChecker() {
  const [domains, setDomains] = useState('');
  const [result, setResult] = useState([]);

  const handleCheckDomains = async () => {
    try {
      const response = await fetch('/api/check-domainsBlacklist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domains: domains.split('\n') }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error checking domains:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Domain Checker</h1>
      <div className="mb-4">
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded"
          placeholder="Enter domains, one per line"
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCheckDomains}
        >
          Check Domains
        </button>
      </div>
      <div className="mt-4">
        {result.map((domainInfo, index) => (
          <div key={index} className="mb-2">
            <p>
              Domain: {domainInfo['domain-name']},{' '}
              {domainInfo['is-blacklisted'] ? 'Blacklisted' : 'Not Blacklisted'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
