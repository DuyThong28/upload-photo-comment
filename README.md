# Upload photo with comment'
<b>Features:</b>
<ul>
  <li>Upload a photo</li>
  <li>Add a comment to a photo</li>
  <li>Display all uploaded photos and its comments </li>
</ul>

# Tech stack
<ul>
  <li>
    Frontend: Next.js, TypeScript, ant.design
  </li>
  <li>
    Backend: Next JS API routes, prisma ORM
  </li>
  <li>
Database: PostgreSQL
  </li>
  <li>Deploy: vercel & render</li>
</ul>

# Install

```bash
git clone https://github.com/DuyThong28/upload-photo-comment.git 
```
```bash
  npm install
```
<b>Create a .env file at the same level with src folder and paste this text to the .env file</b>
```bash
POSTGRES_DATABASE="verceldb"
POSTGRES_HOST="ep-curly-moon-a44bhmod-pooler.us-east-1.aws.neon.tech"
POSTGRES_PASSWORD="yEcr79QmwFNY"
POSTGRES_PRISMA_URL="postgres://default:yEcr79QmwFNY@ep-curly-moon-a44bhmod-pooler.us-east-1.aws.neon.tech/verceldb?pgbouncer=true&connect_timeout=15&sslmode=require"
POSTGRES_URL="postgres://default:yEcr79QmwFNY@ep-curly-moon-a44bhmod-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require"
POSTGRES_URL_NON_POOLING="postgres://default:yEcr79QmwFNY@ep-curly-moon-a44bhmod.us-east-1.aws.neon.tech/verceldb?sslmode=require"
POSTGRES_URL_NO_SSL="postgres://default:yEcr79QmwFNY@ep-curly-moon-a44bhmod-pooler.us-east-1.aws.neon.tech/verceldb"
POSTGRES_USER="default"
CLOUD_NAME="dchhm36es"
API_KEY="967372242259833"
API_SECRET="aMfjGbwYcIEshVOSOPS0KON0l0Y"
CLOUDINARY_URL=cloudinary://967372242259833:aMfjGbwYcIEshVOSOPS0KON0l0Y@dchhm36es
CLOUDINARY_API_KEY="967372242259833"
CLOUDINARY_API_SECRET="aMfjGbwYcIEshVOSOPS0KON0l0Y"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dchhm36es"
```
```bash
npx prisma studio
```
<b>
  
Create a new terminal</b>

```bash
npm run dev
```



