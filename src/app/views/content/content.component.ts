import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dtTrigger: Subject<any> = new Subject();
  contents: any = [];
  contentId: string;
  public loading = false;
  formSubmited: boolean = false;
  addContentForm: FormGroup;
  editContentForm: FormGroup;
  constructor(private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr:ToastrService) { 
    this.addContentForm = this.fb.group({
      type:['',[Validators.required]],
      title:['',[Validators.required]],
      description:['',[Validators.required]],
    }) 
    this.editContentForm = this.fb.group({
      type:['',[Validators.required]],
      title:['',[Validators.required]],
      description:['',[Validators.required]],
    }) 
    this.getDataFromServer();
  }

  ngOnInit() {
  }

  getDataFromServer() {
    this.loading = true;
    this.categoryService.contentList().subscribe(res => {
      if(res.status == 'success') {
        this.loading = false;
        this.contents = res.data;
        this.dtTrigger.next()
      }
    });
  }

  onContentSubmit() {
    this.formSubmited = true
    if(this.addContentForm.invalid){
      return
    }
    let data = {
      contentType: this.addContentForm.value.type,
      title: this.addContentForm.value.title,
      description: this.addContentForm.value.description
    };
    this.categoryService.addContent(data).subscribe(res => {
      $('#addContent').modal('hide');
      if(res.response_code == 200) {
        this.addContentForm.reset()
        this.formSubmited = false
        this.toastr.success(res.response_message);
        this.getDataFromServer()
      } else {
        this.toastr.error('Something went wrong!');
      }
    });
  }

  getContent(id){
    this.contentId = id
    this.categoryService.getContentDetails(id).subscribe(res => {
      if(res.response_code == 200) {
        let content = res.Data;
        this.editContentForm.patchValue({
          type: content.contentType,
          title: content.title,
          description: content.description,
        })
      } else {
        this.toastr.error('Something went wrong!');
      }
    })  
  }

  onEditContentSubmit(){
    this.formSubmited = true
    if(this.editContentForm.invalid){
      return
    }
    let data = {
      _id: this.contentId,
      contentType: this.editContentForm.value.type,
      title: this.editContentForm.value.title,
      description: this.editContentForm.value.description
    }
    this.categoryService.editContent(data).subscribe(res => {
      $('#editContent').modal('hide');
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        this.getDataFromServer();
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }


  deleteContent(id){
    if(id && id != null){ 
      let confirmStatus = confirm("Do you really want to delete this static content?");
      if(confirmStatus) {
        this.categoryService.deleteContent(id).subscribe(res => {
          if(res.response_code == 200) {
            this.toastr.success(res.response_message);
            this.getDataFromServer();
          } else {
            this.toastr.error('Something went wrong!');
          }
        });
      }
    }
  }

}
