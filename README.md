Hey there!

Demo :

Shad's Chat:
<img width="959" alt="image" src="https://github.com/darishkhan/FakeChat/assets/93848997/012a010e-89cd-4fef-a669-c75e04f7c697">

Sanya's Chat:
<img width="960" alt="image" src="https://github.com/darishkhan/FakeChat/assets/93848997/2b105d2c-d4b8-4fc1-9fbb-a6803251866f">

Darish's Chat:
<img width="960" alt="image" src="https://github.com/darishkhan/FakeChat/assets/93848997/492d55f4-0fc8-4787-a4b6-046b6c6b8d2e">




Steps to run it locally:
1. ```
   git clone https://github.com/darishkhan/FakeChat.git
   ```
2. ```
   cd FakeChat
   ```
3. ```
   cd frontend
   ```
4. ```
   npm install
   ```
5. ```
   npm run build
   ```
6. ```
   cd ../backend
   ```
7. ```
   npm install
   ```
8. ```
   nodemon ./index.js
   ```
   
Open http://localhost:5000/

---

# NOTE:
- No database is used and all chats are broadcasted at sending and stored locally, thus you can't see previous messages.
- 'Online Users' tab is empty and it's code is removed as no database is being used.
   
