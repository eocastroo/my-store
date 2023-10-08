import { Component } from '@angular/core';
import {Producto} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
   title = 'my-store';
   widthImg = 10;
   name = 'edwin castro';
   age = 30;
   img = 'https://source.unsplash.com/random';
   btnDisable = true;

   //Objetos
   Person = {
    name: 'Andres',
    age : 22,
    img : 'https://source.unsplash.com/random'
   }

   //Arrays
  names: string[] = ['Edwin','Orlando', 'Marlen']
  newName = '';

// Objeto del registro

   register = {
    name:'',
    email:'',
    password:'',
   }
// Login
   login = {
    email: '',
    password: '',

   }


  //Objeto
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  productos: Producto[] = [
    {
      name: 'Album',
      precio: 350,
      imagen: './assets/images/album.jpg'
    },
    {
      name: 'Book',
      precio: 450,
      imagen: './assets/images/book.jpg'
    },
    {
      name: 'Glasses',
      precio: 550,
      imagen: '../assets/images/glasses.jpg'
    },
    {
      name: 'House',
      precio: 650,
      imagen: './assets/images/house.jpg'
    }
  ]


   //Eventos

   toggleButton (){
    this.btnDisable = ! this.btnDisable
   }

   increaseAge(){
    this.Person.age += 1
   }

   onscroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
   }

   changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
   }

   addName(){
    this.names.push(this.newName)
    this.newName = '';
   }

   deleteName(index: number) {
    this.names.splice(index, 1);
   }

   onRegister(){
    console.log(this.register)

   }

   onLogin(){
    
    console.log(this.login)
   }

}
