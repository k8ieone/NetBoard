// this is where the magic should happen...

function readTheConfigFile() {
    let configFile;
    fetch("config.json").then(Response => Response.json()).then(jsonResponse = configFile);
    console.log(configFile);
}

function buildTheWebsite() {
    // for (group in configFile.)
    document.getElementById("jsSource").src = configFile.jsSource;
    console.log("The source for dashboard.js should now be set to " + configFile.jsSource);
}

readTheConfigFile();
buildTheWebsite();