import { ServerService } from './servers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = '';
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  constructor(private serverService: ServerService) {}

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (res: Response) => {
        const data = res.json();
        console.log(data);
      },
      err => console.log(err)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        console.log(servers);
      }
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  getAppName() {
    this.serverService.getAppName();
  }
}
