// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;  // using a version of solidity 0.8 above so as the compiler to understand

import "hardhat/console.sol"; //a js library that import smart contracts

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo there, I am a smart contract dev");
    }

    function wave() public {
        totalWaves += 1; //variable of totalwave is initialized to 0 and it's permanently stored in the contract storage
        console.log("%s has waved!", msg.sender); // a built in authentiction that gets the user wallet addresses when waved
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}