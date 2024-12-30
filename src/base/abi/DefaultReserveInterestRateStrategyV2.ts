import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    RateDataUpdate: event("0x5d123bea2036a4052274206f59d99350b9741e17da56ffae335d809b25ee0942", "RateDataUpdate(address,uint256,uint256,uint256,uint256)", {"reserve": indexed(p.address), "optimalUsageRatio": p.uint256, "baseVariableBorrowRate": p.uint256, "variableRateSlope1": p.uint256, "variableRateSlope2": p.uint256}),
}

export const functions = {
    ADDRESSES_PROVIDER: viewFun("0x0542975c", "ADDRESSES_PROVIDER()", {}, p.address),
    MAX_BORROW_RATE: viewFun("0x7a0c5ebf", "MAX_BORROW_RATE()", {}, p.uint256),
    MAX_OPTIMAL_POINT: viewFun("0x7a24bd7e", "MAX_OPTIMAL_POINT()", {}, p.uint256),
    MIN_OPTIMAL_POINT: viewFun("0xf7e0fe67", "MIN_OPTIMAL_POINT()", {}, p.uint256),
    calculateInterestRates: viewFun("0xb90db31b", "calculateInterestRates((uint256,uint256,uint256,uint256,uint256,address,bool,uint256))", {"params": p.struct({"unbacked": p.uint256, "liquidityAdded": p.uint256, "liquidityTaken": p.uint256, "totalDebt": p.uint256, "reserveFactor": p.uint256, "reserve": p.address, "usingVirtualBalance": p.bool, "virtualUnderlyingBalance": p.uint256})}, {"_0": p.uint256, "_1": p.uint256}),
    getBaseVariableBorrowRate: viewFun("0xcca22ea1", "getBaseVariableBorrowRate(address)", {"reserve": p.address}, p.uint256),
    getInterestRateData: viewFun("0x131e889c", "getInterestRateData(address)", {"reserve": p.address}, p.struct({"optimalUsageRatio": p.uint256, "baseVariableBorrowRate": p.uint256, "variableRateSlope1": p.uint256, "variableRateSlope2": p.uint256})),
    getInterestRateDataBps: viewFun("0xc79ce42e", "getInterestRateDataBps(address)", {"reserve": p.address}, p.struct({"optimalUsageRatio": p.uint16, "baseVariableBorrowRate": p.uint32, "variableRateSlope1": p.uint32, "variableRateSlope2": p.uint32})),
    getMaxVariableBorrowRate: viewFun("0x6a00178e", "getMaxVariableBorrowRate(address)", {"reserve": p.address}, p.uint256),
    getOptimalUsageRatio: viewFun("0xaa33f063", "getOptimalUsageRatio(address)", {"reserve": p.address}, p.uint256),
    getVariableRateSlope1: viewFun("0x5b651bae", "getVariableRateSlope1(address)", {"reserve": p.address}, p.uint256),
    getVariableRateSlope2: viewFun("0x8f4b0d5d", "getVariableRateSlope2(address)", {"reserve": p.address}, p.uint256),
    'setInterestRateParams(address,bytes)': fun("0xa8d9e56f", "setInterestRateParams(address,bytes)", {"reserve": p.address, "rateData": p.bytes}, ),
    'setInterestRateParams(address,(uint16,uint32,uint32,uint32))': fun("0xfd81bb12", "setInterestRateParams(address,(uint16,uint32,uint32,uint32))", {"reserve": p.address, "rateData": p.struct({"optimalUsageRatio": p.uint16, "baseVariableBorrowRate": p.uint32, "variableRateSlope1": p.uint32, "variableRateSlope2": p.uint32})}, ),
}

export class Contract extends ContractBase {

    ADDRESSES_PROVIDER() {
        return this.eth_call(functions.ADDRESSES_PROVIDER, {})
    }

    MAX_BORROW_RATE() {
        return this.eth_call(functions.MAX_BORROW_RATE, {})
    }

    MAX_OPTIMAL_POINT() {
        return this.eth_call(functions.MAX_OPTIMAL_POINT, {})
    }

    MIN_OPTIMAL_POINT() {
        return this.eth_call(functions.MIN_OPTIMAL_POINT, {})
    }

    calculateInterestRates(params: CalculateInterestRatesParams["params"]) {
        return this.eth_call(functions.calculateInterestRates, {params})
    }

    getBaseVariableBorrowRate(reserve: GetBaseVariableBorrowRateParams["reserve"]) {
        return this.eth_call(functions.getBaseVariableBorrowRate, {reserve})
    }

