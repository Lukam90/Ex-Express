# mern-stack

Playlists (Net Ninja) :

- [MERN Stack Crash Course Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
- [MERN Auth Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

## Back

**Init**

npm init -y

**Packages**

npm i -g nodemon

npm i express<br>
npm i dotenv<br>
npm i mongoose<br>
npm i validator<br>
npm i jsonwebtoken

**Run**

npm run dev

## Front

**Create**

npx create-react-app frontend

**Packages**

npm i react-router-dom<br>
npm i date-fns

**Run**

npm start

## Tests

Raw - JSON

**POST localhost:4000/api/workouts**

```json
{
    "title": "Situps",
    "load": 0,
    "reps": 50
}
```

## Terms

**Header**

Contains the algorithm used for the JWT

**Payload**

Contains non-sensitive user data (ex : user id)

**Signature**

Used to verify the token by the server
