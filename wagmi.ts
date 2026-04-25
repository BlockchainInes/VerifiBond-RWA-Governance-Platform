import { http, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { getDefaultConfig } from 'connectkit'

export const config = createConfig(
  getDefaultConfig({
    chains: [sepolia],
    transports: { [sepolia.id]: http() },
    walletConnectProjectId: '', 
    appName: 'VerifiBond Governance',
  }),
)