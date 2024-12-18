// Import the fuels library
const { Wallet } = require('fuels');

// Main asynchronous function
async function main() {
    // Specify the Fuel RPC URL (usually for a local or remote node)
    const FUEL_RPC_URL = 'https://node-beta-1.fuel.network/graphql';

    // Create a wallet from a private key
    const privateKey = '0x...'; // Replace with your private key
    const wallet = Wallet.fromPrivateKey(privateKey, FUEL_RPC_URL);

    // Get the wallet's balance
    const balance = await wallet.getBalance();
    console.log(`Balance: ${balance.toString()} wei`);

    // You can perform other actions, such as sending transactions
    // const tx = await wallet.transfer('0xAddress', 1000);
    // console.log('Transaction successful:', tx);
}

// Execute the main function
main().catch((err) => {
    console.error('An error occurred:', err);
});
