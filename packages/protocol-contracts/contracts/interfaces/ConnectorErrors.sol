// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

interface ConnectorErrors {
    error CallerIsNotTss(address caller);

    error CallerIsNotTssUpdater(address caller);

    error InvalidAddress();

    error ZetaTransferError();

    error ExceedsMaxSupply(uint256 maxSupply);
}
