const CONFIG = {
  // تفعيل التلميحات عبر رمز
  sisterHintCode: 'رؤى',
  herName: 'دانية الشيخ',


  pass1: 'الفاتنة الي على قلبي تمون',
  // إيموجي = توليب
  // 🌴=ت ، 🧿=و ، 🦁=ل ، 🧊=ي ، 🅱️=ب
  pass2: 'توليب',
  pass3: ['اللاتيه مالتي','اللاتيه','لاتيه'],
  pass4: '24072025',
  pass5: 'مرآة',
  pass6: 'قلب',
  pass7: 'ريم المكاحيل',
  guardianCode: 'سمبوستي',
  pass9: ['احبك','أحبك'],
  pass10: 'دانية الشيخ',

  finalMessage:
`سمبوستي، دانية التوليب 🌷 ، أميرتي وملكة عرش قلبي ♥️… إنتِ مو بس وردة حياتي، إنتِ الحديقة كلها 🌹🌷💐. ملامحك لوحة فنية، عيونك خريطة للضياع الحلو، وصوتك موسيقى تخلي حتى أصعب أيامي ترقص.

اجتزتي اختبار تهكير القلب بنجاح ♥️♥️

- اللاتيه و الهكر مالتك : برهومك 😌♥️`
};

let hintsEnabled = false;
const $ = (s)=>document.querySelector(s);
const show = (sel)=>$(sel).classList.remove('hidden');
const hide = (sel)=>$(sel).classList.add('hidden');

function typeWriter(el, text, i=0){
  if(i<text.length){
    el.textContent += text.charAt(i);
    setTimeout(()=>typeWriter(el, text, i+1), 17 + Math.random()*23);
  }
}

function bindStage(idx, checkFn){
  document.getElementById('check'+idx).addEventListener('click', checkFn);
  document.getElementById('hint'+idx).addEventListener('click', ()=>{
    if(!hintsEnabled) return alert('اسألي شخصًا قريبًا لتفعيل التلميحات 😉');
    const hints = {
      1:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      2:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      3:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      4:'اسألي شخصًا قريبًا لتفعيل التلميحات !!.',
      5:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      6:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      7:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      8:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      9:'اسألي شخصًا قريبًا لتفعيل التلميحات !!',
      10:'اسألي شخصًا قريبًا لتفعيل التلميحات !!'
    };
    alert(hints[idx]);
  });
}

window.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('startBtn').addEventListener('click', ()=>{ hide('.hero'); show('#stage1'); });

  document.getElementById('helpBtn').addEventListener('click', ()=>{
    const code = prompt('أدخلي رمز التفعيل للتلميحات:');
    if(!code) return;
    if(code.trim()===CONFIG.sisterHintCode){ hintsEnabled=true; alert('تم تفعيل التلميحات ✔️'); }
    else alert('رمز خاطئ.');
  });

  const go = (from, to, okMsg)=>{ document.querySelector(from+' .msg').textContent=okMsg; hide(from); show(to); };

  // 1
  bindStage(1, ()=>{
    const v = document.getElementById('pass1').value.trim();
    if(v===CONFIG.pass1){ go('#stage1','#stage2','صح!'); }
    else document.getElementById('msg1').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 2
  bindStage(2, ()=>{
    const v = document.getElementById('pass2').value.trim();
    if(v===CONFIG.pass2){ go('#stage2','#stage3','تم!'); }
    else document.getElementById('msg2').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 3
  bindStage(3, ()=>{
    const v = document.getElementById('pass3').value.trim();
    if(CONFIG.pass3.includes(v)){ go('#stage3','#stage4','ياهلا بالقهوة!'); }
    else document.getElementById('msg3').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 4
  bindStage(4, ()=>{
    const v = document.getElementById('pass4').value.trim();
    if(v===CONFIG.pass4){ go('#stage4','#stage5','فتح السر.'); }
    else document.getElementById('msg4').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 5
  bindStage(5, ()=>{
    const v = document.getElementById('pass5').value.trim();
    if(v===CONFIG.pass5){ go('#stage5','#stage6','واضحة بالمرآة.'); }
    else document.getElementById('msg5').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 6
  bindStage(6, ()=>{
    const v = document.getElementById('pass6').value.trim();
    if(v===CONFIG.pass6){ go('#stage6','#stage7','جميلة.'); }
    else document.getElementById('msg6').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 7
  bindStage(7, ()=>{
    const v = document.getElementById('pass7').value.trim();
    if(v===CONFIG.pass7){ go('#stage7','#stage8','عينان من شعر.'); }
    else document.getElementById('msg7').textContent='اسألي شخصًا قريبًا لتفعيل التلميحات !!';
  });

  // 8
  bindStage(8, ()=>{
    const v = document.getElementById('pass8').value.trim();
    if(v===CONFIG.guardianCode){ go('#stage8','#stage9','سُمِع الهمس.'); }
    else document.getElementById('msg8').textContent='اسألي أقرب الناس إليكِ.';
  });

  // 9
  bindStage(9, ()=>{
    const v = document.getElementById('pass9').value.trim();
    if(CONFIG.pass9.includes(v)){ go('#stage9','#stage10','قريبة من القلب.'); }
    else document.getElementById('msg9').textContent='أوّل حرف من كل كلمة.';
  });

  // 10
  bindStage(10, ()=>{
    const v = document.getElementById('pass10').value.trim();
    if(v===CONFIG.pass10){
      hide('#stage10'); show('#finale');
      const el = document.getElementById('terminal');
      const msg = `Access Granted...\nLoading secret message from Ibrahim...\n\n${CONFIG.herName}،\n${CONFIG.finalMessage}`;
      typeWriter(el, msg);
    } else document.getElementById('msg10').textContent='اكتبي الاسم الكامل كما هو.';
  });
});
