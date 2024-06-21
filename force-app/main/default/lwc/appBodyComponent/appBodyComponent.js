import { LightningElement,track } from 'lwc';
import BackgroundImg from '@salesforce/resourceUrl/backgroundsvg';

export default class AppBodyComponent extends LightningElement {
    
    @track isHome = true;
    @track isProjects = false;
    @track isAbout = false;
    @track isResume = false;

    imageUrl = BackgroundImg;

    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl}")`;
    }

    handleNavigation(event) {
        const selected = event.detail.id;
        this.isHome = selected === 'home';
        this.isProjects = selected === 'projects';
        this.isAbout = selected === 'about';
        this.isResume = selected === 'resume';

    }
}