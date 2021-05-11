const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'xyz@edureka.co',
    from: 'xyz@edureka.co',
    subject: 'Email via Node.js app',
    text: 'welcome to node.js certifictaion Training'
})