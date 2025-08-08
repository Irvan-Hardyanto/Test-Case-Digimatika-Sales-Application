# Quickstart Guide

## Notes
1. Tested using Node js version: v20.13.1
2. Tested on DB: Postgresql 9.6
3. login route : `/login`

## BE

1. move to `/backend` folder
```
cd ./backend
```

2. Install all dependencies
```
npm install
```
3. create new postgresql database, then copy the db name, user, password, and port number into the `.env` file

4. Run database migrations using TypeORM
```
npm run typeorm migration:run
```

5. Start the development server
```
npm run start:dev
```

## FE

1. move to `/frontend` folder
```
cd ./frontend
```

2. Install all dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```
