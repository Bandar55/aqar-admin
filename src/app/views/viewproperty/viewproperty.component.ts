import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PropertyService } from '../property/property.service'

@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.scss']
})
export class ViewpropertyComponent implements OnInit {
  propertyId: string
  constructor(private activatedRoute: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.propertyId = params['propertyId']
      if(this.propertyId) {
        this.getPropertyDetails(this.propertyId)
      }
    })
  }

  getPropertyDetails(id){
    
  }

}
