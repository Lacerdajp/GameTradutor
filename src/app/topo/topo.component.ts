import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector:'app-topo',
  //selector:'[app-topo]',
  // selector:'.app-topo',
  templateUrl:'./topo.component.html',
  styleUrls:['./topo.component.css']
  //styles:['.exemplo{color:red}']
  //template:'<p> Component topo</p>'
})

export class TopoComponent{
    public titulo:string ="Aprendendo Inglês"
}
