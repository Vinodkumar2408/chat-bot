
---

# **Chatbot Integration and Testing Platform**

This project is a **Chatbot Integration and Testing Platform** designed to help users register, integrate a chatbot into their website, and test its functionality. The platform includes features like user registration, email verification, organization setup, webpage scraping status, chatbot testing, and website integration.

---

## **Features**

1. **User Registration:**
   - Users can register using their name, email, and password.
   - Option to "Continue with Google" for OAuth-based registration.
   - Email verification with a 6-digit code.

2. **Organization Setup:**
   - Users can enter their company name, website URL, and description.

3. **Webpage Scraping Status:**
   - Displays a list of detected webpages (scraped and pending).
   - Users can click on a webpage to view its scraped data.

4. **Chatbot Testing:**
   - Users can test the chatbot on their website.
   - Option to provide feedback if the chatbot is not working as intended.

5. **Website Integration:**
   - Users can integrate the chatbot into their website by copying and pasting a code snippet or sending instructions to their developer.

6. **Integration Success Screen:**
   - Displays a success message with confetti animation.
   - Buttons to explore the admin panel, start talking to the chatbot, and share the success on social media.

7. **Mobile Responsiveness:**
   - The platform is fully responsive and works seamlessly on mobile devices.

---

## **Technologies Used**

- **Frontend:**
  - React.js
  - React Router (for navigation)
  - EmailJS (for sending emails)
  - React Confetti (for success animation)
  - CSS (for styling)

- **Backend:**
  - No backend is used in this project. All functionality is handled on the frontend.

---

## **Setup Instructions**

### **1. Clone the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/chatbot-integration-platform.git
cd chatbot-integration-platform
```

### **2. Install Dependencies**
Install the required dependencies using npm:
```bash
npm install
```

### **3. Set Up EmailJS**
1. Sign up for an account at [EmailJS](https://www.emailjs.com/).
2. Create an email service (e.g., Gmail) and a template for sending verification emails.
3. Replace the following placeholders in the `EmailVerification.jsx` file with your EmailJS credentials:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_USER_ID`

### **4. Run the Project**
Start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`.

---

## **Project Structure**

```
src/
├── components/
│   ├── ChatWindow.jsx
│   ├── Message.jsx
│   ├── InputArea.jsx
│   ├── RegistrationForm.jsx
│   ├── EmailVerification.jsx
│   ├── OrganizationSetup.jsx
│   ├── WebpageScrapingStatus.jsx
│   ├── ChatbotTesting.jsx
│   ├── WebsiteIntegration.jsx
│   ├── IntegrationSuccess.jsx
│   ├── Login.jsx
├── App.js
├── index.js
├── styles/
│   ├── App.css
│   ├── ChatWindow.css
│   ├── Message.css
│   ├── RegistrationForm.css
│   ├── EmailVerification.css
│   ├── OrganizationSetup.css
│   ├── WebpageScrapingStatus.css
│   ├── ChatbotTesting.css
│   ├── WebsiteIntegration.css
│   ├── IntegrationSuccess.css
│   ├── Login.css
```

---

## **Usage**

### **1. Registration**
- Click on the "Register" button.
- Enter your name, email, and password.
- Verify your email using the 6-digit code sent to your inbox.

### **2. Organization Setup**
- Enter your company name, website URL, and description.

### **3. Webpage Scraping Status**
- View the list of detected webpages.
- Click on a webpage to view its scraped data.

### **4. Chatbot Testing**
- Test the chatbot on your website.
- Provide feedback if the chatbot is not working as intended.

### **5. Website Integration**
- Copy and paste the chatbot integration code into your website.
- Alternatively, send instructions to your developer via email.

### **6. Integration Success**
- View the success screen with confetti animation.
- Explore the admin panel, start talking to the chatbot, or share your success on social media.

---

## **Dummy Data**

- **Email:** `user@example.com`
- **Password:** `password`

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions or feedback, please contact:

- **Name** vinod Kumar
- **Email:** vinodkumart22032gmail.com


---

## **Acknowledgments**

- [EmailJS](https://www.emailjs.com/) for email functionality.
- [React Confetti](https://www.npmjs.com/package/react-confetti) for the success animation.

---
