//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol"; // change to versioned imports for verification
import "hardhat/node_modules/@openzeppelin/contracts/access/Ownable.sol"; // change to versioned imports for verification
import "hardhat/node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "hardhat/node_modules/@openzeppelin/contracts/utils/Base64.sol";
//import "@openzeppelin/contracts/utils/Strings.sol";

// To be implemented
//Upgradable has yet to be implemented
//Mint restriction 1 token per wallet


contract SWRMPPOC is ERC721, Ownable, ReentrancyGuard {

    constructor() ERC721("SWRMPP", "Goerli OpenSea Test")  { 
hBorders[0]=1;
hBorders[1]=4;
hBorders[2]=16;
hBorders[3]=64;
hBorders[4]=256;
hBorders[5]=1024;
hBorders[6]=4096; // hborders needs to be able to grow. either manually or automatically
blackWhite[0]="Black";
blackWhite[1]="White";
allAnimals[0]="Shark";
allAnimals[1]="Eagle";
allAnimals[2]="Whale";
allAnimals[3]="Flipper";


    }

    string baseURI_; // OBSOLETE?
    string linkExtension=".png?alt=media"; 
    uint256 mintPrice=0; //50000000000000000
    uint256 currentIdIndex=0; //the next ID that is minted
    uint256 totalSupply=1000000000; // 1 billion maximum amount
    bool mintPaused=true;
    string text="we trust in community";

    // Metadata Variavles
    string lastOddAnimal="Shark";
    string lastEvenAnimal="Shark";
    uint256 emc=0;
    uint256 omc=0;
    uint ceb=2;
    uint cob=1;
    uint256 ohc=0; // odd hierachy counter  : counts the members of the current hierachy level
    uint256 ehc=0; // even hierachy counter : counts the members of the current hierachy level
    uint256 coh=1; //current odd hierachy :displays current odd hierachy level
    uint256 ceh=1; //current even hierachy: displays current even hierachy evel
    uint256 oddColor=1;
    uint256 evenColor=0;
    //moderators[ID]=ID: every token ID is moderator of groupnumber=ID

    // Data structures for metadata
    mapping (uint256 =>string) public animals;
    mapping (uint256 =>uint256) public members;
    mapping (uint256 =>string) public colors;
    mapping (uint256 =>uint256) public hBorders;
    mapping (uint256=>string) public blackWhite;
    mapping (uint256 =>string) public allAnimals;
 

    //*** SETTERS (onlyOwner)***//
    
   function setBaseURI(string memory _URI) public onlyOwner() { //tested
        baseURI_ = _URI;
    }

  // function setMintPrice(uint256 _newPrice) public onlyOwner() { //tested. the number has to be sent as a string 
    //    mintPrice = _newPrice;                                   //Paused due to size!!!!!!!!!!!!!
    //}


   function flipMintPaused() public onlyOwner() { // tested
        mintPaused = !mintPaused;
    }

    function setLinkExtension(string memory newExtension) public onlyOwner() {  // OBSOLETE?
        linkExtension = newExtension;
    }

    //*** GETTERS ***//

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory){ //
    bytes memory dataURI = abi.encodePacked(
         '{',
         '"name": "SWRMPP #', Strings.toString(tokenId), '",',
            '"description": "Onchain Metadata TEST",',
            '"image": "', "https://firebasestorage.googleapis.com/v0/b/swarmtrust.appspot.com/o/Images%2F",Strings.toString(tokenId),linkExtension, '"',
         
         '}'
    );
    return string(
        abi.encodePacked(
            "data:application/json;base64,",
             Base64.encode(dataURI)
        )
    );
}


  //  function getMintPaused() public view returns (bool) { // tested commented out due to contract size
  //      return mintPaused;

  //  }


    function getCurrentIdIndex() public view returns (uint256) { // tested commented out due to contract size
        return currentIdIndex;
    }

  //  function price() public view returns (uint256){  // For Buildship Widget //tested
   //     return mintPrice;
    //}
    
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
    
    
    //*** Fallback and receive function***//

    fallback() external payable {
        emit Log("fallback", msg.sender, msg.value, msg.data); 
    }

    receive() external payable {
        emit Log("receive", msg.sender,msg.value, ""); 
        
    }

    // Events
    event Log(string fun, address sender, uint value, bytes data);

    // Metadata 



