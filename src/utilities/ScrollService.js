import { TOTAL_SCREENS } from './commonUtils'
// what is this
import {Subject} from 'rxjs'

export default class ScrollService{
    // create an object of Scroll Service
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();

    static currentScreen = new Subject();


    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);

    }

    // arrow function 
    ScrollToHome = ()=>{
        let HomeScreen = document.getElementById("Home");

        // if contact me screen is false return ( so i believe this means invalid)
        if (!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior: "smooth"})
    }
      // arrow function 
      scrollToHireMe = ()=>{
        let contactMeScreen = document.getElementById("Contact Me");

        // if contact me screen is false return ( so i believe this means invalid)
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    // check if element is in view
    isElementInView = (elem, type)=>{
       let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        // switch case
        switch (type){

            case "partial":
            return partiallyVisible;


            case "complete":
                return completelyVisible
                // this is false
                default:
                    // why end to false
                    return false;
        }

}

checkCurrentScreenUnderViewport = (event) =>{
    if(!event || Object.keys(event).length <1)
    return;
    for(let screen of TOTAL_SCREENS){
        let screenFromDOM = document.getElementById(screen.screen_name);
        if(!screenFromDOM)
        continue;

        let fullyVisible = this.isElementInView(screenFromDOM, "complete");
        let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

        if(fullyVisible || partiallyVisible){
            if(partiallyVisible && !screen.alreadyRendered){
                ScrollService.currentScreen.next({
                    fadeInScreen: screen.screen_name
                });
                screen['alreadyRendered'] = true;
                break;
            }
            if(fullyVisible){
                ScrollService.currentScreenBroadCaster.next({
                    screenInView: screen.screen_name,


                });
                break;
            }
        }
    }
}
}