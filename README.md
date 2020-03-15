# React Express Starter Pack

> Create full stack apps with React and Express. Run your client and server with a single command. 

### Redux Version
This version does not include Redux
[Click Here For Redux Version](https://github.com/bradtraversy/react_redux_express_starter) 

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
### Author
Johnson Liu

## App Info
The boilerplate of this project is a fork from https://github.com/bradtraversy/react_express_starter by Brad Traversy. Front end and backend content were modified. 

Navigate to http://localhost:3000/. 

Type the 3 letter abbreviation of the currency in capital letters and click "Submit". Unless the input is 3 characters long and contains only capital letters, the "Submit" button will be disabled. If a 30-day average matching the currency is found, it will be prepended to the list below. If there is not a match, a warning message will flash for 3 seconds. If the value for the currency has already been fetched, a warning message will flash for 3 seconds and the existing entry will be highlighted in yellow for 2 seconds. No more entry will be added and the request to the backend API `/api/bitcoin` will not be made. 

### Version

1.0.0

### License

This project is licensed under the MIT License
