<script setup>
</script>

<template>
<section class="hero">
    <div cl ass="hero-content">
        <h1 class="hero-title">Welcome to Kinema</h1>
        <p class="hero-subtitle">Your favorite platform to explore movies, series, and more.</p>
        <section class="sign-up">
    </section>
    </div>
</section>
</template>

<style scoped>
/* Import Modern Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Apply Modern Font */
.hero {
  font-family: 'Poppins', sans-serif;
}

/* Hero Section Styling */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh; /* Full viewport height */
  text-align: center; /* Center text */
  color: rgb(255, 255, 255);
    background-color: black;
  background-position: center;
}

/* Hero Content Styling */
.hero-content {
  max-width: 600px; /* Restrict content width */
  padding: 30px;
  border-radius: 10px; /* Rounded corners */
}

/* Title Styling */
.hero-title {
  font-size: 3rem; /* Large title */
  font-weight: 600; /* Semi-bold font */
  margin-bottom: 15px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8); /* Text shadow for contrast */
}

/* Subtitle Styling */
.hero-subtitle {
  font-size: 1.5rem; /* Larger subtitle for modern look */
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Sign-Up Buttons */
.sign-up {
  display: flex;
  justify-content: center;
  gap: 20px; /* Spacing between buttons */
}

.sign-up .button {
  padding: 10px 25px; /* Larger buttons */
  font-size: 1.2rem; /* Larger font for modern feel */
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 50px; /* Fully rounded buttons */
  transition: background-color 0.3s ease, transform 0.2s;
  border: none;
}

.register {
  background-color: #1abc9c; /* Green for Register */
}

.register:hover {
  background-color: #16a085; /* Darker green on hover */
  transform: scale(1.05); /* Slight zoom on hover */
}

.login {
  background-color: #3498db; /* Blue for Login */
}

.login:hover {
  background-color: #2980b9; /* Darker blue on hover */
  transform: scale(1.05); /* Slight zoom on hover */
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem; /* Adjust title size */
  }

  .hero-subtitle {
    font-size: 1.2rem; /* Adjust subtitle size */
  }

  .sign-up .button {
    font-size: 1rem; /* Smaller font for buttons */
    padding: 10px 20px;
  }
}

</style>