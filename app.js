// ============ CATALOG ============
const CATALOG = [
  { name: 'بورسلين أرضيات داخلية 60×60', category: 'ceramics', unit: 'm2', qtyPerVilla: 280, priority: 'high', note: 'الصالات والممرات والغرف. أطلب +١٠٪ هدر.' },
  { name: 'بورسلين أرضيات حمامات 30×60', category: 'ceramics', unit: 'm2', qtyPerVilla: 45, priority: 'high', note: 'يفضل anti-slip للأرضيات.' },
  { name: 'بورسلين جدران حمامات 30×60', category: 'ceramics', unit: 'm2', qtyPerVilla: 110, priority: 'high', note: 'ارتفاع كامل في الحمامات.' },
  { name: 'بورسلين أرضيات خارجية مضاد للانزلاق', category: 'ceramics', unit: 'm2', qtyPerVilla: 80, priority: 'high', note: 'حول المسبح والممرات. R11 anti-slip.' },
  { name: 'رخام طبيعي للسلالم', category: 'ceramics', unit: 'm', qtyPerVilla: 35, priority: 'medium', note: 'متر طولي للدرج.' },
  { name: 'بلاط ديكوري للواجهات', category: 'ceramics', unit: 'm2', qtyPerVilla: 60, priority: 'medium', note: 'حسب التصميم المعماري.' },
  { name: 'سيراميك مطبخ جدار', category: 'ceramics', unit: 'm2', qtyPerVilla: 18, priority: 'medium', note: 'بين الكاونتر والخزائن العلوية.' },
  { name: 'باب رئيسي معدني فاخر', category: 'doors', unit: 'piece', qtyPerVilla: 1, priority: 'high', note: 'باب مدخل الفيلا.' },
  { name: 'أبواب داخلية خشب', category: 'doors', unit: 'piece', qtyPerVilla: 18, priority: 'high', note: 'غرف، حمامات، خزائن.' },
  { name: 'باب جراج كهربائي', category: 'doors', unit: 'piece', qtyPerVilla: 1, priority: 'high', note: 'Sectional مع ريموت ومحرك.' },
  { name: 'نوافذ ألمنيوم ثرمل بريك', category: 'doors', unit: 'm2', qtyPerVilla: 120, priority: 'high', note: 'Double glazed لعزل الحرارة.' },
  { name: 'أبواب سحاب ألمنيوم', category: 'doors', unit: 'm2', qtyPerVilla: 25, priority: 'high', note: 'للصالة على الحديقة/التراس.' },
  { name: 'درابزين زجاج للسلالم', category: 'doors', unit: 'm', qtyPerVilla: 30, priority: 'medium', note: 'زجاج مقسى 12مم.' },
  { name: 'شبابيك مظلات/شيش ألمنيوم', category: 'doors', unit: 'piece', qtyPerVilla: 8, priority: 'low', note: 'حسب التصميم.' },
  { name: 'ثريات صالات ومداخل', category: 'lighting', unit: 'piece', qtyPerVilla: 5, priority: 'high', note: 'صالة، مجلس، طعام، مدخل، درج.' },
  { name: 'إنارة سقف LED Downlights', category: 'lighting', unit: 'piece', qtyPerVilla: 120, priority: 'high', note: 'موزعة على الفيلا. 6-12W.' },
  { name: 'سبوت لايت جداري', category: 'lighting', unit: 'piece', qtyPerVilla: 25, priority: 'medium', note: 'ممرات، درج، حدائق.' },
  { name: 'إنارة خارجية للحديقة', category: 'lighting', unit: 'piece', qtyPerVilla: 20, priority: 'medium', note: 'IP65 مقاومة الماء.' },
  { name: 'مغاسل حمامات Vanity', category: 'lighting', unit: 'set', qtyPerVilla: 7, priority: 'high', note: 'مغسلة + خزانة + مرآة + خلاط.' },
  { name: 'كرسي حمام', category: 'lighting', unit: 'piece', qtyPerVilla: 7, priority: 'high', note: 'يفضل rimless + soft close.' },
  { name: 'شطافات وملحقات', category: 'lighting', unit: 'set', qtyPerVilla: 7, priority: 'high', note: 'شطاف يدوي + خزان مخفي.' },
  { name: 'دش حمام ثابت + يدوي', category: 'lighting', unit: 'set', qtyPerVilla: 7, priority: 'high', note: 'Rainfall + hand shower.' },
  { name: 'بانيو/جاكوزي', category: 'lighting', unit: 'piece', qtyPerVilla: 2, priority: 'medium', note: 'لغرف النوم الرئيسية.' },
  { name: 'مرايا حمامات LED', category: 'lighting', unit: 'piece', qtyPerVilla: 7, priority: 'medium', note: 'مع إضاءة + ديفوغر.' },
  { name: 'إكسسوارات حمامات', category: 'lighting', unit: 'set', qtyPerVilla: 7, priority: 'low', note: 'طقم كامل لكل حمام.' },
  { name: 'مطبخ كامل', category: 'kitchen', unit: 'm', qtyPerVilla: 12, priority: 'high', note: 'متر طولي مع كوارتز كاونتر.' },
  { name: 'حوض مطبخ ستانلس مزدوج', category: 'kitchen', unit: 'piece', qtyPerVilla: 1, priority: 'high', note: 'Undermount + خلاط مع شطاف.' },
  { name: 'هود شفط مطبخ', category: 'kitchen', unit: 'piece', qtyPerVilla: 1, priority: 'high', note: '90سم على الأقل.' },
  { name: 'دواليب غرف نوم', category: 'kitchen', unit: 'm', qtyPerVilla: 25, priority: 'high', note: 'مع مرايا وإضاءة LED.' },
  { name: 'دواليب درسنق روم', category: 'kitchen', unit: 'set', qtyPerVilla: 2, priority: 'medium', note: 'لغرف النوم الرئيسية.' },
  { name: 'خزائن مدخل ومخازن', category: 'kitchen', unit: 'm', qtyPerVilla: 8, priority: 'medium', note: 'مدخل + خدم + storage.' },
  { name: 'سخانات ماء مركزية', category: 'other', unit: 'piece', qtyPerVilla: 2, priority: 'high', note: '300 لتر تقريباً.' },
  { name: 'أجهزة تكييف مخفية', category: 'other', unit: 'set', qtyPerVilla: 12, priority: 'high', note: 'انفرتر، سبليت أو VRF.' },
  { name: 'مراوح سقف فاخرة', category: 'other', unit: 'piece', qtyPerVilla: 6, priority: 'low', note: 'للممرات والشرفات.' },
  { name: 'كاميرات مراقبة وإنذار', category: 'other', unit: 'set', qtyPerVilla: 1, priority: 'medium', note: 'نظام كامل + NVR.' },
  { name: 'سويتشات وأفياش فاخرة', category: 'other', unit: 'set', qtyPerVilla: 80, priority: 'medium', note: 'حسب لوحات الكهرباء.' },
  { name: 'إنتركم وجرس باب', category: 'other', unit: 'set', qtyPerVilla: 1, priority: 'medium', note: 'فيديو + صوت.' },
  { name: 'حنفيات وخلاطات إضافية', category: 'other', unit: 'piece', qtyPerVilla: 4, priority: 'medium', note: 'لاندري، خدم...' },
];

