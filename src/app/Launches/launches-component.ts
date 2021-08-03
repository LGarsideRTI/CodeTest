import { componentFactoryName } from "@angular/compiler";
import { Component, Inject, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { Launch } from "./launch";
import { LaunchesService } from "./launches-service";
import { IgxGridComponent, IgxOverlayService } from "igniteui-angular";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PresskitModalComponent } from "./modals/presskit-modal-component";


@Component({
    selector: 'launches-component',
    templateUrl: './launches-component.html',
    styleUrls: ['./launches-component.scss']
})


export class LaunchesComponent implements OnInit{
launches: Launch[] = [];
    
@ViewChild('noPresskit') noPresskit: TemplateRef<any> | undefined;
@ViewChild('grid1', { read: IgxGridComponent, static: true })
public grid1!: IgxGridComponent;

constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService, private launchesService: LaunchesService, private modalService: NgbModal){}
ngOnInit(){
    this.getLaunches();
}

getLaunches(): void{
    this.launchesService.getLaunches().subscribe(launches => this.launches = launches);
}
openModal(){
    this.modalService.open(this.noPresskit);
}
close(){
    this.modalService.dismissAll();
    this.refreshGrid();
}
refreshGrid() {
    window.location.reload();
}


openLink(url: any){

    if (url){
        window.location.href=url; 
    }else{
        this.openModal();
    }
}

}
