export interface WeatherData {
    main: {
        temp: number;
        feels_like : number;
      };
      weather: [
        {
          description: string;
          main : string;
        }
      ];
    
    wind : {
      speed : number;
    }
    
    name : string;
}