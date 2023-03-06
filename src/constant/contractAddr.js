import { NET } from "./env"

let ComunityContractAddr = ''
let UniftyContractAddr = ''
let MembershipContractAddr = ''
let Membership721ContractAddr = ''
let MarketplaceContractAddr = ''


switch (NET) {
    case 'optimism':
        ComunityContractAddr = '0x75fFAF8711Cf9E0B36eaCdEf407f396F7628e976'
        UniftyContractAddr = '0xE7F967Ed990C4db5262b592A3e5B70e29Dd585c3'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x94A56cBd3bb49664f333c3B559F2bD8cb9Ae55a0'
        MarketplaceContractAddr = '0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0'
        break;

    case 'mumbai':
        ComunityContractAddr = '0x8FE28E6781230D2d5f17ae8343186A9125338c42'
        UniftyContractAddr = '0x24875CC895646fEA83ee1236dfAff71884909899'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0xdf67df1C4cE31e98Fb39a47fb54c8bb6cFd2F677'
        MarketplaceContractAddr = '0xd6a91Ce0e2C7846210cD6A3BC3882AeE2cad43af'
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
        
    case 'optimism-goerli':
        ComunityContractAddr = '0x3f13Ccdc61B40f72F44668330B62B54429Bed930'
        UniftyContractAddr = '0x84a8278CB03C91c750956857f017ceAa37144055'
        MembershipContractAddr = ''
        Membership721ContractAddr = '0x37bE2bb530fd7741Cc9dA85a3908214545B0E11b'
        MarketplaceContractAddr = '0xd24b3de085cfd8c54b94fead08a7962d343e6de0'
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
