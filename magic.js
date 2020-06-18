// this is where the magic should happen...

function readTheConfigFile() {
    let configFile = fetch("config.json").then(Response => Response.json()).then(jsonResponse => console.log(jsonResponse))
}

function buildTheWebsite() {
    return 0;
}

readTheConfigFile();