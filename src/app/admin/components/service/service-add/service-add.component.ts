import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from '../../../../models/service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-service-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './service-add.component.html',
  styleUrl: './service-add.component.scss'
})
export class ServiceAddComponent{
    createForm!:FormGroup
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private serviceService:ServiceService){}

    createCreateForm(){
      this.createForm=this.formBuilder.group({
        name:['',Validators.required],
        duration:['',Validators.required],
        price:['',Validators.required]
      })
    }
    onSubmit(){
      if(!this.createForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let service:Service=Object.assign({},this.createForm.value);
      this.serviceService.create(service).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".create-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
