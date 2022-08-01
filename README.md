
# Angular First App & Fundamentals

# Geting Start with Angular

### Install vscode - Visual Studio Code 

Open vscode 

Open a command palette on the top (Shw All Commands) pressing:
Ctrl+Shift+P
choose: 
install code command in path	

You can call "code" from anywhere

to open a vscode instance with the current directory selected you can call:
code .

for now,

Open a Terminal Window

### Install Node.Js from: https://nodejs.org/en/

Download and install long term support version

verify if node.js is installed:

node --version

expected output:
<<<
v16.15.1
>>>

after that, you can use: npm (Node Package Manager)

### Install Angular.Cli (Angular Command-Line Interface)

npm install -g @angular/cli

verify if Angular.js is installed:

ng version
expected output:
<<<
...
Angular CLI: 14.1.0
Node: 16.15.1
Package Manager: npm 8.11.0
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1401.0 (cli-only)
@angular-devkit/core         14.1.0 (cli-only)
@angular-devkit/schematics   14.1.0 (cli-only)
@schematics/angular          14.1.0 (cli-only)

>>>

### Create a New Angular Project:

go to the directory where you want to create a sub-directory w/your project name

ng new <Project Name>
(accept defaults)

ng new hello-world

cd hello-world

code .

(use the new vscode window, close the previous)

F11 to Full Screen

### Load the Application, 

ng server
(accept defaults)

expected output:
<<<
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. No
Global setting: enabled
Local setting: disabled
Effective status: disabled
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.73 MB | 
polyfills.js          | polyfills     | 315.34 kB | 
styles.css, styles.js | styles        | 207.37 kB | 
main.js               | main          |  48.05 kB | 
runtime.js            | runtime       |   6.52 kB | 

                      | Initial Total |   2.29 MB

Build at: 2022-08-01T09:04:07.052Z - Hash: 9420ef4339a6951b - Time: 11108ms

Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


Compiled successfully.
>>>

### go to your browser and call: 

http://127.0.0.1:4200/

You launch the Angular Sample page

### Files of the project - Basic Structure of an Angular Project

src\app <- where components will be
src\assets <- img...
src\environments <- configurations for different environments (prod, dev)
src\favicon.ico <- icon displayed in the browser
src\index.html <- reference to <app-root>
src\main-ts <- main module of the application
src\polyfills.ts <- import some script needed for running angular
src\styles.css <- global styles for the application
src\test.ts <- for setting tests environment
.angular-cli.json <- angular configuration
.editorconfig <- settings for editor
.gitignore <- to avoid some files to make part of git repository
karm.conf.js <- configuration file for karma test runner
package.json <- Name and App Version, List of Libraries that your App deppends
tsconfig.json <- TypeScript configuration settings

### Start coding:

open file: src\app\app.component.ts

change :
	title = 'hello-world';
to
	title = 'Angular';

The Output in the browser changed

### generate a new component:

ng generate component  courses
or 
ng g c courses

expected output:
<<<
CREATE src/app/courses/courses.component.html (22 bytes)
CREATE src/app/courses/courses.component.spec.ts (606 bytes)
CREATE src/app/courses/courses.component.ts (279 bytes)
CREATE src/app/courses/courses.component.css (0 bytes)
UPDATE src/app/app.module.ts (400 bytes)
>>>

### files description:

courses.component.html <- html template
courses.component.spec.ts <- unit tests
courses.component.ts <- component
courses.component.css <- component stylesheet

app.module.ts <- was updated to register this new component


### continue coding

src\app\app.component.html
remove "Highlight Card","Resources", "Next Steps","Terminal","Links","Footer" sections
remove "Clouds" svg
keep angular logo on the header
remove Angular Links from the header
insert after logo:
<span>{{ title }}</span>

src\index.html
change:
<title>HelloWorld</title>
by
<title>Angular First App</title>

(use Ctrl+P to navigate among giles in vscode)

Edit component courses:

files: .html and .ts

to use the directive *ngFor

### criar service couses:

ng generate service courses
or 
ng g s courses	

expected result:
<<<
CREATE src/app/courses.service.spec.ts (362 bytes)
CREATE src/app/courses.service.ts (136 bytes)
>>>

### files description:

courses.service.spec.ts <- Unit tests
courses.service.ts <- Service



Edit: src/app/courses.service.ts
to implement the service

Use the method of the service in the contructor of 
courses.component.ts

## install bootstrap package inside angular app:

### npm install bootstrap

expected output:
<<<
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 2 packages, removed 1 package, and audited 919 packages in 3s

121 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
>>>

in file package.json
in section dependencies:
"bootstrap": "^5.2.0",

get the path of bootstrap.css file
node_modules\bootstrap\dist\css\bootstrap.css

in src/styles.css
insert the line:
@import "~bootstrap\dist\css\bootstrap.css";

to verify that bootstarp is active
in the end of the file: courses.component.html
insert the line
<button class="btn btn-primary">test of Bootstrap</button>

### class binding:

in the file: courses.component.html
insert
<button class="btn btn-primary" [class.active]="isActive" >test of Class Binding</button>

in the file: courses.component.ts

after: 
export class CoursesComponent implements OnInit {
insert:
  isActive = true;

result: the class: "active" appears (in page source)


#### Style Binding:

HTML DOM Style Object
https://www.w3schools.com/jsref/dom_obj_style.asp

in the file: courses.component.html
insert:
<button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'pink'" >test of style Binding</button>

### Event Binding:

in the file: courses.component.html
insert:

<button class="btn btn-primary" (click)="toggleIsActive()" >Toggle Event</button>

in the file: courses.component.ts
after:
	export class CoursesComponent implements OnInit {
	  isActive = true;

insert:

  toggleIsActive() {
    this.isActive = !this.isActive;
  }

preventing Event Bubbling to the parent element:

  ClickBtnNoBubbling($event: Event) {
    $event.stopPropagation();
    console.log('ClickBtnNoBubbling', $event);
  }

### Event Filter:

in the file: courses.component.html
insert:

	<input (keyup.enter)="onKeyUp()"  class="form-control" />

in the file: courses.component.ts
insert:

  onKeyUp(){
    console.log("Enter pressed");
  }

### Template Variables:

in the file: courses.component.html
insert:

<input
  id="FromTemplateVar"
  #texto
  (keyup.enter)="onKeyUpFromVar(texto.value)"
  class="form-control"
/>

in the file: courses.component.ts
insert:

onKeyUpFromVar(texto: string){
    console.log('You entered : ', texto );
  }

### Two Way Bindings (Banana in the Box Sintax)

Requirements:
on app.module.ts

import { FormsModule } from '@angular/forms';

Imports [..., FormsModule]

in the file: courses.component.html
insert:

<input
  id="TwoWayBinding"
  [(ngModel)]="email"
  (keyup.enter)="onKeyUpTwoWayBinding()"
  class="form-control"
/>

in the file: courses.component.ts
insert:

  email = 'me@mail.com';

  onKeyUpTwoWayBinding() {
    console.log(this.email);
  }
