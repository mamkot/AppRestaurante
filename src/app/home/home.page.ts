import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  dia: any;
  mes: any;
  ano: any;
  semana: any;
  prato: any;
  entrada: any;
  sobremesa: any;
  preco: any;


  meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

  diasemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

  pratos = ["Espaguete ao frutos do mar", "Filé mignon ao molho de ervas", "Capeletti de búfala e alcachofra", "Badejo à brasileira", "Picanha grelhada com batata recheada", "Picadinho à Marettimo", "Agnolotti de búfala e manjericão"]

  entr = ["Avocado grelhado", "Carpaccio de salmão", "Ceviche clássico", "Brusqueta de cogumelo", "Antepasto de berinjela de panela", "Rolinhos de couve", "Abóbora manteiga recheada com carne-seca"]

  sobrem = ["Crème Brûlée", "Tiramisù", "Panna cotta de limão-siciliano", "Mousse de maracujá", "Salada de frutas", "Petit Gateau"]

  precos = ["R$78,20", "R$62,85", "R$91,80", "R$68,80", "R$102,70", "R$85,60", "R$108,65"]

  ChamaCardapio(){
    let data = new Date();
    this.dia = data.getDate();
    this.mes = this.meses[data.getMonth()];
    this.ano = data.getFullYear();
    this.semana = this.diasemana[data.getDay()];
    this.prato = this.pratos[data.getDay()];
    this.entrada = this.entr[data.getDay()];
    this.sobremesa = this.sobrem[data.getDay()];
    this.preco = this.precos[data.getDay()];
  }
}