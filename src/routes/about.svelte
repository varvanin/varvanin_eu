<script>
  import TransWrap from '../components/TransWrap.svelte';
</script>


<svelte:head>
  <title>About</title>
</svelte:head>
<TransWrap>
<!-- About Section -->
<section class="page about" data-simplebar>

  <div class="container">

    <!-- Section Title -->
    <div class="header-page pt-90">
      <h2>About Me</h2>
      <i class="fab fa-gripfire" />
    </div>

    <div class="row">

      <!-- Information Block -->
      <div class="col-lg-12 col-sm-12">

        <div class="box info mt-100 mb-100 pt-30">

          <div class="row">

            <!-- Photo -->
            <div class="col-lg-3 col-sm-12">
              <div class="photo">
                <img src="img/profile.png" alt="" />
              </div>
            </div>

            <!-- Info -->
            <div class="col-lg-6 col-sm-9">

              <h5>Eugeniusz Varvanin</h5>

              <div class="loc">
                <i class="fas fa-map-marked-alt" />
                Słubice, Poland
              </div>
              <p>
		  Witaj, mam na imię Eugeniusz. Zajmuję się tworzeniem profesjonalnych stron internetowych w
          zaje...(dobrych) cenach. Duży nacisk kłade na funkcjonalność, przyjazną nawigację oraz zachowanie
          wszelkich dzisiejszych standardów WEB. Tworząc strony www stosuje najnowsze technologie i
          oprogramowania, a wszystkie wykonane przeze mnie strony internetowe są responsywne i zoptymalizowane
          do pozycjonowania w wyszukiwarkach internetowych.
              </p>
            </div>

            <!-- Icon Info -->
            <div class="col-lg-3 col-sm-12">

              <div class="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <polygon
                      fill="#000000"
                      opacity="0.3"
                      points="5 3 19 3 23 8 1 8" />
                    <polygon fill="#000000" points="23 8 12 20 1 8" />
                  </g>
                </svg>
                <div class="desc-icon">
                  <h6>8 Years Job</h6>
                  <p>Experience</p>
                </div>
              </div>

              <!-- Icon Info -->
              <div class="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <circle
                      fill="#000000"
                      opacity="0.3"
                      cx="15"
                      cy="17"
                      r="5" />
                    <circle fill="#000000" opacity="0.3" cx="9" cy="17" r="5" />
                    <circle fill="#000000" opacity="0.3" cx="7" cy="11" r="5" />
                    <circle
                      fill="#000000"
                      opacity="0.3"
                      cx="17"
                      cy="11"
                      r="5" />
                    <circle fill="#000000" opacity="0.3" cx="12" cy="7" r="5" />
                  </g>
                </svg>

                <div class="desc-icon">
                  <h6>500+ Projects</h6>
                  <p>Completed</p>
                </div>
              </div>

              <!-- Icon Info -->
              <div class="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24">
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M3,12 C3,12 5.45454545,6 12,6 C16.9090909,6 21,12 21,12
                      C21,12 16.9090909,18 12,18 C5.45454545,18 3,12 3,12 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3" />
                    <path
                      d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458
                      10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12
                      C15,13.6568542 13.6568542,15 12,15 Z"
                      fill="#000000"
                      opacity="0.3" />
                  </g>
                </svg>
                <div class="desc-icon">
                  <h6>Freelance</h6>
                  <p>Available</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interests Start -->
    <div class="row mb-100">

      <div class="col-lg-12 col-sm-12">

        <div class="box">

          <!-- Title Box -->
          <h4>My Interests</h4>

          <div class="row">

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-music" />
                <div class="desc-inter">
                  <h6>Music</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-route" />
                <div class="desc-inter">
                  <h6>Travelling</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="far fa-image" />
                <div class="desc-inter">
                  <h6>Photos</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-film" />
                <div class="desc-inter">
                  <h6>Movies</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-space-shuttle" />
                <div class="desc-inter">
                  <h6>Space</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-book" />
                <div class="desc-inter">
                  <h6>Books</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-gamepad" />
                <div class="desc-inter">
                  <h6>Video games</h6>
                </div>
              </div>
            </div>

            <!-- Interests Item -->
            <div class="col-lg-3 col-sm-6">
              <div class="inter-icon">
                <i class="fas fa-tree" />
                <div class="desc-inter">
                  <h6>Forest</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</TransWrap>