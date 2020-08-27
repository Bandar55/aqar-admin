import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  successmsg: string = "";
  errormsg: string = "";
  normalProperties: any = [];
  profProperties: any = [];
  public loading = false;
  constructor(private propertyService: PropertyService) {}

  ngOnInit() {
    this.normalPropertyList()
    this.profPropertyList()
  }

  normalPropertyList(){
    this.loading = true;
    this.propertyService.getNormalProperty().subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.normalProperties = res.Data;
        // this.dtTrigger.next();
      }
    })
  }

  profPropertyList(){
    this.loading = true;
    this.propertyService.getProfessionalProperty().subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.profProperties = res.Data;
        this.dtTrigger.next();
      }
    })
  }
  
  deleteProperty(id){
    if(id && id != null){ 
      this.loading = true;
      let confirmStatus = confirm("Do you really want to delete this category?");
      if(confirmStatus) { 
        this.loading = true;
        let data = {
          propertyId: id
        }
        this.propertyService.deleteProperty(data).subscribe(res => {
          if(res.response_code == 200) {
            this.loading = false;
            // this.propertyList();
          } 
        })
      }
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
