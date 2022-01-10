import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    Faq: [
      {
        q: "What is the mint price ?",
        r: "The mint price is 0.25 ETH plus gas",
        hide: true,
      },
      {
        q: "How many NFT can I mint per wallet ? ",
        r: "You can mint a maximum of 2 NFTs per Ethereum wallet.",
        hide: true,
      },
      {
        q: "How can I register for the raffle ?",
        r: "Visit our website on Thursday 13th at 2pm UTC to register for the raffle. Please be aware that you need enough funds on your wallet to mint at least 1 C-01 NFT. We will only verify the wallet addresses with a minimum of 0.28 ETH (0.25 + Gas fees).",
        hide: true,
      },
      {
        q: "When is the public sale ?",
        r: "The public sale will occur on January 14th, at 4 pm UTC on our website. Only the winners of the raffle will be able to mint.",
        hide: true,
      },
      {
        q: "How do I know if I won the raffle?",
        r: "Please visit our website on Friday,14th at 4pm UTC and connect your Metamask account to see if you've won. If you win the raffle, you will be able to mint right away.",
        hide: true,
      },
      {
        q: "Do I need to register for the raffle if I’m whitelisted?",
        r: "If you are whitelisted, you will be able to mint 2 hours prior to the public sale on Friday,14th at 2pm UTC. You will be guaranteed to mint up to 2 NFTs. You can however register for the raffle with a different Ethereum address.",
        hide: true,
      },
    ],
    Team: [
      {
        name: "Gilberto Zaragoza,<br/> 3D artist",
        pic: require("@/assets/team/gilberto.jpg"),
        insta: "",
        linkedin: "https://www.linkedin.com/in/gilbertozaragoza/?originalSubdomain=mx",
        artstation: "https://www.artstation.com/s0r3n",
        discord: "",
        twitter: "",
      },
      {
        name: "Kevin Didelot,<br/> Cyber security developer",
        pic: require("@/assets/team/kevin.jpg"),
        insta: "",
        linkedin: " https://www.linkedin.com/in/kevin-didelot/",
        artstation: "",
        discord: "",
        twitter: "",
      },
      {
        name: "Luis Monteiro,<br/> Fashion designer",
        pic: require("@/assets/team/luis.jpg"),
        insta: "",
        linkedin: "https://www.linkedin.com/in/luis-monteiro-31159b72/",
        artstation: "",
        discord: "",
        twitter: "",
      },
      {
        name: "Carla Huvelin,<br/> Accessory Designer",
        pic: require("@/assets/team/carla.jpg"),
        insta: "https://instagram.com/hvlcarla?utm_medium=copy_link",
        linkedin: "https://www.linkedin.com/in/carla-huvelin-9a1460a2/",
        artstation: "",
        discord: "",
        twitter: "",
      },
      {
        name: "Tanguy Demme,<br/> Web Developer",
        pic: require("@/assets/team/tanguy.jpg"),
        insta: "",
        linkedin: "https://www.linkedin.com/in/dtanguy",
        artstation: "",
        discord: "",
        twitter: "",
      },
      {
        name: "Dr. Kevin Haddad,<br/> Plastic Surgeon",
        pic: require("@/assets/team/dr_kevin.jpg"),
        insta: "",
        linkedin: "https://www.linkedin.com/in/kevin-haddad-494438153/?originalSubdomain=fr",
        artstation: "",
        discord: "",
        twitter: "",
      },
      {
        name: "Rangga Chandra,<br/> Head moderator",
        pic: require("@/assets/team/rangga.jpg"),
        insta: "https://www.instagram.com/rc.noir/",
        linkedin: "",
        artstation: "",
        discord: "",
        twitter: "",
      },
    ],
  }
})