function generateAnimal(uint256 ID) public {  // THIS NEEDS TO BE AN INTERNAL FUNCTION IN THE FINAL VERSION
//Even
if (ID%2==0){
    if(keccak256(abi.encodePacked(lastEvenAnimal))==keccak256(abi.encodePacked("Shark"))){
        animals[ID]="Eagle";
        lastEvenAnimal="Eagle";
    }
     else if(keccak256(abi.encodePacked(lastEvenAnimal))==keccak256(abi.encodePacked("Eagle"))){
        animals[ID]="Whale";
        lastEvenAnimal="Whale";
    }
     else if(keccak256(abi.encodePacked(lastEvenAnimal))==keccak256(abi.encodePacked("Whale"))){
        animals[ID]="Flipper";
        lastEvenAnimal="Flipper";
    }
     else if(keccak256(abi.encodePacked(lastEvenAnimal))==keccak256(abi.encodePacked("Flipper"))){
        animals[ID]="Shark";
        lastEvenAnimal="Shark";
    }
    
}
//Odd
if (ID%2!=0){
    if(keccak256(abi.encodePacked(lastOddAnimal))==keccak256(abi.encodePacked("Shark"))){
        animals[ID]="Eagle";
        lastOddAnimal="Eagle";
    }
     else if(keccak256(abi.encodePacked(lastOddAnimal))==keccak256(abi.encodePacked("Eagle"))){
        animals[ID]="Whale";
        lastOddAnimal="Whale";
    }
     else if(keccak256(abi.encodePacked(lastOddAnimal))==keccak256(abi.encodePacked("Whale"))){
        animals[ID]="Flipper";
        lastOddAnimal="Flipper";
    }
     else if(keccak256(abi.encodePacked(lastOddAnimal))==keccak256(abi.encodePacked("Flipper"))){
        animals[ID]="Shark";
        lastOddAnimal="Shark";
    }
    
}

}


function allocateMembers(uint256 ID) public { // this needs to be an internal function in the final version
// this function will be used from ID 3 onwards. Hierachy level 2 onwards
    if(ID%2==0){ // EVEN
        if(emc==4){
            emc=0;
            ceb=ceb+2;
        }
        if(ehc==hBorders[ceh]){
            ceh=ceh+1;
            ehc=0;
            if(evenColor==0){
                evenColor=1;
             }
             else{
                 evenColor=0;
             }
        }
       members[ID]=ceb;
       colors[ID]=blackWhite[evenColor];
       ehc=ehc+1;
       emc=emc+1;

    }

    else { // ODD
       if(omc==4){
           omc=0;
           cob=cob+2;
       }
       if(ohc==hBorders[coh]){
            coh=coh+1;
            ohc=0;
            if(oddColor==0){
                oddColor=1;
             }
             else{
                 oddColor=0;
             }
        }
       members[ID]=cob;
       colors[ID]=blackWhite[oddColor];
       ohc=ohc+1;
       omc=omc+1;
        
    }

}

function random() public returns (uint256){
    random=uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    return random;
}


function rand(uint256 hcp) public returns (bool){ // needs to become internal
    
    roll=uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp))) % 1000;

    if(roll<=(999*(1/(16-hcp)))){ // !!hcp can never be 64!! hcp starts at 0
        return true;
    }
    else{
        return false;
    }
}

    mapping (uint256=>bool) luckyNumbers;
    
    
    string lastLuckyEvenAnimal=allAnimals[evenLuckyAnimalPointer];
    uint256 evenLuckyAnimalPointer=3;
    string lastLuckyOddAnimal=allAnimals[oddLuckyAnimalPointer];
    uint256 oddLuckyAnimalPointer=3;
    uint256 oddLuckyUntil=171; // these limits need to be doublechecked. token "0" is included
    uint256 oddLuckyFrom=43; 
    uint256 evenLuckyUntil=172;
    uint256 evenLuckyFrom=44;
    uint256 hcpEven=0;
    uint256 hcpOdd=0;
    uint256 roll;
    uint256 debug;





