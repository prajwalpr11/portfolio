import { LightningElement } from 'lwc';
import ABOUT_PHOTO from "@salesforce/resourceUrl/astro";
import FontAwesome from '@salesforce/resourceUrl/FontAwesome';
import {loadStyle, loadScript} from 'lightning/platformResourceLoader';

export default class AboutComponent extends LightningElement {
    aboutPhoto = ABOUT_PHOTO;
    renderedCallback() {

        Promise.all([
            loadStyle(this, FontAwesome + '/css/all.css')
        ]).then().catch(error => {
             console.log('error is',error);
        });

    }
}