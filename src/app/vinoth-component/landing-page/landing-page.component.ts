import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let modal = document.getElementById('id01');
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  }
  loginOpen(){
    document.getElementById('id01').style.display='block'
    
  }
  
}
