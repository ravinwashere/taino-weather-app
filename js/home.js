class homeLoader {
    constructor(site) {
        this.title = "Taino Weather App";
        this.meta_desc = "Awosome taino javascript";
        this.starthtml = `
        <div class="app-wrap">
          <header>
              <input type="text" autocomplete="off" class="search-box" placeholder="Search for a city...">
          </header>
          <main>
              <section class="location">
                  <div class="city">Jaipur, IN</div>
                  <div class="date">Monday 27 january 2020</div>
              </section>
              <div class="current">
                  <div class="temp">15 <span>°c</span></div>
                  <div class="weather">Sunny</div>
                  <div class="hi-low">13°c / 16°c</div>
              </div>
          </main>
        </div>
      
        `;

        this.loaddata();
        this.styling=
        `
        

        `;
    }

    async loaddata(){
      await site.loadScript('./js/controllers/main.js')
     
      
    }
}