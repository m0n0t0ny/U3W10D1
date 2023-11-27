import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit {
  title: string = '';
  constructor() {}

  ngOnInit(): void {
    this.title = 'ciao comp2';
  }
}
