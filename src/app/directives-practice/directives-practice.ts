import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-directives-practice',
  imports: [],
  templateUrl: './directives-practice.html',
  styleUrl: './directives-practice.scss',
})
export class DirectivesPractice implements OnInit{
  public department ?: number;
  public name ?: string;
  constructor(private router: ActivatedRoute){
    this.router.queryParams.subscribe(params => {
      this.department = params['department']
    })
  }
  ngOnInit(){

  }
}
