declare module "@salesforce/apex/ContactController.sendEmail" {
  export default function sendEmail(param: {firstName: any, lastName: any, email: any, message: any}): Promise<any>;
}
