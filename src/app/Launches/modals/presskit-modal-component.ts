import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'presskit-modal',
  templateUrl: './presskit-modal-component.html',
})
export class PresskitModalComponent {

    constructor(private modalService: NgbModal) {}

    @ViewChild('noPresskit') noPresskit: TemplateRef<any> | undefined;

    openModal(){
        this.modalService.open(this.noPresskit);
    }


    close(){
        this.modalService.dismissAll();
    }

}
