const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Hanumã", "Lakṣmaṇa", "Śrī Ramā"], // Names
        ["https://raw.githubusercontent.com/5ud1pt0/epic-game/master/assets/hanuman.jpeg", // Images
            "https://raw.githubusercontent.com/5ud1pt0/epic-game/master/assets/laxmana.jpeg",
            "https://raw.githubusercontent.com/5ud1pt0/epic-game/master/assets/rama.jpg"
        ], [100, 200, 300], // HP values
        [100, 75, 125], // Attack damage values
        "Rākṣasa Rāvaṇa", // Villain name
        "https://raw.githubusercontent.com/5ud1pt0/epic-game/master/assets/ravana.jpg", // Boss image
        700, // Boss hp
        30 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // Get the value of the NFT's URI.
    //let returnedTokenUri = await gameContract.tokenURI(1);
    //console.log("Token URI:", returnedTokenUri);

};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();