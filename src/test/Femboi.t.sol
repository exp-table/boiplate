// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.12;

import "../contracts/Femboi.sol";
import "ds-test/test.sol";

contract FemboiTest is DSTest {

    Femboi public femboi;

    function setUp() public {
        femboi = new Femboi();
    }

    function testExample() public {
        assertTrue(true);
    }
}
