import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../../../../models/service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-service-update',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './service-update.component.html',
  styleUrl: './service-update.component.scss'
})
export class ServiceUpdateComponent{
    updateForm!:FormGroup;
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private serviceService:ServiceService){}

    createUpdateForm(service:Service){
      this.updateForm=this.formBuilder.group({
        id:[service.id,Validators.required],
        name:[service.name,Validators.required],
        duration:[service.duration,Validators.required],
        price:[service.price,Validators.required]
      })
    }
    onSubmit(){
      if(!this.updateForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let service:Service=Object.assign({},this.updateForm.value);
      this.serviceService.update(service).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".edit-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
