# NetBoard
[![CodeFactor](https://www.codefactor.io/repository/github/satcom886/netboard/badge)](https://www.codefactor.io/repository/github/satcom886/netboard)  
A multi-server dashboard for Netdata.

Once you install this, it should look like this:  
![Screenshot](screenshot.png)

## Installation
Serve the entire NetBoard folder on a web server (e.g. Apache).  
You don't need to have PHP, just a browser with JavaScript enabled.

## Basic configuration
The servers and server groups are configured in `storage/config.js`.  
Copy the sample config file `config.js.example` to `storage/config.js` to get started!  
There's an array called *groups*. This array contains groups.  
Each *group* is an object and contains 2 variables:
1. `groupName` - a string that will be displayed on the page (can be any valid string)
1. `servers` - an array containing *server* objects  

Each *server* object contains 2 variables:
1. `serverName` - a string that will be used as heading of the server card (also can be pretty much anything)
1. `serverURL` - (a string that) contains the URL of your Netdata node  

## Advanced configuration
All *advanced options* are configured in the HTML itself.  
I recommend changing what server `dashboard.js` is fetched from.  
This can be done by changing the address of the script with the following comment:
> Here dashboard.js is loaded  

Netdata setings (like unloading charts that are not visible, etc.) are also configurable in `index.html`.  
