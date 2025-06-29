import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user: string;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
        this.user = params['username'];
    })

  }

}
