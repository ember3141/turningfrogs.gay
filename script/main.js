import * as utils from "./utils.js"

async function connect() {
    let connection = await utils.attemptConnection();

    console.log(connection);
    if (connection === "FAIL") {
        document.getElementById("mc-status").innerHTML = "Error - Check console"
    } else if (connection.status === "success") {
        console.log('test')
        document.getElementById("mc-status").style.color = "green";
        document.getElementById("mc-status").innerHTML = `Online - ${connection.players.now}/${connection.players.max} - ${connection.server.name}`
    }
}
connect()

