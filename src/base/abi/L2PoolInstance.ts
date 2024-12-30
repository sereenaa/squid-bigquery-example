import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    BackUnbacked: event("0x281596e92b2d974beb7d4f124df30a0b39067b096893e95011ce4bdad798b759", "BackUnbacked(address,address,uint256,uint256)", {"reserve": indexed(p.address), "backer": indexed(p.address), "amount": p.uint256, "fee": p.uint256}),
    Borrow: event("0xb3d084820fb1a9decffb176436bd02558d15fac9b0ddfed8c465bc7359d7dce0", "Borrow(address,address,address,uint256,uint8,uint256,uint16)", {"reserve": indexed(p.address), "user": p.address, "onBehalfOf": indexed(p.address), "amount": p.uint256, "interestRateMode": p.uint8, "borrowRate": p.uint256, "referralCode": indexed(p.uint16)}),
    FlashLoan: event("0xefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f0", "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)", {"target": indexed(p.address), "initiator": p.address, "asset": indexed(p.address), "amount": p.uint256, "interestRateMode": p.uint8, "premium": p.uint256, "referralCode": indexed(p.uint16)}),
    IsolationModeTotalDebtUpdated: event("0xaef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5", "IsolationModeTotalDebtUpdated(address,uint256)", {"asset": indexed(p.address), "totalDebt": p.uint256}),
    LiquidationCall: event("0xe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e005286", "LiquidationCall(address,address,address,uint256,uint256,address,bool)", {"collateralAsset": indexed(p.address), "debtAsset": indexed(p.address), "user": indexed(p.address), "debtToCover": p.uint256, "liquidatedCollateralAmount": p.uint256, "liquidator": p.address, "receiveAToken": p.bool}),
    MintUnbacked: event("0xf25af37b3d3ec226063dc9bdc103ece7eb110a50f340fe854bb7bc1b0676d7d0", "MintUnbacked(address,address,address,uint256,uint16)", {"reserve": indexed(p.address), "user": p.address, "onBehalfOf": indexed(p.address), "amount": p.uint256, "referralCode": indexed(p.uint16)}),
    MintedToTreasury: event("0xbfa21aa5d5f9a1f0120a95e7c0749f389863cbdbfff531aa7339077a5bc919de", "MintedToTreasury(address,uint256)", {"reserve": indexed(p.address), "amountMinted": p.uint256}),
    Repay: event("0xa534c8dbe71f871f9f3530e97a74601fea17b426cae02e1c5aee42c96c784051", "Repay(address,address,address,uint256,bool)", {"reserve": indexed(p.address), "user": indexed(p.address), "repayer": indexed(p.address), "amount": p.uint256, "useATokens": p.bool}),
    'ReserveDataUpdated(address indexed,uint256,uint256,uint256,uint256,uint256)': event("0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a", "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)", {"reserve": indexed(p.address), "liquidityRate": p.uint256, "stableBorrowRate": p.uint256, "variableBorrowRate": p.uint256, "liquidityIndex": p.uint256, "variableBorrowIndex": p.uint256}),
    // 'ReserveDataUpdated(address indexed,uint256,uint256,uint256,uint256,uint256)': event("0x804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a", "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)", {"reserve": indexed(p.address), "liquidityRate": p.uint256, "stableBorrowRate": p.uint256, "variableBorrowRate": p.uint256, "liquidityIndex": p.uint256, "variableBorrowIndex": p.uint256}),
    ReserveUsedAsCollateralDisabled: event("0x44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd", "ReserveUsedAsCollateralDisabled(address,address)", {"reserve": indexed(p.address), "user": indexed(p.address)}),
    ReserveUsedAsCollateralEnabled: event("0x00058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f2", "ReserveUsedAsCollateralEnabled(address,address)", {"reserve": indexed(p.address), "user": indexed(p.address)}),
    Supply: event("0x2b627736bca15cd5381dcf80b0bf11fd197d01a037c52b927a881a10fb73ba61", "Supply(address,address,address,uint256,uint16)", {"reserve": indexed(p.address), "user": p.address, "onBehalfOf": indexed(p.address), "amount": p.uint256, "referralCode": indexed(p.uint16)}),
    UserEModeSet: event("0xd728da875fc88944cbf17638bcbe4af0eedaef63becd1d1c57cc097eb4608d84", "UserEModeSet(address,uint8)", {"user": indexed(p.address), "categoryId": p.uint8}),
    Withdraw: event("0x3115d1449a7b732c986cba18244e897a450f61e1bb8d589cd2e69e6c8924f9f7", "Withdraw(address,address,address,uint256)", {"reserve": indexed(p.address), "user": indexed(p.address), "to": indexed(p.address), "amount": p.uint256}),
}

