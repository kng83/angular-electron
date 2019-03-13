const { app, BrowserWindow } = require('electron')

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/angular-electron/favicon.ico`,
    // webPreferences: {
    //   nodeIntegration: true
    // }
  })


  mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)


  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (mainWindow === null) {
    createWindow()
  }
})
