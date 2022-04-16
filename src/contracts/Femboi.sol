// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import {ERC721 as ERC721S} from "@rari-capital/solmate/src/tokens/ERC721.sol";

contract Femboi is ERC721S {

    constructor() ERC721S("femboi", "FBI") {}

    function tokenURI(uint256 tokenId) override pure public returns (string memory) {
        return "";
    }
}
