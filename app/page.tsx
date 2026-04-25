'use client'
import { useState } from "react";
import { ConnectKitButton } from "connectkit";
import { useAccount, useReadContract } from "wagmi";
import { formatUnits } from "viem";

const TOKEN_ADDRESS = "0x17422e601c91a1678faa58dfc5f5381bf15c527e";
const minABI = [{ name: 'balanceOf', type: 'function', stateMutability: 'view', inputs: [{ name: 'account', type: 'address' }], outputs: [{ name: 'balance', type: 'uint256' }] }] as const;

export default function Home() {
  const { address, isConnected } = useAccount();
  const [view, setView] = useState<'manager' | 'investor'>('investor');
  const [simBalance, setSimBalance] = useState(0);
  const [logs, setLogs] = useState<{msg: string, time: string}[]>([]);

  const { data: balance } = useReadContract({
    address: TOKEN_ADDRESS, abi: minABI, functionName: 'balanceOf',
    args: [address as `0x${string}`], query: { enabled: !!address }
  });

  const total = (balance ? parseFloat(formatUnits(balance, 18)) : 0) + simBalance;
  const addLog = (m: string) => setLogs(p => [{msg: m, time: new Date().toLocaleTimeString()}, ...p].slice(0, 5));

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-900/40 p-6 rounded-3xl border border-slate-800 backdrop-blur-xl">
          <div>
            <h1 className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">VERIFIBOND RWA</h1>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setView('investor')} className={`text-[9px] font-bold px-3 py-1.5 rounded-full border ${view === 'investor' ? 'bg-blue-600 border-blue-400' : 'border-slate-800 text-slate-500'}`}>INVESTOR PORTAL</button>
              <button onClick={() => setView('manager')} className={`text-[9px] font-bold px-3 py-1.5 rounded-full border ${view === 'manager' ? 'bg-emerald-600 border-emerald-500' : 'border-slate-800 text-slate-500'}`}>MANAGER TERMINAL</button>
            </div>
          </div>
          <ConnectKitButton />
        </div>

        {isConnected ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-6">
              {view === 'investor' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                  <div className="p-8 bg-gradient-to-br from-blue-600/10 to-slate-900 border border-blue-500/20 rounded-[2rem]">
                    <p className="text-blue-400 text-[10px] font-bold uppercase mb-2">Portfolio Value</p>
                    <p className="text-4xl font-mono font-black">${(total * 1.12).toLocaleString()}</p>
                  </div>
                  <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem]">
                    <div className="flex justify-between items-center mb-4">
                       <p className="text-slate-500 text-[10px] font-bold uppercase">Oracle Feed</p>
                       <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                    </div>
                    <div className="space-y-2 text-[11px] font-mono">
                      <div className="flex justify-between text-emerald-400"><span>Berlin Rent</span><span>+€1,240</span></div>
                      <div className="flex justify-between text-emerald-400"><span>Monaco Cap.</span><span>+0.52%</span></div>
                      <div className="flex justify-between text-rose-400"><span>Munich Exp.</span><span>-€420</span></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 bg-slate-900 border border-slate-800 rounded-[2rem] border-l-8 border-l-emerald-500 animate-in fade-in duration-500">
                  <p className="text-slate-500 text-[10px] font-bold uppercase mb-2">Total VBOND Supply</p>
                  <p className="text-4xl font-mono font-black mb-6">{total.toLocaleString()}</p>
                  <div className="flex gap-3">
                    <button onClick={() => {setSimBalance(s => s + 50000); addLog("MINT: +50k VBOND")}} className="px-6 py-3 bg-emerald-600 rounded-xl text-[10px] font-bold">MINT</button>
                    <button onClick={() => {setSimBalance(s => s - 25000); addLog("BURN: -25k VBOND")}} className="px-6 py-3 border border-rose-500 text-rose-500 rounded-xl text-[10px] font-bold">BURN</button>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full lg:w-72 bg-slate-900/50 border border-slate-800 rounded-[2rem] p-6 h-fit">
              <h2 className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-6">Activity Log</h2>
              <div className="space-y-4">
                {logs.length === 0 ? <p className="text-[10px] text-slate-700 italic">Waiting for events...</p> : 
                  logs.map((l, i) => (
                    <div key={i} className="border-l border-slate-700 pl-3 py-1 animate-in slide-in-from-right-2">
                      <p className="text-[8px] text-slate-500">{l.time}</p>
                      <p className="text-[10px] font-bold text-slate-300">{l.msg}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-slate-900/20 rounded-[2rem] border border-dashed border-slate-800">
            <ConnectKitButton />
          </div>
        )}
      </div>
    </main>
  );
}