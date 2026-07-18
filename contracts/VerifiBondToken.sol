// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title VerifiBond Governance Token
/// @author Ines Krueger
/// @notice Governance token for the VerifiBond Real-World Asset (RWA) Platform.
/// @dev Implements ERC20, ERC20Permit and ERC20Votes for secure on-chain governance.
contract VerifiBondToken is ERC20, ERC20Permit, ERC20Votes, Ownable {

    /// @notice Deploys the VerifiBond governance token.
    /// @dev Mints an initial supply of 1,000,000 VBOND tokens to the contract owner.
    constructor()
        ERC20("VerifiBond", "VBOND")
        ERC20Permit("VerifiBond")
        Ownable(msg.sender)
    {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    /// @notice Creates new governance tokens.
    /// @dev Only the contract owner can mint additional tokens.
    /// @param to Recipient address.
    /// @param amount Amount of tokens to mint.
    function mint(address to, uint256 amount)
        public
        onlyOwner
    {
        _mint(to, amount);
    }

    /// @inheritdoc ERC20Votes
    function _update(
        address from,
        address to,
        uint256 value
    )
        internal
        override(ERC20, ERC20Votes)
    {
        super._update(from, to, value);
    }

    /// @inheritdoc ERC20Permit
    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }
}
