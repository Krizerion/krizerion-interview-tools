import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Knob } from 'primeng/knob';
import { MenubarModule } from 'primeng/menubar';
import { Select } from 'primeng/select';
import { DataService } from './services/data.service';

interface City {
  name: string;
  code: string;
}

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
    FloatLabel,
    Knob,
    InputGroupAddonModule,
    InputGroupModule,
    Select,
    ReactiveFormsModule,
    InputTextModule,
  ],
})
export class AppComponent implements OnInit {
  text1: string | undefined;

  text2: string | undefined;

  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  value3 = 42;

  value2 = 'test123';

  private readonly dataService = inject(DataService);

  users = [];
  posts = [];

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

  menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
  ];
}
