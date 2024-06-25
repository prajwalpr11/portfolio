import { LightningElement, track } from 'lwc';
import connectImage from '@salesforce/resourceUrl/ConnectImage';
import sendEmail from '@salesforce/apex/ContactController.sendEmail';
import resumePdf from '@salesforce/resourceUrl/ResumePdf';
import connectImageEnd from '@salesforce/resourceUrl/ConnectImageEnd';



export default class ConnectComponent extends LightningElement {
    connectImage = connectImage;
    resumeUrl = resumePdf;
    connectImageEnd = connectImageEnd;
    @track isModalOpen = false;
    @track firstName = '';
    @track lastName = '';
    @track email = '';
    @track message = '';

    openContactForm() {
        this.isModalOpen = true;
    }

    closeContactForm() {
        this.isModalOpen = false;
        this.clearForm();
    }

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } else if (field === 'message') {
            this.message = event.target.value;
        }
    }

    sendEmail() {
        sendEmail({ firstName: this.firstName, lastName: this.lastName, email: this.email, message: this.message })
            .then(() => {
                this.isModalOpen = false;
                this.clearForm();
                this.showToast('Success', 'Your message has been sent successfully!', 'success');
            })
            .catch(error => {
                this.showToast('Error', 'There was an error sending your message. Please try again.', 'error');
                console.error('Error sending email: ', error);
            });
    }

    clearForm() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    downloadResume() {
        const link = document.createElement('a');
        link.href = this.resumeUrl;
        link.download = 'My_Resume.pdf'; // The file name for the downloaded resume
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
