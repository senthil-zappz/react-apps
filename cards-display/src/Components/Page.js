// Page.js
import Cards from "./Cards";

function Page(){
  return(
    <>
      <h3 class="align-left">  Help Center </h3>

    <div class="row">
      <Cards header="General" item1="About forwarding limits" item2="How to update WhatsApp" item3="How to change group privacy settings" item4="View all questions" />
      <Cards header="Android" item1="Verifying your number" item2="How to restore your chat history" item3="How to manage your notifications" item4="View all questions" />
      <Cards header="iPhone" item1="How to restore your chat history" item2="How to manage your notifications" item3="How to use status" item4="View all questions" />
      <Cards header="Web and Desktop" item1="About WhatsApp Web and Desktop" item2="How to log in or out" item3="How to manage your notifications" item4="View all questions" />
      <Cards header="KaiOS" item1="How to verify your phone numbe" item2="How to edit your profile" item3="How to send media, contacts, or location" item4="View all questions" />
      <Cards header="Whatsapp Business for Android" item1="WhatsApp business products" item2="How to download the WhatsApp Business app" item3="How to edit your business profile" item4="View all questions" />
    </div>
        
      
    </>
  );
}
  
  export default Page;