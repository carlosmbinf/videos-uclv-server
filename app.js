const proxy = require('@ucipass/proxy')
const proxyPort = 80
proxy(proxyPort)
.then(()=>{
  // Use it for a while....
  console.log("Puerto iniciado por: "+ proxyPort );
})
.then((server) => {
  // console.log(server);
  // server.stop() 
})