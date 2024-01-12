import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../models/category';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.scss'
})
export class CategoryAddComponent{
    createForm!:FormGroup
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private categoryService:CategoryService){}

    createCreateForm(){
      this.createForm=this.formBuilder.group({
        name:['',Validators.required]
      })
    }
    onSubmit(){
      if(!this.createForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let category:Category=Object.assign({},this.createForm.value);
      this.categoryService.create(category).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".create-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
