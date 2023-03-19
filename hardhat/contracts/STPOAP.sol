//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; // change to versioned imports for verification
import "@openzeppelin/contracts/access/Ownable.sol"; // change to versioned imports for verification
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
//import "@openzeppelin/contracts/utils/Strings.sol";

// To be implemented
//Upgradable has yet to be implemented
//Mint restriction 1 token per wallet


contract SWRMPP is ERC721, Ownable, ReentrancyGuard {

    constructor() ERC721("SWRMPP", "Goerli OpenSea Test")  { 

    }

    string baseURI_;
    string linkExtension=".json";
    uint256 mintPrice=0; //50000000000000000
    uint256 currentIdIndex=0; //the next ID that is minted
    uint256 totalSupply=1000000000; // 1 billion maximum amount
    bool mintPaused=true;
    string text="we trust in community";

    //*** SETTERS (onlyOwner)***//
    
   function setBaseURI(string memory _URI) public onlyOwner() { //tested
        baseURI_ = _URI;
    }

   function setMintPrice(uint256 _newPrice) public onlyOwner() { //tested. the number has to be sent as a string 
        mintPrice = _newPrice;
    }


   function flipMintPaused() public onlyOwner() { // tested
        mintPaused = !mintPaused;
    }

    function setLinkExtension(string memory newExtension) public onlyOwner() { //tested. the number has to be sent as a string
        linkExtension = newExtension;
    }

    //*** GETTERS ***//

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) { //tested
         require(super._exists(tokenId), "ERC721: invalid token ID");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, Strings.toString(tokenId),linkExtension)) : "";
    }

    function _baseURI() internal view virtual override returns (string memory) { // tested
        return baseURI_; 
    }

    function getMintPaused() public view returns (bool) { // tested
        return mintPaused;
    }


    function getCurrentIdIndex() public view returns (uint256) { // tested
        return currentIdIndex;
    }

    function price() public view returns (uint256){  // For Buildship Widget //tested
        return mintPrice;
    }
    
    function maxSupply() public view returns (uint256){  // For Buildship Widget //tested
        return totalSupply-currentIdIndex;
    }

    function getSnapshot() public view returns (address[] memory){
        address[] memory holders=new address[](currentIdIndex);// --> [0-->currentIdIndex-1]
        for (uint256 i=0;i<currentIdIndex;i++){ 
            holders[i]=super.ownerOf(i); 
        } 
        return holders;
    }

    //*** Modifiers ***//

    modifier mintingPaused(){ //tested
        require (mintPaused==false,"Minting is currently paused");
        _;
    }

    //*** Withdraw functions***//
    function withdraw() public payable onlyOwner { //tested
        uint balance = address(this).balance;
        (bool success, ) = payable(msg.sender).call{value:balance}("");
        require (success, "transaction failed");
    }

    function withdraw_fallback() public payable onlyOwner { //to be tested
        uint balance = address(this).balance;
        payable(msg.sender).transfer(balance);
        
    }
    
    //*** Minting function ***//

    function mint(uint256 nTokens) public payable mintingPaused nonReentrant{ //tested
        require (msg.value==(mintPrice*nTokens), "not enough ETH sent");
        require (maxSupply()>=nTokens, "not enough tokens left. Please try a smaller amount");

        for (uint256 i=0;i<nTokens;i++){
        super._safeMint(msg.sender, currentIdIndex);
        currentIdIndex+=1;
        }
    }
    
    //mintOwner will only be executed if not all tokens are minted. Used for giveaways, marketing or secondary sale on an alternative exchange (eg Binance) 
    function mintOwner(uint nTokens) public payable onlyOwner{ //tested
        require (maxSupply()>=nTokens, "not enough tokens left. Please try a smaller amount");

         for (uint256 i=0;i<nTokens;i++){
        super._safeMint(msg.sender, currentIdIndex);
        currentIdIndex+=1;
        }
    }


    //*** Fallback and receive function***//

    fallback() external payable {
        emit Log("fallback", msg.sender, msg.value, msg.data); 
    }

    receive() external payable {
        emit Log("receive", msg.sender,msg.value, ""); 
        
    }

    // Events
    event Log(string fun, address sender, uint value, bytes data);



}