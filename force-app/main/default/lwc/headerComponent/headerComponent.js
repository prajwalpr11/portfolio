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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            const navbar = this.template.querySelector('.navbar');
            navbar.classList.remove('show');
        }

    }

    toggleMenu() {
        const navbar = this.template.querySelector('.navbar');
        navbar.classList.toggle('show');
    }
}