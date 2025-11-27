import type { NextApiRequest, NextApiResponse } from 'next';
import { getBaseTokens, getBaseNFTs, usdValue } from '../../utils/base';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = String(req.query.address || "");
  if (!address) return res.status(400).json({ error: "Missing address" });

  const tokens = await getBaseTokens(address);
  const nfts = await getBaseNFTs(address);

  const totalUsd = tokens.reduce((a,x)=>a + x.usd, 0);

  res.status(200).json({ address, tokens, nfts, totalUsd });
}
