// ─── State ───────────────────────────────────────────────────────────────────
const terminal = document.getElementById('terminal');
const input    = document.getElementById('cmd-input');
const toast    = document.getElementById('toast');

let history    = [];
let histIdx    = -1;
let histBuffer = '';

// ─── Commands registry ───────────────────────────────────────────────────────
const COMMANDS = {
  'help':     { alias: '-h',  fn: cmdHelp },
  'leyfetch': { alias: '-lf', fn: cmdLeyfetch },
  'projects': { alias: '-pr', fn: cmdProjects },
  'about':    { alias: '-ab', fn: cmdAbout },
  'clear':    { alias: '-cl', fn: cmdClear },
  'restart':  { alias: '-rt', fn: cmdRestart },
  'gui':      { alias: '-g',  fn: cmdGui },
  'whoami':   { alias: null,  fn: cmdWhoami },
  'sudo -i':  { alias: null,  fn: cmdSudo },
  'kamote':   { alias: null,  fn: cmdKamote },
};

const ALL_VALID = new Set([
  ...Object.keys(COMMANDS),
  ...Object.values(COMMANDS).map(c => c.alias).filter(Boolean),
  'sudo', ''
]);

// ─── Output helpers ──────────────────────────────────────────────────────────
function line(html = '', cls = '') {
  const el = document.createElement('div');
  el.className = 'line' + (cls ? ' ' + cls : '');
  el.innerHTML = html;
  terminal.appendChild(el);
  terminal.scrollTop = terminal.scrollHeight;
  return el;
}

function blank() { line(''); }

function sep() {
  line('<span class="separator">────────────────────────────────────────────────────────────</span>');
}

function echoCmd(val) {
  line(
    `<span class="u-name">guest</span><span class="u-at">@</span>` +
    `<span class="u-host">L3Y</span><span class="u-sep">:~ </span>` +
    `<span class="u-hash">#</span> <span class="cmd-echo">${escHtml(val)}</span>`
  );
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1500);
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ─── Boot sequence ───────────────────────────────────────────────────────────
const BOOT_LINES = [
  { html: '<span class="c-green">L3Y Terminal</span> <span class="c-gray">v2.0.0</span>', delay: 0 },
  { html: '<span class="c-gray">Type <span class="c-yellow">help</span> for a list of commands.</span>', delay: 80 },
  { html: '<span class="c-gray">Type <span class="c-yellow">leyfetch</span> to see my socials.</span>', delay: 160 },
  { html: '<span class="c-gray">Type <span class="c-yellow">gui</span> to open the GUI version.</span>', delay: 240 },
  { html: '', delay: 320 },
];

BOOT_LINES.forEach(({ html, delay }) => {
  setTimeout(() => line(html, 'boot-line'), delay);
});

setTimeout(() => input.focus(), 400);

// ─── Command functions ────────────────────────────────────────────────────────
function cmdHelp() {
  blank();
  line('<span class="c-yellow">Available commands</span>');
  sep();
  const cmds = [
    ['help',     '-h',  'Lists all available commands.'],
    ['leyfetch', '-lf', 'Shows my social media profiles.'],
    ['projects', '-pr', 'Shows projects I\'ve worked on.'],
    ['about',    '-ab', 'Info about the developer.'],
    ['clear',    '-cl', 'Clears the terminal.'],
    ['restart',  '-rt', 'Refreshes the page.'],
    ['gui',      '-g',  'Opens the GUI version.'],
    ['whoami',   '',    'Shows current user.'],
    ['sudo -i',  '',    '👀'],
  ];
  cmds.forEach(([cmd, alias, desc]) => {
    const c = cmd.padEnd(10);
    const a = alias.padEnd(6);
    line(`<span class="c-green">${c}</span><span class="c-gray">${a}</span>  ${desc}`);
  });
  blank();
}

function cmdLeyfetch() {
  blank();
  line(`<span class="c-yellow">   /\\_____/\\</span>        <span class="c-fg">email   </span> <span class="c-gray">laurenzlauro9<span class="c-yellow">@</span>gmail.com</span>`);
  line(`<span class="c-yellow">  /</span>  <span class="c-fg">o   o</span>  <span class="c-yellow">\\</span>       <span class="separator">────────────────────────────────────</span>`);
  line(`<span class="c-yellow"> (</span> <span class="c-fg">==  ^  ==</span> <span class="c-yellow">)</span>      <span class="c-fg">discord </span> <a href="https://discord.gg/wV86RZUR7V" target="_blank">https://discord.gg/wV86RZUR7V</a>`);
  line(`<span class="c-yellow">  )         (       </span><span class="c-fg">facebook</span> <a href="https://www.facebook.com/LLUVSICC/" target="_blank">https://www.facebook.com/LLUVSICC/</a>`);
  line(`<span class="c-yellow"> (           )      </span><span class="c-fg">youtube </span> <a href="https://www.youtube.com/@prodbyluvsic" target="_blank">https://www.youtube.com/@prodbyluvsic</a>`);
  line(`<span class="c-yellow">(  (  )   (  )  )   </span><span class="c-fg">onlyfans</span> <a href="https://only-fans.me/ley" target="_blank">https://only-fans.me/ley</a>`);
  line(`<span class="c-yellow">(__(__)___(__)__)   </span><span class="c-fg">github  </span> <a href="https://github.com/L3yyy" target="_blank">https://github.com/L3yyy</a>`);
  blank();
}

function cmdProjects() {
  blank();
  line('<span class="c-yellow">Projects</span>');
  sep();
  line(`<span class="c-green">L3Y KALKYU               </span><a href="https://l3yyy.github.io/L3Y-KALKYU" target="_blank">https://l3yyy.github.io/L3Y-KALKYU</a>`);
  line(`<span class="c-green">LCBA Unofficial (TVL-HE) </span><a href="https://l3yyy.github.io/LCBA_Unonfficial_Website_V2/" target="_blank">https://l3yyy.github.io/L3Y-KALKYU</a>`);
  blank();
}

