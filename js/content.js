/**
 * Content Module
 * Renders all portfolio sections dynamically
 */

const content = (function() {
  function renderHero() {
    const hero = document.getElementById('pf-home');
    hero.innerHTML = `
      <canvas id="pfCanvas"></canvas>
      <div class="pf-hero-overlay"></div>
      <div class="pf-hero-content">
        <p class="pf-hero-name" data-i18n="hero_name">Layan Bin Dayel</p>
        <h1 class="pf-hero-title pf-grad-text" data-i18n="hero_title">AI Product Manager &amp; Data Scientist</h1>
        <p class="pf-hero-sub" data-i18n="hero_sub">Computer Information Systems student specializing in AI &amp; Data Science at Prince Sultan University — building AI-powered products, leading a data science community, and solving real-world challenges.</p>
        <a class="pf-btn pf-btn-ghost" href="https://www.linkedin.com/in/layan-bindayel/" target="_blank" rel="noopener noreferrer">
          <i class="ti ti-brand-linkedin" aria-hidden="true"></i> <span data-i18n="hero_cta">Message on LinkedIn</span>
        </a>
      </div>
    `;
  }

  function renderAbout() {
    const about = document.getElementById('pf-about');
    about.innerHTML = `
      <div class="pf-section-head">
        <p class="pf-eyebrow pf-grad-text" data-i18n="about_eyebrow">About me</p>
        <h2 class="pf-h2" data-i18n="about_heading">Layan Hesham Bin Dayel</h2>
      </div>
      <div class="pf-bio" style="max-width:600px;margin:0 auto">
        <p data-i18n-html="about_p1">I'm <b>Layan Hesham Bin Dayel</b>, a <b>Computer Information Systems</b> student on the <b>AI &amp; Data Science track</b> at <b>Prince Sultan University</b>, currently maintaining a 3.87/4.0 GPA.</p>
        <p data-i18n-html="about_p2">As an <b>AI Product Management Associate</b> at <b>HKB Tech</b>, I collaborate with cross-functional teams to build AI-powered products across healthcare, education, and e-commerce sectors.</p>
        <p data-i18n-html="about_p3">As <b>President of the Data Science Club</b> at PSU, I lead the <b>AI in Robotics Bootcamp</b> and foster a community of data science enthusiasts through workshops, events, and competitions.</p>
        <p data-i18n-html="about_p4">Through programs like <b>Building LLMs from Scratch</b> (SDAIA) and <b>Building Chatbots from Scratch</b> (RAG), plus academic projects spanning Java, SQL, and systems design, I've developed a strong foundation in both theory and practice.</p>
      </div>
    `;
  }

  function renderResume() {
    const resume = document.getElementById('pf-resume');
    resume.innerHTML = `
      <div class="pf-card pf-contact-card" style="max-width:560px;margin:0 auto">
        <p class="pf-eyebrow pf-grad-text" style="text-align:center" data-i18n="resume_eyebrow">Resume</p>
        <h2 class="pf-h2" style="margin-bottom:10px" data-i18n="resume_heading">Resume / CV</h2>
        <p style="font-size:14px;color:var(--text-2);margin-bottom:20px" data-i18n="resume_sub">View or download my latest resume.</p>
        <div class="pf-contact-row">
          <a class="pf-btn pf-btn-ghost" href="https://drive.google.com/file/d/1zPfI-DPzQQg6WT2tPkRyyt8D21RTUnDt/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="ti ti-eye" aria-hidden="true"></i> <span data-i18n="resume_view">View</span></a>
          <a class="pf-btn pf-btn-grad" href="https://drive.google.com/uc?export=download&id=1zPfI-DPzQQg6WT2tPkRyyt8D21RTUnDt" target="_blank" rel="noopener noreferrer"><i class="ti ti-download" aria-hidden="true"></i> <span data-i18n="resume_download">Download</span></a>
        </div>
      </div>
    `;
  }

  function renderProjects() {
    const projects = document.getElementById('pf-projects');
    const projectsData = [
      {
        badge: 'proj1_badge', badgeStyle: 'default', title: 'proj1_title', desc: 'proj1_desc',
        tags: ['AI', 'Simulation', 'Product strategy'],
        media: 'background:linear-gradient(135deg,#367D8A,#133336)', icon: 'ti ti-car'
      },
      {
        badge: 'proj2_badge', badgeStyle: 'tech', title: 'proj2_title', desc: 'proj2_desc',
        tags: ['Lean canvas', 'MVP', 'Market research'],
        media: 'background:linear-gradient(135deg,#285F6B,#367D8A)', icon: 'ti ti-briefcase'
      },
      {
        badge: '', title: 'proj3_title', desc: 'proj3_desc',
        tags: ['UML', 'Agile', 'SDLC', 'IS231'],
        media: 'background:linear-gradient(135deg,#133336,#285F6B)', icon: 'ti ti-heartbeat'
      },
      {
        badge: '', title: 'proj4_title', desc: 'proj4_desc',
        tags: ['Java', 'Linked lists', 'Sorting algorithms', 'CS210'],
        media: 'background:linear-gradient(135deg,#367D8A,#285F6B)', icon: 'ti ti-sort-ascending'
      },
      {
        badge: '', title: 'proj5_title', desc: 'proj5_desc',
        tags: ['SQL', 'ERD design', 'Relational schema', 'IS241'],
        media: 'background:linear-gradient(135deg,#4a99a6,#285F6B)', icon: 'ti ti-building-bank'
      },
      {
        badge: '', title: 'proj6_title', desc: 'proj6_desc',
        tags: ['Java', 'Number theory', 'Cryptography', 'CS285'],
        media: 'background:linear-gradient(135deg,#285F6B,#010001)', icon: 'ti ti-lock'
      }
    ];

    let projectsHtml = `
      <div class="pf-section-head">
        <p class="pf-eyebrow pf-grad-text" data-i18n="projects_eyebrow">Projects</p>
        <h2 class="pf-h2" data-i18n="projects_heading">Selected projects</h2>
      </div>
      <div class="pf-grid pf-grid-2">
    `;

    projectsData.forEach(proj => {
      projectsHtml += `
        <div class="pf-card">
          <div class="pf-proj-media" style="${proj.media}"><i class="${proj.icon}" aria-hidden="true"></i></div>
          <div class="pf-proj-body">
            ${proj.badge ? `<span class="pf-badge"><i class="ti ti-trophy" aria-hidden="true"></i> <span data-i18n="${proj.badge}"></span></span>` : ''}
            <div class="pf-proj-title" data-i18n="${proj.title}"></div>
            <div class="pf-proj-desc" data-i18n="${proj.desc}"></div>
            <div class="pf-tags">${proj.tags.map(t => `<span class="pf-tag">${t}</span>`).join('')}</div>
            ${proj.badge ? `<div class="pf-links"><a class="pf-link-sm" href="https://www.linkedin.com/in/layan-bindayel/" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-linkedin" aria-hidden="true"></i><span data-i18n="link_linkedin"></span></a></div>` : ''}
          </div>
        </div>
      `;
    });

    projectsHtml += `</div>`;
    projects.innerHTML = projectsHtml;
  }

  function renderCourses() {
    const courses = document.getElementById('pf-courses');
    const coursesData = [
      { title: 'c1_title', issuer: 'c1_issuer' },
      { title: 'c2_title', issuer: 'c2_issuer' },
      { title: 'c3_title', issuer: 'c3_issuer' },
      { title: 'c4_title', issuer: 'c4_issuer' },
      { title: 'c5_title', issuer: 'c5_issuer' },
      { title: 'c6_title', issuer: 'c6_issuer' },
      { title: 'c7_title', issuer: 'c7_issuer' }
    ];

    let coursesHtml = `
      <div class="pf-section-head">
        <p class="pf-eyebrow pf-grad-text" data-i18n="courses_eyebrow">Learning journey</p>
        <h2 class="pf-h2" data-i18n="courses_heading">Courses &amp; programs</h2>
      </div>
      <div class="pf-grid pf-grid-2">
    `;

    coursesData.forEach((course, idx) => {
      const gridSpan = idx === coursesData.length - 1 ? 'style="grid-column:1/-1"' : '';
      coursesHtml += `
        <div class="pf-card pf-cert-card" ${gridSpan}>
          <div class="pf-cert-icon"><i class="ti ti-certificate" aria-hidden="true"></i></div>
          <div>
            <div class="pf-cert-title" data-i18n="${course.title}"></div>
            <div class="pf-cert-issuer" data-i18n="${course.issuer}"></div>
          </div>
        </div>
      `;
    });

    coursesHtml += `</div>`;
    courses.innerHTML = coursesHtml;
  }

  function renderTrophies() {
    const trophies = document.getElementById('pf-trophies');
    const trophiesData = [
      { icon: 'ti ti-trophy', title: 't1_title', desc: 't1_desc' },
      { icon: 'ti ti-shield-lock', title: 't2_title', desc: 't2_desc' },
      { icon: 'ti ti-award', title: 't3_title', desc: 't3_desc' },
      { icon: 'ti ti-users', title: 't4_title', desc: 't4_desc' },
      { icon: 'ti ti-heart-handshake', title: 't5_title', desc: 't5_desc' }
    ];

    let trophiesHtml = `
      <div class="pf-section-head">
        <p class="pf-eyebrow pf-grad-text" data-i18n="trophies_eyebrow">Achievements</p>
        <h2 class="pf-h2" data-i18n="trophies_heading">My trophies</h2>
      </div>
      <div class="pf-grid pf-grid-2">
    `;

    trophiesData.forEach(trophy => {
      trophiesHtml += `
        <div class="pf-card pf-trophy-card">
          <div class="pf-trophy-top">
            <div class="pf-trophy-icon"><i class="${trophy.icon}" aria-hidden="true"></i></div>
            <div class="pf-trophy-title" data-i18n="${trophy.title}"></div>
          </div>
          <div class="pf-trophy-desc" data-i18n="${trophy.desc}"></div>
        </div>
      `;
    });

    trophiesHtml += `</div>`;
    trophies.innerHTML = trophiesHtml;
  }

  function renderSkills() {
    const skills = document.getElementById('pf-skills');
    const skillsData = [
      {
        group: 'group_technical',
        skills: [
          { icon: 'ti ti-database pf-icon-accent', label: 'skill_sql' },
          { icon: 'devicon-java-plain colored', label: 'Java' },
          { icon: 'ti ti-binary-tree pf-icon-accent', label: 'skill_ds' },
          { icon: 'ti ti-table pf-icon-accent', label: 'skill_rdb' },
          { icon: 'devicon-mongodb-plain colored', label: 'MongoDB' },
          { icon: 'devicon-c-plain colored', label: 'C' },
          { icon: 'devicon-linux-plain colored', label: 'Linux' },
          { icon: 'devicon-figma-plain colored', label: 'Figma' }
        ]
      },
      {
        group: 'group_ai',
        skills: [
          { icon: 'ti ti-brain pf-icon-accent', label: 'skill_llm' },
          { icon: 'ti ti-search pf-icon-accent', label: 'skill_rag' },
          { icon: 'ti ti-target-arrow pf-icon-accent', label: 'skill_aips' },
          { icon: 'ti ti-chart-line pf-icon-accent', label: 'skill_pa' },
          { icon: 'ti ti-chart-bar pf-icon-accent', label: 'skill_da' }
        ]
      },
      {
        group: 'group_soft',
        skills: [
          { icon: 'ti ti-bulb pf-icon-accent', label: 'skill_ct' },
          { icon: 'ti ti-puzzle pf-icon-accent', label: 'skill_ps' },
          { icon: 'ti ti-list-check pf-icon-accent', label: 'skill_org' },
          { icon: 'ti ti-users-group pf-icon-accent', label: 'skill_cf' },
          { icon: 'ti ti-refresh pf-icon-accent', label: 'skill_agile' }
        ]
      },
      {
        group: 'group_lang',
        skills: [
          { icon: 'ti ti-language pf-icon-accent', label: 'skill_ar' },
          { icon: 'ti ti-language pf-icon-accent', label: 'skill_en' }
        ]
      }
    ];

    let skillsHtml = `
      <div class="pf-section-head">
        <p class="pf-eyebrow pf-grad-text" data-i18n="skills_eyebrow">Skills</p>
        <h2 class="pf-h2" data-i18n="skills_heading">My skills</h2>
      </div>
      <div class="pf-grid pf-grid-2">
    `;

    skillsData.forEach(group => {
      skillsHtml += `
        <div class="pf-card pf-skill-group">
          <div class="pf-skill-label" data-i18n="${group.group}"></div>
          <div class="pf-skill-icon-grid">
      `;
      group.skills.forEach(skill => {
        skillsHtml += `
          <div class="pf-skill-icon-card">
            <i class="${skill.icon}" aria-hidden="true"></i>
            <span data-i18n="${skill.label}"></span>
          </div>
        `;
      });
      skillsHtml += `</div></div>`;
    });

    skillsHtml += `</div>`;
    skills.innerHTML = skillsHtml;
  }

  function renderContact() {
    const contact = document.getElementById('pf-contact');
    contact.innerHTML = `
      <div class="pf-card pf-contact-card" style="max-width:520px;margin:0 auto">
        <p class="pf-eyebrow pf-grad-text" style="text-align:center" data-i18n="contact_eyebrow">Contact</p>
        <h2 class="pf-h2" style="margin-bottom:10px" data-i18n="contact_heading">Let's get in touch</h2>
        <p style="font-size:14px;color:var(--text-2);margin-bottom:6px">+966-546-758-609</p>
        <p style="font-size:13px;color:var(--text-3);margin-bottom:0" data-i18n="contact_location">Riyadh, Saudi Arabia</p>
        <div class="pf-contact-row">
          <a class="pf-btn pf-btn-grad" href="https://www.linkedin.com/in/layan-bindayel/" target="_blank" rel="noopener noreferrer"><i class="ti ti-brand-linkedin" aria-hidden="true"></i> <span data-i18n="hero_cta">Message on LinkedIn</span></a>
          <a class="pf-btn pf-btn-ghost" href="tel:+966546758609"><i class="ti ti-phone" aria-hidden="true"></i> <span data-i18n="contact_call">Call</span></a>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
      <div style="font-family:var(--font-head);font-weight:600;font-size:15px">Layan Bin Dayel</div>
      <div style="font-size:12px;color:var(--text-3);margin-top:4px" data-i18n="footer_tagline"></div>
      <div class="pf-footer-links">
        <button data-i18n="nav_about" onclick="navigation.scroll('pf-about')">About</button>
        <button data-i18n="nav_resume" onclick="navigation.scroll('pf-resume')">Resume</button>
        <button data-i18n="nav_projects" onclick="navigation.scroll('pf-projects')">Projects</button>
        <button data-i18n="nav_courses" onclick="navigation.scroll('pf-courses')">Courses</button>
        <button data-i18n="nav_trophies" onclick="navigation.scroll('pf-trophies')">Trophies</button>
        <button data-i18n="nav_skills" onclick="navigation.scroll('pf-skills')">Skills</button>
        <button data-i18n="nav_contact" onclick="navigation.scroll('pf-contact')">Contact</button>
      </div>
      <div class="pf-copyright" id="pfCopyright"></div>
    `;
    document.getElementById('pfCopyright').textContent = '© ' + new Date().getFullYear() + ' Layan Bin Dayel. All rights reserved.';
  }

  function renderAll() {
    renderNavigation.render();
    renderHero();
    renderAbout();
    renderResume();
    renderProjects();
    renderCourses();
    renderTrophies();
    renderSkills();
    renderContact();
    renderFooter();
  }

  return { renderAll };
})();