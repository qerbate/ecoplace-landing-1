import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = { _id: '', name: '', gender: '', age: null, address: '', city: '', country: '', status: '', updated: null };
  isLoadingResults = true;

  constructor(private route:ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getContactDetails(this.route.snapshot.params.id);
  }
    getContactDetails(id: string) {
      this.api.getContactById(id)
        .subscribe((data: any) => {
          this.contact = data;
          console.log(this.contact);
          this.isLoadingResults = false;
        });
    }
    deleteContact(id: any) {
      this.isLoadingResults = true;
      this.api.deleteContact(id)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/contact']);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
 

  setColor(status: string) {
    let color: string;
    if (status === '18-35') {
      color = 'orange-color';
    } else if (status === '50-100') {
      color = 'green-color';
    } else {
      color = 'red-color';
    }

    return color;
  }

}
