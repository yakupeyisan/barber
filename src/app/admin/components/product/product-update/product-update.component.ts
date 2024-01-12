import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../models/product';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent{
  categories:Category[]=[]
    updateForm!:FormGroup;
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private productService:ProductService,
      private categoryService:CategoryService){}

      getCategoryList(){
        this.categoryService.getAll().subscribe(result=>{
          this.categories=result.data
        })
      }
    createUpdateForm(product:Product){
      this.updateForm=this.formBuilder.group({
        id:[product.id,Validators.required],
        name:[product.name,Validators.required],
      })
    }
    onSubmit(){
      if(!this.updateForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let product:Product=Object.assign({},this.updateForm.value);
      this.productService.update(product).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".edit-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
