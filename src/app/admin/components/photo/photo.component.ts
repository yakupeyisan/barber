import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { Photo } from '../../../models/photo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule,RouterLink,NgxDropzoneModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit {
  photos:Photo[]=[]
  files: File[] = [];

  constructor(private photoService:PhotoService){}
  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.photoService.getAll().subscribe(result=>{
      this.photos=result.data;
    });
  }
  deletePhotoById(id:number){
    this.photoService.deleteById(id).subscribe(result=>{
      this.getList();
    })
  }
}
