# key-events-library

## Installation

To install this library, run:

```bash
$ npm install key-events-library --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install key-events-library
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'key-events-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    SampleModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<keyboard-events [key]="''"
        (selectKey)="keyChange($event)"></keyboard-events>
```
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
