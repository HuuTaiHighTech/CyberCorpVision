export function initHeader() {
  // effect chuyển trang
  
  const currentPath = window.location.pathname.split("/").pop() || "home.html";
  const normalizedCurrentPage = currentPath.replace("index.html", "home.html");

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    const href = item.getAttribute("href") || "";
    const normalizedHref = href
      .replace("./", "")
      .replace("/", "")
      .replace("index.html", "home.html");

    if (
      normalizedHref === normalizedCurrentPage ||
      (normalizedCurrentPage === "home.html" && normalizedHref === "home.html")
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });


// Effect croll


  const header = document.querySelector("header");

  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("nav-fixed");
    } else {
      header.classList.remove("nav-fixed");
    }
  });


  // effect slider
  $(document).ready(function(){
    var $banner = $('.hero-carousel');
    var $header = $('.site-header');
    var speedRatio = 0.3; // hệ số tốc độ header so với banner

    $banner.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      smartSpeed: 600, // PHẢI khớp với transition-duration của header (0.6s)
      dots: true,
      nav: false,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
    });

    $('.banner-next').on('click', function() {
      $banner.trigger('next.owl.carousel');
    });

    $('.banner-prev').on('click', function() {
      $banner.trigger('prev.owl.carousel');
    });

    // Khi banner bắt đầu chuyển slide
    $banner.on('translate.owl.carousel', function(event){
      var $stage = $banner.find('.owl-stage');
      var currentTransform = $stage.css('transform'); 
      var matrix = currentTransform.match(/matrix\(([^)]+)\)/);
      
      if (matrix) {
        var translateX = parseFloat(matrix[1].split(',')[4]);
        var headerOffset = translateX * speedRatio;
        $header.css('transform', 'translateX(' + headerOffset + 'px)');
      }
    });

    // Reset nhẹ sau khi chuyển xong (tránh trôi dạt)
    $banner.on('translated.owl.carousel', function(event){
      $header.css('transform', 'translateX(0)');
    });
  });
}