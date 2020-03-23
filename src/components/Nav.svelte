
<style>
.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 63px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #608061;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>


<svg class="bar" viewBox="0 0 100 100" width="70">
	<path class="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" /><path class="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" /><path class="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" /></svg>

<!-- Logo -->
<div class="logo">
		<label class="theme-switch" for="checkbox">
			<input type="checkbox" id="checkbox" />
			<div class="slider round"></div>
	</label>
</div>


<nav class="navigation">
  <ul>
	  <li id="home">
		  <a href="/">główna</a>
	  </li>
	  <li id="about">
		  <a href="/">o mnie</a>
	  </li>
	  <li id="portfolio">
		  <a href="/">projekty</a>
	  </li>
	  <li id="contact">
		  <a href="/">kontakt</a>
	  </li>
  </ul>
</nav>