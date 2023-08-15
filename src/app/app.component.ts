import { Component, OnDestroy, OnInit } from '@angular/core';
import { Options } from './custom-dropdown/custom-dropdown.component';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Custom Dropdown';
  values: Options[] = [];
  placeholder: string = 'Select an Option';
  selectedValue?: string;
  sub?: Subscription;

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    // Get data from the data store
    this.sub = this.sharedService.getData().subscribe( res => {
      this.values = res;
    });
  }

 //trigger while option changes
  changeOption(data: any){
    this.selectedValue = data?.value;
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
}
