# HMCTS Dev Test Frontend

You can try the [hosted online demo here](https://peter.widearea.org:3100). Please note this has a self-signed security certificate, and you may receive a wardning about this.

## Features

Allows the creation, editing and deletion of tasks.

### /status/

Shows a summary of the types of task statuses.

### /status/all

Shows a list of all tasks.

### /status/{status type}

Shows a list of all tasks of given status type.

### /task/{id}

Shows details of given status id.

### /createtask

Create new task.

## Minimum Installation Requirements

This has been tested and works with NodeJS 23 and yarn 1.22.

## Installation Instructions

Before installing the frontend, you must install [the backend project here](https://github.com/stephenbowyer/hmcts-dev-test-backend).

```
git clone https://github.com/stephenbowyer/hmcts-dev-test-frontend
cd hmcts-dev-test-frontend
yarn install
yarn webpack
yarn start:dev
```
