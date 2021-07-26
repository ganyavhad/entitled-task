import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-lead-collection',
  templateUrl: './lead-collection.component.html',
  styleUrls: ['./lead-collection.component.css']
})
export class LeadCollectionComponent implements OnInit {
  leads: any;
  title = 'appBootstrap';
  lead: any;
  constructor(private fb: FormBuilder, private apiService: ApiService, private toastr: ToastrService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.leads = []
    this.getLeads()
  }

  getLeads() {
    let data = {}
    this.apiService.search(data).subscribe((res: any) => {
      this.leads = res.data
      if (!res.data[0]) {
        this.toastr.warning(res.message);
      }
    }, err => {
      console.log("Failed to fetch leads", err)
      this.toastr.error(err.message);
    });
  }

  deleteLead(id) {
    this.apiService.delete(id).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.getLeads()
    }, err => {
      console.log("Failed to fetch leads", err)
      this.toastr.error(err.message);
    });
  }

  async openCreateModal(content) {
    this.lead = {}
    await this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  async openEditModal(content, data) {
    this.lead = data
    await this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  closeModal() {
    this.modalService.dismissAll()
  }

  editLead() {
    console.log("Edit called")
    this.apiService.update(this.lead._id, this.lead).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.modalService.dismissAll()
      this.getLeads()
    }, err => {
      console.log("Failed to fetch leads", err)
      this.toastr.error(err.message);
    });
  }
  saveLead() {
    console.log("save called")
    this.apiService.create(this.lead).subscribe((res: any) => {
      this.toastr.success(res.message);
      this.modalService.dismissAll()
      this.getLeads()
    }, err => {
      console.log("Failed to fetch leads", err)
      this.toastr.error(err.message);
    });
  }

}
