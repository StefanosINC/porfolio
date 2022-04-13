export default class Animations{

    static animations = new Animations();
    fadeInScreen = (screen_name)=>{
        let screen = document.getElementById(screen_name);
        // if it doesnt exist 
        if(!screen_name || !screen)
        return
        
        // make it exist
        screen.style.opacity = "5";
        screen.style.transform="translateY(1px)"
    }
}