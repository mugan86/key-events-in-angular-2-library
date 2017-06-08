# Keyboard Events Library in Angular 2x/4x

Library to capture key-events. Compatible with **Angular 2.x and 4.x** ;)

## Test this library in Angular 4 page!

https://mugan86.github.io/key-events-in-angular-2-library/

## Installation

To install this library, run:

```bash
$ npm install https://github.com/mugan86/key-events-in-angular-2-library.git#v0.3.0 --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// Import our library
import { KeyboardsEventsModule } from 'angular-2x-4x-keyboard-events-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify my library as an import
    KeyboardsEventsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<keyboard-events [key]="''" [showLog] = "'yes'"
        (selectKey)="keyChange($event)"></keyboard-events>
```

## Input data to correct use:

* **[key]** (required): Initialize with '' value.
* **[showLog]** (optional): 'yes' to show key events charcode and more data. If value different NOT show nothing. If not add this value, for default always SHOW log.

And inside of app.component.ts create one function to manage receive key event call 'keyChange(), import HostListener and add windows.focus();

Receive data:

* key: Key name, receive 'KeyG' after keydown 'g'
* KeyCode: Key number, get in string format. Receive '71' after keydown 'g' key.
```ts
import { Component, HostListener } from '@angular/core';
window.focus(); // make sure we are on this page before we start typing
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);
  }
}
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Anartz Mugika](mailto:mugan86@gmail.com)
