(function(){
 
  /* ------------------------------------------------------------------
     SEMINAR 1
  ------------------------------------------------------------------ */
  var SEMINARS = [
    {
      slug: "networking-cloud-security",
      type: "Seminar",
      title: "Resilient Future 2026",
      date: "September 29-30, 2026",
      venue: "Campus Auditorium",
      organizer: "Partido State University",
      duration: "Full day · 8 hrs",
      pos: "30% 55%",
      certificate: "images/Ressilient-future.png",
      documentation: [
             "images/rf.jpg",
             "images/rf2.jpg",
            "images/rf3.jpg"
      ],
      
      summary: "An insightful exploration of emerging technologies, digital innovation, and the importance of building a resilient and future-ready digital world.",
      narrative: [
        "Resilient Future 2026, held at Partido State University, provided an opportunity to explore the evolving landscape of information technology and the role of innovation in addressing modern challenges. The event highlighted the importance of adapting to technological advancements and developing the knowledge and skills needed to thrive in an increasingly digital world.",
        "Throughout the event, the discussions and presentations emphasized how technology can be used to improve systems, solve real-world problems, and create opportunities for individuals and communities. The insights shared encouraged participants to think critically about the challenges of digital transformation and the importance of embracing continuous learning in the IT field.",
        "I left with a clearer sense that most breaches begin with small oversights rather than sophisticated attacks. It’s a lesson I plan to apply to how I configure and document my own projects.",
      ],
      takeaways: [
        "Technological adaptability and continuous learning are essential in an ever-changing digital landscape.",
        "Innovation and critical thinking help address real-world challenges through technology.",
        "Building a resilient future requires responsible use of technology and a commitment to lifelong learning."
      ]
    },

    /* ------------------------------------------------------------------
     SEMINAR 2
  ------------------------------------------------------------------ */
    {
      slug: "cloud-data-center-tour",
      type: "Tour",
      title: "Digital Administration: office Productivity and Network Security",
      date: "January 22, 2026",
      venue: "Regional Data Center (on-site)",
      organizer: "BSIT Department & host facility",
      duration: "Half day · 4 hrs",
      pos: "70% 40%",
      certificate: "images/security.png",
      documentation: [
             "images/secu1.jpg",
             "images/secu2.jpg",
            "images/secu3.jpg"
      ],
      summary: "A guided walkthrough of enterprise server operations, cooling systems, and uptime practices behind modern cloud platforms.A guided walkthrough of enterprise server operations, cooling systems, and uptime practices behind modern cloud platforms.",
      narrative: [
        "Our group visited a data center to see first-hand what sits behind the cloud services we use every day. Before entering the server floor, the staff explained the access protocols — layered checkpoints, visitor logging, and restricted zones — which immediately set the tone for how seriously uptime and security are treated.",
        "On the floor tour, we saw rows of racks, redundant power systems, and the cooling infrastructure that keeps hardware at stable temperatures. Our guide explained how redundancy is built into every layer — power, network links, and storage — so that a single failure never takes a service offline.",
        "Seeing the physical side of the cloud changed how I think about it. “The cloud” is a real place with real constraints, and designing reliable systems starts with respecting that."
      ],
      takeaways: [
        "Technological adaptability and continuous learning are essential in an ever-changing digital landscape.",
        "Innovation and critical thinking help address real-world challenges through technology.",
        "Building a resilient future requires responsible use of technology and a commitment to lifelong learning.",
      ]
    },

    /* ------------------------------------------------------------------
     SEMINAR 3
  ------------------------------------------------------------------ */
    {
      slug: "ui-ux-design-thinking",
      type: "Seminar",
      title: "Beyond the Tradition: Exploring Modern Oppurtunities, Media and AI Workflows for the next gen Creator",
      date: "November 8, 2025",
      venue: "Computer Laboratory",
      organizer: "BSIT Department",
      duration: "Half day · 4 hrs",
      pos: "50% 25%",
      certificate: "images/Ressilient-future.png",
      documentation: [
        "images/documentation/industry-tour/photo-1.jpg",
        "images/documentation/industry-tour/photo-2.jpg",
        "images/documentation/industry-tour/photo-3.jpg"
      ],
      summary: "A hands-on session on user research, wireframing, and usability testing for student development teams.",
      narrative: [
        "The workshop introduced the five stages of design thinking — empathize, define, ideate, prototype, and test — and had us apply them to a small, real problem within the session itself.",
        "In small groups we interviewed one another, mapped user pain points, and sketched quick wireframes before testing them on classmates. Watching someone struggle with a screen I thought was obvious was a humbling and genuinely useful moment.",
        "I came away convinced that good interfaces come from asking users first and designing second. I plan to bring that into my capstone project by testing early, even with rough prototypes."
      ],
      takeaways: [
        "Start with user research, not assumptions.",
        "Low-fidelity prototypes surface problems cheaply.",
        "Test early and iterate often."
      ]
    },

    /* ------------------------------------------------------------------
     SEMINAR 4
  ------------------------------------------------------------------ */
    {
      slug: "agile-scrum",
      type: "Seminar",
      title: "Cloud to Secure, Understanding Cloud Computing and Cybersecurity",
      date: "October 3, 2025",
      venue: "Online via Zoom",
      organizer: "BSIT Department",
      duration: "3 hrs",
      pos: "15% 60%",
      certificate: "images/Ressilient-future.png",
      documentation: [
        "images/documentation/industry-tour/photo-1.jpg",
        "images/documentation/industry-tour/photo-2.jpg",
        "images/documentation/industry-tour/photo-3.jpg"
      ],
      summary: "An overview of sprint planning, backlog grooming, and how agile teams ship software on a steady cadence.",
      narrative: [
        "The speaker, a practicing software engineer, explained how Scrum structures work into short sprints with defined roles — product owner, scrum master, and development team — and recurring ceremonies such as planning, daily stand-ups, review, and retrospective.",
        "What stood out was how much of Agile is about communication rather than tooling. The session used real examples of backlog grooming and sprint planning to show how teams decide what to build next, and how they adapt when priorities change.",
        "It connected directly to our group projects, where we often struggle with unclear tasks. A simple shared backlog and short check-ins are something I want to try with my team right away."
      ],
      takeaways: [
        "Short sprints make progress visible and priorities adjustable.",
        "Clear roles reduce confusion inside a team.",
        "Retrospectives turn mistakes into process improvements."
      ]
    },

    /* ------------------------------------------------------------------
     SEMINAR 5
  ------------------------------------------------------------------ */
    {
      slug: "it-industry-immersion-tour",
      type: "Tour",
      title: "IT Industry Immersion Tour",
      date: "August 29, 2025",
      venue: "Local Technology Park",
      organizer: "BSIT Department & host companies",
      duration: "Full day",
      pos: "80% 70%",
      certificate: "images/Ressilient-future.png",
      documentation: [
       "images/documentation/industry-tour/photo-1.jpg",
       "images/documentation/industry-tour/photo-2.jpg",
       "images/documentation/industry-tour/photo-3.jpg"
      
      ],
      summary: "An on-site visit to a local technology park, meeting engineering and QA teams at work.",
      narrative: [
        "The immersion tour took us to a local technology park, where several companies opened their offices to our group. We were able to see how software, support, and quality assurance teams share a workspace and coordinate day to day.",
        "At each stop, team members described what a typical project looks like from kickoff to release, and what skills they look for in new hires. Hearing it from people already doing the work made the gap between classroom projects and industry practice much easier to understand.",
        "The visit made the next step feel more concrete. It showed me which skills to keep building — communication and documentation as much as coding — before I graduate."
      ],
      takeaways: [
        "Industry teams rely on communication as much as code.",
        "QA and support are integral parts of the delivery process.",
        "Documentation and teamwork are valued alongside technical skills."
      ]
    }
  ];

  /* ------------------------------------------------------------------ */
  var bySlug = {};
  SEMINARS.forEach(function(s){ bySlug[s.slug] = s; });

  function esc(str){
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function icon(id){ return '<svg><use href="#i-' + id + '"/></svg>'; }
  function tagClass(s){ return s.type === 'Tour' ? ' tour' : ''; }

  /* ---------- Outputs grid ---------- */
  function renderOutputs(){
    var grid = document.getElementById('output-grid');
    grid.innerHTML = SEMINARS.map(function(s){
      return '<a class="output-card" href="#outputs/' + s.slug + '">' +
        '<div class="output-card-top">' +
          '<span class="tag-pill' + tagClass(s) + '">' + icon('tag') + esc(s.type) + '</span>' +
          '<svg class="stamp-mini"><use href="#i-stamp"/></svg>' +
        '</div>' +
        '<h4>' + esc(s.title) + '</h4>' +
        '<span class="odate">' + icon('calendar') + esc(s.date) + '</span>' +
        '<p>' + esc(s.summary) + '</p>' +
        '<span class="card-cta">Read narrative ' + icon('arrow') + '</span>' +
      '</a>';
    }).join('');
  }

  /* ---------- Seminar detail page ---------- */
  function renderSeminar(s){
    var i = SEMINARS.indexOf(s);
    var prev = SEMINARS[i - 1], next = SEMINARS[i + 1];

    var paragraphs = s.narrative.map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('');
    var takeaways = s.takeaways.map(function(t){ return '<li>' + icon('stamp') + esc(t) + '</li>'; }).join('');

    var pager = '<nav class="pager" aria-label="More seminars">' +
      (prev ? '<a class="pager-link prev" href="#outputs/' + prev.slug + '"><span class="t1">' + icon('arrow') + 'Previous</span><span class="t2">' + esc(prev.title) + '</span></a>' : '') +
      (next ? '<a class="pager-link next" href="#outputs/' + next.slug + '"><span class="t1">Next' + icon('arrow') + '</span><span class="t2">' + esc(next.title) + '</span></a>' : '') +
    '</nav>';

    document.getElementById('seminar-root').innerHTML =
      '<div class="hero-band bg-forest" style="background-position:' + esc(s.pos) + ';">' +
        '<div class="wrap">' +
          '<a href="#outputs" class="back-link rise">' + icon('back') + ' Outputs</a>' +
          '<p class="eyebrow rise" style="color:var(--gold-light);">' + esc(s.type) + ' &middot; Narrative Report</p>' +
          '<h1 class="seminar-title rise">' + esc(s.title) + '</h1>' +
          '<div class="meta-row rise">' +
            '<span class="meta-chip">' + icon('calendar') + esc(s.date) + '</span>' +
            '<span class="meta-chip">' + icon('pin') + esc(s.venue) + '</span>' +
            '<span class="meta-chip">' + icon('tag') + esc(s.duration) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="paper"><div class="wrap paper-pad">' +
        '<div class="split section-block">' +
          '<div class="narrative-body">' +
            '<h2>' + icon('report') + 'Narrative Report</h2>' + paragraphs +
          '</div>' +
          '<div class="aside-stack">' +
            '<div class="info-card">' +
              '<h3 class="mini-label">' + icon('tag') + esc(s.type) + ' details</h3>' +
              '<dl class="facts">' +
                '<div><dt>Date</dt><dd>' + esc(s.date) + '</dd></div>' +
                '<div><dt>Type</dt><dd>' + esc(s.type) + '</dd></div>' +
                '<div><dt>Venue</dt><dd>' + esc(s.venue) + '</dd></div>' +
                '<div><dt>Organizer</dt><dd>' + esc(s.organizer) + '</dd></div>' +
                '<div><dt>Duration</dt><dd>' + esc(s.duration) + '</dd></div>' +
              '</dl>' +
            '</div>' +
            '<div class="info-card">' +
              '<h3 class="mini-label">' + icon('stamp') + 'Key takeaways</h3>' +
              '<ul class="takeaways">' + takeaways + '</ul>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="split section-block">' +
    '<div class="doc-heading panel-heading">' +
  '<h2>Documentation</h2>' +
  '<span class="count">' +
    (s.documentation && s.documentation.length
      ? s.documentation.length + ' photos'
      : 'No photos') +
  '</span>' +
'</div>' +

'<div class="doc-mosaic">' +

  (s.documentation && s.documentation.length
    ? s.documentation.map(function(photo, index) {
        return '<a class="doc-photo" href="' + esc(photo) +
          '" target="_blank" rel="noopener noreferrer">' +
          '<img src="' + esc(photo) +
          '" alt="' + esc(s.title) +
          ' documentation photo ' + (index + 1) + '">' +
          '</a>';
      }).join('')
    : '<div class="doc-empty">No documentation photos added yet.</div>') +

'</div>' +
          '</div>' +
          '<div>' +
            '<div>' +
  '<div class="doc-heading panel-heading">' +
    '<h2>Certificate</h2>' +
    '<span class="count">' + (s.certificate ? 'Available' : 'Placeholder') + '</span>' +
  '</div>' +
  '<div class="cert-frame">' +
    (s.certificate
      ? '<a href="' + esc(s.certificate) + '" target="_blank" rel="noopener noreferrer" class="certificate-link">' +
          '<img src="' + esc(s.certificate) + '" alt="Certificate for ' + esc(s.title) + '" class="certificate-image">' +
        '</a>'
      : icon('stamp') +
        '<span class="cert-title">Certificate of Attendance</span>' +
        '<span class="cert-hint">Add certificate image</span>') +
  '</div>' +
'</div>' +
          '</div>' +
        '</div>' +
        pager +
      '</div></div>';
  }

  /* ---------- Router ---------- */
  var pages = document.querySelectorAll('.page');
  var navItems = document.querySelectorAll('.nav-item');
  var KEYS = ['home','about','coordination','outputs'];
  var titles = {
    home: 'Seminars & Tours — George A. Villareal',
    about: 'About — Seminars & Tours',
    coordination: 'Group Seminar Coordination — Seminars & Tours',
    outputs: 'Outputs — Seminars & Tours'
  };

  function route(){
    var raw = (window.location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/');
    var key = parts[0] || 'home';

    if (key === 'narrative') {            // legacy link: narrative now lives on Coordination
      key = 'coordination';
      history.replaceState(null, '', '#coordination');
    }
    if (KEYS.indexOf(key) === -1) key = 'home';

    var pageId = key, title = titles[key];
    if (key === 'outputs' && parts[1] && bySlug[parts[1]]) {
      var s = bySlug[parts[1]];
      renderSeminar(s);
      pageId = 'seminar';
      title = s.title + ' — Seminars & Tours';
    }

    pages.forEach(function(p){ p.classList.toggle('active', p.id === pageId); });
    navItems.forEach(function(n){
      var isActive = n.dataset.page === key;
      n.classList.toggle('active', isActive);
      if (isActive) n.setAttribute('aria-current', 'page');
      else n.removeAttribute('aria-current');
    });

    document.title = title;
    window.scrollTo(0, 0);
  }

  renderOutputs();
  window.addEventListener('hashchange', route);
  route();
})();
