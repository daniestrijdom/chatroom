# Chatroom

A chatroom application built with express and socket.io

<img src="/example.png" alt='example.png'>

## Overview

A simple chatroom application. A user can pick a name and join the conversation, no conversation history will be visible.

## Usage

1. `git clone` + this repo then cd in.

### With docker

1. `docker build . -t chatroom`
2. `docker run -p 3000:3000 chatroom`

### Without docker

2. `npm i --production`
3. `npm start`

App will run on http://localhost:3000/

## Technical Specifications

This service uses express on the backend, and socket.io for handling the messaging functionality, and ejs for rendering on the front end.

## Miminal Viable Product Features

- User can choose a name
- User can see real-time conversation
- User can participate in real-time conversation
- User can see who the names of other conversation participants
- Users are distinguisha

## Planned Enhancements

- User can create a chat room
- Replace template front end with React & some state management library (possiby redux)

## Licence

ISC License

Copyright (c) 2018, Danie Strijdom
