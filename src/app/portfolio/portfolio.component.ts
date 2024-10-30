import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  E_commerce: string = 'E-commerce web application';
  Weather: string = 'Weather app';
  Movie: string = 'Movie website';
  Description: string[] = [
    'This project is a basic e-commerce web application built . It provides a foundation for online shopping, allowing users to browse products, view details, add items to a cart, and proceed to checkout. While this version focuses on the frontend, it can be expanded to include backend functionality for product management, user accounts, and payment processing.',
    'The Weather Web App is a dynamic application built using React that provides users with real-time weather updates and forecasts. The app allows users to check the current weather conditions.',
    'The Movie Web App is a web application built using React that provides users with information about popular movies,series, and TV shows.',
  ];
}
