import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { Question } from './shared/models/question.model';
import { QuestionsService } from './shared/services/questions.service';

@Component({
  selector: 'kit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ButtonModule,
    AutoCompleteModule,
    MenubarModule,
    ReactiveFormsModule,
    InputGroupAddonModule,
    InputGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    RouterModule,
  ],
})
export class AppComponent implements OnInit {
  private readonly questionsService = inject(QuestionsService);

  questions: Question[] = [];

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(data => {
      this.questions = data;
      console.log(data);
    });
  }

  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      href: '/home',
    },
    {
      label: 'Test Page',
      icon: 'pi pi-home',
      href: '/summary',
    },
  ];

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('kit-dark-mode');
  }
}
