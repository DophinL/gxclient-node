import {GXClient} from "../lib";

const private_key = "";
const account_id = "1.2.19";
let client = new GXClient(private_key, account_id, "wss://testnet.gxchain.org");
client.vote(["wit1"], "GXS", true).then(result => {
    console.log(JSON.stringify(result, null, "  "));
}).catch(ex => {
    console.error(ex);
});