export const functions = {
    ADDRESSES_PROVIDER: viewFun("0x0542975c", "ADDRESSES_PROVIDER()", {}, p.address),
    BRIDGE_PROTOCOL_FEE: viewFun("0x272d9072", "BRIDGE_PROTOCOL_FEE()", {}, p.uint256),
    FLASHLOAN_PREMIUM_TOTAL: viewFun("0x074b2e43", "FLASHLOAN_PREMIUM_TOTAL()", {}, p.uint128),
    FLASHLOAN_PREMIUM_TO_PROTOCOL: viewFun("0x6a99c036", "FLASHLOAN_PREMIUM_TO_PROTOCOL()", {}, p.uint128),
    MAX_NUMBER_RESERVES: viewFun("0xf8119d51", "MAX_NUMBER_RESERVES()", {}, p.uint16),
    POOL_REVISION: viewFun("0x0148170e", "POOL_REVISION()", {}, p.uint256),
    backUnbacked: fun("0xd65dc7a1", "backUnbacked(address,uint256,uint256)", {"asset": p.address, "amount": p.uint256, "fee": p.uint256}, p.uint256),
    'borrow(address,uint256,uint256,uint16,address)': fun("0xa415bcad", "borrow(address,uint256,uint256,uint16,address)", {"asset": p.address, "amount": p.uint256, "interestRateMode": p.uint256, "referralCode": p.uint16, "onBehalfOf": p.address}, ),
    'borrow(bytes32)': fun("0xd5eed868", "borrow(bytes32)", {"args": p.bytes32}, ),
    configureEModeCategory: fun("0x7b75d7f4", "configureEModeCategory(uint8,(uint16,uint16,uint16,string))", {"id": p.uint8, "category": p.struct({"ltv": p.uint16, "liquidationThreshold": p.uint16, "liquidationBonus": p.uint16, "label": p.string})}, ),
    configureEModeCategoryBorrowableBitmap: fun("0xff72158a", "configureEModeCategoryBorrowableBitmap(uint8,uint128)", {"id": p.uint8, "borrowableBitmap": p.uint128}, ),
    configureEModeCategoryCollateralBitmap: fun("0x92380ecb", "configureEModeCategoryCollateralBitmap(uint8,uint128)", {"id": p.uint8, "collateralBitmap": p.uint128}, ),
    deposit: fun("0xe8eda9df", "deposit(address,uint256,address,uint16)", {"asset": p.address, "amount": p.uint256, "onBehalfOf": p.address, "referralCode": p.uint16}, ),
    dropReserve: fun("0x63c9b860", "dropReserve(address)", {"asset": p.address}, ),
    finalizeTransfer: fun("0xd5ed3933", "finalizeTransfer(address,address,address,uint256,uint256,uint256)", {"asset": p.address, "from": p.address, "to": p.address, "amount": p.uint256, "balanceFromBefore": p.uint256, "balanceToBefore": p.uint256}, ),
    flashLoan: fun("0xab9c4b5d", "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)", {"receiverAddress": p.address, "assets": p.array(p.address), "amounts": p.array(p.uint256), "interestRateModes": p.array(p.uint256), "onBehalfOf": p.address, "params": p.bytes, "referralCode": p.uint16}, ),
    flashLoanSimple: fun("0x42b0b77c", "flashLoanSimple(address,address,uint256,bytes,uint16)", {"receiverAddress": p.address, "asset": p.address, "amount": p.uint256, "params": p.bytes, "referralCode": p.uint16}, ),
    getBorrowLogic: viewFun("0x2be29fa7", "getBorrowLogic()", {}, p.address),
    getBridgeLogic: viewFun("0xdf374c36", "getBridgeLogic()", {}, p.address),
    getConfiguration: viewFun("0xc44b11f7", "getConfiguration(address)", {"asset": p.address}, p.struct({"data": p.uint256})),
    getEModeCategoryBorrowableBitmap: viewFun("0x903a2c71", "getEModeCategoryBorrowableBitmap(uint8)", {"id": p.uint8}, p.uint128),
    getEModeCategoryCollateralBitmap: viewFun("0xb0771dba", "getEModeCategoryCollateralBitmap(uint8)", {"id": p.uint8}, p.uint128),
    getEModeCategoryCollateralConfig: viewFun("0xb286f467", "getEModeCategoryCollateralConfig(uint8)", {"id": p.uint8}, p.struct({"ltv": p.uint16, "liquidationThreshold": p.uint16, "liquidationBonus": p.uint16})),
    getEModeCategoryData: viewFun("0x6c6f6ae1", "getEModeCategoryData(uint8)", {"id": p.uint8}, p.struct({"ltv": p.uint16, "liquidationThreshold": p.uint16, "liquidationBonus": p.uint16, "priceSource": p.address, "label": p.string})),
    getEModeCategoryLabel: viewFun("0x2083e183", "getEModeCategoryLabel(uint8)", {"id": p.uint8}, p.string),
    getEModeLogic: viewFun("0xf32b9a73", "getEModeLogic()", {}, p.address),
    getFlashLoanLogic: viewFun("0x348fde0f", "getFlashLoanLogic()", {}, p.address),
    getLiquidationGracePeriod: fun("0x5c9a8b18", "getLiquidationGracePeriod(address)", {"asset": p.address}, p.uint40),
    getLiquidationLogic: viewFun("0x911a3413", "getLiquidationLogic()", {}, p.address),
    getPoolLogic: viewFun("0xd3350155", "getPoolLogic()", {}, p.address),
    getReserveAddressById: viewFun("0x52751797", "getReserveAddressById(uint16)", {"id": p.uint16}, p.address),
    getReserveData: viewFun("0x35ea6a75", "getReserveData(address)", {"asset": p.address}, p.struct({"configuration": p.struct({"data": p.uint256}), "liquidityIndex": p.uint128, "currentLiquidityRate": p.uint128, "variableBorrowIndex": p.uint128, "currentVariableBorrowRate": p.uint128, "currentStableBorrowRate": p.uint128, "lastUpdateTimestamp": p.uint40, "id": p.uint16, "aTokenAddress": p.address, "stableDebtTokenAddress": p.address, "variableDebtTokenAddress": p.address, "interestRateStrategyAddress": p.address, "accruedToTreasury": p.uint128, "unbacked": p.uint128, "isolationModeTotalDebt": p.uint128})),
    getReserveDataExtended: viewFun("0x8381995f", "getReserveDataExtended(address)", {"asset": p.address}, p.struct({"configuration": p.struct({"data": p.uint256}), "liquidityIndex": p.uint128, "currentLiquidityRate": p.uint128, "variableBorrowIndex": p.uint128, "currentVariableBorrowRate": p.uint128, "__deprecatedStableBorrowRate": p.uint128, "lastUpdateTimestamp": p.uint40, "id": p.uint16, "liquidationGracePeriodUntil": p.uint40, "aTokenAddress": p.address, "__deprecatedStableDebtTokenAddress": p.address, "variableDebtTokenAddress": p.address, "interestRateStrategyAddress": p.address, "accruedToTreasury": p.uint128, "unbacked": p.uint128, "isolationModeTotalDebt": p.uint128, "virtualUnderlyingBalance": p.uint128})),
    getReserveNormalizedIncome: viewFun("0xd15e0053", "getReserveNormalizedIncome(address)", {"asset": p.address}, p.uint256),
    getReserveNormalizedVariableDebt: viewFun("0x386497fd", "getReserveNormalizedVariableDebt(address)", {"asset": p.address}, p.uint256),
    getReservesCount: viewFun("0x72218d04", "getReservesCount()", {}, p.uint256),
    getReservesList: viewFun("0xd1946dbc", "getReservesList()", {}, p.array(p.address)),
    getSupplyLogic: viewFun("0x870e7744", "getSupplyLogic()", {}, p.address),
    getUserAccountData: viewFun("0xbf92857c", "getUserAccountData(address)", {"user": p.address}, {"totalCollateralBase": p.uint256, "totalDebtBase": p.uint256, "availableBorrowsBase": p.uint256, "currentLiquidationThreshold": p.uint256, "ltv": p.uint256, "healthFactor": p.uint256}),
    getUserConfiguration: viewFun("0x4417a583", "getUserConfiguration(address)", {"user": p.address}, p.struct({"data": p.uint256})),
    getUserEMode: viewFun("0xeddf1b79", "getUserEMode(address)", {"user": p.address}, p.uint256),
    getVirtualUnderlyingBalance: viewFun("0x6fb07f96", "getVirtualUnderlyingBalance(address)", {"asset": p.address}, p.uint128),
    initReserve: fun("0x8bd25677", "initReserve(address,address,address,address)", {"asset": p.address, "aTokenAddress": p.address, "variableDebtAddress": p.address, "interestRateStrategyAddress": p.address}, ),
    initialize: fun("0xc4d66de8", "initialize(address)", {"provider": p.address}, ),
    'liquidationCall(address,address,address,uint256,bool)': fun("0x00a718a9", "liquidationCall(address,address,address,uint256,bool)", {"collateralAsset": p.address, "debtAsset": p.address, "user": p.address, "debtToCover": p.uint256, "receiveAToken": p.bool}, ),
    'liquidationCall(bytes32,bytes32)': fun("0xfd21ecff", "liquidationCall(bytes32,bytes32)", {"args1": p.bytes32, "args2": p.bytes32}, ),
    mintToTreasury: fun("0x9cd19996", "mintToTreasury(address[])", {"assets": p.array(p.address)}, ),
    mintUnbacked: fun("0x69a933a5", "mintUnbacked(address,uint256,address,uint16)", {"asset": p.address, "amount": p.uint256, "onBehalfOf": p.address, "referralCode": p.uint16}, ),
    'repay(bytes32)': fun("0x563dd613", "repay(bytes32)", {"args": p.bytes32}, p.uint256),
    'repay(address,uint256,uint256,address)': fun("0x573ade81", "repay(address,uint256,uint256,address)", {"asset": p.address, "amount": p.uint256, "interestRateMode": p.uint256, "onBehalfOf": p.address}, p.uint256),
    'repayWithATokens(address,uint256,uint256)': fun("0x2dad97d4", "repayWithATokens(address,uint256,uint256)", {"asset": p.address, "amount": p.uint256, "interestRateMode": p.uint256}, p.uint256),
    'repayWithATokens(bytes32)': fun("0xdc7c0bff", "repayWithATokens(bytes32)", {"args": p.bytes32}, p.uint256),
    'repayWithPermit(bytes32,bytes32,bytes32)': fun("0x94b576de", "repayWithPermit(bytes32,bytes32,bytes32)", {"args": p.bytes32, "r": p.bytes32, "s": p.bytes32}, p.uint256),
    'repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)': fun("0xee3e210b", "repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)", {"asset": p.address, "amount": p.uint256, "interestRateMode": p.uint256, "onBehalfOf": p.address, "deadline": p.uint256, "permitV": p.uint8, "permitR": p.bytes32, "permitS": p.bytes32}, p.uint256),
    rescueTokens: fun("0xcea9d26f", "rescueTokens(address,address,uint256)", {"token": p.address, "to": p.address, "amount": p.uint256}, ),
    resetIsolationModeTotalDebt: fun("0xe43e88a1", "resetIsolationModeTotalDebt(address)", {"asset": p.address}, ),
    setConfiguration: fun("0xf51e435b", "setConfiguration(address,(uint256))", {"asset": p.address, "configuration": p.struct({"data": p.uint256})}, ),
    setLiquidationGracePeriod: fun("0xb1a99e26", "setLiquidationGracePeriod(address,uint40)", {"asset": p.address, "until": p.uint40}, ),
    setReserveInterestRateStrategyAddress: fun("0x1d2118f9", "setReserveInterestRateStrategyAddress(address,address)", {"asset": p.address, "rateStrategyAddress": p.address}, ),
    setUserEMode: fun("0x28530a47", "setUserEMode(uint8)", {"categoryId": p.uint8}, ),
    'setUserUseReserveAsCollateral(bytes32)': fun("0x4d013f03", "setUserUseReserveAsCollateral(bytes32)", {"args": p.bytes32}, ),
    'setUserUseReserveAsCollateral(address,bool)': fun("0x5a3b74b9", "setUserUseReserveAsCollateral(address,bool)", {"asset": p.address, "useAsCollateral": p.bool}, ),
    'supply(address,uint256,address,uint16)': fun("0x617ba037", "supply(address,uint256,address,uint16)", {"asset": p.address, "amount": p.uint256, "onBehalfOf": p.address, "referralCode": p.uint16}, ),
    'supply(bytes32)': fun("0xf7a73840", "supply(bytes32)", {"args": p.bytes32}, ),
    'supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)': fun("0x02c205f0", "supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)", {"asset": p.address, "amount": p.uint256, "onBehalfOf": p.address, "referralCode": p.uint16, "deadline": p.uint256, "permitV": p.uint8, "permitR": p.bytes32, "permitS": p.bytes32}, ),
    'supplyWithPermit(bytes32,bytes32,bytes32)': fun("0x680dd47c", "supplyWithPermit(bytes32,bytes32,bytes32)", {"args": p.bytes32, "r": p.bytes32, "s": p.bytes32}, ),
    syncIndexesState: fun("0xab2b51f6", "syncIndexesState(address)", {"asset": p.address}, ),
    syncRatesState: fun("0x98c7da4e", "syncRatesState(address)", {"asset": p.address}, ),
    updateBridgeProtocolFee: fun("0x3036b439", "updateBridgeProtocolFee(uint256)", {"protocolFee": p.uint256}, ),
    updateFlashloanPremiums: fun("0xbcb6e522", "updateFlashloanPremiums(uint128,uint128)", {"flashLoanPremiumTotal": p.uint128, "flashLoanPremiumToProtocol": p.uint128}, ),
    'withdraw(address,uint256,address)': fun("0x69328dec", "withdraw(address,uint256,address)", {"asset": p.address, "amount": p.uint256, "to": p.address}, p.uint256),
    'withdraw(bytes32)': fun("0x8e19899e", "withdraw(bytes32)", {"args": p.bytes32}, p.uint256),
}

