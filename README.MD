### Trc20 Transfer Event Listener 

Example Callback
```
function exampleCallback(data:ICallbackPayload){
    console.group("New event received");
    console.log("- Event Name:", data.event);
    console.log("- Transaction:", data.transaction);
    console.log("- Result:",`From : ${data.from}, To :${data.to}, value: ${data.value}`);
    console.groupEnd();
}
```

Example Listener
```
    const tronWebConfig:ITronWebConfig={
        fullHost:"https://api.trongrid.io",
        apiKey:"****b926-****-4253-****-ddd72ace****",
        privateKey:'****99d289c29b505189c3ec0b****d2b2b06731f52e4b5b4b9a46ae53******'
    }
    const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //USDT
    await trc20TransferListener(trc20ContractAddress, tronWebConfig, exampleCallback)
```

Example getTransitionByBlockNumber
```
    const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"; //USDT
    const blockNumber = 59520090
    const event = 'Transfer'
    await getTransitionByBlockNumber(trc20ContractAddress,blockNumber,event,exampleCallback)
```
