const persons = {
  'silas': { 
    name: 'Dr. Silas Sato',
    id: '#10088', 
    initials: 'SS',
    img: './img/silas_sato.png',
    exp: `
      <strong>LSCSD 1,5 Jahre</strong><br>
      Detectiv – Celal Almaz<br>
      PU Leitung – Celal Almaz<br>
      PU Leitung – Jeff Weber<br>
      Assistant Sheriff – Sascha Ittrich<br>
      Assistant Sheriff – Freddy Gorke<br>
      Co Leader – Freddy Gorke<br>
      Co Leader – Willy Wumms<br>
      Co Leader – Toby Alvarez<br><br>

      <strong>LSPD 3 Monate</strong><br>
      SWAT Leitung – Alexander Lorek<br>
      CO Leader – Leti Adams<br>
      CO Leader - Jan Contino<br><br>


      <strong>FIB 3 Monate</strong><br>
      FIBCO Agent – Toby Delgado<br>
      HRT Leitung – Toby Delgado<br>
      HRT Curator – Dr. Luna Walker<br>
      Mädchen f. A. – Dr. Luna Walker<br><br>
      
      <strong>SANG 3 Monate</strong><br>
      SANG Leader – SirSilas Sato<br>
      INF Leitung – Danusch Wayne<br>
      CO Leader – Brent Kruger<br><br>
      
      <strong>GOV 1 Woche</strong><br>
      Dep. State Secretary – Dr. Francois Cripage<br>
    `,
  },
  'luna': { 
    name: 'Dr. Luna Walker',
    id: '#12736', 
    initials: 'LW',
    img: './img/luna_walker.png',
    exp: `
      <strong>Leader</strong><br>
      LSPD - 2 Monate<br>
      FIB - 1 Monat<br>
      GOV - 4 Monate<br><br>

      <strong>GOV - 1,5 Jahre</strong><br>
      Cabinet Secretary<br>
      Vice Governor<br>
      ...
    `,
  },
  'laura': { 
    name: 'Dr. Laura Hellokitty',
    id: '#85524', 
    initials: 'LH',
    img: './img/laura_hellokitty.png',
    exp: `
      <strong>FIB</strong><br>
      Vize - Toby Delgado<br>
      Abteilungsleiter HR - Jeff Weber<br>
      Abteilungsleiter HR - Jeff Hover<br>
      CID Stellv. Abteilungsleiter - Robert Sneider <br><br>

      <strong>LSCSD</strong><br>
      DU Abteilungsleiter - Jeff Hover<br>
      DU Abteilungsleiter - Freddie Gorke<br>
    `,
  },
};

function openModal(key) {
  const p = persons[key];
  const av = document.getElementById('modal-avatar');
  if (p.img) {
    av.innerHTML = '<img src="'+p.img+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />';
  } else {
    av.textContent = p.initials;
  }
  document.getElementById('modal-name').textContent   = p.name;
  document.getElementById('modal-id').textContent     = p.id + ' · Deputy Director';
  document.getElementById('modal-exp').innerHTML      = p.exp;
  const modal = document.getElementById('person-modal');
  modal.style.display = 'flex';
  setTimeout(() => { modal.style.opacity = '1'; }, 10);
}

function closeModal() {
  const modal = document.getElementById('person-modal');
  modal.style.opacity = '0';
  modal.style.display = 'none';
}

function toggleVize() {
  const list  = document.getElementById('vize-list');
  const arrow = document.getElementById('vize-arrow');
  const open  = list.style.maxHeight !== '0px' && list.style.maxHeight !== '';
  if (open) {
    list.style.maxHeight = '0';
    list.style.opacity   = '0';
    arrow.style.transform = 'rotate(0deg)';
  } else {
    list.style.maxHeight = '200px';
    list.style.opacity   = '1';
    arrow.style.transform = 'rotate(180deg)';
  }
}


function openLegal(tab) {
  switchTab(tab);
  const modal = document.getElementById('legal-modal');
  modal.style.display = 'flex';
}

function closeLegal() {
  document.getElementById('legal-modal').style.display = 'none';
}

function switchTab(tab) {
  document.getElementById('content-impressum').style.display  = tab === 'impressum'   ? 'block' : 'none';
  document.getElementById('content-datenschutz').style.display = tab === 'datenschutz' ? 'block' : 'none';
  document.getElementById('tab-impressum').style.background    = tab === 'impressum'   ? 'rgba(201,168,76,0.1)' : 'transparent';
  document.getElementById('tab-impressum').style.borderColor   = tab === 'impressum'   ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)';
  document.getElementById('tab-impressum').style.color         = tab === 'impressum'   ? '#c9a84c' : '#6b6552';
  document.getElementById('tab-datenschutz').style.background  = tab === 'datenschutz' ? 'rgba(201,168,76,0.1)' : 'transparent';
  document.getElementById('tab-datenschutz').style.borderColor = tab === 'datenschutz' ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)';
  document.getElementById('tab-datenschutz').style.color       = tab === 'datenschutz' ? '#c9a84c' : '#6b6552';
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const map = { rangsystem: 0, abteilungen: 1, konzept: 2 };
  if (id in map) document.querySelectorAll('.nav-btn')[map[id]].classList.add('active');
}

const d = new Date();
document.getElementById('card-date').textContent =
  d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
