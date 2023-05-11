import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ToastrsService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string){
      this.toastr.success(message, title, { 
      enableHtml: true}
      )
    }

  showDeleted(message: string, title: string){
      this.toastr.error(message, title, { 
      enableHtml: true}
      )
    }

}
