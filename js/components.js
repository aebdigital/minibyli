class Header {
  constructor() {
    this.render();
  }

  render() {
    const pathname = window.location.pathname;
    const isInSubpages = pathname.includes('/subpages/');
    const isInProducty = pathname.includes('/subpages/produkty/');
    
    // Determine path depth for going back to root
    let pathPrefix = '';
    let subpagePrefix = '';
    
    if (isInProducty) {
      // Two levels deep: subpages/produkty/
      pathPrefix = '../../';
      subpagePrefix = '../';
    } else if (isInSubpages) {
      // One level deep: subpages/
      pathPrefix = '../';
      subpagePrefix = '';
    } else {
      // Root level
      pathPrefix = '';
      subpagePrefix = 'subpages/';
    }
    
    const header = document.createElement('header');
    header.innerHTML = `
      <nav class="main-nav">
        <div class="nav-container">
          <div class="logo-section">
            <a href="${pathPrefix}index.html" class="logo-link">
              <img src="${pathPrefix}logo.svg" alt="MiniBýli" class="logo" />
            </a>
            <div class="social-icons">
              <a href="https://www.facebook.com/minibyli" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/minibyli" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div class="nav-links">
            <a href="${pathPrefix}index.html">Domov</a>
            <a href="${subpagePrefix}about.html">Kto sme</a>
            <a href="${subpagePrefix}produkty/minihrasok.html">Produkty</a>
            <a href="${subpagePrefix}blog.html">Blog</a>
            <a href="${subpagePrefix}kontakt.html">Kontakt</a>
          </div>
        </div>
      </nav>
    `;
    return header;
  }
}

class Footer {
  constructor() {
    this.render();
  }

