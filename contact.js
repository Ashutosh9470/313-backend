// ================= CONTACT FORM =================
const form = document.querySelector("#contactForm");
const submitBtn = document.querySelector("#submitBtn");
const msg = document.querySelector("#formMsg");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const company = document.querySelector("#company").value.trim();
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
      msg.textContent = "Please fill all required fields.";
      msg.style.color = "red";
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "red";
      return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    msg.textContent = "";

    try {
      // Simulate API call with timeout
      // You can replace this with actual Axios API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      /* 
      // Example Axios API call:
      const response = await axios.post('https://your-api.com/contact', {
        name,
        email,
        company,
        subject,
        message
      });
      
      if (response.data.success) {
        msg.textContent = "Message sent successfully! 🚀";
        msg.style.color = "green";
        form.reset();
      }
      */

      // Success message
      msg.textContent = "Message sent successfully! 🚀 We'll get back to you within 24 hours.";
      msg.style.color = "green";
      form.reset();

    } catch (error) {
      console.error("Error sending message:", error);
      msg.textContent = "Failed to send message. Please try again.";
      msg.style.color = "red";
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
}

// Clear error message on input
const inputs = document.querySelectorAll("#contactForm input, #contactForm select, #contactForm textarea");
inputs.forEach(input => {
  input.addEventListener("input", () => {
    if (msg.textContent) {
      msg.textContent = "";
    }
  });
});