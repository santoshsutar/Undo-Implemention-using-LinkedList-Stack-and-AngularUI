import { Component } from '@angular/core';
import { Stack } from './Stack/stack';
import { UndoAction, DIVs } from './UndoAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUI';
  public color1: string = "Red";
  public color2: string = "Red";
  public color3: string = "Red";
  private undoOps: Stack<UndoAction> = new Stack<UndoAction>();
  public colors: string[];
  private GetRandomBrush(): string {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
  }

  public Undo(): void {
    if (this.undoOps.Count() > 0) {
      let ua = this.undoOps.Pop();


      let d = (ua._div as DIVs);

      if (d == DIVs.color1) {
        this.color1 = ua._brush;
      }
      else if (d == DIVs.color2) {


        this.color2 = ua._brush;
      }
      else if (d == DIVs.color3) {
        this.color3 = ua._brush;
      }

    }
    this.UpdateList();
  }
  public Div1Click(): void {
    this.undoOps.Push(new UndoAction(this.color1, DIVs.color1));
    this.color1 = this.GetRandomBrush();
    this.UpdateList();
  }
  public Div2Click(): void {
    this.undoOps.Push(new UndoAction(this.color2, DIVs.color2));
    this.color2 = this.GetRandomBrush();

    this.UpdateList();
  }
  public Div3Click(): void {
    this.undoOps.Push(new UndoAction(this.color3, DIVs.color3));
    this.color3 = this.GetRandomBrush();
    this.UpdateList();
  }
  public UpdateList(): void {
    let col: string[] = [];
    let node = this.undoOps.GetEnumerator().Head;
    if (node == null) {
      return;
    }
    node.Next = this.undoOps.GetEnumerator().Head.Next;
    let i = 0;
    while (node != null) {
      col[i] = node.Value._brush;
      node = node.Next;
      i++;
    }
    this.colors = col;
  }
}
