import React from 'react';

const links = [
    "0-13.binance.com",
    "0-13.bitcoin.com",
    "0-13.dev.api.binance.com",
    "0-13.eu.api.binance.com",
    "0-13.us.api.binance.com",
    "0-130.net.daraz.com",
    "0-132.us.binance.com",
    "0-134.bitcoin.com",
    "0-134.net.daraz.com",
    "0-135.0-132.net.daraz.com",
    "0-136.bitcoin.com",
    "0-14.api.binance.com",
    "0-14.binance.com",
    "0-14.dev.api.binance.com",
    "0-14.eu.api.binance.com",
    "0-14.us.api.binance.com",
    "0-1419333292.us-east-1.elb.cryptohosting.eu",
    "0-144-243f1.fbjs.facebook.com",
    "0-145.eu-central-1.compute.cryptohosting.eu",
    "0-147.bitcoin.com",
    "0-149.bitcoin.com",
    "0-15-2-vector.agent.datadoghq.com"
  ];

const LinksPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Links</h1>
      <div className="grid gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={`http://${link}`}
            className="text-blue-500 hover:underline disabled"
            target="_blank"
            rel="noopener noreferrer"

          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
