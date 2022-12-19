# REST API - MongoDB (mongoose)

### An application for storing contacts, with authorization and the ability to set avatars.
### During the development were used:

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<h2>Auth</h2>
<p>POST /auth/register   User registration</p>
<p>POST /auth/login   User authentication</p>
<p>POST /auth/verify  Endpoint for verification email</p>
<p>GET /auth/verify/:verificationCode  Resending an email to a user with a verification link</P>
<p>GET /auth/current  User data by token</p>
<p>GET /auth/logout  Logout<p>
<p>PATCH /auth/avatars User avatar updates</P> 


<h2>Contacts</h2>
<p>GET /contacts  GET all contacts</P>
<p>GET /contacts/:contactId  GET one contact by id</p>  
<p>POST /contacts  Add new contact</P>  
<p>PUT /contacts/:contactId  Update information about contact</p>
<p>PATCH /contacts/:contactId/favorite  Add contact to favorites</p> 
<p>DELETE /contacts/:contactId Delete contact</p>
