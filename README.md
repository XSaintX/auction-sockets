# **Auction with sockets**
![Alt text](/angularsockets/src/app/img/product_list.jpg?raw=true)<br>
A Real-Time Auction using Angular and express with sockets. 
## UI Description
The app allows the user to login as the admin, or as an other user. If you login as the admin you can access all the available products and you can start auctions with the gavel button. If you login as a user, you can see the auction items live. If there is no auction items the app will show a spinner. As a user, you may press the buy item button on an auction item to start increasing bidding. The app will show you info about all users connected, with a countdown of 15 seconds. If another user presses the buy item butto, the countdown will be restarted. If the admin logs out the auction will be finished. When the countdown reaches 0, the app will show the owner of the product.

## Features
- Angular 9
- Routing
- Lazy loading (Shopping module)
- Material Design
- Responsive layout (flex layout module)
- RxJS/Observables
- Angular forms
- Http
- Scalable architecture
- Following best practices!

## Usage
### Using the project on your local environment
  * `git clone  https://github.com/XSaintX/auction-sockets.git`
  * `Open CMD & navigate to server folder`
  * `First command 'npm install tsc-watch --save-dev'`
  * `Second command 'npm install'`  
  * `Third command 'tsc -w' to generate dist files`
  * `Fourth command 'nodemon dist/' to run server` 
  * `Open CMD & navigate to angularsockets folder`
  * `Fifth command 'npm install'`  
  
   If everything goes fine, then your server is running. In my case it is **http://localhost:5000**. 
   
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Screenshots:

### Home Page:

![Alt text](/angularsockets/src/app/img/login.jpg?raw=true)<br>
### Panel Page:

![Alt text](/angularsockets/src/app/img/user.jpg?raw=true)<br>
