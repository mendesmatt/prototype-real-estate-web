'use strict';

const PROPERTIES = [
  {
    id:1, cat:'condominio', title:'Casa Contemporânea com Lazer Completo',
    location:'Condomínio Pasárgada — Km 25 Raposo',
    area:'450 m²', suites:4, vagas:4, badge:'CONDOMÍNIO FECHADO', badgeType:'forest',
    price:'R$ 4.850.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 1.240 / mês', condoFee:'R$ 2.100 / mês',
    desc:'Projeto com pé-direito duplo, integração total com a mata nativa e lazer completo. Poucos minutos da Raposo Tavares, cercada de verde e silêncio.',
    features:['Piscina aquecida','Espaço gourmet','Home office','Ar-condicionado','Automação','Jardim nativo'],
  },
  {
    id:2, cat:'casa', title:'Casa Térrea com Piscina e Jardim',
    location:'São Fernando Golf Club — Km 26 Raposo',
    area:'620 m²', suites:5, vagas:6, badge:'EXCLUSIVO', badgeType:'gold',
    price:'R$ 7.200.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 1.980 / mês', condoFee:'R$ 3.400 / mês',
    desc:'Térrea sofisticada em amplo terreno, com jardim projetado e vista para o campo de golfe. Living amplo, adega climatizada e spa privativo.',
    features:['Piscina com raia','Espaço gourmet','Adega','Ar-condicionado','Spa privativo','Vista golfe'],
  },
  {
    id:3, cat:'casa', title:'Sobrado Moderno Pronto para Morar',
    location:'Condomínio Palos Verdes — Granja Viana',
    area:'380 m²', suites:4, vagas:4, badge:'NOVO', badgeType:'graphite',
    price:'R$ 3.950.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 940 / mês', condoFee:'R$ 1.650 / mês',
    desc:'Sobrado novo, entregue com acabamento de alto padrão e pronto para morar. Cozinha integrada, terraço com churrasqueira e paisagismo entregue.',
    features:['Piscina','Espaço gourmet','Home office','Ar-condicionado','Terraço','Aquecimento solar'],
  },
  {
    id:4, cat:'terreno', title:'Terreno Plano com Vista para a Mata',
    location:'Quinta de São Fernando — Cotia',
    area:'1.200 m²', suites:null, vagas:null, badge:'CONDOMÍNIO FECHADO', badgeType:'forest',
    price:'R$ 1.680.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 380 / mês', condoFee:'R$ 980 / mês',
    desc:'Terreno plano e pronto para construir, em um dos condomínios mais arborizados da região. Testada ampla e orientação solar privilegiada.',
    features:['Terreno plano','Vista para mata','Testada ampla','Água e luz','Pronto p/ construir','Baixa declividade'],
  },
  {
    id:5, cat:'casa', title:'Mansão com Vista Panorâmica',
    location:'Alphaville — Barueri',
    area:'780 m²', suites:5, vagas:8, badge:'EXCLUSIVO', badgeType:'gold',
    price:'R$ 9.500.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 2.600 / mês', condoFee:'R$ 3.900 / mês',
    desc:'Residência imponente com arquitetura contemporânea, home theater, elevador e ampla área de lazer com quadra e piscina de borda infinita.',
    features:['Piscina infinita','Home theater','Elevador','Ar-condicionado','Quadra','Automação total'],
  },
  {
    id:6, cat:'casa', title:'Casa Aconchegante com Home Office',
    location:'Reserva da Granja — Km 24 Raposo',
    area:'320 m²', suites:3, vagas:3, badge:'NOVO', badgeType:'graphite',
    price:'R$ 2.480.000', priceLabel:'Venda',
    img:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80&auto=format&fit=crop',
    iptu:'R$ 720 / mês', condoFee:'R$ 1.280 / mês',
    desc:'Casa charmosa e funcional, com muita luz natural, home office integrado e varanda voltada para o jardim. Perfeita para viver cercado de verde.',
    features:['Piscina','Espaço gourmet','Home office','Ar-condicionado','Varanda','Lareira'],
  },
];

