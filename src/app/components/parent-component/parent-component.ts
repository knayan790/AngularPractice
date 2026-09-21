import { Component , ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { ChildComponent } from '../child-component/child-component';
import { ApiService } from '../../services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
   public user :any = {
     name: "Nayan",
     age: 27
   }
   public users: any = []
   constructor(private service: ApiService){}
   onClick(){
      setTimeout(() => {
           this.user.name ="aman";
      }, 3000);
     

   }

   getUserData(){
      const usersData = this.service.getUserData();
      usersData.subscribe((res:any) => {
        this.users = res;
        console.log(this.users)
      })
      
   }

   changeReference(){
    this.user = {...this.user, name: "Akash"};
   }
}
