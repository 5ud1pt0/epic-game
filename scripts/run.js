const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Hanumã", "Lakṣmaṇa", "Ramā"], // Names
        ["../assets/hanuman.jpeg", // Images
            "../assets/laxmana.jpeg",
            "../asssets/rama.jpeg"
        ], [100, 200, 300], // HP values
        [100, 75, 125] // Attack damage values
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