const CATEGORIES = {
  ceramics: { label: 'سيراميك ورخام', icon: '🟫' },
  doors: { label: 'أبواب ونوافذ', icon: '🚪' },
  lighting: { label: 'إنارة وحمامات', icon: '💡' },
  kitchen: { label: 'مطابخ ودواليب', icon: '🍳' },
  other: { label: 'أخرى', icon: '📦' }
};
const STATUS_LABELS = { considering: 'قيد الدراسة', shortlist: 'مختصرة', confirmed: 'مؤكد', ordered: 'تم الطلب', rejected: 'مرفوض' };
const RATING_LABELS = { excellent: '★★★ ممتاز', good: '★★ جيد', average: '★ متوسط', poor: '✗ ضعيف' };
const PRIORITY_LABELS = { high: 'عالية', medium: 'متوسطة', low: 'منخفضة' };
const UNITS = { piece: 'قطعة', m2: 'م²', m: 'م.ط', set: 'طقم', box: 'صندوق' };

const EXPENSE_CATEGORIES = {
  flight: { label: 'طيران', icon: '✈️' },
  hotel: { label: 'فندق وإقامة', icon: '🏨' },
  transport: { label: 'مواصلات', icon: '🚕' },
  food: { label: 'أكل ومطاعم', icon: '🍽️' },
  shopping: { label: 'تسوق شخصي', icon: '🛍️' },
  misc: { label: 'متفرقات', icon: '📌' }
};

// ============ STATE ============
let sb = null;
let CONFIG = { url: '', key: '', password: '' };
let products = [];
let suppliers = [];
let expenses = [];
let settings = { exchangeRate: 0.51, numVillas: 4, budgets: {}, addedFromCatalog: [] };
let editingProductId = null;
let editingSupplierId = null;
let editingExpenseId = null;
let syncTimeout = null;

// ============ CONFIG (stored in browser localStorage) ============
function loadConfig() {
  try {
    const raw = localStorage.getItem('china_config');
    if (raw) { CONFIG = JSON.parse(raw); return true; }
  } catch(e) {}
  return false;
}
function saveSetup() {
  const url = document.getElementById('setup-url').value.trim();
  const key = document.getElementById('setup-key').value.trim();
  const password = document.getElementById('setup-password').value.trim();
  if (!url.includes('supabase.co')) { document.getElementById('setup-error').textContent = 'الرابط لازم يكون من supabase.co'; return; }
  if (key.length < 20) { document.getElementById('setup-error').textContent = 'المفتاح غير صحيح'; return; }
  if (!password) { document.getElementById('setup-error').textContent = 'اكتب كلمة سر'; return; }
  CONFIG = { url, key, password };
  localStorage.setItem('china_config', JSON.stringify(CONFIG));
  sessionStorage.setItem('china_auth', '1');
  document.getElementById('setup-screen').style.display = 'none';
  initApp();
}
function resetSetup() {
  if (!confirm('إعادة الإعداد؟ راح تحتاج تدخل معلومات Supabase مرة ثانية. (بياناتك في القائمة ما تنحذف)')) return;
  localStorage.removeItem('china_config');
  sessionStorage.removeItem('china_auth');
  location.reload();
}

// ============ AUTH ============
function handleLogin() {
  const pw = document.getElementById('login-password').value;
  if (pw === CONFIG.password) {
    sessionStorage.setItem('china_auth', '1');
    document.getElementById('login-screen').style.display = 'none';
    initApp();
  } else {
    document.getElementById('login-error').textContent = 'كلمة السر غير صحيحة';
  }
}
function handleLogout() {
  if (!confirm('تبي تسجل خروج؟')) return;
  sessionStorage.removeItem('china_auth');
  location.reload();
}
document.getElementById('login-password')?.addEventListener('keypress', e => { if (e.key === 'Enter') handleLogin(); });
document.getElementById('setup-password')?.addEventListener('keypress', e => { if (e.key === 'Enter') saveSetup(); });

// ============ SYNC INDICATOR ============
function showSync(text, type = 'saving') {
  const el = document.getElementById('sync-status');
  el.textContent = text;
  el.className = 'show ' + type;
  if (type === 'saved' || type === 'error') setTimeout(() => el.classList.remove('show'), 2000);
}

