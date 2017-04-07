import { Component, HostListener } from '@angular/core';

window.focus(); // make sure we are on this page before we start typing

@Component({
  selector: 'keyboard-events',
  templateUrl: './keyboard-events.html'
})
export class KeyboardEvents {
  title = 'app works!';
 

  constructor(){}

  /* a few examples */
  keyboardEvent: any;
  altKey: boolean;
  charCode: number;
  code: string;
  ctrlKey: boolean;
  keyCode: number;
  keyIdentifier: string;
  metaKey: boolean;
  shiftKey: boolean;
  timeStamp: number;
  type: string;
  which: number;
  
  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: any) {
    event.preventDefault();
    event.stopPropagation();
    
    console.log(event.altKey);
    this.keyboardEvent = event;
    this.altKey = event.altKey;
    this.charCode = event.charCode;
    this.code = event.code;
    this.ctrlKey = event.ctrlKey;
    this.keyCode = event.keyCode;
    this.keyIdentifier = event.keyIdentifier;
    this.metaKey = event.metaKey;
    this.shiftKey = event.shiftKey;
    this.timeStamp = event.timeStamp;
    this.type = event.type;
    this.which = event.which;

    if (this.code == 'ArrowUp')
    {
        alert("Test");
    }
  }

  getKeyboardEventCode()
  {
      return this.code;
  }
/*
    if (this.code == 'ArrowUp')
    {
      this.increment();
    }
    else if (this.code == 'ArrowRight')
    {
      this.duplicate();
    }
    else if (this.code == 'ArrowLeft')
    {
      this.half();
    }
    else if (this.code == 'ArrowDown')
    {
      this.decrement();
    }
    else if (this.code == 'KeyC' || this.code == 'F5')
    {
      this.reset();
    }
  }*/
}
