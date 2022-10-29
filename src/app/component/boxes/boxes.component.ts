import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  boxList : any[] = []
  boxes: any[] = []

  constructor(private http : HttpService) { }

  async ngOnInit(){


    const boxlist = await this.http.getBoxes()
    this.boxList = boxlist


  }

  async deleteBox(id: any) {
    const box = await this.http.deleteBox(id);
    this.boxes = this.boxes.filter(item => item.id != box.id)
  }
}
