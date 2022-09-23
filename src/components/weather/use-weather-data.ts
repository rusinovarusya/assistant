export type WeatherContent = {
  description?: string;
  feelsLike?: number;
  humidity?: number;
  icon?: string;
  main?: string;
  pressure?: number;
  rainIn1Hour?: number;
  snowIn1Hour?: number;
  temp?: number;
  uvi?: number;
  windDirection?: string;
  windSpeed?: number;
}

export const useWeatherData = (): WeatherContent => {
  const lat = 0;
  const lon = 0;

  const data /*: WeatherObject*/ = {
    "lat": 39.31,
    "lon": -74.5,
    "timezone": "America/New_York",
    "timezone_offset": -18000,
    "current": {
      "dt": 1646318698,
      "sunrise": 1646306882,
      "sunset": 1646347929,
      "temp": 282.21,
      "feels_like": 278.41,
      "pressure": 1014,
      "humidity": 65,
      "dew_point": 275.99,
      "uvi": 2.55,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 8.75,
      "wind_deg": 360,
      "wind_gust": 13.89,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "rain": {
        "1h": 0
      },
      "snow": {
        "1h": 0
      }
    },
    "minutely": [
      {
        "dt": 1646318700,
        "precipitation": 0
      },
    ],
    "hourly": [
      {
        "dt": 1646316000,
        "temp": 281.94,
        "feels_like": 278.49,
        "pressure": 1014,
        "humidity": 67,
        "dew_point": 276.16,
        "uvi": 1.49,
        "clouds": 52,
        "visibility": 10000,
        "wind_speed": 7.16,
        "wind_deg": 313,
        "wind_gust": 10.71,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.03
      },
    ],
    "daily": [
      {
        "dt": 1646326800,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
      },
    ],
    "alerts": [
      {
        "sender_name": "NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
        "event": "Small Craft Advisory",
        "start": 1646344800,
        "end": 1646380800,
        "description": "...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
        "tags": []
      },
    ]
  }

  const direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];

  const weatherContent: WeatherContent = {
    description: data.current.weather[0].description,
    feelsLike: Math.round(data.current.feels_like),
    humidity: data.current.humidity,
    icon: data.current.weather[0].icon,
    main: data.current.weather[0].main,
    pressure: data.current.pressure,
    rainIn1Hour: data.current.rain["1h"],
    snowIn1Hour: data.current.snow["1h"],
    temp: Math.round(data.current.temp),
    uvi: Math.round(data.current.uvi),
    windDirection: direction[Math.round(Number(data.current.wind_deg) / 45)],
    windSpeed: Math.round(data.current.wind_speed)
  }

  return weatherContent;
}