import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements  OnInit {
  isLoading:boolean=true;
  user: any = {};
  loading: boolean=false;
  errorView: boolean=false;
  emptyView: boolean=false;
constructor(
  private helper:HelpersService
){}
  ngOnInit(): void {
    console.log('Started');
setTimeout(() => {
  this.isLoading = false
  this.helper.presentToast('All Data retrieved', false)
}, 1000);

  }
    // #############################################################
    showContentView(ev:any){
      this.loading = false;
      this.errorView = false;
      this.emptyView = false;
      if (ev) ev.target.complete();
    }
    // #############################################################
    showErrorView(ev:any){
      this.loading = false;
      this.errorView = true;
      this.emptyView = false;
      if (ev) ev.target.complete();
    }
    // #############################################################
    showEmptyView(ev:any){
      this.loading = false;
      this.errorView = false;
      this.emptyView = true;
      if (ev) ev.target.complete();
    }
    // #############################################################

}
