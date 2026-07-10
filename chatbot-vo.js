/* Wilton Plaza VO — Conversion Chatbot (EN/ES) */
(function() {
  var qa = {
    en: {
      greeting: "Hi! I'm Tricia, your Office Manager at Wilton Plaza 👋 How can I help you today?",
      fab: "Questions?",
      back: "Ask another question",
      powered: "Wilton Plaza",
      options: [
        "How much does it cost?",
        "Can I start today?",
        "Can I use this for my LLC?",
        "What's included?",
        "I need a notary",
        "Talk to Tricia"
      ],
      answers: [
        "Business Address starts at <strong>$39/month</strong>, Virtual Office <strong>$49/month</strong> — that extra $10 gets you complimentary mail scan requests, notary service, and conference room access.<br><br>Most clients choose Virtual Office. Save more with annual billing.<br><br><a href='/pricing' style='color:#0A6E5C;font-weight:700;'>See Plans & Pricing →</a>",
        "Yes! Sign up online in <strong>3 minutes</strong>. No deposits. After a quick identity verification, your address is typically activated within <strong>1-3 business days</strong>.<br><br><a href='/pricing' style='color:#0A6E5C;font-weight:700;'>Get Started — Sign Up in 3 Minutes →</a>",
        "Absolutely. You get a real street address with your own Suite number — accepted for Florida LLC registration and business licenses. Many banks accept it too — check with your bank.<br><br><strong>100+ businesses</strong> already use Wilton Plaza. Owner-operated building since 1973.<br><br><a href='/pricing' style='color:#0A6E5C;font-weight:700;'>Choose Your Plan →</a>",
        "<strong>Business Address ($39/mo):</strong> Your own Suite number + mail holding<br><br><strong>Virtual Office ($49/mo):</strong> Everything above PLUS complimentary mail scan requests, conference room access (by appointment), and on-site notary — all <strong>included</strong><br><br>No setup fees. Most clients choose Virtual Office — it's only $10 more.<br><br><a href='/pricing' style='color:#0A6E5C;font-weight:700;'>Compare & Sign Up →</a>",
        "That's me! Licensed Florida Notary, on-site every business day.<br><br>Walk-in Mon-Fri 9-5, no appointment needed. <strong>Free for Virtual Office clients</strong> — small fee for walk-ins.<br><br>Coming for notary? Ask me about Virtual Office — most clients who visit sign up the same day.<br><br><a href='https://wa.me/19542495388?text=Hi%20Tricia%2C%20I%20need%20notary%20services' target='_blank' style='color:#0A6E5C;font-weight:700;'>WhatsApp me to confirm →</a>",
        "I'm here! WhatsApp is fastest — I respond within minutes during business hours:<br><br><a href='https://wa.me/19542495388' target='_blank' style='color:#0A6E5C;font-weight:700;'>WhatsApp (954) 249-5388 →</a><br><br>Visit: 1881 NE 26th St, Suite 212, Wilton Manors. Free private parking. Mon-Fri 9-5.<br><br>¡Hablamos Español!"
      ]
    },
    es: {
      greeting: "¡Hola! Soy Tricia, su Gerente de Oficina en Wilton Plaza 👋 ¿Cómo puedo ayudarle hoy?",
      fab: "Preguntas?",
      back: "Hacer otra pregunta",
      powered: "Wilton Plaza",
      options: [
        "¿Cuánto cuesta?",
        "¿Puedo empezar hoy?",
        "¿Puedo usar esto para mi LLC?",
        "¿Qué incluye?",
        "Necesito un notario",
        "Hablar con Tricia"
      ],
      answers: [
        "Dirección Comercial desde <strong>$39/mes</strong>, Oficina Virtual <strong>$49/mes</strong> — por solo $10 más obtiene solicitudes de escaneo de cortesía, servicio de notario y acceso a sala de conferencias.<br><br>La mayoría elige Oficina Virtual. Ahorre más con pago anual.<br><br><a href='/es/pricing' style='color:#0A6E5C;font-weight:700;'>Ver Planes y Precios →</a>",
        "¡Sí! Regístrese en línea en <strong>3 minutos</strong>. Sin depósitos. Tras una breve verificación de identidad, su dirección se activa típicamente en <strong>1-3 días hábiles</strong>.<br><br><a href='/es/pricing' style='color:#0A6E5C;font-weight:700;'>Comenzar — Regístrese en 3 Minutos →</a>",
        "Por supuesto. Recibe una dirección real con su propio número de Suite — aceptada para registro de LLC y licencias en Florida. Muchos bancos también la aceptan — consulte con su banco.<br><br><strong>Más de 100 negocios</strong> ya usan Wilton Plaza. Edificio operado por propietario desde 1973.<br><br><a href='/es/pricing' style='color:#0A6E5C;font-weight:700;'>Elegir Plan →</a>",
        "<strong>Dirección Comercial ($39/mes):</strong> Su propio número de Suite + retención de correo<br><br><strong>Oficina Virtual ($49/mes):</strong> Todo lo anterior MÁS solicitudes de escaneo de cortesía, acceso a sala de conferencias (con cita), y notario — todo <strong>incluido</strong><br><br>Sin cargos de activación. La mayoría elige Oficina Virtual — son solo $10 más.<br><br><a href='/es/pricing' style='color:#0A6E5C;font-weight:700;'>Comparar y Registrarse →</a>",
        "¡Esa soy yo! Notario Público de Florida, en oficina cada día hábil.<br><br>Sin cita, Lun-Vie 9-5. <strong>Gratis para clientes de Oficina Virtual</strong> — pequeña tarifa para visitas.<br><br>¿Viene por notario? Pregúnteme sobre Oficina Virtual — la mayoría que nos visita se registra el mismo día.<br><br><a href='https://wa.me/19542495388?text=Hola%20Tricia%2C%20necesito%20servicios%20de%20notario' target='_blank' style='color:#0A6E5C;font-weight:700;'>Escríbame por WhatsApp →</a>",
        "¡Aquí estoy! WhatsApp es lo más rápido — respondo en minutos durante horario:<br><br><a href='https://wa.me/19542495388' target='_blank' style='color:#0A6E5C;font-weight:700;'>WhatsApp (954) 249-5388 →</a><br><br>Visítenos: 1881 NE 26th St, Suite 212, Wilton Manors. Estacionamiento privado gratis. Lun-Vie 9-5."
      ]
    }
  };

  function getLang() { return document.documentElement.lang || 'en'; }

  var css = document.createElement('style');
  css.textContent = [
    '.chat-fab{position:fixed;bottom:24px;right:24px;min-width:56px;height:56px;background:#0A6E5C;border-radius:28px;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;box-shadow:0 4px 20px rgba(10,110,92,0.35);z-index:9999;transition:transform .2s;border:none;padding:0 20px;color:#fff;font-size:14px;font-weight:700;font-family:inherit;}',
    '.chat-fab:hover{transform:scale(1.05);}',
    '.chat-fab svg{flex-shrink:0;}',
    '.chat-win{display:none;position:fixed;bottom:90px;right:24px;width:360px;max-height:480px;background:#fff;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,0.18);z-index:10000;overflow:hidden;flex-direction:column;font-family:Inter,-apple-system,sans-serif;}',
    '.chat-win.open{display:flex;}',
    '.chat-hdr{background:#0A6E5C;color:#fff;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;}',
    '.chat-hdr span{font-weight:700;font-size:15px;}',
    '.chat-close{background:none;border:none;color:#fff;font-size:22px;cursor:pointer;padding:0 4px;line-height:1;}',
    '.chat-body{padding:20px;overflow-y:auto;flex:1;}',
    '.chat-msg{background:#f5f5f5;padding:14px 16px;border-radius:12px;font-size:14px;line-height:1.6;color:#333;margin-bottom:12px;}',
    '.chat-msg a{color:#0A6E5C;text-decoration:none;font-weight:600;}',
    '.chat-opts{display:flex;flex-direction:column;gap:8px;margin-top:4px;}',
    '.chat-opt{background:#fff;border:1.5px solid #e0e0e0;padding:12px 16px;border-radius:10px;font-size:13px;cursor:pointer;text-align:left;color:#333;transition:border-color .15s,background .15s;font-family:inherit;}',
    '.chat-opt:hover{border-color:#0A6E5C;background:#E8F5F0;}',
    '.chat-back{background:none;border:none;color:#0A6E5C;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;padding:8px 0;font-family:inherit;}',
    '@media(max-width:768px){.chat-fab{display:none !important;} .chat-win{bottom:90px !important;right:12px;left:12px;width:auto;max-height:60vh;}}',
  ].join('\n');
  document.head.appendChild(css);

  var fab = document.createElement('button');
  fab.className = 'chat-fab';
  fab.setAttribute('aria-label', getLang() === 'es' ? 'Abrir chat' : 'Open chat');
  fab.setAttribute('aria-expanded', 'false');
  fab.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span></span>';

  var win = document.createElement('div');
  win.className = 'chat-win';
  win.setAttribute('role', 'dialog');
  win.setAttribute('aria-label', getLang() === 'es' ? 'Chat con Tricia' : 'Chat with Tricia');

  function render(showAnswer) {
    var t = qa[getLang()] || qa.en;
    fab.querySelector('span').textContent = t.fab;
    var closeLabel = getLang() === 'es' ? 'Cerrar chat' : 'Close chat';
    var h = '<div class="chat-hdr"><span>' + t.powered + '</span><button class="chat-close" aria-label="' + closeLabel + '">&times;</button></div><div class="chat-body">';
    if (showAnswer !== undefined) {
      h += '<div class="chat-msg">' + t.answers[showAnswer] + '</div>';
      h += '<button class="chat-back">&larr; ' + t.back + '</button>';
    } else {
      h += '<div class="chat-msg">' + t.greeting + '</div>';
      h += '<div class="chat-opts">';
      t.options.forEach(function(o, i) { h += '<button class="chat-opt" data-i="' + i + '">' + o + '</button>'; });
      h += '</div>';
    }
    h += '</div>';
    win.innerHTML = h;
    win.querySelector('.chat-close').onclick = function() { win.classList.remove('open'); };
    if (showAnswer !== undefined) {
      win.querySelector('.chat-back').onclick = function() { render(); };
    } else {
      win.querySelectorAll('.chat-opt').forEach(function(b) {
        b.onclick = function() { render(parseInt(this.getAttribute('data-i'))); };
      });
    }
  }

  fab.onclick = function() { render(); var open = win.classList.toggle('open'); fab.setAttribute('aria-expanded', String(open)); };
  document.body.appendChild(fab);
  document.body.appendChild(win);
  render();
})();
