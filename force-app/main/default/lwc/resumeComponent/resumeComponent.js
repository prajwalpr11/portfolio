import { LightningElement } from 'lwc';
import resumePdf from '@salesforce/resourceUrl/ResumePdf';

export default class ResumeComponent extends LightningElement {
    resumeUrl = resumePdf;

    downloadResume() {
        const link = document.createElement('a');
        link.href = this.resumeUrl;
        link.download = 'My_Resume.pdf'; // The file name for the downloaded resume
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}