  render() {
    const pathname = window.location.pathname;
    const isInSubpages = pathname.includes('/subpages/');
    const isInProducty = pathname.includes('/subpages/produkty/');
    
    // Determine path depth for going back to root
    let pathPrefix = '';
    let subpagePrefix = '';
    
    if (isInProducty) {
      // Two levels deep: subpages/produkty/
      pathPrefix = '../../';
      subpagePrefix = '../';
    } else if (isInSubpages) {
      // One level deep: subpages/
      pathPrefix = '../';
      subpagePrefix = '';
    } else {
      // Root level
      pathPrefix = '';
      subpagePrefix = 'subpages/';
    }
    
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-content">
        <!-- CTA Section -->
        <div class="footer-cta">
          <h2>Zaujímajú vás naše microgreens?</h2>
          <a href="${subpagePrefix}kontakt.html" class="cta-footer-btn">Kontaktujte nás</a>
        </div>
        
        <!-- Main Footer Content -->
        <div class="footer-main">
          <div class="footer-column">
            <a href="${pathPrefix}index.html" class="footer-logo-link">
              <img src="${pathPrefix}logo.svg" alt="MiniBýli" class="footer-logo" />
            </a>
            <div class="footer-contact">
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <p>+421 944 670 003</p>
                  <p>+421 903 148 962</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <p>info@minibyli.sk</p>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>Kynceľová, Banská Bystrica 974 01</p>
              </div>
            </div>
          </div>
          
          <div class="footer-column">
            <h4>Navigácia</h4>
            <div class="footer-nav">
              <a href="${pathPrefix}index.html">Domov</a>
              <a href="${subpagePrefix}about.html">Kto sme</a>
              <a href="${subpagePrefix}produkty/minihrasok.html">Produkty</a>
              <a href="${subpagePrefix}blog.html">Blog</a>
              <a href="${subpagePrefix}kontakt.html">Kontakt</a>
            </div>
          </div>
          
          <div class="footer-column">
            <h4>Legal</h4>
            <div class="footer-legal">
              <a href="#" class="gdpr-link">Ochrana osobných údajov</a>
            </div>
          </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p class="copyright">&copy; 2024 MiniBýli</p>
          <p class="credits">Tvorba stránky <a href="#" target="_blank">AEB Digital</a></p>
        </div>
      </div>
      
      <!-- GDPR Modal -->
      <div id="gdpr-modal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Ochrana osobných údajov</h2>
          <div class="modal-body">
            <h3>Cookies</h3>
            <p>Naša webová stránka používa cookies na zlepšenie vášho používateľského zážitku. Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači.</p>
            
            <h3>Používame tieto typy cookies:</h3>
            <ul>
              <li><strong>Nevyhnutné cookies:</strong> Potrebné pre základné fungovanie stránky</li>
              <li><strong>Analytické cookies:</strong> Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku</li>
              <li><strong>Funkčné cookies:</strong> Umožňujú pokročilé funkcie a personalizáciu</li>
            </ul>
            
            <h3>Ochrana údajov</h3>
            <p>Vaše osobné údaje spracúvame v súlade s GDPR. Údaje používame len na účely, pre ktoré ste nám ich poskytli, a nevydávame ich tretím stranám bez vášho súhlasu.</p>
            
            <h3>Vaše práva</h3>
            <p>Máte právo na prístup k svojim údajom, ich opravu, vymazanie alebo prenosnosť. Pre uplatnenie svojich práv nás kontaktujte na info@minibyli.sk</p>
          </div>
        </div>
      </div>
    `;
    return footer;
  }
}

function initializeComponents() {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (headerContainer) {
    const header = new Header();
    headerContainer.appendChild(header.render());
    
    // Initialize scroll behavior
    initializeScrollBehavior();
    
    // Set active nav link
    setActiveNavLink();
  }
  
  if (footerContainer) {
    const footer = new Footer();
    footerContainer.appendChild(footer.render());
    
    // Initialize GDPR modal
    const gdprLink = document.querySelector('.gdpr-link');
    const gdprModal = document.getElementById('gdpr-modal');
    const closeBtn = document.querySelector('.close');
    
    if (gdprLink && gdprModal && closeBtn) {
      gdprLink.addEventListener('click', (e) => {
        e.preventDefault();
        gdprModal.style.display = 'block';
      });
      
      closeBtn.addEventListener('click', () => {
        gdprModal.style.display = 'none';
      });
      
      window.addEventListener('click', (e) => {
        if (e.target === gdprModal) {
          gdprModal.style.display = 'none';
        }
      });
    }
  }
}

function initializeScrollBehavior() {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  
  function handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
      logo.classList.remove('logo-white');
      logo.classList.add('logo-normal');
    } else {
      header.classList.remove('scrolled');
      logo.classList.remove('logo-normal');
      logo.classList.add('logo-white');
    }
  }
  
  // Initial state
  logo.classList.add('logo-white');
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial state
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

class SocialFeedSection {
  constructor() {
    this.render();
  }

  render() {
    // Show on all pages including homepage

    const section = document.createElement('section');
    section.className = 'social-feeds-section';
    section.innerHTML = `
      <div class="container">
        <h2>Sledujte nás na sociálnych sieťach</h2>
        <div class="social-feeds-grid">
          <!-- Facebook Feed -->
          <div class="social-feed facebook-feed">
            <h3><i class="fab fa-facebook"></i> Facebook</h3>
            <div class="feed-embed">
              <div class="fb-page" 
                   data-href="https://www.facebook.com/minibyli" 
                   data-tabs="timeline" 
                   data-width="500" 
                   data-height="600" 
                   data-small-header="false" 
                   data-adapt-container-width="true" 
                   data-hide-cover="false" 
                   data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/minibyli" class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/minibyli">MiniBýli</a>
                </blockquote>
              </div>
            </div>
          </div>
          
          <!-- Instagram Feed -->
          <div class="social-feed instagram-feed">
            <h3><i class="fab fa-instagram"></i> Instagram</h3>
            <div class="feed-embed">
              <blockquote class="instagram-media" 
                          data-instgrm-permalink="https://www.instagram.com/minibyli/"
                          data-instgrm-version="14"
                          style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:350px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                <div style="padding:16px;">
                  <a href="https://www.instagram.com/minibyli/" 
                     style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" 
                     target="_blank">
                    <div style="display: flex; flex-direction: row; align-items: center;">
                      <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                      <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                        <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                        <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                      </div>
                    </div>
                    <div style="padding: 19% 0;"></div>
                    <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                      <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div style="padding-top: 8px;">
                      <div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this profile on Instagram</div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    `;
    
    return section;
  }
}

class RecipeSection {
  constructor() {
    this.recipes = [
      '3.jpg',
      '4.jpg',
      '481076693_1126333202838521_6643369612755140736_n.jpg',
      '481905585_1116881560450352_2915411544757343969_n.jpg',
      '482022353_1118020230336485_5616885488107351399_n.jpg',
      '482052899_1120531610085347_7019267302071338002_n.jpg',
      '483514075_1122162903255551_3446669742445417551_n.jpg',
      '483602528_1122162906588884_962842781059073195_n.jpg',
      '483932686_1122162909922217_3857743875409560748_n.jpg',
      '484411440_1125105959627912_4176181175314487956_n.jpg',
      '486852771_1137321488406359_3396249456502558923_n.jpg',
      '487307537_1137337491738092_4229080294252196014_n.jpg',
      '495652891_1174140411391133_8489505385639321392_n.jpg',
      'Jedlo3.jpg',
      'Jedlo5.jpg',
      'jedlo.jpg',
      'jedlo2.jpg',
      'jedlo4.jpg',
      'jedlo6.jpg',
      'jedlo7.jpg'
    ];
  }

  render() {
    const pathname = window.location.pathname;
    const isInSubpages = pathname.includes('/subpages/');
    const isInProducty = pathname.includes('/subpages/produkty/');
    
    // Determine path depth for images
    let pathPrefix = '';
    if (isInProducty) {
      pathPrefix = '../../';
    } else if (isInSubpages) {
      pathPrefix = '../';
    }

    const section = document.createElement('section');
    section.className = 'recipes-section';
    
    const recipeItems = this.recipes.map((recipe, index) => {
      return `
        <div class="recipe-item" data-recipe="${index}">
          <img src="${pathPrefix}sources/jedllo/${recipe}" alt="Recepty s microgreens ${index + 1}" loading="lazy">
          <div class="recipe-overlay">
            <i class="fas fa-eye"></i>
          </div>
        </div>
      `;
    }).join('');

    section.innerHTML = `
      <div class="recipes-container">
        <div class="recipes-header">
          <h2>Recepty s mikrozeleninou</h2>
          <p>Inšpirujte sa našimi chutými receptami a objavte nové možnosti použitia microgreens</p>
        </div>
        <div class="recipes-grid">
          ${recipeItems}
        </div>
      </div>
    `;
    
    return section;
  }
}

class ProductSidebar {
  constructor() {
    this.products = [
      { name: "Minihrášok", filename: "minihrasok.html", image: "minihrasok (1).jpg" },
      { name: "Minislnečnica", filename: "minislnecnica.html", image: "minislnecnica (1).jpg" },
      { name: "Miniredkovka", filename: "miniredkovka.html", image: "miniredkovka (1).jpg" },
      { name: "Minihorčica", filename: "minihorcica.html", image: "minihorcica (1).jpg" },
      { name: "Minibrokolica", filename: "minibrokolica.html", image: "minibrokolica (1).jpg" },
      { name: "Minikaleráb", filename: "minikalerab.html", image: "minikalerab (1).jpg" },
      { name: "Minikópor", filename: "minikopor.html", image: "minikopor (1).jpg" },
      { name: "Minikoriander", filename: "minikoriander.html", image: "minikoriander (1).jpg" }
    ];
  }

  render() {
    const currentPage = window.location.pathname.split('/').pop() || '';
    
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    
    const navItems = this.products.map(product => {
      const isActive = currentPage === product.filename;
      return `
        <li${isActive ? ' class="active"' : ''}>
          <a href="${product.filename}" data-product="${product.filename.replace('.html', '')}">
            <img src="../../sources/main_prod/${product.image}" alt="${product.name}" />
            <span>${product.name}</span>
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      `;
    }).join('');

    sidebar.innerHTML = `
      <nav class="product-nav">
        <ul>
          ${navItems}
        </ul>
      </nav>
    `;
    
    return sidebar;
  }
}

function initializeProductSidebar() {
  const sidebarContainer = document.getElementById('sidebar-container');
  
  if (sidebarContainer) {
    const sidebar = new ProductSidebar();
    sidebarContainer.appendChild(sidebar.render());
  }
}

function initializeSocialFeeds() {
  // Add social feeds section before footer
  const footerContainer = document.getElementById('footer-container');
  
  if (footerContainer) {
    const socialFeedSection = new SocialFeedSection();
    const socialSection = socialFeedSection.render();
    
    footerContainer.parentNode.insertBefore(socialSection, footerContainer);
    
    // Load Facebook SDK
    if (!window.FB) {
      const fbScript = document.createElement('script');
      fbScript.async = true;
      fbScript.defer = true;
      fbScript.crossOrigin = 'anonymous';
      fbScript.src = 'https://connect.facebook.net/sk_SK/sdk.js#xfbml=1&version=v18.0';
      document.head.appendChild(fbScript);
    }
    
    // Load Instagram embed script
    if (!document.querySelector('script[src*="instagram.com/embed"]')) {
      const igScript = document.createElement('script');
      igScript.async = true;
      igScript.src = 'https://www.instagram.com/embed.js';
      document.head.appendChild(igScript);
    }
  }
}

function initializeRecipes() {
  // Add recipes section before social feeds
  const footerContainer = document.getElementById('footer-container');
  
  if (footerContainer) {
    const recipeSection = new RecipeSection();
    const recipeSectionElement = recipeSection.render();
    
    footerContainer.parentNode.insertBefore(recipeSectionElement, footerContainer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initializeComponents();
  initializeProductSidebar();
  initializeRecipes();
  initializeSocialFeeds();
  
  // Refresh ScrollTrigger after components are loaded
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
});