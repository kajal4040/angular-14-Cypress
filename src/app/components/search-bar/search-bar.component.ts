import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // students: any = [];
  // filtered: any;

  // constructor(private service: SharedService) {}

  // ngOnInit() {
  //   this.service.getUsers().subscribe((products) => {
  //     this.students = products.products;
  //   });
  // }
  // onSubmit(value: any) {
  //   this.filtered = this.students.filter(
  //     (result: any) => result.id === value.id
  //   );
  //   console.log(this.filtered);
  // }
  dataObject = [];
  filter: any;
  constructor(private service: SharedService) {}
  ngOnInit() {
    this.setData();
  }

  setData() {
    this.service.getUsers().subscribe((result) => {
      this.dataObject = result;
      console.log(this.dataObject);
    });
  }

  filterIt(value: any) {
    this.filter = this.dataObject.filter(
      (result: any) => result.id === value.id
    );
    // this.filter.RegCategoryName = $event.target.value;
    // this.dataObject = this.dataObject.filter((value) => {
    //   console.log(value);
    //   // const data = { ...value };
    //   // data.List = data.List.map((ch) => {
    //   //   const list = { ...ch };
    //   //   list.RegistrationCategory = list.RegistrationCategory.filter(
    //   //     (gChild) => {
    //   //       return (
    //   //         gChild.RegCategoryName.toLowerCase().indexOf(
    //   //           this.filter.RegCategoryName.toLowerCase()
    //   //         ) !== -1
    //   //       );
    //   //     }
    //   //   );
    //   //   return list;
    //   // });
    //   // return data.List.some((list) => !!list.RegistrationCategory.length);
    // });
  }
}
