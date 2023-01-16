import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  // modalRef: any;
  // modalService: any;

  // constructor() { }
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }


  openTeacherModal(teachertemplate: TemplateRef<any>,  index:any,) {


    if(index !='null'){
      this.teacherName = this.teachersData[index].name;
      this.teacherAge = this.teachersData[index].age;
      this.teacherMobile = this.teachersData[index].mobile;
      this.teachersubject = this.teachersData[index].subject;
      this.teacherSalary = this.teachersData[index].salary;
  
      this.selectedTeacherIndex = index;
    }

    this.modalRef = this.modalService.show(teachertemplate);
  }

  teachersData:any = [
    {
      name: "Mr. DOM",
      age: "23",
      mobile: "111",
      subject: "Mathematics",
      salary: "3000"
    },
    {
      name: "Mr. MONK",
      age: "42",
      mobile: "222",
      subject: "Marketing",
      salary: "6000"
    },
  ]

  teacherName = "";
  teacherAge = "";
  teacherMobile = "";
  teachersubject = "";
  teacherSalary = "";

  selectedTeacherIndex = "";

  submitTeacher(){
    let Teacher = {
      name: this.teacherName,
      age: this.teacherAge,
      mobile: this.teacherMobile,
      subject: this.teachersubject,
      salary: this.teacherSalary,
    }
  
    console.log('this.teachersData',this.teachersData)
    this.teachersData.push(Teacher);
    
    this.teacherName = "";
    this.teacherAge = "";
    this.teacherMobile = "";
    this.teachersubject = "";
    this.teacherSalary = "";
  
    this.modalRef?.hide();
  }

  DeleteTeacher(i:any){
    this.teachersData.splice(i,1);
  }

  editTeacher(){
    this.teachersData[this.selectedTeacherIndex].name = this.teacherName;
    this.teachersData[this.selectedTeacherIndex].age = this.teacherAge;
    this.teachersData[this.selectedTeacherIndex].mobile = this.teacherMobile;
    this.teachersData[this.selectedTeacherIndex].subject = this.teachersubject;
    this.teachersData[this.selectedTeacherIndex].salary = this.teacherSalary;
  
    this.teacherName = "";
    this.teacherAge = "";
    this.teacherMobile = "";
    this.teachersubject = "";
    this.teacherSalary = "";
  
  
    this.modalRef?.hide();
  }

  teacherClose(){
    this.teacherName = "";
    this.teacherAge = "";
    this.teacherMobile = "";
    this.teachersubject = "";
    this.teacherSalary = "";
  
    this.modalRef?.hide();
  }

  resetTeacher(){
    this.teacherName = "";
    this.teacherAge = "";
    this.teacherMobile = "";
    this.teachersubject = "";
    this.teacherSalary = "";
  }




}
