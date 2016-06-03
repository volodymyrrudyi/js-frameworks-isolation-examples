import {ViewEncapsulation} from '@angular/core';
import {RemoteBoardControlsComponent} from './remote-board-controls.component';

import { Component } from '@angular/core';
@Component({
  selector: 'remote-board-controls-app',
  templateUrl: 'app/app.html',
  encapsulation: ViewEncapsulation.Native,
  directives: [RemoteBoardControlsComponent]
})
export class AppComponent { }
