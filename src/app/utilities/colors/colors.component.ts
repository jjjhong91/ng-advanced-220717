import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type: string | null = '';
  name: string | null = '';
  data:any = { };

  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    // this.type = this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
    });

    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('name');
    });

    this.route.data.subscribe(data => {
      this.data = data;
    });
  }

  plus(num: number) {
    this.router.navigate(['../', (+(this.type || 0)) + num], {
      queryParamsHandling: 'preserve',
      relativeTo: this.route
    });
  }

}