const CONDOS = [
  { name:'São Fernando Golf Club', tag:'Km 26 Raposo', count:12, img:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80&auto=format&fit=crop', infra:['Segurança 24h','Golf','Clube','Hípica'] },
  { name:'Palos Verdes', tag:'Granja Viana', count:8, img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop', infra:['Segurança 24h','Clube','Quadras','Trilhas'] },
  { name:'Pasárgada', tag:'Km 25 Raposo', count:6, img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&auto=format&fit=crop', infra:['Segurança 24h','Mata nativa','Trilhas','Lago'] },
  { name:'Quinta de São Fernando', tag:'Cotia', count:5, img:'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&q=80&auto=format&fit=crop', infra:['Segurança 24h','Hípica','Lago','Clube'] },
];

const ICO = {
  area:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="1.7"><path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5"/></svg>',
  suite:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="1.7"><path d="M3 18v-5a2 2 0 012-2h14a2 2 0 012 2v5"/><path d="M3 18v2M21 18v2M6 11V8a2 2 0 012-2h8a2 2 0 012 2v3"/></svg>',
  vaga:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="1.7"><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13"/><path d="M4 13h16v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"/></svg>',
  pin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.4-7-11a7 7 0 1114 0c0 4.6-7 11-7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
  check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>',
  shield:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1.7"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/></svg>',
  arrow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg>',
};
const heartSVG = a => `<svg width="18" height="18" viewBox="0 0 24 24" fill="${a?'#C9A24B':'none'}" stroke="${a?'#C9A24B':'#1E293B'}" stroke-width="1.8"><path d="M12 21s-7-4.5-9.5-9C.8 8.6 2.3 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.7 0 5.2 3.6 3.5 7-2.5 4.5-9.5 9-9.5 9z"/></svg>`;
const badgeClass = t => t==='gold' ? 'badge-gold' : t==='graphite' ? 'badge-graphite' : 'badge-forest';

const favorites = new Set();
let currentModalId = null;
let currentFilter = 'todos';

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

function renderProperties(){
  const grid = $('#propertyGrid');
  const list = currentFilter==='todos' ? PROPERTIES : PROPERTIES.filter(p=>p.cat===currentFilter);

  grid.innerHTML = list.map(p=>{
    const specs = [`<span>${ICO.area}${p.area}</span>`];
    if(p.suites) specs.push(`<span>${ICO.suite}${p.suites} suítes</span>`);
    if(p.vagas)  specs.push(`<span>${ICO.vaga}${p.vagas} vagas</span>`);
    const fav = favorites.has(p.id);
    return `
    <article class="card reveal in" data-id="${p.id}">
      <div class="card-media">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="card-badge ${badgeClass(p.badgeType)}">${p.badge}</span>
        <button class="card-fav ${fav?'active':''}" data-fav="${p.id}" aria-label="Favoritar imóvel">${heartSVG(fav)}</button>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <p class="card-loc"><span style="color:var(--forest)">${ICO.pin}</span>${p.location}</p>
        <div class="card-specs">${specs.join('')}</div>
        <div class="card-foot">
          <div class="card-price"><small>${p.priceLabel}</small><strong>${p.price}</strong></div>
          <span class="card-cta">Ver imóvel ${ICO.arrow}</span>
        </div>
      </div>
    </article>`;
  }).join('');

  grid.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', e=>{
      if(e.target.closest('[data-fav]')) return;
      openModal(Number(card.dataset.id));
    });
  });
  grid.querySelectorAll('[data-fav]').forEach(b=>{
    b.addEventListener('click', e=>{ e.stopPropagation(); toggleFav(Number(b.dataset.fav)); });
  });
}

