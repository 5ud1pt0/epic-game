const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Hanumãn", "Lakṣmaṇa", "Śrī Ramā"], // Names
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