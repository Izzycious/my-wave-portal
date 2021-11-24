const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // In order to deploy to the blockchain, wallet address is needed so hardha automatically creates that
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address); //  gettingaddress of person deploying
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();