import { Component, OnInit } from '@angular/core';
import { fade } from './animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: fade

})
export class ProductComponent implements OnInit {

  state = 'in';
  counter = 0;
  enableAnimation = false;
  imageSource = '';


  images: any[]=[
    {img : '../assets/images/C_1.jpg'},
    {img: '../assets/images/C_3.jpg'},

    {img: '../assets/images/C_6.jpg'},
     { img: '../assets/images/C_7.jpg'},
      {img: '../assets/images/C_10.jpg'},
      {img: '../assets/images/C_13.jpg'},
      {img: '../assets/images/C_15.jpg'},
      {img: '../assets/images/C_16.jpg'},
      {img: '../assets/images/C_17.jpg'},
      {img: '../assets/images/C_18.jpg'},
      {img: '../assets/images/C_22.jpg'},
      {img:'../assets/images/C_23.jpg'},
      {img:'../assets/images/C_25.jpg'},
      {img: '../assets/images/C_27.jpg'},
      {img:'../assets/images/C_29.jpg'},
      {img: '../assets/images/C_30.jpg'},
      {img: '../assets/images/C_31.jpg'},

      {img: '../assets/images/C_32.jpg'},
      {img: '../assets/images/C_35.jpg'},

  ];

  ngOnInit() {
    this.imageSource = this.images[0].img;
    this.initiate();
  }
  drag = (data, event:any) => {
    console.log(data);
    console.log("event", event)
    if(data==="start"){

    }else{

    }
  }

  over(event : any){
    this.enableAnimation = false;
    event.preventDefault();
    
  }

  out(event: any){
    this.enableAnimation = true;
    this.initiate();

  }
  initiate(){
    if(this.counter>17){
      this.counter = 0;
    }
    this.enableAnimation = true;
    if(this.enableAnimation){
      this.toggggleSState();
    }
  }

  toggleImges(){
    this.imageSource = this.images[this.counter].img;
   
    this.initiate();
  }


  onDone($event) {
      if(this.enableAnimation){
      if(this.counter >0){
        this.toggleImges();
      }
      else{
        this.toggggleSState();
      }
    }
  }

  toggggleSState(){
    if (this.counter%2 == 0) {
      this.state = 'in';
      this.counter++;

    }
    else{
      this.state = "out";
      this.counter++;
    }
  }

  onDragStart(event: DragEvent) {
    console.log(`starting`, event);
    // Hide dragging element
    // event.target.style.opacity = 0;
  }

  onDrag(event: DragEvent) {
    console.log('dragging', event);
  }
  val=0;
  onDragOver(event: DragEvent) {
   console.log("----dhruvdddddddddd");
    if(this.counter>17){
      this.counter = 0;
    }
    console.log('drag over', event);
    if(event.x%9 == 0){
      if(this.val < event.x){
        this.counter = this.counter+1;
      this.imageSource = this.images[this.counter].img;
      this.val = event.x;
      }
      else{
        this.counter = this.counter-1;
      this.imageSource = this.images[this.counter].img;
      this.val = event.x;
      }
    } 
   
  }

  onDragEnd(event: DragEvent) {
    console.log('drag end', event);
    // event.target.style.opacity = 1;
  }
  onDragLeave(event: DragEvent) {
    console.log('drag leave', event);
  }

  onDrop(event: DragEvent) {
    console.log('dropped', event);
  }

  onDragEnter(event: DragEvent) {
    console.log('drag enter', event);

  }
}