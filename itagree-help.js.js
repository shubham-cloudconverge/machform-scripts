(function checkFormLoaded() {
  if (typeof $ === 'undefined' || $('.form-buttons, .mf_pagebreak_buttons').length === 0) {
    setTimeout(checkFormLoaded, 200);
    return;
  }

  const helpHtml = `
    <div style="margin-top: 10px; text-align: center;" class="itagree-help">
      Need Help? <a target="_blank" href="https://www.google.com" rel="noreferrer noopener">Ask ITagree</a>
    </div>
  `;

  $('.mf_pagebreak_buttons, .form-buttons').each(function () {
    if (!$(this).prev().hasClass('itagree-help')) {
      $(helpHtml).insertBefore($(this));
    }
  });
})();
