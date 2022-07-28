import { Component, OnInit } from '@angular/core';
import { faSearch, faShield, faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services=[
    {
      color: "bg-[#2952e3]",
      title: "Security Guarantee",
      icon: faShield,
      subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
    },
    {
      color:"bg-[#8945F8]",
      title:"Best exchange rates",
      icon: faSearch,
      subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
    },
    {
      color: "bg-[#F84550]",
      title: "Fastest transactions",
      icon: faHeart,
      subtitle: "Security is guranteed. We always maintain privacy and maintain the quality of our products"
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
