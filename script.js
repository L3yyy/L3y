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
    } catch (e) {}
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
