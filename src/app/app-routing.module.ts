import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path:'teacher',
    component:TeacherComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'ExamSchedual',
    component:ExamScheduleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
