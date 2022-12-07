// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Erc20 {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    uint256 public decimal;
    address public owner;
    mapping(address => uint256) public tokenBalances;
    mapping(address => mapping(address => uint256)) public allowed;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    constructor() {
        name = "ERC20_token";
        symbol = "ET";
        totalSupply = 1000000000000;
        owner = msg.sender;
        tokenBalances[msg.sender] = totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return tokenBalances[_owner];
    }

    function transfer(address _to, uint256 _value)
        public
        virtual
        returns (bool accomplish)
    {
        require(tokenBalances[msg.sender] >= _value);
        tokenBalances[msg.sender] -= _value;
        tokenBalances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool accomplish) {
        uint256 allowedBal = allowed[_from][msg.sender];
        require(allowedBal >= _value, "insufficient amount");
        tokenBalances[_from] -= _value;
        tokenBalances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool accomplish)
    {
        //here we use mapping
        require(tokenBalances[msg.sender] >= _value, "inefficient amount");
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender)
        public
        view
        returns (uint256 remaining)
    {
        return allowed[_owner][_spender];
    }
}
