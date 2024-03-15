import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso-link',
  templateUrl: './sucesso-link.component.html',
  styleUrls: ['./sucesso-link.component.scss']
})
export class SucessoComponent implements OnInit {
  link: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras && navigation.extras.state) {
        this.link = navigation.extras.state.link;
      }
  }
}
