import axios from 'axios';
import { ICallbackPayload} from "./interface";


async function getTransitionByBlockNumber(contractAddress: string, blockNumber:number,eventName:string,callback: Function): Promise<void> {
  const url = `https://api.trongrid.io/event/contract/${contractAddress}/${eventName}/${blockNumber}`;
  try {
    const response = await axios.get(url);
    const events = response.data;

    if (events.length > 0){
      events.forEach((event: any) => {
        const {result,transaction_id} = event
        const { from, to, value } = result;
        const _callback:ICallbackPayload = {
          transaction:transaction_id,
          from:from,
          to:to,
          value:value,
          event:event.name
        }
        callback(_callback)
      });
    }else {
      console.log("Not Event Here")
    }
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

export {getTransitionByBlockNumber}

