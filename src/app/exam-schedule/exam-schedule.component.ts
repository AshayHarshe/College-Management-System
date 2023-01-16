import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.scss']
})
export class ExamScheduleComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }


  openExamModal(examtemplate: TemplateRef<any>,  index:any,) {


    if(index !='null'){
      this.examSubject = this.examData[index].subject;
      this.examDate = this.examData[index].date;
      this.examTime = this.examData[index].time;
      this.examStudent = this.examData[index].student;
  
      this.selectedExamIndex = index;
    }

    this.modalRef = this.modalService.show(examtemplate);
  }

  examData:any = [
    {
      subject: "Computer Science",
      date: "2022-09-23",
      time: "9:30AM to 12:30PM",
      student: "40",
    },
    {
      subject: "Marketing",
      date: "2022-09-25",
      time: "2:30PM to 05:30PM",
      student: "60",
    },
  ]

    examSubject = "";
    examDate = "";
    examTime = "";
    examStudent = "";

    selectedExamIndex = "";


    submitExam(){
      let exam = {
        subject: this.examSubject,
        date: this.examDate,
        time: this.examTime,
        student: this.examStudent,
      }
    
      console.log('this.examData',this.examData)
      this.examData.push(exam);
      
      this.examSubject = "";
      this.examDate = "";
      this.examTime = "";
      this.examStudent = "";
    
      this.modalRef?.hide();
    }

    DeleteExam(i:any){
      this.examData.splice(i,1);
    }
  
    editExam(){
      this.examData[this.selectedExamIndex].subject = this.examSubject;
      this.examData[this.selectedExamIndex].date = this.examDate;
      this.examData[this.selectedExamIndex].time = this.examTime;
      this.examData[this.selectedExamIndex].student = this.examStudent;
    
      this.examSubject = "";
      this.examDate = "";
      this.examTime = "";
      this.examStudent = "";
    
    
      this.modalRef?.hide();
    }

    examClose(){
      this.examSubject = "";
      this.examDate = "";
      this.examTime = "";
      this.examStudent = "";
    
      this.modalRef?.hide();
    }
  
    resetExam(){
      this.examSubject = "";
      this.examDate = "";
      this.examTime = "";
      this.examStudent = "";
  
  }





}
