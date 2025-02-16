import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DataService } from './services/data.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'kit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ButtonModule, AutoCompleteModule],
})
export class AppComponent implements OnInit {
  selectedState = null;

  states = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' },
  ];

  cities1 = [];

  cities2 = [];

  city1 = null;

  city2 = null;

  private readonly dataService = inject(DataService);

  users: any[] = [];
  posts: any[] = [];

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });

    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
      console.log(data);
    });
  }

  items: any[] = [];

  value: any;

  search(event: AutoCompleteCompleteEvent) {
    const _items = [...Array(10).keys()];

    this.items = event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items;
  }
}
