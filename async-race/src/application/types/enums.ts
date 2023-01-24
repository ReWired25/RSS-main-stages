export enum RaceValues {
  wrapperPadding = 20,
  carWidth = 120,
  marginDefault = '0',
  transitionDefault = '0s',
}

export enum MaxCars {
  carsOnPage = 7,
  winnersOnPage = 10,
}

export enum DriveStatus {
  finished = 200,
  engineBroken = 500,
}

export enum Server {
  URL = 'https://async-race-api-95ws.onrender.com/',
}

export enum ErrorDataStatus {
  invalidContent = 204,
  unexpectedError = 1,
}

export enum ErrorValues {
  serverResponseErrorTitle = 'Something went wrong!<br>Unable to get response from server.',
  serverResponseErrorMessage = `The server is located on '<a class="message-server-link" target="_blank" href="https://render.com">render.com</a>', sometimes it takes a little longer to respond. Please try again later or reloading the application.`,
  serverDataErrorTitle = 'Something went wrong!<br>Error: 204. Invalid content.',
  serverDataErrorMessage = 'The server is sending incorrect data. Please restart the app or try again later.',
  driveResponseErrorTitle = 'Something went wrong with server!',
  driveResponseErrorMessage = `Perhaps the reason is the behavior of asynchronous server functions.<br>You can try reload the app and don't spam the start and stop buttons.<br>Read about problems with the server in the task's discord channel (you can find their analysis by the keywords "drive" and "drive 404")`,
  minorResponseErrorType = 'Unexpected error',
  minorResponceErrorMessage = 'Perhaps there are problems with the connection or with sending valid data from the server. Please try restarting the app or check back later.',
}