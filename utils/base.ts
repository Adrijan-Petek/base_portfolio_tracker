export async function getBaseTokens(address:string){
  // mock tokens
  return [
    { symbol:"USDC", amount:123.45, usd:123.45 },
    { symbol:"ETH", amount:0.12, usd:240 }
  ];
}

export async function getBaseNFTs(address:string){
  return [
    { collection:"BasePunks", tokenId:12 },
    { collection:"BlueCats", tokenId:77 }
  ];
}

export function usdValue(symbol:string, amount:number){
  return amount;
}
