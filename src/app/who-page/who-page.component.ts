import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-who-page',
  templateUrl: './who-page.component.html',
  styleUrls: ['./who-page.component.css']
})
export class WhoPageComponent implements OnInit {
  modalRef: BsModalRef; 
  constructor(private modalService: BsModalService) { 
    
  
   }

  ngOnInit(): void {
  }
  openModalWithClass(template: TemplateRef<any>) {  
    
    this.modalRef = this.modalService.show(  

      template,  

      Object.assign({}, { class: 'gray modal-lg' })  

    );  
}
}
