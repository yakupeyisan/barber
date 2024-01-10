import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../../models/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { UserForCreateDto } from '../../../../dtos/user-for-create-dto';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent{
    createForm!:FormGroup
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private userService:UserService){}

    createCreateForm(){
      this.createForm=this.formBuilder.group({
        imageUrl:['',Validators.required],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required]
      })
    }
    onSubmit(){
      if(!this.createForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let userForCreateDto:UserForCreateDto=Object.assign({},this.createForm.value);
      this.userService.create(userForCreateDto).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".create-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }

}
