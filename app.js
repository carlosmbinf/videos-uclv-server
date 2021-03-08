const proxy = require('@ucipass/proxy')
const proxyPort = 80
proxy(proxyPort)
.then(()=>{
  // Use it for a while....
})
.then((server) => {
  // console.log(server);
  // server.stop() 
})