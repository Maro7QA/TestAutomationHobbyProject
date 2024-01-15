Feature('Email');

// for information visit: https://codecept.io/email/#receiving-an-email

xScenario('Send and receive an email @email', async ({ I }) => {

    const mailbox = await I.haveNewMailbox();  //creates a disposable email inbox, address is created for one test only and is deleted afterwards
    mailbox.emailAddress; //email address of created inbox

    I.sendEmail({
        to: [mailbox.emailAddress],
        subject: 'Automation rocks',
        body: 'Hello World! Great you just sent an email to yourself!!'
    });   // send email from created to created inbox

    //General wait for latest email to come in
    I.waitForLatestEmail(); //wait for an email to be received
    //Assertions performed on the currently opened email
    I.seeEmailIsFrom(mailbox.emailAddress);
    I.seeInEmailSubject('Automation rocks');
    I.seeInEmailBody('Hello World!');
    I.seeNumberOfEmailAttachments(0);

    //Wait and open for any email in inbox to match search criteria
    I.waitForEmailMatching({ subject: 'Automation rocks' }, 20);  // wait 20 sec for an email with match in subject
    I.seeInEmailBody('Hello World!');
});
