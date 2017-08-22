import { Component } from '@angular/core';
import { DefaultService } from './api/default.service'
import { Observable } from 'rxjs/Rx'
import { DeviceEntity } from './model/deviceEntity'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DefaultService]
})
export class AppComponent {
  title = 'app';
  devices: Observable<Array<DeviceEntity>>;

  constructor (private defaultService: DefaultService) {
  }
  ngOnInit():void {
    this.devices = this.defaultService.getList(null)
  }
}
