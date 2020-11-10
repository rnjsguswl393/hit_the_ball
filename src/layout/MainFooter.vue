<template>
  <footer 
    class="footer fixed-bottom" 
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
        
    <div style="text-align:center; ">
      <nav>
        <ul>
          <li>
            <a>
            <i class="fas fa-home" style="color: #ff8001"></i>
            </a>
          </li>
          <li>
            <a >
              <!-- <i class="far fa-map-marked-alt" style="color: #fc4053"></i> -->
            <i class="fas fa-map-marker-alt"></i>
            </a>
          </li>
          <li>
            <a >
              <i class="fas fa-list" style="color: #fc4053"></i>
            </a>
          </li>
          <li>
            <a >
              <i class="fas fa-chevron-left" style="color: #2b53a4"></i>
            </a>
          </li>
        </ul>
      </nav>
      <!-- <div class="copyright">
        &copy; {{ year }}, Designed by
        <a href="https:///www.invisionapp.com" target="_blank" rel="noopener"
          >Invision</a
        >. Coded by
        <a href="https://binarcode.com" target="_blank" rel="noopener"
          >BinarCode</a
        >
        and
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >Creative Tim</a
        >.
      </div> -->
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
