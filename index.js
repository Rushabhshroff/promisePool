function PromisePool(concurrency=10){
    this.promises = [];
    this.concurrency = concurrency;
    this.pending = 0;
    this.resolved = [];
}
PromisePool.prototype.startNext = function(resolve,reject){
    if(this.promises.length > 0){
        let promise = this.promises.shift();
        this.pending ++;
        return promise().then((result)=>{
            this.resolved.push(result);
            this.pending --;
            if(this.promises.length > 0){
                return this.startNext(resolve,reject);
            }else if(this.pending <= 0){
                resolve(this.resolved);
                return Promise.resolve();
            }else{
                return Promise.resolve();
            }
        }).catch((err)=>{
            reject(err);
        })
    }
}
PromisePool.prototype.start = async function(){
    return new Promise(async (resolve,reject)=>{
        for(let i = 0 ; i < this.concurrency ; i++){
            this.startNext(resolve,reject);
        }
    })
}
module.exports = PromisePool;