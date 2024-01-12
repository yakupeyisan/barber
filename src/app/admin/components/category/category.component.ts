import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { CommonModule } from '@angular/common';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,CategoryUpdateComponent,CategoryAddComponent,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[]
  selectedCategory!:Category
  @ViewChild(CategoryAddComponent,{static:true}) addCategoryComponent !: CategoryAddComponent; 
  @ViewChild(CategoryUpdateComponent,{static:true}) updateCategoryComponent !: CategoryUpdateComponent; 
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.categoryService.getAll().subscribe(result=>{
      this.categories=result.data;
    });
  }
  isImage(url:string|null){
    if(url==null || url==undefined) return false;
    if(url.split('.').length==1) return false;
    let allowedTypes=[".jpeg",".jpg",".png",".gif"]
    return allowedTypes.find(type=>url.includes(type))!=undefined
  }
  showAddModal(){
    this.addCategoryComponent.createCreateForm();
  }
  showEditModal(category:Category|null){
    if(category==null) return;
    this.updateCategoryComponent.createUpdateForm(category);
  }
  deleteCategoryById(id:number){
    this.categoryService.deleteById(id).subscribe(result=>{
      this.getList();
    })
  }
}
