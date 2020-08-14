const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const addReducer = (acc, element) => { return acc + element }; 

const totalBatteries = batteryBatches.reduce(addReducer, 0); 