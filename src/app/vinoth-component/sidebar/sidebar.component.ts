import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mySidebar: any;
  overlayBg: any;
  activerouterpath: string;
  dashBoard: boolean= false;
  googleMap: boolean= false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activerouterpath = router.routerState.snapshot.root.children[0].url[0].path;
   // console.log("route", this.activerouterpath);
    if (this.activerouterpath === 'dashBoard') {
        this.dashBoard = true;
     }
     if (this.activerouterpath === 'googleMap') {
        this.googleMap = true;
     }
   }

  ngOnInit() {
    // Get the Sidebar
        this.mySidebar = document.getElementById('mySidebar');
        // Get the DIV with overlay effect
         this.overlayBg = document.getElementById('myOverlay');
      }

      // Toggle between showing and hiding the sidebar, and add overlay effect
       w3_open() {
          if (this.mySidebar.style.display === 'block') {
              this.mySidebar.style.display = 'none';
              this.overlayBg.style.display = 'none';
          } else {
              this.mySidebar.style.display = 'block';
              this.overlayBg.style.display = 'block';
          }
      }
      // Close the sidebar with the close button
       w3_close() {
          this.mySidebar.style.display = 'none';
          this.overlayBg.style.display = 'none';
      }

      logout() {
              // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
      }

}