    getInterestRateData(reserve: GetInterestRateDataParams["reserve"]) {
        return this.eth_call(functions.getInterestRateData, {reserve})
    }

    getInterestRateDataBps(reserve: GetInterestRateDataBpsParams["reserve"]) {
        return this.eth_call(functions.getInterestRateDataBps, {reserve})
    }

    getMaxVariableBorrowRate(reserve: GetMaxVariableBorrowRateParams["reserve"]) {
        return this.eth_call(functions.getMaxVariableBorrowRate, {reserve})
    }

    getOptimalUsageRatio(reserve: GetOptimalUsageRatioParams["reserve"]) {
        return this.eth_call(functions.getOptimalUsageRatio, {reserve})
    }

    getVariableRateSlope1(reserve: GetVariableRateSlope1Params["reserve"]) {
        return this.eth_call(functions.getVariableRateSlope1, {reserve})
    }

    getVariableRateSlope2(reserve: GetVariableRateSlope2Params["reserve"]) {
        return this.eth_call(functions.getVariableRateSlope2, {reserve})
    }
}

/// Event types
export type RateDataUpdateEventArgs = EParams<typeof events.RateDataUpdate>

/// Function types
export type ADDRESSES_PROVIDERParams = FunctionArguments<typeof functions.ADDRESSES_PROVIDER>
export type ADDRESSES_PROVIDERReturn = FunctionReturn<typeof functions.ADDRESSES_PROVIDER>

export type MAX_BORROW_RATEParams = FunctionArguments<typeof functions.MAX_BORROW_RATE>
export type MAX_BORROW_RATEReturn = FunctionReturn<typeof functions.MAX_BORROW_RATE>

export type MAX_OPTIMAL_POINTParams = FunctionArguments<typeof functions.MAX_OPTIMAL_POINT>
export type MAX_OPTIMAL_POINTReturn = FunctionReturn<typeof functions.MAX_OPTIMAL_POINT>

export type MIN_OPTIMAL_POINTParams = FunctionArguments<typeof functions.MIN_OPTIMAL_POINT>
export type MIN_OPTIMAL_POINTReturn = FunctionReturn<typeof functions.MIN_OPTIMAL_POINT>

export type CalculateInterestRatesParams = FunctionArguments<typeof functions.calculateInterestRates>
export type CalculateInterestRatesReturn = FunctionReturn<typeof functions.calculateInterestRates>

export type GetBaseVariableBorrowRateParams = FunctionArguments<typeof functions.getBaseVariableBorrowRate>
export type GetBaseVariableBorrowRateReturn = FunctionReturn<typeof functions.getBaseVariableBorrowRate>

export type GetInterestRateDataParams = FunctionArguments<typeof functions.getInterestRateData>
export type GetInterestRateDataReturn = FunctionReturn<typeof functions.getInterestRateData>

export type GetInterestRateDataBpsParams = FunctionArguments<typeof functions.getInterestRateDataBps>
export type GetInterestRateDataBpsReturn = FunctionReturn<typeof functions.getInterestRateDataBps>

export type GetMaxVariableBorrowRateParams = FunctionArguments<typeof functions.getMaxVariableBorrowRate>
export type GetMaxVariableBorrowRateReturn = FunctionReturn<typeof functions.getMaxVariableBorrowRate>

export type GetOptimalUsageRatioParams = FunctionArguments<typeof functions.getOptimalUsageRatio>
export type GetOptimalUsageRatioReturn = FunctionReturn<typeof functions.getOptimalUsageRatio>

export type GetVariableRateSlope1Params = FunctionArguments<typeof functions.getVariableRateSlope1>
export type GetVariableRateSlope1Return = FunctionReturn<typeof functions.getVariableRateSlope1>

export type GetVariableRateSlope2Params = FunctionArguments<typeof functions.getVariableRateSlope2>
export type GetVariableRateSlope2Return = FunctionReturn<typeof functions.getVariableRateSlope2>

export type SetInterestRateParamsParams_0 = FunctionArguments<typeof functions['setInterestRateParams(address,bytes)']>
export type SetInterestRateParamsReturn_0 = FunctionReturn<typeof functions['setInterestRateParams(address,bytes)']>

export type SetInterestRateParamsParams_1 = FunctionArguments<typeof functions['setInterestRateParams(address,(uint16,uint32,uint32,uint32))']>
export type SetInterestRateParamsReturn_1 = FunctionReturn<typeof functions['setInterestRateParams(address,(uint16,uint32,uint32,uint32))']>

