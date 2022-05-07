const os = require('os')

// console.log(os.cpus())
const path = require('path')
// console.log(path.join(__dirname,'..'))
const {isMainThread, parentPort, Worker} = require('worker_threads')

if(isMainThread) {
  const worker = new Worker(__filename)
  worker.postMessage('ping')
  worker.on('message',(value)=>{
    console.log('워커로부터',value)
  })
  worker.on('exit',()=> console.log('워커끝'))
  worker.postMessage('ping2')
} else{
  parentPort.on('message', (value) => {
    console.log('부모로부터',value)
    parentPort.postMessage('pong')
    parentPort.close();
  })
}