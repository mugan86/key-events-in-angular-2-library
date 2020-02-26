import { Component, HostListener, Input, Output, EventEmitter  } from '@angular/core';
window.focus(); // make sure we are on this page before we start typing
@Component({
  selector: 'keyboard-events',
  templateUrl: './keyboard-events.html'
})
export class KeyboardEventsComponent {
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
  title = 'app works!';
  @Input()
  showLog = 'yes';
  @Input()
  key: string;
  @Output()
  selectKey: EventEmitter<String[]> = new EventEmitter<String[]>();
  constructor() {}
  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: any) {
    event.preventDefault();
    event.stopPropagation();
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
    // Add in eventData array before send to return to select main component
    let eventData = [this.code, String(this.keyCode)];
    this.selectKey.emit(eventData);
  }
}
