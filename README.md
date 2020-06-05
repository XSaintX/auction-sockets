# **Auction with sockets**
![Alt text](/angularsockets/src/app/img/product_list.jpg?raw=true)<br>
A Real-Time Auction using Angular and express with sockets. 
## UI Description
The app allows to login as admin or any other user, if you login as admin you can access to all the available products and you can start auction with the hammer auction button. If you login as any user, you can see the auction items live, if there is no auction items it will show a spinner. But if there is an auction item press the buy item button to start increasing bidding and all that info will show you to all users connected with a countdown of 15 seconds. When reaches 0 will show the owner of the product.

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
- Following the best practices!

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
  
   If everything goes fine then your server is running. In my case it is **http://localhost:5000**. 
   
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Screenshots:

### Home Page:

![Alt text](/angularsockets/src/app/img/login.jpg?raw=true)<br>
### Panel Page:

![Alt text](/angularsockets/src/app/img/user.jpg?raw=true)<br>
