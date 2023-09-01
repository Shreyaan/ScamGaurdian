import { NextApiRequest, NextApiResponse } from 'next'

export default async function checkDomains(req: NextApiRequest, res: NextApiResponse) {
  const { domains } = req.body

  // Call both APIs concurrently
  const [blacklistResponse, whitelistResponse] = await Promise.all([
    fetch('https://extension-orpin.vercel.app/api/check-domainsBlacklist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domains: domains.split('\n') }),
    }),
    fetch('https://extension-orpin.vercel.app/api/check-domainsWhitelist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domains: domains.split('\n') }),
    }),
  ])

  // Parse the response data from JSON
  const blacklistData = await blacklistResponse.json()
  const whitelistData = await whitelistResponse.json()

  // Iterate over the domains, and combine the results of both APIs
  const results = domains.split('\n').map((domain: any) => {
    const blacklistItem = blacklistData.find((item: any) => item['domain-name'] === domain)
    const whitelistItem = whitelistData.find((item: any) => item['domain-name'] === domain)

    console.log(blacklistItem, whitelistItem);
    
   let isBlacklisted 
    if(blacklistItem && whitelistItem){
        isBlacklisted = blacklistItem['is-blacklisted'] && !whitelistItem['is-whitelisted']
    }else if(blacklistItem){
        isBlacklisted = blacklistItem['is-blacklisted']
    }else if(whitelistItem){
        isBlacklisted = !whitelistItem['is-whitelisted']
    }else{
        isBlacklisted = false
    }

    return {
      domainName: domain,
      isBlacklisted,
    }
  })

  // Send the combined results
  res.status(200).json(results)
}