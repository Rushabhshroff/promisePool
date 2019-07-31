# Promise Pool
## Installation

```
npm install @rushabhshroff/promisepool

or

yarn add @rushabhshroff/promisepool
```

## Usage
```
const PromisePool = require('@rushabhshroff/promisepool');

//Create a new pool with concurrency 3

let pool = new PromisePool(3)

pool.promises.add(()=>yourPromise());

pool.start().then((results)=>{
    // Do anything with your results array
}).catch((err)=>{
    //one of your promise was rejected error is thrown here.
})
```
