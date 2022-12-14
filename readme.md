# REST API - MongoDB (mongoose)

### An application for storing contacts, with authorization and the ability to set avatars.
### During the development were used:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

### Features
- Contacts:
    -  /contacts - GET all contacts
    -  /contacts/:id - GET one contact by id
    -  /contacts - POST - add new contact (name, email, phone)
    -  /contacts/:id - PUT - update information about contact
    -  /contacts/:id/favorite" - PATCH - add contact to favorites
    -  /contacts/:id - DELETE contact
- Authentication:
    -  /users/signup - POST - Signup - registration (name, email, phone, avatar)
    -  /users/login - POST - Login 
    -  /users/current - GET - Current
    -  /users/logout - GET - Signout
    -  /users/avatar - PATCH - Adding an avatar to an existing profile
- Verification:
    -  SendGrid