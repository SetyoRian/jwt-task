# Assignment 2
## BUILD YOURS FIRST REAT API USING JWT

[![N|Solid](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) [![N|Solid](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

- Tugas:
- Buatlah 1 buah server dengan ketentuan:
-- Menggunakan json file sebagai sumber datanya    
-- Mempunyai route untuk POST dan menghasilkan token JWT
-- Mempunyai route untuk GET data menggunakan JWT untuk otorisasi token sebelum meresponse data ke client
-- Gunakan POSTMAN sebagai client untuk mengetes API yang dibuat

## Features

- POST untuk mendapatkan JWT
- GET dengan JWT untuk mendapatkan Data

## Tech

- [node.js] - I/O untuk Backend
- [Express] - Framework NodeJS

## Installation

App membutuhkan [Node.js](https://nodejs.org/) v16+ untuk dapat berjalan.

Instalasi dependencies lalu jalankan server

```sh
cd jwt-task
npm install
npm run start
```

## How to Use
- POST
    --> Lakukan POST request dengan raw json pada body Postman seperti berikut :
    {
        "username": "nama",
        "password": "pass"
    }
    --> Request pada: http://localhost:3000/register
    --> Mendapatkan JWT

- GET
    --> Lakukan GET request dengan menggunakan JWT yang didapatkan sebelumnya pada http://localhost:3000/data
    --> Mendapatkan data sebuah nama dengan tipe JSON
    --> Gunakan Postman saat melakukan request

## Structure

📦jwt-task
 ┣ 📜.gitignore
 ┣ 📜app.js
 ┣ 📜data.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
