import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem = "https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg"

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
