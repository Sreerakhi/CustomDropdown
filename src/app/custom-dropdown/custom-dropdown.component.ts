import { Component, EventEmitter, Input, Output } from '@angular/core';

export class DropdownValue {
  value:string;
  id:string;

  constructor(value:string,id:string) {
    this.value = value;
    this.id = id;
  }
}
@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {

  public isDropDownOpen: boolean = false;
  public selectedVal?: string;

  @Input() options: Options[] = [];
  @Input() placeholder: string = '';
  @Output() onSelection: EventEmitter<any> = new EventEmitter();

  // controls opening and closing of the dropdown lists
  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  //trigger while option changes
  selectOption(item?: any) {
   this.selectedVal = item?.value;
   this.isDropDownOpen = false;
   this.onSelection.emit(item)
  }
}

//interface for the options
export interface Options {
  value: string;
  id: string;
}