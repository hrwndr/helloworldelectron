//Importing electron to our application
const {app, BrowserWindow } = require('electron');
//clear some memory
let win = null;
//add boot function
function boot() {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
}
app.on("ready", boot);

//thats it for our index.js file lets test our application