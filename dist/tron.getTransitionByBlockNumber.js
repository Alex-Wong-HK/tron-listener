"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransitionByBlockNumber = void 0;
const axios_1 = __importDefault(require("axios"));
function getTransitionByBlockNumber(contractAddress, blockNumber, eventName, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.trongrid.io/event/contract/${contractAddress}/${eventName}/${blockNumber}`;
        try {
            const response = yield axios_1.default.get(url);
            const events = response.data;
            if (events.length > 0) {
                events.forEach((event) => {
                    const { result, transaction_id } = event;
                    const { from, to, value } = result;
                    const _callback = {
                        transaction: transaction_id,
                        from: from,
                        to: to,
                        value: value,
                        event: event.name
                    };
                    callback(_callback);
                });
            }
            else {
                console.log("Not Event Here");
            }
        }
        catch (error) {
            console.error('Error occurred:', error);
        }
    });
}
exports.getTransitionByBlockNumber = getTransitionByBlockNumber;
//# sourceMappingURL=tron.getTransitionByBlockNumber.js.map