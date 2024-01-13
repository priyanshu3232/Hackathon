const { ethers } = require('ethers');// this is not correct way
const { ethers } = require('ethers');

const infuraUrl = 'https://sepolia.infura.io/v3/375a1b214c4c4af3b2c30a6378c5e729';
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

const privateKey = 'af14d160875681fbe8ab9bb4967be754757fd8cdd5cd128998adcea724d20577';
const wallet = new ethers.Wallet(privateKey, provider);

const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8';
const contractAbi = [
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "professorNumber",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "reviewerId",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "vote",
                "type": "uint8"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "addReview",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "professorNumber",
                "type": "uint8"
            }
        ],
        "name": "getReviewsForProfessor",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "reviewerId",
                        "type": "address"
                    },
                    {
                        "internalType": "uint8",
                        "name": "vote",
                        "type": "uint8"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    }
                ],
                "internalType": "struct ReviewSystem.Review[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

async function readData() {
    const data = await contract.getReviewsForProfessor();
    console.log('Contract data:', data);
}

readData();

async function writeData(newValue) {
    const transaction = await contract.addReview(newValue);
    await transaction.wait();
    console.log('Transaction complete!');
}

const newValue = 'New Value';
writeData(newValue);





