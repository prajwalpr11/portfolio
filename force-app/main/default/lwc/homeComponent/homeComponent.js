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
}