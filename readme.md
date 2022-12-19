# REST API - MongoDB (mongoose)

### An application for storing contacts, with authorization and the ability to set avatars.
### During the development were used:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)


### Features


- Contacts

    -  GET  /contacts     GET all contacts
    -  GET  /contacts/:contactId     GET one contact by id
    -  POST  /contacts     Add new contact
    -  PUT  /contacts/:contactId     Update information about contact
    -  PATCH  /contacts/:contactId/favorite     Add contact to favorites
    -  DELETE  /contacts/:contactId    Delete contact

- Auth

    -  POST  /auth/register      User registration
    -  POST  /auth/login      User authentication 
    -  POST  /auth/verify     Endpoint for verification email
    -  GET  /auth/verify/:verificationCode     Resending an email to a user with a verification link
    -  GET  /auth/current     User data by token
    -  GET  /auth/logout     Logout
    -  PATCH  /auth/avatars    User avatar updates