export class Contract extends ContractBase {

    ADDRESSES_PROVIDER() {
        return this.eth_call(functions.ADDRESSES_PROVIDER, {})
    }

    BRIDGE_PROTOCOL_FEE() {
        return this.eth_call(functions.BRIDGE_PROTOCOL_FEE, {})
    }

    FLASHLOAN_PREMIUM_TOTAL() {
        return this.eth_call(functions.FLASHLOAN_PREMIUM_TOTAL, {})
    }

    FLASHLOAN_PREMIUM_TO_PROTOCOL() {
        return this.eth_call(functions.FLASHLOAN_PREMIUM_TO_PROTOCOL, {})
    }

    MAX_NUMBER_RESERVES() {
        return this.eth_call(functions.MAX_NUMBER_RESERVES, {})
    }

    POOL_REVISION() {
        return this.eth_call(functions.POOL_REVISION, {})
    }

    getBorrowLogic() {
        return this.eth_call(functions.getBorrowLogic, {})
    }

    getBridgeLogic() {
        return this.eth_call(functions.getBridgeLogic, {})
    }

    getConfiguration(asset: GetConfigurationParams["asset"]) {
        return this.eth_call(functions.getConfiguration, {asset})
    }

    getEModeCategoryBorrowableBitmap(id: GetEModeCategoryBorrowableBitmapParams["id"]) {
        return this.eth_call(functions.getEModeCategoryBorrowableBitmap, {id})
    }

