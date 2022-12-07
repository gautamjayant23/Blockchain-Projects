// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "contracts/Erc20.sol";

/*This Class Inherits the ERC20.sol to transfer the ERC20 Tokens*/
contract Deposit is Erc20 {
    uint256 public count = 0;
    mapping(address => string) public slabs;

    //  event gone(address from, address to, uint256 token);
    //  address public owner;
    // mapping(address=>uint)public balances;

    // constructor(){
    //     owner = msg.sender;
    // }

    /* If we are not using ERC20 token then this function can be used to transfer the tokens*/
    // function  mint(address reciever, uint token ) public{
    //     require(msg.sender==owner,"Only minter can mint");
    //     balances[reciever] += token;
    //     count +=500;

    error InsufficientBalance(uint256 requested, uint256 available);

    /* This function transfer the ERC20 Token from the Depositor Address to the Other Address.
      And Assign a slab to the respective deposit*/
    function transfer(address _to, uint256 _value)
        public
        override
        returns (bool accomplish)
    {
        if (_value > tokenBalances[msg.sender])
            revert InsufficientBalance({
                requested: _value,
                available: tokenBalances[msg.sender]
            });
        tokenBalances[msg.sender] -= _value;
        tokenBalances[_to] += _value;
        count += 50;
        emit Transfer(msg.sender, _to, _value);
        // emit gone(msg.sender, _to, _value);
        accomplish;
        addtoSlab(_to);
    }

    /*This function at the deposit to slab based on the current capacity */
    function addtoSlab(address _to) public {
        if (count > 0 && count <= 100) {
            slabs[_to] = "slab0";
        } else if (count > 100 && count <= 200) {
            slabs[_to] = "slab1";
        } else if (count > 200 && count <= 300) {
            slabs[_to] = "slab2";
        } else if (count > 300 && count <= 400) {
            slabs[_to] = "slab3";
        } else if (count > 400 && count <= 500) {
            slabs[_to] = "slab4";
        }
    }

    /* This method is to inquire the deposit slab based on the depositor address*/
    function enquireSlab(address depositor)
        public
        view
        returns (string memory)
    {
        return slabs[depositor];
    }
}
