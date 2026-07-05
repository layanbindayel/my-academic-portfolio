/**
 * Internationalization (i18n) Module
 * Handles language switching between English and Arabic
 */

const i18n = (function() {
  let currentLang = 'en';
  
  const AR = {
    nav_about: "عني", nav_resume: "السيرة الذاتية", nav_projects: "المشاريع",
    nav_courses: "الدورات", nav_trophies: "الجوائز", nav_skills: "المهارات",
    nav_contact: "تواصل معي",
    hero_name: "ليان بن دايل", hero_title: "مديرة منتجات ذكاء اصطناعي وعالمة بيانات",
    hero_sub: "طالبة نظم معلومات حاسوبية متخصصة في الذكاء الاصطناعي وعلم البيانات بجامعة الأمير سلطان — بناء منتجات مدعومة بالذكاء الاصطناعي، قيادة نادي علوم البيانات، وتطوير حلول مبتكرة.",
    hero_cta: "تواصل عبر لينكدإن",
    about_eyebrow: "نبذة عني", about_heading: "ليان هشام بن دايل",
    about_p1: "أنا <b>ليان هشام بن دايل</b>، طالبة <b>نظم معلومات حاسوبية</b> في مسار <b>الذكاء الاصطناعي وعلم البيانات</b> بـ<b>جامعة الأمير سلطان</b>، حاليًا في السنة الثالثة بمعدل 3.87 من 4.0.",
    about_p2: "بصفتي <b>مسؤولة إدارة منتجات الذكاء الاصطناعي</b> في <b>HKB Tech</b>، أتعاون مع فرق متعددة التخصصات لبناء منتجات ذكية عبر القطاعات الصحية والتعليمية والإلكترونية.",
    about_p3: "بصفتي <b>رئيسة نادي علوم البيانات</b> بالجامعة، أقود <b>معسكر الذكاء الاصطناعي في الروبوتات</b> وأُنمّي مجتمعًا متحمسًا لعلوم البيانات من خلال ورش العمل والفعاليات والمسابقات.",
    about_p4: "من خلال برامج مثل <b>بناء نماذج اللغة الكبيرة من الصفر</b> (سدايا) و<b>بناء روبوتات محادثة من الصفر</b> (RAG)، ومشاريع أكاديمية تغطي جافا، SQL، وتصميم الأنظمة، اكتسبت خبرة عملية متينة.",
    resume_eyebrow: "السيرة الذاتية", resume_heading: "السيرة الذاتية",
    resume_sub: "عرض أو تحميل أحدث نسخة من سيرتي الذاتية.",
    resume_view: "عرض", resume_download: "تحميل",
    projects_eyebrow: "المشاريع", projects_heading: "مشاريع مختارة",
    proj1_badge: "المركز الثالث — PwC Empowerthon",
    proj1_title: "محاكي استراتيجية سباق واستشعار فورمولا 1",
    proj1_desc: "شاركت في تطوير منصة محاكاة سباق فورمولا 1 مدعومة بالذكاء الاصطناعي، فازت بالمركز الثالث في مسار السياحة الذكية لتقدم الابتكار في الرياضة الذكية.",
    proj2_badge: "معسكر تطوير منتج أولي",
    proj2_title: "منصة عمل حر لتمكين المرأة السعودية",
    proj2_desc: "طوّرت بشكل مستقل منصة عمل حر تمكّن المرأة السعودية، مطبقة أبحاث السوق المدعومة بالذكاء الاصطناعي ومنهجية Lean Canvas وتطوير MVP.",
    proj3_title: "كير تايم — مساعد طبي ذكي",
    proj3_desc: "قدت تحليل نظام شامل بمنهجية SDLC المنظمة — من استخراج المتطلبات إلى مخطط حالات استخدام UML ونموذج agile متدرج — مشروع capstone في IS231.",
    proj4_title: "تحليل تسجيل مقررات الطلاب",
    proj4_desc: "صممت قائمة مترابطة مخصصة لمعالجة سجلات التسجيل، ونفذت خوارزمية لتقييم الطلب، وقارنت أربع خوارزميات ترتيب — مشروع CS210.",
    proj5_title: "نظام إدارة متحف",
    proj5_desc: "صممت مخطط قاعدة بيانات علائقية من مخطط ERD، وكتبت استعلامات SQL معقدة لجرد المقتنيات والتنسيق بين المتاحف — مشروع IS241.",
    proj6_title: "نظام تشفير RSA",
    proj6_desc: "نفذت تشفير المفتاح العام RSA بلغة جافا، شاملًا الحساب النمطي وتوليد المفاتيح والتشفير فك التشفير — تطبيق نظري CS285.",
    link_linkedin: "عرض على لينكدإن", view_cert: "عرض الشهادة",
    courses_eyebrow: "رحلة التعلم", courses_heading: "الدورات والبرامج",
    c1_title: "بناء نماذج اللغة الكبيرة من الصفر", c1_issuer: "SDAIA",
    c2_title: "مقدمة في MongoDB", c2_issuer: "MongoDB University",
    c3_title: "بناء روبوتات محادثة من الصفر", c3_issuer: "SDAIA",
    c4_title: "أطلق منتجك الأولي في 3 أيام", c4_issuer: "Lean Venture Builder",
    c5_title: "البيانات والأمان والخصوصية", c5_issuer: "Coursera",
    c6_title: "أساسيات الإدارة والقيادة", c6_issuer: "Coursera",
    c7_title: "إنشاء منتج ناجح: استراتيجية وتصميم", c7_issuer: "Coursera",
    trophies_eyebrow: "الإنجازات", trophies_heading: "جوائزي",
    t1_title: "PwC Empowerthon — المركز الثالث",
    t1_desc: "مسار السياحة الذكية — شاركت في تطوير منصة محاكاة سباق فورمولا 1 مدعومة بالذكاء الاصطناعي.",
    t2_title: "مسابقة PSU Capture The Flag الأولى — المركز الثاني",
    t2_desc: "حصلت على المركز الثاني في أول مسابقة أمن سيبراني بالجامعة.",
    t3_title: "قائمة العميد — أربعة فصول متتالية",
    t3_desc: "أُدرجت على قائمة العميد بالجامعة تقديرًا للتفوق الأكاديمي والالتزام.",
    t4_title: "رئيسة نادي علوم البيانات",
    t4_desc: "أقود نادي علوم البيانات بالجامعة — نظمت معسكر الذكاء الاصطناعي في الروبوتات وفعاليات شهرية.",
    t5_title: "متطوعة في مؤتمر WiDS",
    t5_desc: "تولّيت إدارة التسجيل في المؤتمر الدولي الثامن للمرأة في علوم البيانات بمختبر AIDA.",
    skills_eyebrow: "المهارات", skills_heading: "مهاراتي",
    group_technical: "تقنية", group_ai: "الذكاء الاصطناعي والبيانات",
    group_soft: "المهارات الشخصية", group_lang: "اللغات",
    skill_sql: "SQL", skill_ds: "هياكل البيانات", skill_rdb: "قواعد بيانات علائقية",
    skill_llm: "نماذج اللغة الكبيرة", skill_rag: "RAG",
    skill_aips: "استراتيجية منتج ذكاء اصطناعي",
    skill_pa: "التحليلات التنبؤية", skill_da: "تحليل البيانات",
    skill_ct: "التفكير النقدي", skill_ps: "حل المشاكل",
    skill_org: "التنظيم", skill_cf: "متعدد التخصصات", skill_agile: "Agile",
    skill_ar: "العربية — أصلي", skill_en: "الإنجليزية — طلاقة",
    contact_eyebrow: "التواصل", contact_heading: "لنتواصل",
    contact_location: "الرياض، المملكة العربية السعودية", contact_call: "اتصال",
    footer_tagline: "مسؤولة إدارة منتجات الذكاء الاصطناعي · طالبة علوم بيانات · رئيسة نادي علوم البيانات بجامعة الأمير سلطان"
  };
  
  let EN = {};

  function initialize() {
    // Extract English strings from DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
      EN[el.getAttribute('data-i18n')] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      EN[el.getAttribute('data-i18n-html')] = el.innerHTML;
    });
  }

  function toggle() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const dict = currentLang === 'ar' ? AR : EN;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });
    
    return currentLang;
  }

  function getCurrent() {
    return currentLang;
  }

  return { initialize, toggle, getCurrent };
})();

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', i18n.initialize);
} else {
  i18n.initialize();
}