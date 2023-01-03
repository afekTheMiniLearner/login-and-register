# Login-and-register <img src="./readme-resources/login-logo.png" width=100px height=100px align="right">

### This is a server side and web (sass+css+html) project, this project done with high strictness under the guidance of best practices and standards, a lot of work that summarize some of my knowladge about css + html and server side<br />

---

This project stores data in the database and makes it accessible with **REST APIs**, that are written in _NodeJS_ & _typescript_ and with _express ts_ for the server. <br /> <br />
The project includes the following APIs :

| Authentication of users  
| ----------------------------------- |
| + Register user |
| + Login user |
| + Logout user |

---

### **Running the project :**

**Requirements**

-   _NodeJS_ version 18.1+
-   _MongoDB service_ version 6.0.1+

**Command lines**

-   **The command to run the project**
    -   `npm run start`<br /> (runs build of typescript, and runs the JS compiled project)
    -   `npm run dev`<br /> (runs _typescript_ code for developement with _nodemon_)
    -   For developing the _sass_ style its necessary to install _sass_ inside the "client" folder. Than to compile the scss files into css you should run this script :<br />
        `"sass-compile": "sass styles/scss:styles/css"`

---

### **Example of using the project's login/logout/register operations:**

![Example-GIF](./readme-resources/web-gif.gif)

---

### Technologies that I used for the project:

-   [x] _**Nodejs**_ : the project based on JS.
-   [x] _**Express**_ : used for the server side routers, middlewares controllers, and services.
-   [x] _**Typescript**_ : the project have written in _typescript_ for interfaces, variables types, etc..
-   [x] _**jwt**_ : authentication with _json-web-token_ by saving token for the authenticated user.
-   [x] _**MongoDB**_ : _**mongoose**_ for _mongoDB_ with schemas and models that used in the controllers and services.
-   [x] _**Bcrypt**_ : crypted the users passwords for best data secure and by the guidance of best practice.

### Extra technologies i been using for development tools:

-   [x] _**nodemon**_ : watch and compile any changes for _typescript_ files.
-   [x] _**prettier**_ : fix annotation and organized code by standard with _prettier_ watcher.
-   [x] _**sass**_ : using _sass_ allowed me to use mixins, variable, and generally write more organized, simple, and readable code.
-   [x] _**lite-server**_ : watch any real-time changes in the _sass_ & _html_ files.

### Another features i been using in this project:

-   [x] **_jwt_ authentication** : authenticate user by compare crypted password with user plaintext password request by the bast practice guidance.
-   [x] **_mongoose_ schema hooks** : use pre save hook that crypt the user password before creating user (update user data not applied).
-   [x] **_postman_** : exported postman collection for _postman_ software :
        `login_and_register_rest_api.postman_collection.json`

### Visual features with _html_ and _sass & css_ that i used:

-   [x] **Scripting** : the use of _js_ script files inside the client pages allowed me to interact with the page when the user click on a button.
-   [x] **Hovering, animations and sound effects** : using effects while the user hover on some components & using _keyframes_ animations or sound effects inside the page makes the page more responsive and allow the user to feel better the interaction with the page.
-   [x] **Simple-design** : this allows the user to focus on the main porpuse of any page and to be pleasant and comfort to the eye using features like shadows, borders, fonts, different opacity levels, etc...

## Author

:octocat: **Afek Sakaju**

-   LinkedIn: [@afeksa](https://www.linkedin.com/in/afeksa/)
-   GitHub: [@afekTheMiniLearner](https://github.com/afekTheMiniLearner)
