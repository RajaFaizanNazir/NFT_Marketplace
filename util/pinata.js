const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
require("dotenv").config();
/***********************************************/
const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_API_SECRET_KEY
);
/***********************************************/
const readableStreamForFile = fs.createReadStream("./images/1.jpg");
const options = {
  pinataMetadata: {
    name: "MY NFT COLLECTION",
    keyvalues: {
      customKey: "customValue",
      customKey2: "customValue2",
    },
  },
  pinataOptions: {
    cidVersion: 0,
  },
};
/***********************************************/
const pinFileToIPFS = async () => {
  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      console.log("https://gateway.pinata.cloud/ipfs/" + result.IpfsHash);
    })
    .catch((err) => {
      console.log(err);
    });
};
/***********************************************/
const getMetaData = async () => {
  const imageUrl = await pinFileToIPFS(readableStreamForFile, options);
  //console.log(imageUrl);
};
/***********************************************/
getMetaData();
/***********************************************/
