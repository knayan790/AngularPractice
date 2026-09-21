import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ParentComponent } from './components/parent-component/parent-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('AngularPractice');
  constructor(private router: Router){

  }

  onClick(){
    this.router.navigate(['./directives'],
      {
        queryParams: {
          department: 1
        }
      }
    )
  }
}
