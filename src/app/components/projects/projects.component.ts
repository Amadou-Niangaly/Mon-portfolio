import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  portfolioData=[
    {
      title: 'Joolidi',
      description: 'Une application permettant de collecter et gérer les dons de sang.',
      image: 'images/joolidi1.png',
      link: 'https://github.com/Amadou-Niangaly/BanqueDeSang'
    },
    {
      title: 'Todo App',
      description: 'Une application permettant la gestion  des tâches.',
      image: 'images/TodoApp.png',
      link: 'https://amadou-niangaly.github.io/Todolist-App/'
    },
    {
      title: 'chiffre romain',
      description: 'Une application permettant la conversion en chiffre romain.',
      image: 'images/chiffre-romain.png',
      link: 'https://amadou-niangaly.github.io/chiffre-romain/'
    },
    {
      title: 'Pankuru',
      description: 'Une application pour la réservation des billets d\'avions.',
      image: 'images/pankuru.png',
      link: 'https://github.com/MoutouBoys/Frontend-pankuru-projet'
    },
    {
      title: 'Ticket App',
      description: 'Une application pour la réservation des tickets d\'assistance.',
      image: 'images/ticket.png',
      link: 'https://github.com/Amadou-Niangaly/TicketAppMobile'
    },
    {
      title: 'Tourisme Mali',
      description: 'Une site permettant de voir les sites touristiques au Mali.',
      image: 'images/tourisme.png',
      link: 'https://amadou-niangaly.github.io/SiteTouristMali/'
    },
  ]



}
