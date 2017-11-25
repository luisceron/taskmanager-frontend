import { Component } from "@angular/core";

@Component ({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {
  public mouseClickCount: number;
  public mouseOverCount: number;
  public userName: string;
  public userEmail: string;

  public constructor() {
    this.mouseClickCount = 0;
    this.mouseOverCount = 0;
    this.userName = "Nome Inicial";
    this.userEmail = "Email Inicial";
  }



  // mouse events
  public onClick() {
    console.log("Event onClick triggered.");
    this.mouseClickCount++;
  }

  public onMouseOver() {
    console.log("Event onMouseOver triggered.");
    this.mouseOverCount++;
  }


  // key events
  public onKeyDown(event: any) {
    console.log("Event onKeyDown triggered.");
    console.log(event);
    this.userName = event.target.value;
  }

  public onKeyUp(event: any) {
    console.log("Event onKeyUp triggered.");
    console.log(event);
    this.userEmail = event.target.value;
  }
}
