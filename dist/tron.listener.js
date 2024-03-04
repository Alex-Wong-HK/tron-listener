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
Object.defineProperty(exports, "__esModule", { value: true });
exports.trc20TransferListener = void 0;
const TronWeb = require("tronweb");
function trc20TransferListener(contractAddress, tronWebConfig, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        const tronWeb = new TronWeb({
            fullHost: tronWebConfig.fullHost,
            headers: { "TRON-PRO-API-KEY": tronWebConfig.apiKey },
            privateKey: tronWebConfig.privateKey
        });
        let contract = yield tronWeb.contract().at(contractAddress);
        yield contract['Transfer']().watch((err, event) => {
            if (err)
                return console.error("Error with \"Message\" event:", err);
            const { from, to, value } = event.result;
            const _callback = {
                event: event.name,
                from: from,
                to: to,
                value: value,
                transaction: event.transaction
            };
            callback(_callback);
        });
    });
}
exports.trc20TransferListener = trc20TransferListener;
//# sourceMappingURL=tron.listener.js.map