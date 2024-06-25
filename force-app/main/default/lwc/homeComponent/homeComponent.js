import { LightningElement } from 'lwc';
import PROFILE_PHOTO from "@salesforce/resourceUrl/trialblazer";
import FontAwesome from '@salesforce/resourceUrl/FontAwesome';
import {loadStyle, loadScript} from 'lightning/platformResourceLoader';


export default class HomeComponent extends LightningElement {
    profilePhoto = PROFILE_PHOTO;
    renderedCallback() {

        Promise.all([
            loadStyle(this, FontAwesome + '/css/all.css')
        ]).then().catch(error => {
             console.log('error is',error);
        });

    }

    handleContactClick(){
        const emailAddress = 'prsad.pra@northeastern.edu'; // Email address to open the email app

        // Construct the mailto: URL with only the recipient email address
        const mailtoUrl = `mailto:${emailAddress}`;

        // Open the default email client with the pre-filled email to the recipient
        window.location.href = mailtoUrl;
    }
}