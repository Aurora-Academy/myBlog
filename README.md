# myBlog

Steps

1. Clone the myBlog project from raktim's repo
2. Copy the server folder
3. Paste the server folder in your project
4. Open the postman
5. Inside the server folder that we just copied,
   You can find the post man collection
   called `Blog App 5.30 class.postman_collection.json`
6. Use that file in the postman, Goto File > Import > Select File
7. Update the .env file by copy pasting
   `.env.example` to `.env` only
8. Fill the details as follows:

   ```
   PORT=8000
   DB_URL="mongodb://localhost:27017/blog-app-530"

   SALT_ROUND=10

   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=raktim@rumsan.com
   SMTP_PASS=mzxgzpwfvloqlscv

   JWT_DURATION=7d
   JWT_SECRET=password
   ```

9. In the terminal inside the server folder, Run the following command `npm install`
10. Run the server application using `npm run dev`
