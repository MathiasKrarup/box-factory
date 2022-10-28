import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {
  boxName: any = ""
  heigth: any = 0
  length: any = 0
  width: any = 0
  imageUrl: any = ""
  description: any = ""



  constructor(private http: HttpService) { }

  async ngOnInit() {
    const boxes = await this.http.getBoxes();
    console.log(boxes)
  }

  async createProduct() {
    let dto = {
      boxName: this.boxName,
      heigth: this.heigth,
      length: this.length,
      width: this.width,
      imageUrl: this.imageUrl,
      description: this.description

    }
    const result = await this.http.createProduct(dto);
    console.log(result)
  }
}
