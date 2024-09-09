# AI Agents

## Description

This feature implements an __Intent Selection__ step in the bot creation process. The page allows clients to view a list of pretrained intents and select the ones they wish to include in their AI bot. This page is designed to be part of a larger wizard flow for creating an AI bot. Here this implementation focuses only on the intent selection functionality.

## Setup

```
npm install
```

## Run Project

```
npm run dev
```

## Run Tests

```
npm run test
```

## Project Structure

- </mark>__tests__</mark> for Unit tests
    - <mark>components</mark> Unit tests for common components
    - </mark>pages</mark> Unit tests for pages
- <mark>src\components</mark> for common components
- <mark>src\pages</mark> contain all the views
    - <mark>aiBotWizard</mark> for AI Bot Wizard page
- <mark>service</mark> for get the data from <mark>intents.json</mark> file
- <mark>theme</mark> contain color themes
- <mark>utils</mark> for util functions

## Further Improvements

- Implement lazy loading in intents list rendering
- Improve test coverage
- Improve responsive design
- Add pagination to handle large data sets
- Introduce Serch/Filter functionality to improve user friendliness
- Improve error handling


