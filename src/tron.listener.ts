import {ICallbackPayload, ITronWebConfig} from "./interface";

const TronWeb = require("tronweb");
async function trc20TransferListener(contractAddress:string,tronWebConfig:ITronWebConfig,callback: Function){

  const tronWeb = new TronWeb({
    fullHost: tronWebConfig.fullHost,
    headers: { "TRON-PRO-API-KEY": tronWebConfig.apiKey },
    privateKey: tronWebConfig.privateKey
  });
  let contract = await tronWeb.contract().at(contractAddress);
  await contract['Transfer']().watch((err:any, event:any) => {
    if (err)
    return console.error("Error with \"Message\" event:", err);
    const {from,to,value} = event.result
    const _callback : ICallbackPayload= {
      event:event.name,
      from:from,
      to:to,
      value:value,
      transaction:event.transaction
    }
    callback(_callback)
  });
}

export {trc20TransferListener}
