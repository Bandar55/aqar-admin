import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  // styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  categories: any = [];
  categoryid: string = '';
  catId: string;
  categoryName: string;
  public loading = false;
  addCategoryForm: FormGroup;
  subCategoryForm: FormGroup;
  formSubmited: boolean = false;
  constructor(private categoryService: CategoryService, 
    private fb: FormBuilder,
    private toastr:ToastrService) {
    this.getDataFromServer()
    this.addCategoryForm = this.fb.group({
      categoryName:['', [Validators.required]],
    })
    this.subCategoryForm = this.fb.group({
      name:['', [Validators.required]],
    })
  }

  ngOnInit() {

  }

  getDataFromServer(){
    this.loading = true;
    this.categoryService.getAllCategory().subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.categories = res.data
        this.dtTrigger.next()
      } 
    });
  }

  onCategorySubmit() {
    this.formSubmited = true
    if(this.addCategoryForm.invalid){
      return
    }
    let data = {
      name: this.addCategoryForm.value.categoryName
    }
    $('#addCategory').modal('hide');
    this.categoryService.addCategory(data).subscribe(res => {
      if(res.response_code == 200) {
        this.addCategoryForm.reset()
        this.formSubmited = false
        this.toastr.success(res.response_message);
        this.getDataFromServer();
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  setsubcategoryId(categoryid) {
    this.categoryid = categoryid;
  }

  subCategorySubmit(){
    this.formSubmited = true
    if(this.subCategoryForm.invalid){
      return
    }
    let data = {
      name: this.subCategoryForm.value.name,
      categoryId: this.categoryid
    }
    $("#addSubCategory").modal('hide')
    this.categoryService.addSubCategory(data).subscribe(res => {
      if(res.status == 'success') {
        this.subCategoryForm.reset()
        this.formSubmited = false
        // this.loading = false;
        this.toastr.success(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    });
  }

  editCategory(id, catname){
    this.catId = id
    this.categoryName = catname;
  }

  onEditCategorySubmit() {
    this.loading = true;
    let data = {
      name: this.categoryName,
      categoryId: this.catId
    }
    $("#editCategory").modal('hide');
    this.categoryService.editCategory(data).subscribe(res => {
      if(res.response_code == 200) {
        this.loading = false;
        this.getDataFromServer();
        this.toastr.success(res.response_message);
      } else {
        this.toastr.success('Something went wrong!');
      }
    })
  }

  // deleteCategory(id) {
  //   if(id && id != null){ 
  //     this.loading = true;
  //     let confirmStatus = confirm("Do you really want to delete this category?");
  //     if(confirmStatus) {
  //       this.categoryService.deleteCategory(id).subscribe(res => {
  //         console.log(res)
  //         if(res.response_code == 200) {
  //           this.loading = false;
  //           this.getDataFromServer();
  //           this.toastr.success(res.response_message);
  //         } else {
  //           this.toastr.success('Something went wrong!');
  //         }
  //       });
  //     }
  //   }
  // }

}


