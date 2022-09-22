export interface WeatherObject {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Hourly[];
  daily: Daily[];
  alerts: Alerts[];
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  uvi: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  rain: Rain;
  snow: Snow;
  weather: Weather[];
}

export interface Minutely {
  dt: number;
  precipitation: number;
}

export interface Hourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  pop: number;
  rain: Rain;
  snow: Snow;
  weather: Weather[];
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_gust: number;
  wind_deg: number;
  clouds: number;
  uvi: number;
  pop: number;
  rain: number;
  snow: number;
  weather: Weather[];
}

export interface Alerts {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

export interface Rain {
  "1h": number;
}

export interface Snow {
  "1h": number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string; // or number
}

export interface Temp {
  morn: number;
  day: number;
  eve: number;
  night: number;
  min: number;
  max: number;
}

export interface FeelsLike {
  morn: number;
  day: number;
  eve: number;
  night: number;
}