// ============ SUPABASE ============
async function initSupabase() {
  try {
    sb = window.supabase.createClient(CONFIG.url, CONFIG.key);
    return true;
  } catch (e) {
    console.error('Supabase init failed:', e);
    alert('فشل الاتصال بـ Supabase. تحقق من الإعدادات.');
    return false;
  }
}

async function syncFromServer() {
  if (!sb) return;
  showSync('🔄 جاري التحميل...', 'saving');
  try {
    const [prodRes, supRes, setRes, expRes] = await Promise.all([
      sb.from('products').select('*').order('created_at', { ascending: false }),
      sb.from('suppliers').select('*').order('created_at', { ascending: false }),
      sb.from('settings').select('*').eq('id', 'main').maybeSingle(),
      sb.from('expenses').select('*').order('created_at', { ascending: false })
    ]);
    if (prodRes.error) throw prodRes.error;
    if (supRes.error) throw supRes.error;
    products = prodRes.data || [];
    suppliers = supRes.data || [];
    expenses = (expRes && !expRes.error) ? (expRes.data || []) : [];
    if (setRes.data && setRes.data.data) {
      settings = { ...settings, ...setRes.data.data };
      if (!settings.addedFromCatalog) settings.addedFromCatalog = [];
    }
    document.getElementById('exchange-rate').value = settings.exchangeRate;
    document.getElementById('num-villas').value = settings.numVillas;
    document.getElementById('last-sync').textContent = new Date().toLocaleString('ar-QA');
    renderAll();
    showSync('✓ متزامن', 'saved');
  } catch (e) {
    console.error('Sync error:', e);
    showSync('⚠️ خطأ في المزامنة', 'error');
    alert('خطأ في المزامنة. تأكد إنك نفّذت كود SQL في Supabase.\n\nالخطأ: ' + (e.message || e));
  }
}

