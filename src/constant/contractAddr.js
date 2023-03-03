import { NET } from "./env"

let ComunityContractAddr = ''
let UniftyContractAddr = ''
let MembershipContractAddr = ''
let Membership721ContractAddr = ''
let MarketplaceContractAddr = ''


switch (NET) {
    case 'rinkeby':
        ComunityContractAddr = '0x70332FcA05DF80a64a0328029E6536DCc56bCc7b'
        UniftyContractAddr = '0xa8C3Fdf18698970B6E1Fb59D00dFf6114e242372'
        MembershipContractAddr = '0x8082e704e8D96b887d8511c3a27ef8DB3bEA8E77'
        Membership721ContractAddr = ''
        MarketplaceContractAddr = ''
        break;

    case 'mumbai':
        ComunityContractAddr = '0xf659299E49A09beC21658E5506227F685A1728Ab'
        UniftyContractAddr = '0x59d7cdff93d01c98f64617efb677d9de44d4795d'
        MembershipContractAddr = '0x318acfd0a572fa257ea1ebb9c4c76a2458aaeedb'
        Membership721ContractAddr = ''
        MarketplaceContractAddr = ''
        break;

    case 'polygon':
        ComunityContractAddr = '0xD5a80A49cBA19079ab854796625A491555fDc626'
        UniftyContractAddr = '0xE7659093db0C4f4c1608FAb55020011FfFD1c505'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x7ae0D588fCba36a24d4dEFa8199554e19a9e0855'
        MarketplaceContractAddr = '0xa9121720327dC1f78BF5fC3731a363864BD8A72b'
        break;

//todo: deploy community mint control to goerli - now test
    case 'goerli':
        ComunityContractAddr = '0xCc21Bc96c4aDaC5DE21b758F796F871EE8643b47'
        UniftyContractAddr = '0x7f2350768d21ba4E2449beEe05535b1fE7D0B700'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x836f84E121643b90c6aFf9f4D84561b0Ac69423c'
        MarketplaceContractAddr = '0xCFA7cA9fD5d32A6E9104aC849b1094Ea8c71e294'
        break;

    default:
        break;
}

export {
    ComunityContractAddr,
    UniftyContractAddr,
    MembershipContractAddr,
    Membership721ContractAddr,
    MarketplaceContractAddr
}