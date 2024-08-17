import { Component } from '@angular/core';
import { MsmeServiceService } from '../msme-service.service';
@Component({
  selector: 'app-msms-data-table',
  templateUrl: './msms-data-table.component.html',
  styleUrl: './msms-data-table.component.css'
})
export class MsmsDataTableComponent {
  data: any[] = [];

  constructor(private msme: MsmeServiceService) { }

  ngOnInit(): void {
    this.msme.getMsmeData().subscribe(response => {
      this.data = response.records;
      console.log( this.data)

    });
}
}

