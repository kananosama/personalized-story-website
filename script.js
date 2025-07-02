document.getElementById("storyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("childName").value;
  const theme = document.getElementById("theme").value;
  const numStories = document.getElementById("numStories").value;

  let paypalLink = "";

  if (numStories === "1") {
    paypalLink = "https://www.paypal.com/ncp/payment/HH9SJZTCG9PLY";
  } else if (numStories === "5") {
    paypalLink = "https://www.paypal.com/ncp/payment/3TBPY3N73CSSS";
  } else if (numStories === "15") {
    paypalLink = "https://www.paypal.com/ncp/payment/5A98H4Z2AKEEY";
  } else {
    alert("Invalid selection. Please try again!");
    return;
  }

  // Redirect to PayPal
  window.location.href = paypalLink;
});
