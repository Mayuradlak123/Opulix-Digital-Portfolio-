import React from 'react'
import "../Styles/privacy.css"
import PrivacyImage from "../assets/privacy.png"
const PrivacyPolicy = () => {
  return (
    <div className='privacy'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"></link>
      <div className="privacy-header">
        <h3> Privacy Policy </h3>
        <p className=' py-2 '>OPULIX DIGITAL PVT, IS RESPONSIBLE FOR THE PROCESSING OF PERSONAL DATA AS SHOWN IN THIS PRIVACY STATEMENT.</p>
        <span className=' title-text pt-8 pb-4 '> PERSONAL DATA THAT WE PROCESS</span>
        <div className=" privacy-text">
          <p>Opulix Digital processes your personal data because you use our services and/or because you provide them to our organization. Below is an overview of the personal data that we process:</p>
          <ul className='privacy-text'>
            <li> First and last name </li>
            <li> Address Details </li>
            <li> Telephone number </li>
            <li> E-mail address </li>
          </ul>
          <p className='title-text'>SPECIAL AND/OR SENSITIVE PERSONAL DATA THAT WE PROCESS:</p>
          <span>Our website and/or service has no intention of collecting data about website visitors who are younger than 16 years old. Unless they have permission from parents or guardians. However, we cannot verify that a visitor is over 16. We, therefore, recommend that parents be involved in the online activities of their children, in order to prevent data about children from being collected without parental consent. If you believe that we have, without such consent collected personal information about a minor without such consent, please contact us at info@opulixdigital.com and we will delete this information.</span>
          <p className='title-text'>COOKIES, OR SIMILAR TECHNIQUES, WHICH WE USE:
          </p>
          <span>Opulix Digital only uses technical and functional cookies. And analytical cookies that do not infringe on your privacy. A cookie is a small text file that is stored on your computer, tablet when you first visit this website is stored on your computer, tablet or smartphone. The cookies we use are necessary for the technical functioning of the website and your convenience. They ensure that the website works properly and remember, for example, your preferences. They also allow us to optimize our website. You can turn off cookies by configuring your internet browser so that it no longer stores cookies. In addition, you can delete all information previously stored using your browser settings.</span>
          <p className='title-text'>REVIEWING, MODIFYING, OR DELETING DATA:</p>
          <span>You have the right to view, correct, or delete your personal data. In addition, you have the right to withdraw your possible consent for data processing or to object to the processing of you against the processing of your personal data by «Brand DA» and you have the right to data portability. This means that you can make a request to us to transfer the personal data we have in a computer file to you or another organization named by you. You can request to inspect, correct, delete data transfer of your personal data or request to withdraw your consent or objection to the processing of your personal data to info@opulixdigital.com. In order to ensure that the request for inspection has been made by you, we ask you to send a copy of your proof of identity with the request. In this copy, please include your passport photo, passport number, and national number. This is for the protection of your privacy. We will respond to your request as quickly as possible but within four weeks.</span>
          <p className='title-text'>

            AUTOMATED DECISION MAKING:</p>
          <span>Opulix Digital does not make any decisions based on automated processing that could have (significant) consequences for individuals.
            These decisions are made by computer programs or systems, without the involvement of a human being (for example an employee of Brand DA) is involved. Opulix Digital uses the following computer programs or systems: Tilda & Facebook.</span>
          <p className='title-text'>HOW LONG WE KEEP PERSONAL DATA:</p>
          <span>
            Opulix Digital will not keep your personal data longer than is strictly necessary to realize the purposes for which your data are collected. We use the following retention periods for personal data: until the customer requests deletion.
          </span>
          <p className='title-text'>SHARING PERSONAL DATA WITH THIRD PARTIES:</p>
          <span>Opulix Digital only provides personal data to third parties if this is necessary for the execution of our agreement with you or to meet your needs. Opulix Digital processes your personal data for the following purposes:</span>
          <ul>
            <li>Processing your payment</li>
            <li>Sending you our newsletter and/or advertising folder</li>
            <li> To be able to call you or send you an e-mail if this is necessary in order to carry out our services</li>
            <li>
              To inform you about changes to our services and products</li>
            <li>To offer you the possibility to create an account</li>
            <li>To deliver goods and services to you</li>
            <li> Opulix Digital analyses your behaviour on the website in order to improve the website and tailor the range of products and services to your preferences</li>
            <li> Opulix Digital also processes personal data if we are legally obliged to do so, such as data we need for our tax return.</li>
          </ul>
          <p>First and last name</p>
          <p>Address Details</p>
          <p>Telephone Number</p>
          <p>E-mail Address</p>

          <p className='title-text'>
            HOW WE PROTECT PERSONAL DATA:</p>
          <span>
            Opulix Digital takes the protection of your data seriously and takes appropriate measures to prevent misuse, loss, unauthorized access, unwanted disclosure, and unauthorized modification counteract. If you have the impression that your data is not properly secured or there are indications of misuse, please contact our customer service or via info@opulixdigital.com</span>
          <div className='footer-section'>
            <div> 
              <img src={PrivacyImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
