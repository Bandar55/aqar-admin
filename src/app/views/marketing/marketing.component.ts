import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  fileToUpload: File = null;
  marketPopups: any = [];
  popup: any = {};
  marketingId: string
  public loading = false;
  addMarketingForm: FormGroup;
  editMarketingForm: FormGroup;
  formSubmited: boolean = false;
  dtTrigger: Subject<any> = new Subject();
  @ViewChild('myInput')
  myInputVariable: ElementRef;
  constructor(private categoryService: CategoryService,
    private fb: FormBuilder,
    private toastr:ToastrService) {
    this.addMarketingForm = this.fb.group({
      screenName:['', [Validators.required]],
      title:['', [Validators.required]],
    })
    this.editMarketingForm = this.fb.group({
      screenName:['', [Validators.required]],
      title:['', [Validators.required]],
    })
    this.getDataFromServer() 
   }

  ngOnInit() {
  }

  getDataFromServer() {
    this.loading = true;
    this.categoryService.getMarketingPopup().subscribe(res=> {
      if(res.response_code == 200) {
        this.loading = false;
        this.marketPopups = res.Data;
        this.dtTrigger.next()
      }
    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onMarketingSubmit() {
    this.formSubmited = true
    if(this.addMarketingForm.invalid){
      return
    }
    let data = {
      screenName: this.addMarketingForm.value.screenName,
      title: this.addMarketingForm.value.title
    };
    $('#addMarketing').modal('hide');
    this.categoryService.addMarketing(data, this.fileToUpload).subscribe(res => {
      if(res.response_code == 200) {
        this.addMarketingForm.reset()
        this.formSubmited = false
        this.myInputVariable.nativeElement.value = ""
        this.toastr.success(res.response_message);
        this.getDataFromServer()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })  
  }

  getDetail(id){
    this.marketingId = id
    this.categoryService.getPopupDetails(id).subscribe(res => {
      if(res.response_code == 200) {
        this.popup = res.Data;
        this.editMarketingForm.patchValue({
          screenName: this.popup.screenName,
          title: this.popup.title,
        })
      } else {
        this.toastr.error('Something went wrong!');
      }
    })  
  }

  onEditMarketingSubmit(){
    this.formSubmited = true
    if(this.editMarketingForm.invalid){
      return
    }
    let jsonData = {
      screenName: this.editMarketingForm.value.screenName,
      title: this.editMarketingForm.value.title,
      id: this.marketingId 
    };
    $('#editMarketing').modal('hide');
    this.categoryService.editMarketingPopup(jsonData, this.fileToUpload).subscribe(res => {
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        this.getDataFromServer()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })  
  }

  deletepopup(id){
    this.loading = true;
    this.categoryService.deletePopup(id).subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.toastr.success(res.response_message);
        this.getDataFromServer()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })  
  }


}
