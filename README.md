# 🏛️ VerifiBond: RWA Governance Platform

**VerifiBond** is a decentralized Governance and Management platform for tokenized Real World Assets (RWA). It provides a high-fidelity interface for institutional-grade property management, liquidity control, and community-led decision-making on the **Base** network.

---

## 🛡️ Smart Contract Verification

For full protocol transparency, the VerifiBond core smart contract can be reviewed and interacted with directly on Etherscan (Sepolia):

### 💎 [View $VBOND Token Contract on Etherscan](https://sepolia.etherscan.io/address/0x17422e601c91a1678faa58dfc5f5381bf15c527e)

---

## 🌟 Platform Walkthrough

### 1. Connection & Authentication
Access is secured via Web3 wallet integration. The platform detects the connection status to unlock specialized dashboards.

![Connection Status](assets/CONNECTED.png)

### 2. Main Terminal Overview
The central hub for navigating between different protocol functions.

![VerifiBond Terminal](assets/VerifiBond_Terminal.png)

### 3. Investor Portal & Oracle Data
Investors can track their portfolio value and view real-time yield data provided by our Oracle layer, covering assets in Berlin, Monaco, and Munich.

![Investor Dashboard](assets/Investor_Terminal.png)

### 4. Manager Terminal & Supply Control
The command center for fund managers to oversee the 1,025,000 VBOND supply and execute protocol-level actions.

![Manager Terminal](assets/Manager_Terminal.png)

#### Mint & Burn Logic
Managers can dynamically adjust the token supply based on real-world asset inflows and outflows.

![Mint and Burn Interface](assets/Mint_Burn.png)

---

### 5. Decentralized Governance Hub
Token holders can participate in the decision-making process by voting on active proposals.

![Governance Proposals](assets/PROPOSAL.png)

#### Proposal Management & Voting
The platform tracks consensus for various strategic moves. Users can cast their votes directly on-chain.

<p align="center">
  <img src="assets/PROPOSAL_1.png" width="45%" />
  <img src="assets/PROPOSAL_2.png" width="45%" />
</p>
<p align="center">
  <img src="assets/PROPOSAL_3.png" width="45%" />
  <img src="assets/VOTE.png" width="45%" />
</p>

#### Vote Submission
Confirmation of the voting process and power calculation.

![Vote Submitted](assets/VOTE_SUBMITTED.png)

---

### 6. Transaction Finality
All governance and management actions are broadcast to the network for fast and cost-effective finality.

![Transaction Confirmed](assets/TRANSACTION_CONFIRMED.png)

---

## 🛠️ Technical Architecture

* **Framework:** Next.js 14 (App Router)
* **Web3 Stack:** Wagmi hooks, Viem, and ConnectKit.
* **Network:** Optimized for **Base L2** (Sepolia).
* **UI/UX:** Tailwind CSS "Dark Terminal" aesthetic.

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/BlockchainInes/VerifiBond-RWA-Governance-Platform.git](https://github.com/BlockchainInes/VerifiBond-RWA-Governance-Platform.git)
   cd VerifiBond-RWA-Governance-Platform
