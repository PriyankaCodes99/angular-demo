import { Component, OnInit } from '@angular/core';

// gives us the class from the hero.ts file  CLASS
// blueprint
import {Hero} from '../hero';

// import list of heroes ARRAY OF ACTUAL VALUES HERE
// actual data, not a blueprint
import { HEROES } from '../mock-heroes';
// we can do this because we exported the constant. You are importing an array. Import it in. Compare to API?

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    

    // you should see constructor at the top
    constructor() { }

    
    heroes = HEROES; 
            
    // Hero = 'Windstorm';
    // comma for object literal not; 
    selectedHero: Hero ;
    
    /*
     selectedHero: Hero = {
        id: 1, 
        name: 'Windstorm'
    };
    */
    
    // when you type something you use : and indicate the data type
    // this maps the data structure onto this property.
    
    // create this function for the click 
    // VOID is the return type of this function
    // but functions should always return something. if nothing then say void. 
    // onSelect(hero: Hero):void {
    
    onSelect(hero: Hero):boolean {
        this.selectedHero = hero; 
        return true; 
    }
    
    
    
    // generally ends here
    ngOnInit() {
  }

}
