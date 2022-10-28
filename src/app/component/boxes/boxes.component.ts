import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  boxList : any[] = []
  constructor(private http : HttpService) { }

  async ngOnInit(){
    const boxlist = await this.http.getBoxes()
    this.boxList = boxlist


  }

}
