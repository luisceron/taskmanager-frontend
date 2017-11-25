import { Component } from "@angular/core";

@Component ({
  selector: 'learning-bindings',
  templateUrl: './learning-bindings.component.html'
})

export class LearningBindingsComponent {
  // mouse events
  public onClick() {
    console.log("Event onClick triggered.");
  }

  public onMouseOver() {
    console.log("Event onMouseOver triggered.");
  }


  // key events
  public onKeyDown() {
    console.log("Event onKeyDown triggered.");
  }

  public onKeyUp() {
    console.log("Event onKeyUp triggered.");
  }
}
