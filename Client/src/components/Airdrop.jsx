import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        const amountInput = document.getElementById("amount").value;
        const amount = parseFloat(amountInput);

        if (!wallet.publicKey) {
            alert("Please connect your wallet.");
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            alert("Enter a valid SOL amount.");
            return;
        }

        try {
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            alert(`${amount} SOL added to your wallet`);
        } catch (error) {
            console.error("Airdrop failed:", error);
            alert("Airdrop request failed. Check the console for details.");
        }
    }

    return (
        <div>
            <input id="amount" placeholder="Enter amount of SOL" />
            <button onClick={requestAirdrop}>Request Airdrop</button>
        </div>
    );
}
