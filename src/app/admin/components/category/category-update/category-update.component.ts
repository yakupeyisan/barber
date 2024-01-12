import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../models/category';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.scss'
})
export class CategoryUpdateComponent{
    updateForm!:FormGroup;
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private categoryService:CategoryService){}

    createUpdateForm(category:Category){
      this.updateForm=this.formBuilder.group({
        id:[category.id,Validators.required],
        name:[category.name,Validators.required],
      })
    }
    onSubmit(){
      if(!this.updateForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let category:Category=Object.assign({},this.updateForm.value);
      this.categoryService.update(category).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".edit-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
