import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category/category.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  categoryId;
  subcategories: any = [];
  subcatid: string = "";
  subCatdata: any = {}
  editCategoryForm: FormGroup;
  formSubmited: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, 
    private categoryService: CategoryService,
    private toastr:ToastrService,
    private fb: FormBuilder) {
      this.editCategoryForm = this.fb.group({
        subcategoryName: ['', [Validators.required]]
      })
     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.subcategoriesList(this.categoryId)
    })
  }

  subcategoriesList(categoryId){
    let data = {
      categoryId: categoryId
    }
    this.categoryService.getSubCategory(data).subscribe(res => {
      if(res.status == "success"){
        this.subcategories = res.data;
        this.dtTrigger.next();
      }
    })
  }

  getSubcategory(id) {
    this.subcatid = id
    let data = {
      subcategoryId: id
    }
    this.categoryService.getDetailsSubategory(data).subscribe(res => {
      if(res.status == "success"){
        this.subCatdata = res.Data
      }
    })
  }

  getSubcategory1(id) {
    this.subcatid = id
    let data = {
      subcategoryId: id
    }
    this.categoryService.getDetailsSubategory(data).subscribe(res => {
      if(res.status == "success"){
        this.editCategoryForm.patchValue({
          subcategoryName: this.subCatdata.name
        })
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  onEditSubcategorySubmit() {
    this.formSubmited = true
    if(this.editCategoryForm.invalid){
      return
    }
    let data = {
      name: this.editCategoryForm.value.subcategoryName,
      subcategoryId: this.subcatid
    }
    $('#editSubcategory').modal('hide');
    this.categoryService.editSubcategory(data).subscribe(res => {
      if(res.status == "success"){
        this.subcategoriesList(this.categoryId)
        this.toastr.success(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  deleteSubcategory(id) {
    if(id && id != null) {
      let confirmStatus = confirm('Do you really want to delete this subcategory?');
      if(confirmStatus) {
        this.categoryService.deleteSubcategory(id).subscribe(res => {
          if(res.status == 'success') {
            this.toastr.success(res.response_message);
          } else {
            this.toastr.error('Something went wrong!');
          }
        })
      }
    }
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      console.log(dtInstance)
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      dtInstance.draw();
    });
  }


}
