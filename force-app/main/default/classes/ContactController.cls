public with sharing class ContactController {
    @AuraEnabled
    public static void sendEmail(String firstName, String lastName, String email, String message) {
        // Implement your email sending logic here
        // For example, use SingleEmailMessage to send an email

        List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {'prasad.pra@northeastern.edu'};

        mail.setToAddresses(toAddresses);
        mail.setReplyTo(email);
        mail.setSenderDisplayName(firstName + ' ' + lastName);
        mail.setSubject('New Contact Form Submission');
        mail.setPlainTextBody('You have received a new message:\n\n' + message);

        mails.add(mail);
        Messaging.sendEmail(mails);
    }
}
