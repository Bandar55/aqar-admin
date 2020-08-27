import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $;
@Component({
  selector: 'app-language-management',
  templateUrl: './language-management.component.html',
  styleUrls: ['./language-management.component.scss']
})
export class LanguageManagementComponent implements OnInit {
  addLanguageForm: FormGroup;
  editLanguageForm: FormGroup;
  languageData: any;
  id: any;
  langData: any;
  langId: string;
  public loading = false;
  dtTrigger: Subject<any> = new Subject();
  formSubmited: boolean = false;
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private toastr:ToastrService) { 
    this.addLanguageForm = this.fb.group({
      language: ['', [Validators.required]],
    })
    this.editLanguageForm = this.fb.group({
      language: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.languageList()
  }

  languageList(){
    this.loading = true;
    this.categoryService.getAllLanguage().subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.languageData = res.Data
        this.dtTrigger.next()
      } 
    })
  }

  deleteLangauge(id){
    if(id && id != null){ 
      let confirmStatus = confirm("Do you really want to delete this language?");
      if(confirmStatus) { 
        this.id=id;
        let data = {
          languageId:this.id
        }
        this.categoryService.deleteLangauge(data).subscribe(res => {
          if(res.response_code == 200) {
            this.languageList()
          } 
        })
      }
    }
  }

  addLanguage(){
    // this.loading = true;
    this.formSubmited = true
    if(this.addLanguageForm.invalid){
      return
    }
    let data = {
      language: this.addLanguageForm.value.language,
    }
    $('#addLanguage').modal('hide');
    this.categoryService.addLanguage(data).subscribe(res => {
      if(res.response_code == 200) {
        // this.loading = false;
        this.addLanguageForm.reset()
        this.formSubmited = false
        this.toastr.success(res.response_message);
        this.languageList()
      } else if(res.response_code == 501){
        this.toastr.error(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  getLanguage(id){
    this.langId = id
    this.categoryService.getLanguage(id).subscribe(res => {
      if(res.response_code == 200) {
        this.langData = res.Data
        this.editLanguageForm.patchValue({
          language: this.langData.language
        })
      } 
    })
  }

  editLanguage(){
    // this.loading = true;
    this.formSubmited = true
    if(this.editLanguageForm.invalid){
      return
    }
    let data = {
      language: this.editLanguageForm.value.language,
      languageId: this.langId
    }
    $('#editLanguage').modal('hide');
    this.categoryService.editLanguage(data).subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.languageList()
      } 
    })
  }
}
