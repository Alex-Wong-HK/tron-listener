import { ITronWebConfig } from "./interface";
declare function trc20TransferListener(contractAddress: string, tronWebConfig: ITronWebConfig, callback: Function): Promise<void>;
export { trc20TransferListener };
