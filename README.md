# Assignment 11 - Docker Setup

This project sets up a development environment for a simple React application using Docker.

## Project Structure

- Dockerfile
- yue_wang_site/ (React App created by Create React App)

## How to Build and Run

### Step 1: Build Docker Image

Run the following command in the root folder (`yue_wang_assignment#11/`):

```bash
    docker build -t yue_wang_coding_assignment11 .
```
### Step 2: Start docker container
```bash
    docker run -p 7775:3000 --name yue_wang_coding_assignment11 yue_wang_coding_assignment11
```
### stop and remove exits container if needed
```bash
    docker stop yue_wang_coding_assignment11
    docker rm yue_wang_coding_assignment11
```
