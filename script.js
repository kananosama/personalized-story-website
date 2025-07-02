document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // You can also get other form data here
  const name = document.getElementById("childName").value;
  const theme = document.getElementById("theme").value;

  // Choose PayPal link based on theme or other criteria
  // For now, we'll use number of stories to decide

  let paypalLink = "";

  // Example logic: if user picks certain theme, you can adjust — here we keep it simple and ask manually
  const numStories = prompt(
    "How many stories would you like? Type 1, 5, or 15:"
  );

  if (numStories === "1") {
    paypalLink = "https://www.paypal.com/ncp/payment/HH9SJZTCG9PLY";
  } else if (numStories === "5") {
    paypalLink = "https://www.paypal.com/ncp/payment/3TBPY3N73CSSS";
  } else if (numStories === "15") {
    paypalLink = "https://www.paypal.com/ncp/payment/5A98H4Z2AKEEY";
  } else {
    alert("Invalid selection. Please refresh and try again!");
    return;
  }

  // Redirect to PayPal
  window.location.href = paypalLink;
});
