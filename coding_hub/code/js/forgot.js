let userContact = "";
    let generatedOTP = "";

    function generateMockOTP() {
      return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
    }

    function sendOTP() {
      const contact = document.getElementById("contact").value.trim();
      const msg = document.getElementById("step1-msg");
      msg.textContent = "";

      if (!contact) {
        msg.textContent = "Please enter your email or phone.";
        return;
      }

      // Simulate OTP generation
      generatedOTP = generateMockOTP();
      userContact = contact;

      alert(" OTP  " + generatedOTP); 

      document.getElementById("step1").classList.add("hidden");
      document.getElementById("step2").classList.remove("hidden");
    }

    function verifyOTP() {
      const otp = document.getElementById("otp").value.trim();
      const msg = document.getElementById("step2-msg");
      msg.textContent = "";

      if (!otp) {
        msg.textContent = "Enter the OTP.";
        return;
      }

      if (otp === generatedOTP) {
        document.getElementById("step2").classList.add("hidden");
        document.getElementById("step3").classList.remove("hidden");
      } else {
        msg.textContent = "Invalid OTP.";
      }
    }

    function resetPassword() {
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const msg = document.getElementById("step3-msg");
      msg.textContent = "";

      if (!newPassword || !confirmPassword) {
        msg.textContent = "Both password fields are required.";
        return;
      }

      if (newPassword !== confirmPassword) {
        msg.textContent = "Passwords do not match.";
        return;
      }

      // For demo only: Show success message (you can integrate with backend later)
      alert("✅ Password reset successful!\nNow you can log in with your new password.");
      window.location.href = "login.html"; // Replace with your actual login page
    }
