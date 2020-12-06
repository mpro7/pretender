import { Component, OnInit } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  images: any[];
    
  ngOnInit() {
      this.images = [];
      this.images.push({source:'../../assets/gallery/image-01.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'../../assets/gallery/image-02.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'../../assets/gallery/image-03.jpg', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'../../assets/gallery/image-04.jpg', alt:'Description for Image 4', title:'Title 4'});
      this.images.push({source:'../../assets/gallery/image-05.jpg', alt:'Description for Image 5', title:'Title 5'});
      this.images.push({source:'../../assets/gallery/image-06.jpg', alt:'Description for Image 6', title:'Title 6'});
      this.images.push({source:'../../assets/gallery/image-07.jpg', alt:'Description for Image 7', title:'Title 7'});
      this.images.push({source:'../../assets/gallery/image-08.jpg', alt:'Description for Image 8', title:'Title 8'});
      this.images.push({source:'../../assets/gallery/image-09.jpg', alt:'Description for Image 9', title:'Title 9'});
      this.images.push({source:'../../assets/gallery/image-10.jpg', alt:'Description for Image 10', title:'Title 10'});
    }

}
