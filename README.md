# Next.JS - Survivors

This repository contains a little application that list all survivors from a Zombie Apocalypse. This app was build with Next.js.

## How to see and execute project

You can exec locally this application using Docker:

```bash
docker compose up
```

To see a deployed version, you can access [here!](https://next-survivors.vercel.app/)

## About Structure

- Next 12 with Typescript
- EditorConfig, Eslind and Prettier setup
- API Connection with MongoDB instance for get, search and edit survivors
- Extra API Connection for nationality search, to get flag and country names
- Context API used for global data in application
- Docker setup for development
- Atomic Design for project organization
- Git Commitzen for commits pattern

## About Features

- Empty data, loading and error treatments
- View to show survivors name, image, nationality, age and infection status
- Possibility to edit survivor infection status

## About Design

- Responsiveness & pixel-perfect layout (you can see the Figma layout in [here](https://www.figma.com/file/lD6rVBNs10bPK6pqUrIzzm/PROCESSO---MaxiHost?node-id=11%3A148))
