import { LightningElement } from 'lwc';
import PORTFOLIO_LOGO from "@salesforce/resourceUrl/Portfoliologo";

export default class HeaderComponent extends LightningElement {
    logo = PORTFOLIO_LOGO;


    handleNavigation(event){
        const selected = new CustomEvent(
            'selecteditem',
            {
                detail: {
                    id: event.currentTarget.dataset.id
                }
            }
        );
        console.log('child',selected);
        this.dispatchEvent(selected);
    }
}