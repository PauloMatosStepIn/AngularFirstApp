import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  isActive = true;

  toggleIsActive() {
    this.isActive = !this.isActive;
  }

  ClickBtn($event: Event) {
    console.log('ClickBtn', $event);
  }

  ClickBtnNoBubbling($event: Event) {
    $event.stopPropagation();
    console.log('ClickBtnNoBubbling', $event);
  }

  ClickDiv($event: Event) {
    console.log('ClickDiv', $event);
  }

  onKeyUp(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (target) {
      console.log('You entered : ', target.value);
    }
  }

  onKeyUpFromVar(texto: string) {
    console.log('You entered : ', texto);
  }

  email = 'me@mail.com';

  onKeyUpTwoWayBinding() {
    console.log(this.email);
  }

  title = 'List of Courses';
  courses;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
}
