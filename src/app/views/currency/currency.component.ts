import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from './currency.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  addCurrencyForm: FormGroup;
  editCurrencyForm: FormGroup;
  currencies: any = [];
  currencyData: any = {};
  currencyId: string;
  public loading = false;
  dtTrigger: Subject<any> = new Subject();
  formSubmited: boolean = false;

  constructor(private fb: FormBuilder, 
    private currencyService: CurrencyService,
    private toastr:ToastrService) {
    this.addCurrencyForm = this.fb.group({
      countryName:['',[Validators.required]],
      currencyType:['',[Validators.required]],
      currencyRate:['',[Validators.required]],
    }) 
    this.editCurrencyForm = this.fb.group({
      countryName:['',[Validators.required]],
      currencyType:['',[Validators.required]],
      currencyRate:['',[Validators.required]],
    }) 
   }

  ngOnInit() {
    this.currencyList()
  }

  currencyList(){
    this.loading = true;
    this.currencyService.currencyList().subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.currencies = res.Data
        this.dtTrigger.next()
      }
    })
  }

  addCurrency(){
    this.formSubmited = true
    if(this.addCurrencyForm.invalid){
      return
    }
    let data = {
      countryName: this.addCurrencyForm.value.countryName,
      currencyType: this.addCurrencyForm.value.currencyType,
      currencyRate: this.addCurrencyForm.value.currencyRate
    }
    $('#addCurrency').modal('hide')
    this.currencyService.addCurrency(data).subscribe(res => {
      if(res.response_code == 200) {
        this.addCurrencyForm.reset()
        this.formSubmited = false
        this.toastr.success(res.response_message);
        this.currencyList()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  getDetails(id){
    this.currencyId = id
    this.currencyService.getCurrencyDetails(id).subscribe(res => {
      if(res.response_code == 200) {
        this.currencyData = res.Data
        this.editCurrencyForm.patchValue({
          countryName: this.currencyData.countryName,
          currencyType: this.currencyData.currencyType,
          currencyRate: this.currencyData.currencyRate
        })
      }
    })
  }

  editCurrency(){
    this.formSubmited = true
    if(this.editCurrencyForm.invalid){
      return
    }
    // this.loading = true;
    let data = {
      countryName: this.editCurrencyForm.value.countryName,
      currencyType: this.editCurrencyForm.value.currencyType,
      currencyRate: this.editCurrencyForm.value.currencyRate,
      currencyId: this.currencyId
    }
    this.currencyService.editCurrency(data).subscribe(res => {
      if(res.response_code == 200) {
        // this.loading = false;
        $('#editCurrency').modal('hide')
        this.toastr.success(res.response_message);
        this.currencyList()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  deleteCurrency(id){
    if(id && id != null){ 
      let confirmStatus = confirm("Do you really want to delete this currency?");
      if(confirmStatus) { 
        this.currencyService.deleteCurrency(id).subscribe(res => {
          if(res.response_code == 200) {
            this.toastr.success(res.response_message);
            this.currencyList();
          } else {
            this.toastr.error('Something went wrong!');
          }
        })
      }
    }   
  }
}
