Hey there!
Deployed link: https://fakechat-meg2.onrender.com 
(Wait for about 30 seconds for the server to start after you first hit the server as the server spins off after every 15 minutes of inactivity.)

# Demo :

Shad's Chat:
<img width="960" alt="Screenshot 2024-03-10 191232" src="https://github.com/darishkhan/FakeChat/assets/93848997/6fd304a1-a5cd-40f6-a196-14099e435829">


Sanya's Chat:
<img width="960" alt="Screenshot 2024-03-10 191242" src="https://github.com/darishkhan/FakeChat/assets/93848997/9acc71c4-4ad2-43af-bba2-8b3c784b35c3">


Darish's Chat:
<img width="960" alt="image" src="https://github.com/darishkhan/FakeChat/assets/93848997/e9f6011c-0585-4cd7-afc8-85e23411516c">





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
   node ./index.js
   ```
   
Open http://localhost:5000/

---
# Current Use Case:

Tired of being ignored from your crush??

No worries, disguise yourself as your crush and reply to your own self ;D

---

# NOTE:
- No database is used and all chats are broadcasted at sending and stored locally, thus you can't see previous messages.
- 'Online Users' tab is empty and it's code is removed as no database is being used.
