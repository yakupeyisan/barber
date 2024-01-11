import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class FileUpload{
    status: "initial" | "uploading" | "success" | "fail" = "initial"; // Variable to store file status
    file: File | null = null;
    
    onChange(event: any) {
        let file: File = event.target.files[0];
        if (file) {
            this.status = "initial";
            this.file = file;
        }
    }
}