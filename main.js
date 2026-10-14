let addServiceBtn = document.getElementById("add-service-btn");

addServiceBtn.addEventListener("click", function () {
  let servicesSection = document.querySelector(".services-grid");

  let newService = document.createElement("div");

  newService.classList.add("service-card", "dark", "light");

  newService.innerHTML = `
        <div class="service-content">

            <h3>
                <span class="light-1">Analytics and</span>
                <span class="light-1">Tracking</span>
            </h3>

            <a href="#">
                <span class="service-arrow">
                    <figure>
                        <img src="assets/images/arrow.png" alt="Arrow">
                    </figure>
                </span>

                <span>
                    Learn more
                </span>
            </a>

        </div>

        <div class="service-img">

            <figure>
                <img src="assets/images/analytics.png" alt="Analytics and Tracking">
            </figure>

        </div>
    `;

  servicesSection.appendChild(newService);
});
