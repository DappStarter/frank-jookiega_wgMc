require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stove dash sad honey grace deposit equal gasp'; 
let testAccounts = [
"0x71fca534b8907fa7188560eeca7db1431cb5f65b377410e3e0701c770931cb14",
"0x8decc721a9d087bf146e8a28b6ced8478d6feffe5c0b2d6b364e5a789e143fa5",
"0x3ee20a0f09b38da71e0bf0a15a49021a35b102d0769280f1fa7ff08866b0f5dd",
"0x665c9e278fb3810f77430b1b21a70f38199f8c2790971f62c681d0d84cf2a365",
"0xe1d7849046e3c613cb77539664c246b57ccecbcb4d854f633842b2e8bebe3f6c",
"0x6121fdfc1356fc29358fb0ef6e06fde9cd8a7971a0030bff6643d03af04e0fa7",
"0x68c6cd0293ebfda5559145a12db3660da3c318939b4caad2daea575015f6661b",
"0xb00648fd18f78145d7f6f031611a6e0e271e1d2c9a1fd0cad74d54f8134d1d6d",
"0x7eef19d280b38a232695449d4c010d769bfebf08263cbacef8fda7bb3f689987",
"0xe3fba307db498238bb9f3c3e7c6835fc54fe716af665eca6746083dcbfd8eba8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

