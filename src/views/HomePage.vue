<template>
  <Navbar />
  <Slides />
  <AboutSection />
  <Downloads />
  <Footer />
</template>

<script>
import Navbar from "../components/home/Navbar";
import Slides from "../components/home/Slides";
import AboutSection from "../components/home/AboutSection";
import Downloads from "../components/home/Downloads";
import Footer from "../components/home/Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    Slides,
    AboutSection,
    Downloads,
    Footer,
  },
};
</script>