function cmdAbout() {
  blank();
  line('<span class="c-purple" style="font-size:1.1em;font-weight:bold;">@L3yyy</span>');
  blank();
  line('<span class="c-gray">Hola! I\'m L3yyy, a 17-year-old dev-hobbyist from the Philippines.</span>');
  line('<span class="c-gray">I\'ve loved computers since I was 4 years old. I started coding at</span>');
  line('<span class="c-gray">the age of 12 and have been learning ever since. My goal is to</span>');
  line('<span class="c-gray">become a full-stack developer and maybe take on some freelance work.</span>');
  blank();
  line(`<span class="c-fg">os      </span><span class="c-gray">Philippines 🇵🇭</span>`);
  line(`<span class="c-fg">age     </span><span class="c-gray">17</span>`);
  line(`<span class="c-fg">role    </span><span class="c-gray">dev-hobbyist / student</span>`);
  line(`<span class="c-fg">stack   </span><span class="c-gray">HTML · CSS · JS</span>`);
  blank();
}

function cmdClear() {
  terminal.innerHTML = '';
}

function cmdRestart() {
  line('<span class="c-gray">Restarting...</span>');
  setTimeout(() => location.reload(), 600);
}

function cmdGui() {
  line('<span class="c-gray">Opening GUI version...</span>');
  window.open('https://l3yyy.github.io/L3Y-GUI/', '_blank');
}

function cmdWhoami() {
  line('<span class="c-gray">guest</span>');
}

function cmdSudo() {
  line('<span class="c-gray">Escalating privileges...</span>');
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }, 400);
}

function cmdKamote() {
  blank();
  line(`<span class="c-yellow">▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄</span>`);
  line(`<span class="c-yellow">██░███░█░████░▄▄▀█▄░▄████▄██░▄▄███░██░▄▄▀█░▄▄▀█░▄▄▄██</span>`);
  line(`<span class="c-yellow">██░█░█░█░▄▄░█░▀▀░██░█████░▄█░▄████░██░▀▀░█░██░█░█▄▀██</span>`);
  line(`<span class="c-yellow">██▄▀▄▀▄█▄██▄█▄██▄██▄████▄▄▄█▄█████▄▄█▄██▄█▄██▄█▄▄▄▄██</span>`);
  blank();
  // Play audio if available
  try {
    const audio = new Audio('kamote_cmd.wav');
    audio.play().catch(() => {});
  } catch(e) {}
}

// ─── Command execution ────────────────────────────────────────────────────────
function execute(raw) {
  const val = raw.trim();
  echoCmd(val);

  if (val === '') { return; }

  // Find command by name or alias
  let fn = null;
  for (const [name, { alias, fn: f }] of Object.entries(COMMANDS)) {
    if (val === name || (alias && val === alias)) { fn = f; break; }
  }

  if (fn) {
    fn();
  } else {
    line(`<span class="c-red">${escHtml(val)}</span><span class="c-gray">: command not found. Type <span class="c-yellow">help</span> for a list of commands.</span>`);
  }
  blank();
}

// ─── Input handling ───────────────────────────────────────────────────────────
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const val = input.value;
    if (val.trim()) {
      history.unshift(val);
      if (history.length > 100) history.pop();
    }
    histIdx = -1;
    histBuffer = '';
    input.value = '';
    execute(val);
    return;
  }

  // History navigation
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx === -1) histBuffer = input.value;
    if (histIdx < history.length - 1) {
      histIdx++;
      input.value = history[histIdx];
      // Move cursor to end
      requestAnimationFrame(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
      });
    }
    return;
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) {
      histIdx--;
      input.value = history[histIdx];
    } else if (histIdx === 0) {
      histIdx = -1;
      input.value = histBuffer;
    }
    return;
  }

  // Tab autocomplete
  if (e.key === 'Tab') {
    e.preventDefault();
    const partial = input.value.toLowerCase();
    if (!partial) return;
    const matches = [...Object.keys(COMMANDS), ...Object.values(COMMANDS).map(c => c.alias).filter(Boolean)]
      .filter(c => c && c.startsWith(partial));
    if (matches.length === 1) {
      input.value = matches[0];
    } else if (matches.length > 1) {
      echoCmd(input.value);
      line('<span class="c-gray">' + matches.join('  ') + '</span>');
    }
    return;
  }

  // Ctrl+C cancel
  if (e.ctrlKey && e.key.toLowerCase() === 'c' && !e.shiftKey) {
    e.preventDefault();
    echoCmd(input.value + '^C');
    input.value = '';
    histIdx = -1;
    return;
  }

  // Ctrl+L clear
  if (e.ctrlKey && e.key.toLowerCase() === 'l') {
    e.preventDefault();
    cmdClear();
    return;
  }

  // Ctrl+Shift+C copy
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
    showToast('Copied!');
    return;
  }

  // Ctrl+A prevent select all
  if (e.ctrlKey && e.key.toLowerCase() === 'a') {
    e.preventDefault();
  }
});

// Highlight invalid commands in real time
input.addEventListener('input', () => {
    const val = input.value.trim().toLowerCase();
    const valid = ALL_VALID.has(val) ||
        [...Object.keys(COMMANDS), ...Object.values(COMMANDS).map(c => c.alias).filter(Boolean)]
        .some(c => c && c.startsWith(val));
    input.classList.toggle('invalid', val !== '' && !valid);
});

// Keep input focused when clicking anywhere in terminal
document.addEventListener('click', (e) => {
  if (!window.getSelection().toString()) {
    input.focus();
  }
});
