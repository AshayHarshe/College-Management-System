import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }




  openStaffModal(stafftemplate: TemplateRef<any>,  index:any,) {


    if(index !='null'){
      this.staffName = this.staffData[index].name;
      this.staffAge = this.staffData[index].age;
      this.staffMobile = this.staffData[index].mobile;
      this.staffDesignation = this.staffData[index].designation;
  
      this.selectedStaffIndex = index;
    }

    this.modalRef = this.modalService.show(stafftemplate);
  }

  staffData:any = [
    {
      name: "Mr. JOHN",
      age: "23",
      mobile: "555",
      designation: "Professor",
    },
    {
      name: "Mr. OLIVER",
      age: "34",
      mobile: "666",
      designation: "Librarian",
    },
  ]

  staffName = "";
  staffAge = "";
  staffMobile = "";
  staffDesignation = "";

  selectedStaffIndex = "";


  submitStaff(){
    let Staff = {
      name: this.staffName,
      age: this.staffAge,
      mobile: this.staffMobile,
      designation: this.staffDesignation,
    }
  
    console.log('this.staffData',this.staffData)
    this.staffData.push(Staff);
    
    this.staffName = "";
    this.staffAge = "";
    this.staffMobile = "";
    this.staffDesignation = "";
  
    this.modalRef?.hide();
  }

  DeleteStaff(i:any){
    this.staffData.splice(i,1);
  }

  editStaff(){
    this.staffData[this.selectedStaffIndex].name = this.staffName;
    this.staffData[this.selectedStaffIndex].age = this.staffAge;
    this.staffData[this.selectedStaffIndex].mobile = this.staffMobile;
    this.staffData[this.selectedStaffIndex].designation = this.staffDesignation;
  
    this.staffName = "";
    this.staffAge = "";
    this.staffMobile = "";
    this.staffDesignation = "";
  
  
    this.modalRef?.hide();
  }

  StaffClose(){
    this.staffName = "";
    this.staffAge = "";
    this.staffMobile = "";
    this.staffDesignation = "";
  
    this.modalRef?.hide();
  }

  resetStaff(){
    this.staffName = "";
    this.staffAge = "";
    this.staffMobile = "";
    this.staffDesignation = "";

}





}
