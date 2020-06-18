// this is where the magic should happen...

function buildTheWebsite() {
    let group
    for (group of configFile.groups){
        drawGroup(group.groupName);
        for (server of group.servers){
            drawServer(server.serverName, server.serverURL);
        }
    }
}

function drawGroup(groupName){
    console.log(groupName);
    //let serverGroupDiv = document.createElement("div");
    //serverGroupDiv.classList.add("w3-container");
    // configFile.groups[0].groupName = "Group 1"
    //serverGroupDiv.id = group.
    //document.getElementById("body").appendChild(serverGroupDiv);
}

function drawServer(serverName, serverURL){
    console.log(serverName);
    console.log(serverURL);
}

buildTheWebsite();