const { default: axios } = require("axios");
const url = "http://automation-orch-gcp.dunzo.in/automation-orch/env-pool/env/dfd/components/dataflows"
axios.get(url, {validateStatus: false}).then(({data}) => {
    console.log("Success")
    console.error(data)
}).catch(e => {
    console.log("Failure")
    console.error(e.response.data)
})