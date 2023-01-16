import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }





  openStudentModal(Studenttemplate: TemplateRef<any>,  index:any,) {


    if(index !='null'){
      this.studenName = this.StudentData[index].name;
      this.studenYear = this.StudentData[index].year;
      this.studenMobile = this.StudentData[index].mobile;
      this.studenDepartment = this.StudentData[index].department;
  
      this.selectedStudentIndex = index;
    }

    this.modalRef = this.modalService.show(Studenttemplate);
  }


  
  StudentData:any = [
    {
      name: "James",
      year: "3",
      mobile: "333",
      department: "Mechanical Engineering",
    },
    {
      name: "Henry",
      year: "1",
      mobile: "444",
      department: "Civil Engineering",
    },
  ]

  studenName = "";
  studenYear = "";
  studenMobile = "";
  studenDepartment = "";

  selectedStudentIndex = "";


  submitStudent(){
    let Student = {
      name: this.studenName,
      year: this.studenYear,
      mobile: this.studenMobile,
      department: this.studenDepartment,
    }
  
    console.log('this.StudentData',this.StudentData)
    this.StudentData.push(Student);
    
    this.studenName = "";
    this.studenYear = "";
    this.studenMobile = "";
    this.studenDepartment = "";
  
    this.modalRef?.hide();
  }


  
  DeleteStudent(i:any){
    this.StudentData.splice(i,1);
  }

  editStudent(){
    this.StudentData[this.selectedStudentIndex].name = this.studenName;
    this.StudentData[this.selectedStudentIndex].year = this.studenYear;
    this.StudentData[this.selectedStudentIndex].mobile = this.studenMobile;
    this.StudentData[this.selectedStudentIndex].department = this.studenDepartment;
  
    this.studenName = "";
    this.studenYear = "";
    this.studenMobile = "";
    this.studenDepartment = "";
  
  
    this.modalRef?.hide();
  }

  
  StudentClose(){
    this.studenName = "";
    this.studenYear = "";
    this.studenMobile = "";
    this.studenDepartment = "";
  
    this.modalRef?.hide();
  }

  resetStudent(){
    this.studenName = "";
    this.studenYear = "";
    this.studenMobile = "";
    this.studenDepartment = "";
  }


}
