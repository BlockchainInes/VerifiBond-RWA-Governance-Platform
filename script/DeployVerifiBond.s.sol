// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script, console2} from "forge-std/Script.sol";
import {VerifiBondToken} from "../src/VerifiBondToken.sol";

/// @title Deploy VerifiBond Token
/// @author Ines Krueger
/// @notice Deploys the VerifiBond governance token to the selected network.
contract DeployVerifiBond is Script {

    function run() external {

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        VerifiBondToken token = new VerifiBondToken();

        vm.stopBroadcast();

        console2.log("VerifiBond deployed to:", address(token));
    }
}
