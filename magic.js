// this is where the magic should happen...

function buildTheWebsite() {
    let group
    for (group of configFile.groups){
        drawGroup(group.groupName);
        for (server of group.servers){
            drawServer(server.serverName, server.serverURL, group.groupName);
        }
    }
}

function drawGroup(groupName){
    console.log(groupName);
    // create a master div for the group name, the horizontal line and the server cards
    let groupDiv = document.createElement("div");
    groupDiv.classList.add("w3-container");
    // Now create the heading, a horizontal line and the div for the servers
    // This section deals with the heading
    let groupHeading = document.createElement("h2");
    groupHeading.classList.add("w3-margin");
    groupHeading.innerHTML = groupName;
    // This section deals with the horizontal line
    let horizontalLine = document.createElement("hr");
    horizontalLine.classList.add("grey-line");
    // This section deals with the div for the server cards
    let serverDiv = document.createElement("div");
    serverDiv.classList.add("flex-container");
    serverDiv.id = groupName;
    // Now append all of that to the master div
    groupDiv.appendChild(groupHeading);
    groupDiv.appendChild(horizontalLine);
    groupDiv.appendChild(serverDiv);
    // Finally let's append the master div to the HTML's body
    document.getElementById("body").appendChild(groupDiv);
}

function drawServer(serverName, serverURL, groupName){
    console.log(serverName);
    console.log(serverURL);
    // Create the server card div and apply the styling
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("w3-card-4");
    cardDiv.classList.add("w3-quarter");
    // cardDiv.classList.add("fix-quarter");
    cardDiv.classList.add("w3-margin");
    // Now create the server heading
    let serverHeading = document.createElement("h3");
    serverHeading.classList.add("w3-margin-left");
    serverHeading.innerHTML = serverName;
    // Now create that stupid div for the graph
    let uselessDiv = document.createElement("div");
    uselessDiv.classList.add("w3-center");
    // Now create the actual chart div
    // This is going to be pretty long
    let chartDiv = document.createElement("div");
    chartDiv.setAttribute("data-host", serverURL);
    chartDiv.setAttribute("data-netdata", "system.cpu");
    chartDiv.setAttribute("data-chart-library", "gauge");
    chartDiv.setAttribute("data-title", "");
    chartDiv.setAttribute("data-gauge-max-value", "100");
    chartDiv.setAttribute("data-after", "-60");
    chartDiv.setAttribute("data-points", "60");
    chartDiv.setAttribute("data-colors", "#22AA99");
    // Now let's create another horizontal line
    let horizontalLine = document.createElement("hr");
    horizontalLine.classList.add("grey-line");
    // Now the button (this should be fun)
    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("w3-margin");
    buttonDiv.classList.add("w3-center");
    buttonDiv.classList.add("w3-container");
    buttonDiv.setAttribute("href", serverURL);
    //serverButton.onclick = location.href=(serverURL);
    // Now the text in the button
    let enterText = document.createElement("a");
    enterText.classList.add("w3-left");
    enterText.classList.add("no-underline");
    enterText.classList.add("dark-grey-color");
    enterText.setAttribute("href", serverURL);
    enterText.innerHTML = "Enter ".concat(serverName)
    // Now the FA icon
    let faIconA = document.createElement("a");
    faIconA.classList.add("no-underline");
    faIconA.setAttribute("href", serverURL);
    let faIcon = document.createElement("i");
    faIcon.classList.add("fa");
    faIcon.classList.add("fa-arrow-right");
    faIcon.classList.add("w3-right");
    faIcon.classList.add("dark-grey-color");
    // faIcon.setAttribute("href", serverURL);
    // That's all!
    // Now append everything to the server card div
    cardDiv.appendChild(serverHeading);
    // First the useless div, then the useful one. Just to speed things up.
    uselessDiv.appendChild(chartDiv);
    cardDiv.appendChild(uselessDiv);
    cardDiv.appendChild(horizontalLine);
    // Again. First the button text into the button, then the button into the card
    buttonDiv.appendChild(enterText);
    faIconA.appendChild(faIcon);
    buttonDiv.appendChild(faIconA);
    cardDiv.appendChild(buttonDiv);
    // Append the server card to the group div
    document.getElementById(groupName).appendChild(cardDiv);
}

buildTheWebsite();