    getEModeCategoryCollateralBitmap(id: GetEModeCategoryCollateralBitmapParams["id"]) {
        return this.eth_call(functions.getEModeCategoryCollateralBitmap, {id})
    }

    getEModeCategoryCollateralConfig(id: GetEModeCategoryCollateralConfigParams["id"]) {
        return this.eth_call(functions.getEModeCategoryCollateralConfig, {id})
    }

    getEModeCategoryData(id: GetEModeCategoryDataParams["id"]) {
        return this.eth_call(functions.getEModeCategoryData, {id})
    }

    getEModeCategoryLabel(id: GetEModeCategoryLabelParams["id"]) {
        return this.eth_call(functions.getEModeCategoryLabel, {id})
    }

    getEModeLogic() {
        return this.eth_call(functions.getEModeLogic, {})
    }

    getFlashLoanLogic() {
        return this.eth_call(functions.getFlashLoanLogic, {})
    }

    getLiquidationLogic() {
        return this.eth_call(functions.getLiquidationLogic, {})
    }

    getPoolLogic() {
        return this.eth_call(functions.getPoolLogic, {})
    }

    getReserveAddressById(id: GetReserveAddressByIdParams["id"]) {
        return this.eth_call(functions.getReserveAddressById, {id})
    }

    getReserveData(asset: GetReserveDataParams["asset"]) {
        return this.eth_call(functions.getReserveData, {asset})
    }