async function saveProductToServer(product) {
  if (!sb) return;
  showSync('💾 جاري الحفظ...', 'saving');
  try {
    const { error } = await sb.from('products').upsert(product);
    if (error) throw error;
    showSync('✓ محفوظ', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}
async function deleteProductFromServer(id) {
  if (!sb) return;
  showSync('🗑️ جاري الحذف...', 'saving');
  try {
    const { error } = await sb.from('products').delete().eq('id', id);
    if (error) throw error;
    showSync('✓ حُذف', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}
async function saveSupplierToServer(supplier) {
  if (!sb) return;
  showSync('💾 جاري الحفظ...', 'saving');
  try {
    const { error } = await sb.from('suppliers').upsert(supplier);
    if (error) throw error;
    showSync('✓ محفوظ', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}
async function deleteSupplierFromServer(id) {
  if (!sb) return;
  showSync('🗑️ جاري الحذف...', 'saving');
  try {
    const { error } = await sb.from('suppliers').delete().eq('id', id);
    if (error) throw error;
    showSync('✓ حُذف', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}
async function saveExpenseToServer(expense) {
  if (!sb) return;
  showSync('💾 جاري الحفظ...', 'saving');
  try {
    const { error } = await sb.from('expenses').upsert(expense);
    if (error) throw error;
    showSync('✓ محفوظ', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); alert('خطأ في حفظ المصروف. تأكد إنك نفّذت كود SQL الجديد لجدول المصاريف.\n\n' + (e.message || e)); }
}
async function deleteExpenseFromServer(id) {
  if (!sb) return;
  showSync('🗑️ جاري الحذف...', 'saving');
  try {
    const { error } = await sb.from('expenses').delete().eq('id', id);
    if (error) throw error;
    showSync('✓ حُذف', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}
async function saveSettingsToServer() {
  if (!sb) return;
  clearTimeout(syncTimeout);
  syncTimeout = setTimeout(async () => {
    try {
      const { error } = await sb.from('settings').upsert({ id: 'main', data: settings });
      if (error) throw error;
    } catch (e) { console.error(e); }
  }, 500);
}
async function saveSettings() {
  settings.exchangeRate = parseFloat(document.getElementById('exchange-rate').value) || 0.51;
  settings.numVillas = parseInt(document.getElementById('num-villas').value) || 4;
  await saveSettingsToServer();
  renderAll();
}
async function clearAllData() {
  showSync('🗑️ جاري المسح...', 'saving');
  try {
    await Promise.all([
      sb.from('products').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      sb.from('suppliers').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      sb.from('expenses').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
      sb.from('settings').delete().eq('id', 'main')
    ]);
    products = []; suppliers = []; expenses = [];
    settings = { exchangeRate: 0.51, numVillas: 4, budgets: {}, addedFromCatalog: [] };
    document.getElementById('exchange-rate').value = 0.51;
    document.getElementById('num-villas').value = 4;
    renderAll();
    showSync('✓ تم المسح', 'saved');
  } catch (e) { console.error(e); showSync('⚠️ خطأ', 'error'); }
}

// ============ TABS ============
function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + name).style.display = 'block';
  document.querySelector(`.tab[data-tab="${name}"]`).classList.add('active');
  if (name === 'compare') renderComparison();
  if (name === 'budget') renderBudget();
  if (name === 'expenses') renderExpenses();
  if (name === 'checklist') renderChecklist();
}

// ============ CHECKLIST ============
function renderChecklist() {
  const filter = document.getElementById('checklist-filter').value;
  const priorityFilter = document.getElementById('checklist-priority').value;
  let items = CATALOG;
  if (filter) items = items.filter(i => i.category === filter);
  if (priorityFilter) items = items.filter(i => i.priority === priorityFilter);
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  items = [...items].sort((a,b) => priorityOrder[a.priority] - priorityOrder[b.priority] || a.category.localeCompare(b.category));
  const byCategory = {};
  items.forEach(item => { if (!byCategory[item.category]) byCategory[item.category] = []; byCategory[item.category].push(item); });
  const container = document.getElementById('checklist-list');
  if (items.length === 0) { container.innerHTML = `<div class="empty"><span class="empty-icon">📋</span>لا توجد بنود تطابق الفلتر</div>`; return; }
  let html = '';
  Object.entries(byCategory).forEach(([catKey, catItems]) => {
    const cat = CATEGORIES[catKey];
    html += `<div class="section-h"><span style="font-size: 16px;">${cat.icon}</span><h4>${cat.label}</h4><span class="count">${catItems.length} بند</span></div>`;
    catItems.forEach(item => {
      const catalogKey = `${item.category}::${item.name}`;
      const isAdded = settings.addedFromCatalog && settings.addedFromCatalog.includes(catalogKey);
      const totalQty = Math.ceil(item.qtyPerVilla * settings.numVillas * 1.1);
      html += `<div class="checklist-item"><div class="checklist-info"><div class="checklist-title-row"><div class="checklist-name">${escapeHtml(item.name)}</div><span class="badge badge-${item.priority}">${PRIORITY_LABELS[item.priority]}</span></div><div class="checklist-qty">${item.qtyPerVilla} ${UNITS[item.unit]}/فيلا → ${totalQty} ${UNITS[item.unit]} إجمالي</div>${item.note ? `<div class="checklist-note">${escapeHtml(item.note)}</div>` : ''}</div><button class="add-btn ${isAdded ? 'added' : ''}" onclick='addFromCatalog(${JSON.stringify(item).replace(/'/g, "&#39;")})'>${isAdded ? '✓ مضاف' : '+ إضافة'}</button></div>`;
    });
  });
  container.innerHTML = html;
}

async function addFromCatalog(item) {
  const catalogKey = `${item.category}::${item.name}`;
  if (settings.addedFromCatalog && settings.addedFromCatalog.includes(catalogKey)) {
    const existing = products.find(p => p.catalog_key === catalogKey);
    if (existing) { openProductModal(existing.id); return; }
  }
  const data = {
    id: crypto.randomUUID(), name: item.name, category: item.category, supplier_id: null,
    price_rmb: 0, unit: item.unit, qty_per_villa: item.qtyPerVilla, model: '', notes: item.note || '',
    status: 'considering', photo: null, catalog_key: catalogKey, created_at: new Date().toISOString()
  };
  products.unshift(data);
  if (!settings.addedFromCatalog) settings.addedFromCatalog = [];
  settings.addedFromCatalog.push(catalogKey);
  await saveProductToServer(data);
  await saveSettingsToServer();
  renderAll();
  openProductModal(data.id);
}

// ============ PHOTO ============
function previewPhoto(input, previewId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxDim = 1000;
      let w = img.width, h = img.height;
      if (w > h && w > maxDim) { h = h * maxDim / w; w = maxDim; }
      else if (h > maxDim) { w = w * maxDim / h; h = maxDim; }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      const compressed = canvas.toDataURL('image/jpeg', 0.65);
      document.getElementById(previewId).innerHTML = `<img src="${compressed}" data-img="${compressed}"><button class="remove-photo" onclick="document.getElementById('${previewId}').innerHTML=''">× حذف الصورة</button>`;
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function getPhotoData(previewId) {
  const img = document.querySelector(`#${previewId} img`);
  return img ? img.getAttribute('data-img') : null;
}

// ============ PRODUCT MODAL ============
function openProductModal(id) {
  editingProductId = id || null;
  document.getElementById('product-modal-title').textContent = id ? 'تعديل منتج' : 'منتج جديد';
  const sel = document.getElementById('p-supplier');
  sel.innerHTML = '<option value="">— اختر —</option>' + suppliers.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
  if (id) {
    const p = products.find(x => x.id === id);
    if (p) {
      document.getElementById('p-name').value = p.name || '';
      document.getElementById('p-category').value = p.category || 'other';
      document.getElementById('p-supplier').value = p.supplier_id || '';
      document.getElementById('p-price-rmb').value = p.price_rmb || '';
      document.getElementById('p-unit').value = p.unit || 'piece';
      document.getElementById('p-qty-villa').value = p.qty_per_villa || '';
      document.getElementById('p-model').value = p.model || '';
      document.getElementById('p-notes').value = p.notes || '';
      document.getElementById('p-status').value = p.status || 'considering';
      document.getElementById('p-photo-preview').innerHTML = p.photo ? `<img src="${p.photo}" data-img="${p.photo}"><button class="remove-photo" onclick="document.getElementById('p-photo-preview').innerHTML=''">× حذف الصورة</button>` : '';
      updateQRPreview(); updateTotalPreview();
    }
  } else {
    ['p-name','p-price-rmb','p-qty-villa','p-model','p-notes'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('p-category').value = 'ceramics';
    document.getElementById('p-supplier').value = '';
    document.getElementById('p-unit').value = 'piece';
    document.getElementById('p-status').value = 'considering';
    document.getElementById('p-photo-preview').innerHTML = '';
    document.getElementById('p-photo').value = '';
    document.getElementById('p-price-qr-preview').value = '';
    document.getElementById('p-qty-total').value = '';
    document.getElementById('p-total-qr').value = '';
  }
  document.getElementById('product-modal').classList.add('show');
}
function closeProductModal() { document.getElementById('product-modal').classList.remove('show'); editingProductId = null; }
function updateQRPreview() {
  const rmb = parseFloat(document.getElementById('p-price-rmb').value) || 0;
  document.getElementById('p-price-qr-preview').value = (rmb * settings.exchangeRate).toFixed(2);
  updateTotalPreview();
}
function updateTotalPreview() {
  const qty = parseFloat(document.getElementById('p-qty-villa').value) || 0;
  const totalQty = Math.ceil(qty * settings.numVillas * 1.1);
  const rmb = parseFloat(document.getElementById('p-price-rmb').value) || 0;
  document.getElementById('p-qty-total').value = totalQty + ' ' + UNITS[document.getElementById('p-unit').value];
  document.getElementById('p-total-qr').value = (totalQty * rmb * settings.exchangeRate).toFixed(2) + ' QR';
}
async function saveProduct() {
  const name = document.getElementById('p-name').value.trim();
  if (!name) { alert('اسم المنتج مطلوب'); return; }
  const photo = getPhotoData('p-photo-preview');
  const existing = editingProductId ? products.find(x=>x.id===editingProductId) : null;
  const data = {
    id: editingProductId || crypto.randomUUID(), name,
    category: document.getElementById('p-category').value,
    supplier_id: document.getElementById('p-supplier').value || null,
    price_rmb: parseFloat(document.getElementById('p-price-rmb').value) || 0,
    unit: document.getElementById('p-unit').value,
    qty_per_villa: parseFloat(document.getElementById('p-qty-villa').value) || 0,
    model: document.getElementById('p-model').value,
    notes: document.getElementById('p-notes').value,
    status: document.getElementById('p-status').value, photo,
    catalog_key: existing ? existing.catalog_key : null,
    created_at: existing ? existing.created_at : new Date().toISOString()
  };
  if (editingProductId) products = products.map(p => p.id === editingProductId ? data : p);
  else products.unshift(data);
  await saveProductToServer(data);
  closeProductModal();
  renderAll();
}
async function deleteProduct(id) {
  if (!confirm('حذف هذا المنتج؟')) return;
  const p = products.find(x => x.id === id);
  products = products.filter(p => p.id !== id);
  if (p && p.catalog_key && settings.addedFromCatalog) {
    settings.addedFromCatalog = settings.addedFromCatalog.filter(k => k !== p.catalog_key);
    await saveSettingsToServer();
  }
  await deleteProductFromServer(id);
  renderAll();
}

// ============ SUPPLIER MODAL ============
function openSupplierModal(id) {
  editingSupplierId = id || null;
  document.getElementById('supplier-modal-title').textContent = id ? 'تعديل مورد' : 'مورد جديد';
  if (id) {
    const s = suppliers.find(x => x.id === id);
    if (s) {
      document.getElementById('s-name').value = s.name || '';
      document.getElementById('s-contact').value = s.contact || '';
      document.getElementById('s-city').value = s.city || '';
      document.getElementById('s-wechat').value = s.wechat || '';
      document.getElementById('s-email').value = s.email || '';
      document.getElementById('s-address').value = s.address || '';
      document.getElementById('s-specialty').value = s.specialty || '';
      document.getElementById('s-rating').value = s.rating || '';
      document.getElementById('s-notes').value = s.notes || '';
      document.getElementById('s-card-preview').innerHTML = s.card_photo ? `<img src="${s.card_photo}" data-img="${s.card_photo}"><button class="remove-photo" onclick="document.getElementById('s-card-preview').innerHTML=''">× حذف الصورة</button>` : '';
    }
  } else {
    ['s-name','s-contact','s-city','s-wechat','s-email','s-address','s-specialty','s-notes'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('s-rating').value = '';
    document.getElementById('s-card-preview').innerHTML = '';
    document.getElementById('s-card').value = '';
  }
  document.getElementById('supplier-modal').classList.add('show');
}
function closeSupplierModal() { document.getElementById('supplier-modal').classList.remove('show'); editingSupplierId = null; }
async function saveSupplier() {
  const name = document.getElementById('s-name').value.trim();
  if (!name) { alert('اسم الشركة مطلوب'); return; }
  const cardPhoto = getPhotoData('s-card-preview');
  const existing = editingSupplierId ? suppliers.find(x=>x.id===editingSupplierId) : null;
  const data = {
    id: editingSupplierId || crypto.randomUUID(), name,
    contact: document.getElementById('s-contact').value,
    city: document.getElementById('s-city').value,
    wechat: document.getElementById('s-wechat').value,
    email: document.getElementById('s-email').value,
    address: document.getElementById('s-address').value,
    specialty: document.getElementById('s-specialty').value,
    rating: document.getElementById('s-rating').value,
    notes: document.getElementById('s-notes').value,
    card_photo: cardPhoto,
    created_at: existing ? existing.created_at : new Date().toISOString()
  };
  if (editingSupplierId) suppliers = suppliers.map(s => s.id === editingSupplierId ? data : s);
  else suppliers.unshift(data);
  await saveSupplierToServer(data);
  closeSupplierModal();
  renderAll();
}
async function deleteSupplier(id) {
  const linkedCount = products.filter(p => p.supplier_id === id).length;
  const msg = linkedCount > 0 ? `هذا المورد مرتبط بـ ${linkedCount} منتج. حذفه سيفك الارتباط. متأكد؟` : 'حذف هذا المورد؟';
  if (!confirm(msg)) return;
  suppliers = suppliers.filter(s => s.id !== id);
  const updates = products.filter(p => p.supplier_id === id).map(p => ({ ...p, supplier_id: null }));
  products = products.map(p => p.supplier_id === id ? { ...p, supplier_id: null } : p);
  await deleteSupplierFromServer(id);
  for (const p of updates) await saveProductToServer(p);
  renderAll();
}

// ============ EXPENSE MODAL ============
function openExpenseModal(id) {
  editingExpenseId = id || null;
  document.getElementById('expense-modal-title').textContent = id ? 'تعديل مصروف' : 'مصروف جديد';
  if (id) {
    const x = expenses.find(e => e.id === id);
    if (x) {
      document.getElementById('e-name').value = x.name || '';
      document.getElementById('e-category').value = x.category || 'misc';
      document.getElementById('e-amount').value = x.amount || '';
      document.getElementById('e-currency').value = x.currency || 'rmb';
      document.getElementById('e-date').value = x.date || '';
      document.getElementById('e-notes').value = x.notes || '';
      document.getElementById('e-photo-preview').innerHTML = x.photo ? `<img src="${x.photo}" data-img="${x.photo}"><button class="remove-photo" onclick="document.getElementById('e-photo-preview').innerHTML=''">× حذف الصورة</button>` : '';
      updateExpenseQR();
    }
  } else {
    ['e-name','e-amount','e-notes'].forEach(i=>document.getElementById(i).value='');
    document.getElementById('e-category').value = 'flight';
    document.getElementById('e-currency').value = 'rmb';
    document.getElementById('e-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('e-notes').value = '';
    document.getElementById('e-photo-preview').innerHTML = '';
    document.getElementById('e-photo').value = '';
    document.getElementById('e-qr-preview').value = '';
  }
  document.getElementById('expense-modal').classList.add('show');
}
function closeExpenseModal() { document.getElementById('expense-modal').classList.remove('show'); editingExpenseId = null; }
function updateExpenseQR() {
  const amount = parseFloat(document.getElementById('e-amount').value) || 0;
  const currency = document.getElementById('e-currency').value;
  const qr = currency === 'rmb' ? amount * settings.exchangeRate : amount;
  document.getElementById('e-qr-preview').value = qr.toFixed(2) + ' QR';
}
function expenseToQR(x) {
  const amount = x.amount || 0;
  return x.currency === 'rmb' ? amount * settings.exchangeRate : amount;
}
async function saveExpense() {
  const name = document.getElementById('e-name').value.trim();
  if (!name) { alert('الوصف مطلوب'); return; }
  const photo = getPhotoData('e-photo-preview');
  const existing = editingExpenseId ? expenses.find(x=>x.id===editingExpenseId) : null;
  const data = {
    id: editingExpenseId || crypto.randomUUID(), name,
    category: document.getElementById('e-category').value,
    amount: parseFloat(document.getElementById('e-amount').value) || 0,
    currency: document.getElementById('e-currency').value,
    date: document.getElementById('e-date').value || null,
    notes: document.getElementById('e-notes').value,
    photo,
    created_at: existing ? existing.created_at : new Date().toISOString()
  };
  if (editingExpenseId) expenses = expenses.map(e => e.id === editingExpenseId ? data : e);
  else expenses.unshift(data);
  await saveExpenseToServer(data);
  closeExpenseModal();
  renderAll();
}
async function deleteExpense(id) {
  if (!confirm('حذف هذا المصروف؟')) return;
  expenses = expenses.filter(e => e.id !== id);
  await deleteExpenseFromServer(id);
  renderAll();
}
function renderExpenses() {
  const summary = document.getElementById('expenses-summary');
  const byCat = {};
  let grand = 0;
  Object.keys(EXPENSE_CATEGORIES).forEach(k => byCat[k] = 0);
  expenses.forEach(x => { const qr = expenseToQR(x); byCat[x.category] = (byCat[x.category]||0) + qr; grand += qr; });

  let sumHtml = `<div class="card" style="background:linear-gradient(135deg,#0f172a,#1e293b); color:white; border:none;"><div style="font-size:12px; opacity:0.7;">إجمالي مصاريف الرحلة</div><div style="font-size:28px; font-weight:700; margin:4px 0;">${grand.toLocaleString('en-US',{maximumFractionDigits:0})} QR</div><div style="font-size:11px; opacity:0.6;">${expenses.length} مصروف</div></div>`;
  sumHtml += '<div class="card"><h4 style="margin:0 0 12px; font-size:14px; font-weight:600;">حسب التصنيف</h4>';
  Object.entries(EXPENSE_CATEGORIES).forEach(([key, c]) => {
    if (byCat[key] > 0) {
      const pct = grand > 0 ? (byCat[key] / grand * 100) : 0;
      sumHtml += `<div style="margin-bottom:10px"><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px"><span>${c.icon} ${c.label}</span><span style="font-weight:600">${byCat[key].toLocaleString('en-US',{maximumFractionDigits:0})} QR</span></div><div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
    }
  });
  sumHtml += '</div>';
  summary.innerHTML = sumHtml;

  const container = document.getElementById('expenses-list');
  if (expenses.length === 0) {
    container.innerHTML = `<div class="empty"><span class="empty-icon">✈️</span>لا توجد مصاريف بعد.<br><span style="font-size:11px">اضغط "+ مصروف جديد" لتبدأ.</span></div>`;
    return;
  }
  container.innerHTML = expenses.map(x => {
    const c = EXPENSE_CATEGORIES[x.category] || EXPENSE_CATEGORIES.misc;
    const qr = expenseToQR(x);
    const origLabel = x.currency === 'rmb' ? `¥${(x.amount||0).toFixed(2)}` : `${(x.amount||0).toFixed(2)} QR`;
    return `<div class="card"><div class="card-row">${x.photo ? `<img class="card-img" src="${x.photo}">` : `<div class="card-img card-img-placeholder">${c.icon}</div>`}<div class="card-content"><div style="display:flex; justify-content:space-between; gap:8px; align-items:flex-start;"><div><div class="card-title">${escapeHtml(x.name)}</div><div class="card-sub">${c.icon} ${c.label}${x.date ? ' · ' + x.date : ''}</div></div></div><div class="card-meta">💴 <strong>${origLabel}</strong>${x.currency === 'rmb' ? ` = ${qr.toLocaleString('en-US',{maximumFractionDigits:0})} QR` : ''}</div>${x.notes ? `<div class="card-sub" style="margin-top:4px; font-style:italic">${escapeHtml(x.notes)}</div>` : ''}<div class="card-actions"><button class="card-btn" onclick="openExpenseModal('${x.id}')">✏️ تعديل</button><button class="card-btn danger" onclick="deleteExpense('${x.id}')">🗑️</button></div></div></div></div>`;
  }).join('');
}

// ============ RENDER ============
function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function renderProducts() {
  const filter = document.getElementById('filter-category').value;
  const search = (document.getElementById('search-products').value || '').toLowerCase();
  let list = products;
  if (filter) list = list.filter(p => p.category === filter);
  if (search) list = list.filter(p => ((p.name||'') + ' ' + (p.model||'') + ' ' + (p.notes||'')).toLowerCase().includes(search));
  const container = document.getElementById('products-list');
  if (list.length === 0) { container.innerHTML = `<div class="empty"><span class="empty-icon">📦</span>لا توجد منتجات بعد.<br><span style="font-size:11px">جرب "قائمة البنود" لتبدأ بقالب جاهز.</span></div>`; return; }
  container.innerHTML = list.map(p => {
    const cat = CATEGORIES[p.category] || CATEGORIES.other;
    const sup = suppliers.find(s => s.id === p.supplier_id);
    const totalQty = Math.ceil((p.qty_per_villa || 0) * settings.numVillas * 1.1);
    const totalQR = totalQty * (p.price_rmb || 0) * settings.exchangeRate;
    const hasPrice = (p.price_rmb || 0) > 0;
    return `<div class="card"><div class="card-row">${p.photo ? `<img class="card-img" src="${p.photo}">` : `<div class="card-img card-img-placeholder">${cat.icon}</div>`}<div class="card-content"><div style="display:flex; justify-content:space-between; gap:8px; align-items:flex-start;"><div><div class="card-title">${escapeHtml(p.name)}</div><div class="card-sub">${cat.label}${p.model ? ' · ' + escapeHtml(p.model) : ''}</div></div><span class="badge badge-${p.status}">${STATUS_LABELS[p.status] || ''}</span></div>${sup ? `<div class="card-sub" style="margin-top:4px">🏢 ${escapeHtml(sup.name)}</div>` : ''}${hasPrice ? `<div class="card-meta">💴 <strong>¥${(p.price_rmb||0).toFixed(2)}</strong> = ${((p.price_rmb||0) * settings.exchangeRate).toFixed(2)} QR/${UNITS[p.unit]}</div>` : `<div class="card-meta" style="color:#b91c1c">⚠️ لم يُدخل السعر بعد</div>`}${p.qty_per_villa ? `<div class="card-meta">📐 ${p.qty_per_villa} ${UNITS[p.unit]}/فيلا → ${totalQty} ${UNITS[p.unit]}${hasPrice ? ` · <strong>${totalQR.toLocaleString('en-US',{maximumFractionDigits:0})} QR</strong>` : ''}</div>` : ''}${p.notes ? `<div class="card-sub" style="margin-top:4px; font-style:italic">${escapeHtml(p.notes)}</div>` : ''}<div class="card-actions"><button class="card-btn" onclick="openProductModal('${p.id}')">✏️ تعديل</button><button class="card-btn danger" onclick="deleteProduct('${p.id}')">🗑️</button></div></div></div></div>`;
  }).join('');
}
function renderSuppliers() {
  const container = document.getElementById('suppliers-list');
  if (suppliers.length === 0) { container.innerHTML = `<div class="empty"><span class="empty-icon">🏢</span>لا يوجد موردين بعد</div>`; return; }
  container.innerHTML = suppliers.map(s => {
    const count = products.filter(p => p.supplier_id === s.id).length;
    return `<div class="card"><div class="card-row">${s.card_photo ? `<img class="card-img" src="${s.card_photo}">` : `<div class="card-img card-img-placeholder" style="background:#dbeafe; color:#1d4ed8; font-size:18px; font-weight:600">${escapeHtml((s.name||'?').substring(0,2).toUpperCase())}</div>`}<div class="card-content"><div style="display:flex; justify-content:space-between; gap:8px;"><div><div class="card-title">${escapeHtml(s.name)}</div>${s.specialty ? `<div class="card-sub">${escapeHtml(s.specialty)}</div>` : ''}</div>${s.rating ? `<span style="font-size:11px; color:#15803d; font-weight:500">${RATING_LABELS[s.rating]}</span>` : ''}</div>${s.contact || s.city ? `<div class="card-meta" style="color:#64748b">${escapeHtml(s.contact)}${s.contact && s.city ? ' · ' : ''}${escapeHtml(s.city)}</div>` : ''}${s.wechat ? `<div class="card-meta">💬 ${escapeHtml(s.wechat)}</div>` : ''}<div class="card-sub" style="margin-top:4px">${count} منتج مرتبط</div><div class="card-actions"><button class="card-btn" onclick="openSupplierModal('${s.id}')">✏️ تعديل</button><button class="card-btn danger" onclick="deleteSupplier('${s.id}')">🗑️</button></div></div></div></div>`;
  }).join('');
}
function renderComparison() {
  const cat = document.getElementById('compare-category').value;
  const items = products.filter(p => p.category === cat && p.status !== 'rejected' && (p.price_rmb||0) > 0);
  const container = document.getElementById('compare-list');
  if (items.length === 0) { container.innerHTML = `<div class="empty"><span class="empty-icon">⚖️</span>لا يوجد منتجات بسعر في هذه الفئة للمقارنة</div>`; return; }
  const groups = {};
  items.forEach(p => { const key = (p.name || '').trim().toLowerCase(); if (!groups[key]) groups[key] = []; groups[key].push(p); });
  const sortedItems = [...items].sort((a,b) => (a.price_rmb * settings.exchangeRate) - (b.price_rmb * settings.exchangeRate));
  let html = '';
  Object.entries(groups).filter(([k,v]) => v.length > 1).forEach(([name, group]) => {
    group.sort((a,b) => (a.price_rmb||0) - (b.price_rmb||0));
    const minPrice = group[0].price_rmb || 0;
    const maxPrice = group[group.length-1].price_rmb || 0;
    const savings = (maxPrice - minPrice) * settings.exchangeRate * Math.ceil((group[0].qty_per_villa||0) * settings.numVillas * 1.1);
    html += `<div class="compare-group"><div style="font-weight:600; font-size:14px; margin-bottom:8px">${escapeHtml(group[0].name)}</div>${savings > 0 ? `<div class="compare-savings">💰 توفير محتمل: ${savings.toLocaleString('en-US',{maximumFractionDigits:0})} QR</div>` : ''}${group.map((p, i) => { const sup = suppliers.find(s => s.id === p.supplier_id); const qr = (p.price_rmb||0) * settings.exchangeRate; const isBest = i === 0 && group.length > 1; return `<div class="compare-row ${isBest ? 'best' : ''}"><div>${isBest ? '<span class="best-tag">★ الأفضل</span>' : ''}<strong>${sup ? escapeHtml(sup.name) : 'بدون مورد'}</strong>${p.model ? `<div style="font-size:11px; color:#64748b">${escapeHtml(p.model)}</div>` : ''}</div><div style="text-align:start"><div style="font-weight:600">¥${(p.price_rmb||0).toFixed(2)}</div><div style="font-size:11px; color:#64748b">${qr.toFixed(2)} QR/${UNITS[p.unit]}</div></div></div>`; }).join('')}</div>`;
  });
  html += `<div class="section-h"><h4>كل المنتجات بسعر</h4><span class="count">${items.length}</span></div>`;
  sortedItems.forEach(p => {
    const sup = suppliers.find(s => s.id === p.supplier_id);
    const qr = (p.price_rmb||0) * settings.exchangeRate;
    html += `<div class="compare-row" style="background:white; border:1px solid #e2e8f0; margin-bottom:6px"><div><strong>${escapeHtml(p.name)}</strong><div style="font-size:11px; color:#64748b">${sup ? escapeHtml(sup.name) : '—'}</div></div><div style="text-align:start"><strong>${qr.toFixed(2)} QR</strong>/${UNITS[p.unit]}</div></div>`;
  });
  container.innerHTML = html;
}
function renderBudget() {
  const inputs = document.getElementById('budget-inputs');
  inputs.innerHTML = Object.entries(CATEGORIES).map(([key, c]) => `<div class="budget-row"><span>${c.icon} ${c.label}</span><input type="number" id="budget-${key}" value="${settings.budgets[key] || ''}" placeholder="0" oninput="updateBudget('${key}', this.value)"><span style="font-size:11px; color:#64748b; flex:none">QR</span></div>`).join('');
  const summary = document.getElementById('budget-summary');
  let html = '<div class="card" style="margin-top:12px"><h4 style="margin:0 0 12px; font-size:14px; font-weight:600">المقارنة الفعلية</h4>';
  Object.entries(CATEGORIES).forEach(([key, c]) => {
    const planned = settings.budgets[key] || 0;
    const actual = products.filter(p => p.category === key).reduce((sum, p) => { const totalQty = Math.ceil((p.qty_per_villa||0) * settings.numVillas * 1.1); return sum + (totalQty * (p.price_rmb||0) * settings.exchangeRate); }, 0);
    const pct = planned > 0 ? Math.min(100, (actual / planned) * 100) : 0;
    const over = actual > planned && planned > 0;
    html += `<div style="margin-bottom:12px"><div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px"><span>${c.label}</span><span style="color:${over ? '#dc2626' : '#64748b'}">${actual.toLocaleString('en-US',{maximumFractionDigits:0})} / ${planned.toLocaleString('en-US',{maximumFractionDigits:0})} QR</span></div><div class="progress-bar"><div class="progress-fill ${over ? 'over' : ''}" style="width:${pct}%"></div></div></div>`;
  });
  html += '</div>';
  summary.innerHTML = html;
}
async function updateBudget(key, val) {
  settings.budgets[key] = parseFloat(val) || 0;
  await saveSettingsToServer();
  updateStats();
}
function updateStats() {
  document.getElementById('stat-products').textContent = products.length;
  const totalBuild = products.reduce((sum, p) => { const totalQty = Math.ceil((p.qty_per_villa||0) * settings.numVillas * 1.1); return sum + (totalQty * (p.price_rmb||0) * settings.exchangeRate); }, 0);
  const totalPersonal = expenses.reduce((sum, x) => sum + expenseToQR(x), 0);
  const grand = totalBuild + totalPersonal;
  document.getElementById('stat-total').textContent = totalBuild.toLocaleString('en-US',{maximumFractionDigits:0});
  document.getElementById('stat-personal').textContent = totalPersonal.toLocaleString('en-US',{maximumFractionDigits:0});
  document.getElementById('stat-grand').textContent = grand.toLocaleString('en-US',{maximumFractionDigits:0});
}
function renderAll() { updateStats(); renderChecklist(); renderProducts(); renderSuppliers(); renderExpenses(); }

function exportData() {
  const data = { products, suppliers, expenses, settings, exportedAt: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `salwa1-china-${new Date().toISOString().split('T')[0]}.json`;
  a.click(); URL.revokeObjectURL(url);
}

// ============ INIT ============
async function initApp() {
  document.getElementById('app').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
  const ok = await initSupabase();
  if (!ok) return;
  await syncFromServer();
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loading').style.display = 'none';
  const hasConfig = loadConfig();
  if (!hasConfig) {
    document.getElementById('setup-screen').style.display = 'flex';
  } else if (sessionStorage.getItem('china_auth') === '1') {
    initApp();
  } else {
    document.getElementById('login-screen').style.display = 'flex';
  }
});
