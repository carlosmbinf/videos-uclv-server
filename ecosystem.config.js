module.exports = {
  apps : [{
    name: "Videos UCLV server",
    script: "node app",
    env: {
      NODE_ENV: "development",
      "ROOT_URL": "https://srv5119-206152.vps.etecsa.cu:5000/",
      "PORT": 80,
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}