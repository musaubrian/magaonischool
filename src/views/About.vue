<template>
  <Navbar />
  <SchoolHist />
  <Staff />
  <Footer />
</template>

<script>
import Navbar from "../components/home/Navbar";
import SchoolHist from "../components/about/SchoolHist";
import Staff from "../components/about/Staff";
import Footer from "../components/home/Footer";
export default {
  name: "About",
  components: {
    Navbar,
    SchoolHist,
    Staff,
    Footer,
  },
};
</script>

<style>

</style>