    getReserveDataExtended(asset: GetReserveDataExtendedParams["asset"]) {
        return this.eth_call(functions.getReserveDataExtended, {asset})
    }

    getReserveNormalizedIncome(asset: GetReserveNormalizedIncomeParams["asset"]) {
        return this.eth_call(functions.getReserveNormalizedIncome, {asset})
    }

    getReserveNormalizedVariableDebt(asset: GetReserveNormalizedVariableDebtParams["asset"]) {
        return this.eth_call(functions.getReserveNormalizedVariableDebt, {asset})
    }

    getReservesCount() {
        return this.eth_call(functions.getReservesCount, {})
    }

    getReservesList() {
        return this.eth_call(functions.getReservesList, {})
    }

    getSupplyLogic() {
        return this.eth_call(functions.getSupplyLogic, {})
    }

    getUserAccountData(user: GetUserAccountDataParams["user"]) {
        return this.eth_call(functions.getUserAccountData, {user})
    }

    getUserConfiguration(user: GetUserConfigurationParams["user"]) {
        return this.eth_call(functions.getUserConfiguration, {user})
    }

    getUserEMode(user: GetUserEModeParams["user"]) {
        return this.eth_call(functions.getUserEMode, {user})
    }

    getVirtualUnderlyingBalance(asset: GetVirtualUnderlyingBalanceParams["asset"]) {
        return this.eth_call(functions.getVirtualUnderlyingBalance, {asset})
    }
}

/// Event types
export type BackUnbackedEventArgs = EParams<typeof events.BackUnbacked>
export type BorrowEventArgs = EParams<typeof events.Borrow>
export type FlashLoanEventArgs = EParams<typeof events.FlashLoan>
export type IsolationModeTotalDebtUpdatedEventArgs = EParams<typeof events.IsolationModeTotalDebtUpdated>
export type LiquidationCallEventArgs = EParams<typeof events.LiquidationCall>
export type MintUnbackedEventArgs = EParams<typeof events.MintUnbacked>
export type MintedToTreasuryEventArgs = EParams<typeof events.MintedToTreasury>
export type RepayEventArgs = EParams<typeof events.Repay>
export type ReserveDataUpdatedEventArgs_0 = EParams<typeof events['ReserveDataUpdated(address indexed,uint256,uint256,uint256,uint256,uint256)']>
export type ReserveDataUpdatedEventArgs_1 = EParams<typeof events['ReserveDataUpdated(address indexed,uint256,uint256,uint256,uint256,uint256)']>
export type ReserveUsedAsCollateralDisabledEventArgs = EParams<typeof events.ReserveUsedAsCollateralDisabled>
export type ReserveUsedAsCollateralEnabledEventArgs = EParams<typeof events.ReserveUsedAsCollateralEnabled>
export type SupplyEventArgs = EParams<typeof events.Supply>
export type UserEModeSetEventArgs = EParams<typeof events.UserEModeSet>
export type WithdrawEventArgs = EParams<typeof events.Withdraw>

/// Function types
export type ADDRESSES_PROVIDERParams = FunctionArguments<typeof functions.ADDRESSES_PROVIDER>
export type ADDRESSES_PROVIDERReturn = FunctionReturn<typeof functions.ADDRESSES_PROVIDER>

export type BRIDGE_PROTOCOL_FEEParams = FunctionArguments<typeof functions.BRIDGE_PROTOCOL_FEE>
export type BRIDGE_PROTOCOL_FEEReturn = FunctionReturn<typeof functions.BRIDGE_PROTOCOL_FEE>

