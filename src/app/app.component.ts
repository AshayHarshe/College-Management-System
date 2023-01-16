import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CollegeManagementCRUD';

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}



   // * * * * * * * * login form * * * * * * * *


 
  openModal(logintemplate: TemplateRef<any> ) {


    this.modalRef = this.modalService.show(logintemplate);
  }

  loginmail = "";
  loginpassword = "";

  login(){
    console.log('email',this.loginmail);
    console.log('password',this.loginpassword);
    this.loginmail = "";
    this.loginpassword = "";
  }

 


   // * * * * * * * * Registration form * * * * * * * *


   openRegistrationModal(Registrationtemplate: TemplateRef<any> ) {


    this.modalRef = this.modalService.show(Registrationtemplate);
  }

  firstName = "";
  surname = "";
  email = "";
  password = "";
  age = "";
  gender = "";

  signup(){
    console.log('First name',this.firstName);
    console.log('Surname',this.surname);
    console.log('Mobile or email',this.email);
    console.log('Password',this.password);
    console.log('Age',this.age);
    console.log('Gender',this.gender);

    this.firstName = "";
    this.surname = "";
    this.email = "";
    this.password = "";
    this.age = "";
    this.gender = "";
  }




   // * * * * * * * * * * * * * * * * Teachers Template Start * * * * * * * * * * * * * * * *


  // * * * * * * * * * * * * * * * * Student Template Start * * * * * * * * * * * * * * * *


  // * * * * * * * * * * * * * * * * Staff Template Start * * * * * * * * * * * * * * * *


  // * * * * * * * * * * * * * * * * Exam Template Start * * * * * * * * * * * * * * * *







 

  // new code



    // DemoModalServiceNestedComponent {
    modalRef1?: BsModalRef | null;
    modalRef2?: BsModalRef;
    // constructor(private modalService: BsModalService) {}
   
    openModal1(template1: TemplateRef<any>) {
      this.modalRef1 = this.modalService.show(template1, { id: 1, class: 'modal-lg' });
    }
    openModal2(template1: TemplateRef<any>) {
      this.modalRef2 = this.modalService.show(template1, {id: 2, class: 'second' });
      this.loginmail = "";
      this.loginpassword = "";
      this.modalRef1?.hide();
     
    }
    closeFirstModal() {
      if (!this.modalRef1) {
        return;       
      }
   
      this.modalRef1.hide();
      this.modalRef1 = null;
      
    }
    closeModal(modalId?: number){
      this.modalService.hide(modalId);
      this.loginmail = "";
      this.loginpassword = "";
    }

    
  }


