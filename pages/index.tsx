import { useState } from 'react';

export default function Home() {
  const [address, setAddress] = useState("");
  const [data, setData] = useState<any>(null);

  async function load() {
    const res = await fetch(`/api/portfolio?address=${address}`);
    const json = await res.json();
    setData(json);
  }

  return (
    <div style={{padding:40,fontFamily:'sans-serif'}}>
      <h1>Base Portfolio Auto‑Tracker</h1>
      <p>Track your tokens & NFTs automatically on Base.</p>

      <input 
        value={address}
        onChange={e=>setAddress(e.target.value)}
        placeholder="Enter wallet address"
        style={{padding:8,width:280}}
      />
      <button onClick={load} style={{marginLeft:8}}>Track</button>

      {data && (
        <div style={{marginTop:20}}>
          <h2>Portfolio</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