export type FLASHLOAN_PREMIUM_TOTALParams = FunctionArguments<typeof functions.FLASHLOAN_PREMIUM_TOTAL>
export type FLASHLOAN_PREMIUM_TOTALReturn = FunctionReturn<typeof functions.FLASHLOAN_PREMIUM_TOTAL>

export type FLASHLOAN_PREMIUM_TO_PROTOCOLParams = FunctionArguments<typeof functions.FLASHLOAN_PREMIUM_TO_PROTOCOL>
export type FLASHLOAN_PREMIUM_TO_PROTOCOLReturn = FunctionReturn<typeof functions.FLASHLOAN_PREMIUM_TO_PROTOCOL>

export type MAX_NUMBER_RESERVESParams = FunctionArguments<typeof functions.MAX_NUMBER_RESERVES>
export type MAX_NUMBER_RESERVESReturn = FunctionReturn<typeof functions.MAX_NUMBER_RESERVES>

export type POOL_REVISIONParams = FunctionArguments<typeof functions.POOL_REVISION>
export type POOL_REVISIONReturn = FunctionReturn<typeof functions.POOL_REVISION>

export type BackUnbackedParams = FunctionArguments<typeof functions.backUnbacked>
export type BackUnbackedReturn = FunctionReturn<typeof functions.backUnbacked>

export type BorrowParams_0 = FunctionArguments<typeof functions['borrow(address,uint256,uint256,uint16,address)']>
export type BorrowReturn_0 = FunctionReturn<typeof functions['borrow(address,uint256,uint256,uint16,address)']>

export type BorrowParams_1 = FunctionArguments<typeof functions['borrow(bytes32)']>
export type BorrowReturn_1 = FunctionReturn<typeof functions['borrow(bytes32)']>

export type ConfigureEModeCategoryParams = FunctionArguments<typeof functions.configureEModeCategory>
export type ConfigureEModeCategoryReturn = FunctionReturn<typeof functions.configureEModeCategory>

export type ConfigureEModeCategoryBorrowableBitmapParams = FunctionArguments<typeof functions.configureEModeCategoryBorrowableBitmap>
export type ConfigureEModeCategoryBorrowableBitmapReturn = FunctionReturn<typeof functions.configureEModeCategoryBorrowableBitmap>

export type ConfigureEModeCategoryCollateralBitmapParams = FunctionArguments<typeof functions.configureEModeCategoryCollateralBitmap>
export type ConfigureEModeCategoryCollateralBitmapReturn = FunctionReturn<typeof functions.configureEModeCategoryCollateralBitmap>

export type DepositParams = FunctionArguments<typeof functions.deposit>
export type DepositReturn = FunctionReturn<typeof functions.deposit>

export type DropReserveParams = FunctionArguments<typeof functions.dropReserve>
export type DropReserveReturn = FunctionReturn<typeof functions.dropReserve>

export type FinalizeTransferParams = FunctionArguments<typeof functions.finalizeTransfer>
export type FinalizeTransferReturn = FunctionReturn<typeof functions.finalizeTransfer>

export type FlashLoanParams = FunctionArguments<typeof functions.flashLoan>
export type FlashLoanReturn = FunctionReturn<typeof functions.flashLoan>

export type FlashLoanSimpleParams = FunctionArguments<typeof functions.flashLoanSimple>
export type FlashLoanSimpleReturn = FunctionReturn<typeof functions.flashLoanSimple>

export type GetBorrowLogicParams = FunctionArguments<typeof functions.getBorrowLogic>
export type GetBorrowLogicReturn = FunctionReturn<typeof functions.getBorrowLogic>

export type GetBridgeLogicParams = FunctionArguments<typeof functions.getBridgeLogic>
export type GetBridgeLogicReturn = FunctionReturn<typeof functions.getBridgeLogic>

export type GetConfigurationParams = FunctionArguments<typeof functions.getConfiguration>
export type GetConfigurationReturn = FunctionReturn<typeof functions.getConfiguration>

export type GetEModeCategoryBorrowableBitmapParams = FunctionArguments<typeof functions.getEModeCategoryBorrowableBitmap>
export type GetEModeCategoryBorrowableBitmapReturn = FunctionReturn<typeof functions.getEModeCategoryBorrowableBitmap>

export type GetEModeCategoryCollateralBitmapParams = FunctionArguments<typeof functions.getEModeCategoryCollateralBitmap>
export type GetEModeCategoryCollateralBitmapReturn = FunctionReturn<typeof functions.getEModeCategoryCollateralBitmap>

export type GetEModeCategoryCollateralConfigParams = FunctionArguments<typeof functions.getEModeCategoryCollateralConfig>
export type GetEModeCategoryCollateralConfigReturn = FunctionReturn<typeof functions.getEModeCategoryCollateralConfig>

export type GetEModeCategoryDataParams = FunctionArguments<typeof functions.getEModeCategoryData>
export type GetEModeCategoryDataReturn = FunctionReturn<typeof functions.getEModeCategoryData>

