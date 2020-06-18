// this is where the magic should happen...

function readTheConfigFile() {
    // let configFile = fetch("config.json").then(Response => Response.json()).then(jsonResponse);
    // console.log(configFile);
    //return configFile
    let configFile = require(["json!config.json"]);
    return configFile;
}

function buildTheWebsite() {
    // for (group in configFile.)
    let configFile = readTheConfigFile();
    document.getElementById("jsSource").src = configFile.jsSource;
    console.log("The source for dashboard.js should now be set to:");
    console.log(configFile.jsSource);
}

buildTheWebsite();