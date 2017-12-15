import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
 
export class FooterComponent implements OnInit {
  mySidebar:any
  overlayBg:any
  constructor() { }

  ngOnInit() {
// Get the Sidebar
    this.mySidebar = document.getElementById("mySidebar");
    
    // Get the DIV with overlay effect
     this.overlayBg = document.getElementById("myOverlay");
  }

  
  

  
  // Toggle between showing and hiding the sidebar, and add overlay effect
   w3_open() {
      if (this.mySidebar.style.display === 'block') {
          this.mySidebar.style.display = 'none';
          this.overlayBg.style.display = "none";
      } else {
          this.mySidebar.style.display = 'block';
          this.overlayBg.style.display = "block";
      }
  }
  
  // Close the sidebar with the close button
   w3_close() {
      this.mySidebar.style.display = "none";
      this.overlayBg.style.display = "none";
  }


}
