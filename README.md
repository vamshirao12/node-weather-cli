# Node Weather CLI

A command-line interface application that fetches and displays the current weather for a given city.

## Installation

1. Clone or download this repository.
2. Run `npm install` to install dependencies.

## Setup

1. Get a free API key from [WeatherAPI](https://weatherapi.com).
2. Open `index.js` and replace `'YOUR_API_KEY'` with your actual API key.

## Usage

Run the application with a city name as an argument:

```bash
node index.js "London"
```

Expected output:
```
Weather in London: 15°C, Clear sky
```

## Error Handling

- If no city is provided, it will prompt to provide one.
- If the API key is invalid or city not found, it will display an error message.

## Dependencies

- axios: For making HTTP requests.