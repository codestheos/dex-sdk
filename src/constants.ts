import JSBI from 'jsbi'

// exports for external consumption
export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '0xbe52bB8cCa36fcD6061C307f14bAB48F09A760f9',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: ''
}

export const INIT_CODE_HASH = '0xebe7ae2e909b82f0a14f5a09eb291778942ae66818008d407a7b67aa17be7052'

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