export type GetEModeCategoryLabelParams = FunctionArguments<typeof functions.getEModeCategoryLabel>
export type GetEModeCategoryLabelReturn = FunctionReturn<typeof functions.getEModeCategoryLabel>

export type GetEModeLogicParams = FunctionArguments<typeof functions.getEModeLogic>
export type GetEModeLogicReturn = FunctionReturn<typeof functions.getEModeLogic>

export type GetFlashLoanLogicParams = FunctionArguments<typeof functions.getFlashLoanLogic>
export type GetFlashLoanLogicReturn = FunctionReturn<typeof functions.getFlashLoanLogic>

export type GetLiquidationGracePeriodParams = FunctionArguments<typeof functions.getLiquidationGracePeriod>
export type GetLiquidationGracePeriodReturn = FunctionReturn<typeof functions.getLiquidationGracePeriod>

export type GetLiquidationLogicParams = FunctionArguments<typeof functions.getLiquidationLogic>
export type GetLiquidationLogicReturn = FunctionReturn<typeof functions.getLiquidationLogic>

export type GetPoolLogicParams = FunctionArguments<typeof functions.getPoolLogic>
export type GetPoolLogicReturn = FunctionReturn<typeof functions.getPoolLogic>

export type GetReserveAddressByIdParams = FunctionArguments<typeof functions.getReserveAddressById>
export type GetReserveAddressByIdReturn = FunctionReturn<typeof functions.getReserveAddressById>

export type GetReserveDataParams = FunctionArguments<typeof functions.getReserveData>
export type GetReserveDataReturn = FunctionReturn<typeof functions.getReserveData>

export type GetReserveDataExtendedParams = FunctionArguments<typeof functions.getReserveDataExtended>
export type GetReserveDataExtendedReturn = FunctionReturn<typeof functions.getReserveDataExtended>

export type GetReserveNormalizedIncomeParams = FunctionArguments<typeof functions.getReserveNormalizedIncome>
export type GetReserveNormalizedIncomeReturn = FunctionReturn<typeof functions.getReserveNormalizedIncome>

export type GetReserveNormalizedVariableDebtParams = FunctionArguments<typeof functions.getReserveNormalizedVariableDebt>
export type GetReserveNormalizedVariableDebtReturn = FunctionReturn<typeof functions.getReserveNormalizedVariableDebt>

export type GetReservesCountParams = FunctionArguments<typeof functions.getReservesCount>
export type GetReservesCountReturn = FunctionReturn<typeof functions.getReservesCount>

export type GetReservesListParams = FunctionArguments<typeof functions.getReservesList>
export type GetReservesListReturn = FunctionReturn<typeof functions.getReservesList>

export type GetSupplyLogicParams = FunctionArguments<typeof functions.getSupplyLogic>
export type GetSupplyLogicReturn = FunctionReturn<typeof functions.getSupplyLogic>

export type GetUserAccountDataParams = FunctionArguments<typeof functions.getUserAccountData>
export type GetUserAccountDataReturn = FunctionReturn<typeof functions.getUserAccountData>

export type GetUserConfigurationParams = FunctionArguments<typeof functions.getUserConfiguration>
export type GetUserConfigurationReturn = FunctionReturn<typeof functions.getUserConfiguration>

export type GetUserEModeParams = FunctionArguments<typeof functions.getUserEMode>
export type GetUserEModeReturn = FunctionReturn<typeof functions.getUserEMode>

export type GetVirtualUnderlyingBalanceParams = FunctionArguments<typeof functions.getVirtualUnderlyingBalance>
export type GetVirtualUnderlyingBalanceReturn = FunctionReturn<typeof functions.getVirtualUnderlyingBalance>

export type InitReserveParams = FunctionArguments<typeof functions.initReserve>
export type InitReserveReturn = FunctionReturn<typeof functions.initReserve>

export type InitializeParams = FunctionArguments<typeof functions.initialize>
export type InitializeReturn = FunctionReturn<typeof functions.initialize>

export type LiquidationCallParams_0 = FunctionArguments<typeof functions['liquidationCall(address,address,address,uint256,bool)']>
export type LiquidationCallReturn_0 = FunctionReturn<typeof functions['liquidationCall(address,address,address,uint256,bool)']>

export type LiquidationCallParams_1 = FunctionArguments<typeof functions['liquidationCall(bytes32,bytes32)']>
export type LiquidationCallReturn_1 = FunctionReturn<typeof functions['liquidationCall(bytes32,bytes32)']>

export type MintToTreasuryParams = FunctionArguments<typeof functions.mintToTreasury>
export type MintToTreasuryReturn = FunctionReturn<typeof functions.mintToTreasury>

export type MintUnbackedParams = FunctionArguments<typeof functions.mintUnbacked>
export type MintUnbackedReturn = FunctionReturn<typeof functions.mintUnbacked>

export type RepayParams_0 = FunctionArguments<typeof functions['repay(bytes32)']>
export type RepayReturn_0 = FunctionReturn<typeof functions['repay(bytes32)']>

export type RepayParams_1 = FunctionArguments<typeof functions['repay(address,uint256,uint256,address)']>
export type RepayReturn_1 = FunctionReturn<typeof functions['repay(address,uint256,uint256,address)']>

