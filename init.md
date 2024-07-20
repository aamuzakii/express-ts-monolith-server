npm i express cors dotenv && npm i -D typescript tsc ts-node-dev @types/express @types/node @types/cors

//2)building tsconfig.json
tsc --init

//3) inside tsconfig.json
{
  "compilerOptions": {
 "target": "es6", 
  "module": "CommonJS",
   "outDir": "./dist", 
   "rootDir": "./",
   "strict": true,
    "noImplicitAny": false,
  }
}

//4) package.json
 "scripts": {
    "dev": "ts-node-dev --clear server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },