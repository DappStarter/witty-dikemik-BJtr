require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stone cruise pulse pumpkin harvest flower army gesture'; 
let testAccounts = [
"0x5b39a5e5053ed0bacb8fd5ac6db4469909de1ee48a74cfe55b884b0d9a191fc7",
"0xc12d74c54f27b535c0920daa6a5cb060cbded00d4e612fcf71c1da4db24b9d1a",
"0xd492de9c15415545ac0fb80516e62d6dc4cb478193750b7585b153018e967979",
"0x6c15444687a9785fada9e82731aeb37e7b1989da98f4bc8330e18a25acb2a291",
"0xc65d7ae424ccaaf35e180a7ed0e4cbd593254305b4ebb47fa40832af75d515f7",
"0x78ce9e68fe5bc5fd8713b1be25326ed6f95cb54f645287339de37607f663bb70",
"0x8a8804b3f8e07e002d20707b0790b8be4b7284082c3efb444fc106dcf7704132",
"0xf64595ff4a5aa90452931a8f22b97025df52f193337d652b91c8c93e594eb620",
"0xedd092862d9cd1614c833f97f2e5ee435edfbb243b91527e816c4a67f0549c67",
"0x551a4b3e9b4ed84ac0db0e1e7f34e54f678ffc97f71c60253f1bfb419e80345c"
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

