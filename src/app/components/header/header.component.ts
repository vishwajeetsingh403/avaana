import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public ICONS: any = {
    LOGO: "https://avaana.com.au/assets/params/images/svg/footer/avaana-logo.svg",
    SEARCH : "https://avaana.com.au/assets/params/images/icons/search-interface-symbol.png",
    USERS: "../../assets/Images/user.png"
  }
  constructor() { }

  ngOnInit() {
  }

}
