import { Component, OnInit } from "@angular/core";
import { fade } from "./animations";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  animations: fade
})
export class ProductComponent implements OnInit {
  state = "in";
  counter = 0;
  enableAnimation = false;
  imageSource = "";

  images: any[] = [
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/1.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/2.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/3.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/4.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/5.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/6.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/7.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/8.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/9.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/10.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/11.png"
    },
    {
      img:
        "https://stackblitz.com/files/angular-ivy-gpv3en/github/dhruv11111997/angular-ivy-gpv3en/master/src/app/assets/sample-product/12.png"
    }
  ];

  ngOnInit() {
    this.imageSource = this.images[0].img;
    // this.initiate();
  }
change(){
this.imageSource = this.images[0].img;
console.log('----------imageSource---------------',this.imageSource);
this.counter == this.counter + 1;
if(this.images.length === this.counter){
  this.counter = 0;
}

}


  drag = (data, event: any) => {
    console.log(data);
    console.log("event", event);
    if (data === "start") {
    } else {
    }
  };

  over(event: any) {
    this.enableAnimation = false;
    event.preventDefault();
  }

  out(event: any) {
    this.enableAnimation = true;
    this.initiate();
  }
  initiate() {
    if (this.counter > 13) {
      this.counter = 0;
    }
    this.enableAnimation = true;
    if (this.enableAnimation) {
      this.toggggleSState();
    }
  }

  toggleImges() {
    this.imageSource = this.images[this.counter]?.img;

    this.initiate();
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter > 0) {
        this.toggleImges();
      } else {
        this.toggggleSState();
      }
    }
  }

  toggggleSState() {
    if (this.counter % 2 == 0) {
      this.state = "in";
      this.counter++;
    } else {
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
    console.log("dragging", event);
  }
  val = 0;
  onDragOver(event: DragEvent) {
    console.log("----dhruvdddddddddd");
    if (this.counter > 17) {
      this.counter = 0;
    }
    console.log("drag over", event);
    if (event.x % 9 == 0) {
      if (this.val < event.x) {
        this.counter = this.counter + 1;
        this.imageSource = this.images[this.counter]?.img;
        this.val = event.x;
      } else {
        this.counter = this.counter - 1;
        this.imageSource = this.images[this.counter]?.img;
        this.val = event.x;
      }
    }
  }

  onDragEnd(event: DragEvent) {
    console.log("drag end", event);
    // event.target.style.opacity = 1;
  }
  onDragLeave(event: DragEvent) {
    console.log("drag leave", event);
  }

  onDrop(event: DragEvent) {
    console.log("dropped", event);
  }

  onDragEnter(event: DragEvent) {
    console.log("drag enter", event);
  }
}
