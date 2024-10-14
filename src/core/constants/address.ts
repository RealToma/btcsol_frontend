import { Address } from 'viem'

import { CHAIN_ID } from './chains'
import { bscTestnet } from "wagmi/chains";

type Addresses = {
  [chainId: number]: {
    GMON: Address
    oGMON: Address
    rGMON: Address
    GBlockFeeLibrary: Address
    Staking?: Address
    Vesting?: Address
  }
}

export const ADDRESSES: Addresses = {
  [CHAIN_ID.SEPOLIA]: {
    GMON: '0x15a21f1feb6bad3c780738de51e2914a250feb1a',
    oGMON: '0x39f16D50dD893429645315CB8096cfDDC4a2a9b6',
    rGMON: '0x9AE3762EFDC963C828FeF48D2B2c50C53737eBa6',
    GBlockFeeLibrary: '0x1aC53f4033a9D98802b6a9CC9ec7f09aaa67d3c3',
    Staking: '0x39E990e85575DaFf15ab91BBabdB7c1f13e17eBB',
    Vesting: '0x5bCb84c7256428650B4E160F5Ca074CB4174baab',
  },
  [CHAIN_ID.BSC_TESTNET]: {
    GMON: '0x94ab90c66fcd0caf487be8a304f3d9fd180d4ad9',
    oGMON: '0x1aC53f4033a9D98802b6a9CC9ec7f09aaa67d3c3',
    rGMON: '0x95741F376d5af80bb0209D1A0B35593B3c632D79',
    GBlockFeeLibrary: '0x5C410f99F562b3c852A88190619a00468b993F2C',
  },
}

export const TOKEN_FACTORY_ADDRESSES: { [chainId: number]: string } = {
  [bscTestnet.id]: "0x626718a7263fb30006cc1d01cd2919d8bdf58a42",
}