export type RepayWithATokensParams_0 = FunctionArguments<typeof functions['repayWithATokens(address,uint256,uint256)']>
export type RepayWithATokensReturn_0 = FunctionReturn<typeof functions['repayWithATokens(address,uint256,uint256)']>

export type RepayWithATokensParams_1 = FunctionArguments<typeof functions['repayWithATokens(bytes32)']>
export type RepayWithATokensReturn_1 = FunctionReturn<typeof functions['repayWithATokens(bytes32)']>

export type RepayWithPermitParams_0 = FunctionArguments<typeof functions['repayWithPermit(bytes32,bytes32,bytes32)']>
export type RepayWithPermitReturn_0 = FunctionReturn<typeof functions['repayWithPermit(bytes32,bytes32,bytes32)']>

export type RepayWithPermitParams_1 = FunctionArguments<typeof functions['repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)']>
export type RepayWithPermitReturn_1 = FunctionReturn<typeof functions['repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)']>

export type RescueTokensParams = FunctionArguments<typeof functions.rescueTokens>
export type RescueTokensReturn = FunctionReturn<typeof functions.rescueTokens>

export type ResetIsolationModeTotalDebtParams = FunctionArguments<typeof functions.resetIsolationModeTotalDebt>
export type ResetIsolationModeTotalDebtReturn = FunctionReturn<typeof functions.resetIsolationModeTotalDebt>

export type SetConfigurationParams = FunctionArguments<typeof functions.setConfiguration>
export type SetConfigurationReturn = FunctionReturn<typeof functions.setConfiguration>

export type SetLiquidationGracePeriodParams = FunctionArguments<typeof functions.setLiquidationGracePeriod>
export type SetLiquidationGracePeriodReturn = FunctionReturn<typeof functions.setLiquidationGracePeriod>

export type SetReserveInterestRateStrategyAddressParams = FunctionArguments<typeof functions.setReserveInterestRateStrategyAddress>
export type SetReserveInterestRateStrategyAddressReturn = FunctionReturn<typeof functions.setReserveInterestRateStrategyAddress>

export type SetUserEModeParams = FunctionArguments<typeof functions.setUserEMode>
export type SetUserEModeReturn = FunctionReturn<typeof functions.setUserEMode>

export type SetUserUseReserveAsCollateralParams_0 = FunctionArguments<typeof functions['setUserUseReserveAsCollateral(bytes32)']>
export type SetUserUseReserveAsCollateralReturn_0 = FunctionReturn<typeof functions['setUserUseReserveAsCollateral(bytes32)']>

export type SetUserUseReserveAsCollateralParams_1 = FunctionArguments<typeof functions['setUserUseReserveAsCollateral(address,bool)']>
export type SetUserUseReserveAsCollateralReturn_1 = FunctionReturn<typeof functions['setUserUseReserveAsCollateral(address,bool)']>

export type SupplyParams_0 = FunctionArguments<typeof functions['supply(address,uint256,address,uint16)']>
export type SupplyReturn_0 = FunctionReturn<typeof functions['supply(address,uint256,address,uint16)']>

export type SupplyParams_1 = FunctionArguments<typeof functions['supply(bytes32)']>
export type SupplyReturn_1 = FunctionReturn<typeof functions['supply(bytes32)']>

export type SupplyWithPermitParams_0 = FunctionArguments<typeof functions['supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)']>
export type SupplyWithPermitReturn_0 = FunctionReturn<typeof functions['supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)']>

export type SupplyWithPermitParams_1 = FunctionArguments<typeof functions['supplyWithPermit(bytes32,bytes32,bytes32)']>
export type SupplyWithPermitReturn_1 = FunctionReturn<typeof functions['supplyWithPermit(bytes32,bytes32,bytes32)']>

export type SyncIndexesStateParams = FunctionArguments<typeof functions.syncIndexesState>
export type SyncIndexesStateReturn = FunctionReturn<typeof functions.syncIndexesState>

export type SyncRatesStateParams = FunctionArguments<typeof functions.syncRatesState>
export type SyncRatesStateReturn = FunctionReturn<typeof functions.syncRatesState>

export type UpdateBridgeProtocolFeeParams = FunctionArguments<typeof functions.updateBridgeProtocolFee>
export type UpdateBridgeProtocolFeeReturn = FunctionReturn<typeof functions.updateBridgeProtocolFee>

export type UpdateFlashloanPremiumsParams = FunctionArguments<typeof functions.updateFlashloanPremiums>
export type UpdateFlashloanPremiumsReturn = FunctionReturn<typeof functions.updateFlashloanPremiums>

export type WithdrawParams_0 = FunctionArguments<typeof functions['withdraw(address,uint256,address)']>
export type WithdrawReturn_0 = FunctionReturn<typeof functions['withdraw(address,uint256,address)']>

export type WithdrawParams_1 = FunctionArguments<typeof functions['withdraw(bytes32)']>
export type WithdrawReturn_1 = FunctionReturn<typeof functions['withdraw(bytes32)']>

