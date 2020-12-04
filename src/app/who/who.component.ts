import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  modalRef: BsModalRef; 
  constructor(private modalService: BsModalService) { 
    
  }

  
  ngOnInit() {
  }
  openModalWithClass(template: TemplateRef<any>) {  
    
        this.modalRef = this.modalService.show(  
    
          template,  
    
          Object.assign({}, { class: 'gray modal-lg' })  
    
        );  
}
}

