let configFile = {
    // jsSource": "https://pifour1-netdata.example.com/dashboard.js",
    // ^^^^^^^^^^ this is actually not used for now
    "groups": [ {"groupName": "Group 1",
                "servers":[
                    {"serverName": "pifour1",
                    "serverURL": "https://pifour1-netdata.example.com/"},
                    {"serverName": "pithree1",
                    "serverURL": "https://pithree1-netdata.example.com/"}]},
                {"groupName":"Group 2",
                "servers":[
                    {"serverName": "pifour2",
                    "serverURL": "https://pifour2-netdata.example.com/"}]}]
}