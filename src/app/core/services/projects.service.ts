import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web-app-dev' | 'ai-dev' | 'game-dev' | 'web-server-crawler-dev';
  image: string;
}

@Injectable({
  providedIn: 'root', // ✅ makes it a singleton app-wide
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'wordleweek',
      title: 'WordleWeek IOS App',
      description:
        'I created a small IOS app with the Swift programming language to allow users to play wordle. The app also uses the SwiftUI Color API to dynamically update the wordle grid.',
      category: 'web-app-dev',
      image: '/logos/swift-logo.png',
    },
    {
      id: 'mymoneytracker',
      title: 'MyMoneyTracker App',
      description:
        'I created a mobile application in the Kotlin programming language to track the user’s expenses and displayed said information using pie charts and bar graphs for a better user experience. I also provided documentation for different methods within the codebase with comments to better explain their functionality.',
      category: 'web-app-dev',
      image: '/logos/kotlin-logo.png',
    },
    {
      id: 'healthtracker',
      title: 'HealthTracker App',
      description:
        'I led a team of 6 developers to develop a mobile application that tracks the user’s workouts and the community’s workout plans. I also programmed the mobile application in Java and XML using MVVM architecture through an Agile-Scrum hybrid process. I configured the application to use the Firebase Realtime Database to store useful user information. I also tested functionality of the application using JUnit tests written in Java.',
      category: 'web-app-dev',
      image: '/logos/android-studio-logo.png',
    },
    {
      id: 'nextjs-dashboard',
      title: 'Next.js Dashboard Website',
      description:
        'I programmed a dashboard for a finance website using the Next.js framework. I created user authentication using the NextAuth.js library and form validation using the Zod library.',
      category: 'web-app-dev',
      image: '/logos/nextjs-logo.jpeg',
    },
    {
      id: 'weathernow',
      title: 'Weather Now Website',
      description:
        'I built a React weather website that uses the OpenWeatherMap API to fetch recent weather information and display said data with widgets. I deployed the website on Vercel to test the website’s features in a live production environment.',
      category: 'web-app-dev',
      image: '/logos/react-router-logo.png',
    },
    {
      id: 'healthcare-policy-tracker',
      title: 'Healthcare Impact Policy Tracker Interactive Diagram',
      description:
        'I used an interrupted time series analysis with the Autoregressive Integrated Moving Average statistical model to determine the impact of each policy by comparing the data points before and after an intervention time, which is the year each law was passed. I also used a Gaussian Processes machine learning model to estimate the effects of the specified policy over ten years in the future. This approach helps model the long-term effects of each policy.',
      category: 'ai-dev',
      image: '/logos/python-logo.png',
    },
  ];

  // ✅ returns all projects
  getAllProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  // ✅ return one project by ID (for detail pages)
  getProjectById(id: string): Observable<Project | undefined> {
    return of(this.projects.find((p) => p.id === id));
  }
}