function renderCondos(){
  $('#condoGrid').innerHTML = CONDOS.map(c=>`
    <article class="condo reveal">
      <img src="${c.img}" alt="${c.name}" loading="lazy" />
      <div class="condo-content">
        <div class="condo-top">
          <div>
            <h3 class="condo-name">${c.name}</h3>
            <p class="condo-tag"><span style="color:var(--gold-light)">${ICO.pin}</span>${c.tag}</p>
          </div>
          <span class="condo-count">${c.count} imóveis</span>
        </div>
        <div class="condo-infra">
          ${c.infra.map(i=>`<span>${ICO.shield}${i}</span>`).join('')}
        </div>
      </div>
    </article>`).join('');
  observeReveal();
}

function openModal(id){
  const p = PROPERTIES.find(x=>x.id===id); if(!p) return;
  currentModalId = id;

  $('#modalImg').src = p.img;
  $('#modalImg').alt = p.title;
  $('#modalTitle').textContent = p.title;
  $('#modalLoc').innerHTML = `${ICO.pin}${p.location}`;
  $('#modalPrice').textContent = p.price;
  $('#modalDesc').textContent = p.desc;
  $('#modalIptu').textContent = p.iptu;
  $('#modalCondo').textContent = p.condoFee;

  const badge = $('#modalBadge');
  badge.textContent = p.badge;
  badge.className = 'modal-badge ' + badgeClass(p.badgeType);

  const specs = [{i:ICO.area,v:p.area,l:'Área útil'}];
  if(p.suites) specs.push({i:ICO.suite,v:p.suites,l:'Suítes'});
  if(p.vagas)  specs.push({i:ICO.vaga,v:p.vagas,l:'Vagas'});
  $('#modalSpecs').innerHTML = specs.map(s=>`<div class="spec">${s.i}<strong>${s.v}</strong><small>${s.l}</small></div>`).join('');

  $('#modalFeatures').innerHTML = p.features.map(f=>`<span>${ICO.check}${f}</span>`).join('');

  const m = $('#modal');
  m.classList.add('open');
  m.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const m = $('#modal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  currentModalId = null;
}

function toggleFav(id){
  const p = PROPERTIES.find(x=>x.id===id);
  if(favorites.has(id)){ favorites.delete(id); }
  else { favorites.add(id); toast('Imóvel salvo nos favoritos'); }
  $$(`[data-fav="${id}"]`).forEach(b=>{
    b.classList.toggle('active', favorites.has(id));
    b.innerHTML = heartSVG(favorites.has(id));
  });
}

let toastTimer;
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 2200);
}

let revealObserver;
function observeReveal(){
  if(!revealObserver){
    revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
    }, { threshold:.14 });
  }
  $$('.reveal:not(.in)').forEach(el=> revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProperties();
  renderCondos();
  observeReveal();

  const header = $('#header');
  const onScroll = ()=> header.classList.toggle('scrolled', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, { passive:true });

  const nav = $('#nav'), toggle = $('#navToggle');
  toggle.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
  }));

  $$('.seg-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      $$('.seg-btn').forEach(x=>{ x.classList.remove('active'); x.setAttribute('aria-selected','false'); });
      b.classList.add('active'); b.setAttribute('aria-selected','true');
    });
  });

  $('#filters').addEventListener('click', e=>{
    const btn = e.target.closest('.pill'); if(!btn) return;
    $$('#filters .pill').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProperties();
  });

  $('#modal').addEventListener('click', e=>{
    if(e.target.closest('[data-close]')) closeModal();
    const action = e.target.closest('[data-action]');
    if(action){
      const p = PROPERTIES.find(x=>x.id===currentModalId);
      if(action.dataset.action==='visita') toast('Solicitação de visita enviada');
      else toast(p ? `Abrindo WhatsApp sobre ${p.location.split('—')[0].trim()}` : 'Abrindo WhatsApp');
    }
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

  const form = $('#anuncioForm');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    if(!form.checkValidity()){ form.reportValidity(); return; }
    form.querySelectorAll('input,select,button').forEach(el=> el.disabled = true);
    $('#formOk').hidden = false;
    toast('Cadastro enviado com sucesso');
  });
});
