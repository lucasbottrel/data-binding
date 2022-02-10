import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  url: string = 'http://loiane.com';
  urlImagem = "https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg"

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  
  nome: string = 'abc';

  pessoa: any = {
    nome: "",
    idade: 20
  }

  getValor(){
    return 1;
  }

  clickedButton(){
    alert("Botão Clicado!")
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual= (<HTMLInputElement>event.target).value;
  }
  
  saveValue(value: any){
    this.valorSalvo = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
