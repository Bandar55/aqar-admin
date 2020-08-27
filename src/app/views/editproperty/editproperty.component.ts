import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, Validators,FormGroup, FormArray,FormControl} from '@angular/forms';
import { PropertyService } from '../property/property.service'

@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrls: ['./editproperty.component.scss']
})
export class EditpropertyComponent implements OnInit {
  propertyForm: FormGroup;
  propertyId: string;
  propData: any = {};
  indoorData: string;
  outdoorData: string;
  extras: any = [
    {key: 'Balcony', value: 'balcony'},
    {key: 'Garden', value: 'garden'},
    {key: 'Parking', value: 'parking'},
    {key: 'Modular Kitchen', value: 'modularKitchen'},
    {key: 'BBQ', value: 'bbq'},
    {key: 'Football Area', value: 'footballArea'},
    {key: 'Green Area', value: 'greenArea'},
    {key: 'Volleyball', value: 'volleyball'},
    {key: 'Playground', value: 'playground'},
    {key: 'Wifi', value: 'wifi'},
    {key: 'Insurance', value: 'insurance'},
    {key: 'Available time AM', value: 'timeAM'},
    {key: 'Available time PM', value: 'timePM'}
  ]
  indoorOption: any = ['Maid Room', 'Pool', 'Basement', 'Internal Stair'];
  outdoorOption: any = ['Driver Room', 'Pool', 'Extra Room', 'Playground'];
  furnishOption: any = ['Security Alarm', 'Fire Alarm', 'Maintenance Covered', 'Housekeeping'];
  parkingOption: any = ['Extra Parking', 'Security Man', 'Gym', 'In Compound'];
  viewOption: any = ['See View', 'Garden View', 'High City View', 'Unique View'];
  constructor(private fb:FormBuilder, private activatedRoute: ActivatedRoute,
     private propertyService: PropertyService, private router: Router) {
    this.propertyForm = this.fb.group({
      title: [null, Validators.compose([Validators.required])],
      purpose : [''],
      balcony : [''],
      garden : [''],
      parking : [''],
      modularKitchen : [''],
      bbq : [''],
      footballArea : [''],
      greenArea : [''],
      volleyball : [''],
      playground : [''],
      indoor1: [''],
      indoor2: [''],
      indoor3: [''],
      indoor4: [''],
      outdoor1: [''],
      outdoor2: [''],
      outdoor3: [''],
      outdoor4: [''],
      furnish1: [''],
      furnish2: [''],
      furnish3: [''],
      furnish4: [''],
      parking1: [''],
      parking2: [''],
      parking3: [''],
      parking4: [''],
      view1: [''],
      view2: [''],
      view3: [''],
      view4: [''],
    });
   }

  ngOnInit() {
    console.log(this.indoorOption.length)
    this.activatedRoute.params.subscribe(params => {
      this.propertyId = params['id'];
      if(this.propertyId) {
        this.getPropertyDetails(this.propertyId)
      }
    })
  }

  getPropertyDetails(id){
    this.propertyService.getPropertyDetails(id).subscribe(res => {
      if(res.response_code == 200){
        this.propData = res.Data;
        this.indoorData = res.Data.indoor.split(',');
        this.outdoorData = res.Data.outdoor.split(',')
        this.propertyForm.patchValue({
          title: this.propData.title,
          purpose: this.propData.purpose,
          garden: this.propData.garden,
          balcony: this.propData.balcony,
          lift: this.propData.lift,
          duplex: this.propData.duplex,
          aircondition: this.propData.aircondition,
          furnished: this.propData.furnished,
          modularKitchen: this.propData.modularKitchen,
          store: this.propData.store,
          indoor1: this.indoorData[0],
          indoor2: this.indoorData[1],
          indoor3: this.indoorData[2],
          indoor4: this.indoorData[3],
          outdoor1: this.outdoorData[0],
          outdoor2: this.outdoorData[1],
          outdoor3: this.outdoorData[2],
          outdoor4: this.outdoorData[3]
        })
      } 
    })
  }

  onPropertySubmit(){
    var arrayIndoor = [
      {
        indoor: this.propertyForm.value.indoor1 ? "OPTION1" : '',
      },
      {
        indoor: this.propertyForm.value.indoor2 ? "OPTION2" : '',
      },
      {
        indoor: this.propertyForm.value.indoor3 ? "OPTION3" : '',
      },
      {
        indoor: this.propertyForm.value.indoor4 ? "OPTION4" : '',
      }
    ];
    var arrayOutdoor = [
      {
        outdoor: this.propertyForm.value.outdoor1 ? "OPTION1" : '',
      },
      {
        outdoor: this.propertyForm.value.outdoor2 ? "OPTION2" : '',
      },
      {
        outdoor: this.propertyForm.value.outdoor3 ? "OPTION3" : '',
      },
      {
        outdoor: this.propertyForm.value.outdoor4 ? "OPTION4" : '',
      }
    ];
    let indoor = arrayIndoor.map((item) => {
      return item.indoor
    }).join(",");
    let outdoor = arrayOutdoor.map((item) => {
      return item.outdoor
    }).join(",");
    let data = {
      title: this.propertyForm.value.title,
      purpose: this.propertyForm.value.purpose,
      garden: this.propertyForm.value.garden,
      balcony: this.propertyForm.value.balcony,
      lift: this.propertyForm.value.lift,
      duplex: this.propertyForm.value.duplex,
      aircondition: this.propertyForm.value.aircondition,
      furnished: this.propertyForm.value.furnished,
      modularKitchen: this.propertyForm.value.modularKitchen,
      store: this.propertyForm.value.store,
      indoor: indoor,
      outdoor: outdoor,
      propertyId: this.propertyId
    }
    this.propertyService.editProperty(data).subscribe(res => {
      console.log(res)
      if(res.response_code == 200) {
        this.router.navigate['property'];
      }
    })
  }

}
