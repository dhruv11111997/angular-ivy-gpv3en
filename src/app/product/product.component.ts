import { Component, OnInit } from "@angular/core";
import { delay } from "rxjs/operators";
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
    this.initialization();
  }

  public initialization() {
    this.counter = 0;
    while (this.counter < 12) {
    setTimeout(()=>{
        this.imageSource = this.images[this.counter]?.img;
      console.log("-0------------", this.imageSource);
      this.counter++;
    }, 3000);
    }
  }
  // onDragStart(event: DragEvent) {
  //   console.log(`starting`, event);
  //   // Hide dragging element
  //   // event.target.style.opacity = 0;
  // }

  // onDrag(event: DragEvent) {
  //   console.log("dragging", event);
  // }
  // val = 0;
  // onDragOver(event: DragEvent) {
  //   console.log("----dhruvdddddddddd");
  //   if (this.counter > 17) {
  //     this.counter = 0;
  //   }
  //   console.log("drag over", event);
  //   if (event.x % 9 == 0) {
  //     if (this.val < event.x) {
  //       this.counter = this.counter + 1;
  //       this.imageSource = this.images[this.counter]?.img;
  //       this.val = event.x;
  //     } else {
  //       this.counter = this.counter - 1;
  //       this.imageSource = this.images[this.counter]?.img;
  //       this.val = event.x;
  //     }
  //   }
  // }

  // onDragEnd(event: DragEvent) {
  //   console.log("drag end", event);
  //   // event.target.style.opacity = 1;
  // }
  // onDragLeave(event: DragEvent) {
  //   console.log("drag leave", event);
  // }

  // onDrop(event: DragEvent) {
  //   console.log("dropped", event);
  // }

  // onDragEnter(event: DragEvent) {
  //   console.log("drag enter", event);
  // }
}