function lottery(uint256 ID) public{ // this function needs to be internal in final version
if (ID%2==0){ // EVEN
  if (ID>=evenLuckyFrom&&ID<=evenLuckyUntil){
    if (keccak256(abi.encodePacked((animals[ID-2])))==keccak256(abi.encodePacked((allAnimals[evenLuckyAnimalPointer])))){ // we look at the last animal, not at the current, in order to avoid data saving issues.
        luckyNumbers[ID]=rand(hcpEven);
        hcpEven=hcpEven+1; // erhöhung hcp nach würfeln
        if (luckyNumbers[ID]==true){
            debug=debug+1;
            hcpEven=0;
            evenLuckyFrom=evenLuckyFrom+64;
            evenLuckyUntil=evenLuckyUntil+64;
            if (evenLuckyAnimalPointer==3){
                evenLuckyAnimalPointer=0;
            }
            evenLuckyAnimalPointer=evenLuckyAnimalPointer+1;
        }
    }
    else{
    luckyNumbers[ID]=false;
    //hcpEven=hcpEven+1; // erhöhung des hcp selbst wenn nicht gewürfelt wurde. damit wkt linear steigt
    }
  }
  else{
      luckyNumbers[ID]=false;
  }
} 

else { // ODD
if (ID>=oddLuckyFrom&&ID<=oddLuckyUntil){
    if (keccak256(abi.encodePacked((animals[ID-2])))==keccak256(abi.encodePacked(((allAnimals[oddLuckyAnimalPointer]))))){
        luckyNumbers[ID]=rand(hcpOdd);
        hcpOdd=hcpOdd+1; // erhöhung hcp nach würfeln
        if (luckyNumbers[ID]==true){
            hcpOdd=0;
            oddLuckyFrom=oddLuckyFrom+64;
            oddLuckyUntil=oddLuckyUntil+64;
            if (oddLuckyAnimalPointer==3){
                oddLuckyAnimalPointer=0;
            }
            oddLuckyAnimalPointer=oddLuckyAnimalPointer+1;
        }
    }
    else{
    luckyNumbers[ID]=false;
    //hcpOdd=hcpOdd+1; // erhöhung des hcp selbst wenn nicht gewürfelt wurde. damit wkt linear steigt
    }
  }
  else{
      luckyNumbers[ID]=false;
  }

}

}

//*** Minting function ***//

    function mint() public payable mintingPaused nonReentrant{ 
        require (msg.value==mintPrice, "not enough ETH sent");
        require (maxSupply()>=1, "not enough tokens left. Please try a smaller amount");

        super._safeMint(msg.sender, currentIdIndex);
        generateAnimal(currentIdIndex);
        allocateMembers(currentIdIndex);
        lottery(currentIdIndex);
        currentIdIndex+=1;

    }

    function mintOwner(uint nTokens) public payable onlyOwner{ //tested
        require (maxSupply()>=nTokens, "not enough tokens left. Please try a smaller amount");

         for (uint256 i=0;i<nTokens;i++){
        super._safeMint(msg.sender, currentIdIndex);
        currentIdIndex+=1;
        }
    }
    

function readMembers(uint256 ID) public view returns (uint256){
    return members[ID];
}
function readColors(uint256 ID) public view returns (string memory){
    return colors[ID];
}
function readLucky(uint256 ID) public view returns (bool){
    return luckyNumbers[ID];
}

function readAnimals(uint256 ID) public view returns (string memory){
    return animals[ID];
}
function readEvenHcp() public view returns (uint256){
    return hcpEven;
}
function readOddHcp() public view returns (uint256){
    return hcpOdd;
}

function readDebug() public view returns (uint256){
    return debug;
}

function readRoll() public view returns(uint256){
    return roll;
}

}