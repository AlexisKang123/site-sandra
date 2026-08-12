/* ==============================================================
   RENDERIZAÇÃO DA LINHA DO TEMPO
   ==============================================================
   Observação de segurança: todo texto vindo de data.js é inserido
   com textContent (nunca innerHTML), então mesmo que algum campo
   tenha um caractere estranho, ele nunca é interpretado como
   HTML/JavaScript — só aparece como texto puro na tela.
   ============================================================== */

(function () {
  "use strict";

  const timelineEl = document.getElementById("timeline");
  const lightbox = document.getElementById("lightbox");
  const lightboxStage = document.getElementById("lightboxStage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  /**
   * Só aceita caminhos relativos dentro de assets/ — nunca um
   * link para fora deste site. Isso é uma camada extra: mesmo
   * sem isso, a Content-Security-Policy do index.html já bloqueia
   * o carregamento de qualquer mídia que não seja deste domínio.
   */
  function isSafeLocalPath(src) {
    if (typeof src !== "string" || src.length === 0) return false;
    const lower = src.toLowerCase();
    if (lower.startsWith("http://") || lower.startsWith("https://")) return false;
    if (lower.startsWith("//")) return false;
    if (lower.startsWith("javascript:") || lower.startsWith("data:text")) return false;
    if (src.includes("..")) return false;
    return true;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = text;
    return node;
  }

  function buildMediaItem(item) {
    const wrap = el("div", "media-item");

    if (!isSafeLocalPath(item.src)) {
      wrap.classList.add("media-empty");
      wrap.textContent = "(mídia com caminho inválido — verifique data.js)";
      return wrap;
    }

    if (item.type === "photo") {
      wrap.classList.add("is-photo");
      const img = document.createElement("img");
      img.src = item.src;
      img.loading = "lazy";
      img.alt = item.caption || "foto";
      wrap.appendChild(img);
      wrap.addEventListener("click", () => openLightbox("photo", item.src, item.caption));
    } else if (item.type === "video") {
      wrap.classList.add("is-video");

      // thumbnail: vídeo sem controles, só para mostrar o primeiro frame
      const thumb = document.createElement("video");
      thumb.src = item.src;
      thumb.preload = "metadata";
      thumb.muted = true;
      thumb.setAttribute("playsinline", "");
      // sem controls — o clique abre o lightbox
      wrap.appendChild(thumb);

      // ícone de play sobreposto
      const playIcon = document.createElement("div");
      playIcon.className = "video-play-icon";
      playIcon.setAttribute("aria-hidden", "true");
      playIcon.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M6 4l12 6-12 6V4z" fill="#4A1F2B"/></svg>';
      wrap.appendChild(playIcon);

      wrap.addEventListener("click", () => openLightbox("video", item.src, item.caption));
    } else if (item.type === "audio") {
      wrap.classList.add("is-audio");
      const audio = document.createElement("audio");
      audio.src = item.src;
      audio.controls = true;
      wrap.appendChild(audio);
    } else {
      wrap.classList.add("media-empty");
      wrap.textContent = "(tipo de mídia desconhecido: " + String(item.type) + ")";
      return wrap;
    }

    if (item.caption) {
      wrap.appendChild(el("p", "media-caption", item.caption));
    }
    return wrap;
  }

  function buildMonth(month, index) {
    const li = el("li", "month");
    li.id = "mes-" + (month.id || index);

    const node = el("div", "month-node");
    node.setAttribute("aria-hidden", "true");
    li.appendChild(node);

    const trigger = el("button", "month-trigger");
    trigger.type = "button";
    const panelId = "painel-" + (month.id || index);
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", panelId);

    trigger.appendChild(el("span", "month-date", month.dateLabel || ""));
    trigger.appendChild(el("h2", "month-title", month.title || "Sem título"));
    if (month.teaser) {
      trigger.appendChild(el("p", "month-teaser", month.teaser));
    }
    li.appendChild(trigger);

    const panel = el("div", "month-panel");
    panel.id = panelId;
    const inner = el("div", "month-panel-inner");

    const paragraphs = Array.isArray(month.text) ? month.text : [month.text];
    paragraphs.filter(Boolean).forEach((p) => {
      inner.appendChild(el("p", "month-text", p));
    });

    const mediaList = Array.isArray(month.media) ? month.media : [];
    if (mediaList.length > 0) {
      const grid = el("div", "media-grid");
      mediaList.forEach((item) => grid.appendChild(buildMediaItem(item)));
      inner.appendChild(grid);
    } else {
      inner.appendChild(el("p", "media-empty", "ainda não há fotos, vídeos ou áudios neste mês."));
    }

    panel.appendChild(inner);
    li.appendChild(panel);

    trigger.addEventListener("click", () => toggleMonth(li, trigger));

    return li;
  }

  function toggleMonth(li, trigger) {
    const willOpen = !li.classList.contains("is-open");

    // fecha os outros meses (uma "caixinha" aberta por vez)
    document.querySelectorAll(".month.is-open").forEach((openLi) => {
      if (openLi !== li) {
        openLi.classList.remove("is-open");
        const otherTrigger = openLi.querySelector(".month-trigger");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
      }
    });

    li.classList.toggle("is-open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));

    if (willOpen) {
      window.requestAnimationFrame(() => {
        li.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function openLightbox(type, src, caption) {
    lightboxStage.textContent = "";

    if (type === "photo") {
      const img = document.createElement("img");
      img.src = src;
      img.alt = caption || "";
      lightboxStage.appendChild(img);

    } else if (type === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.setAttribute("playsinline", "");
      // sem aspect-ratio fixo — respeita a proporção gravada
      // max-width/max-height limitam a 90 vw / 82 vh via CSS
      lightboxStage.appendChild(video);
    }

    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    lightboxClose.focus();
  }

  function closeLightbox() {
    // pausa qualquer vídeo antes de remover do DOM
    const video = lightboxStage.querySelector("video");
    if (video) { video.pause(); }
    lightbox.hidden = true;
    lightboxStage.textContent = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  function render() {
    if (typeof MONTHS === "undefined" || !Array.isArray(MONTHS)) {
      timelineEl.appendChild(el("li", "media-empty", "Nenhum mês encontrado em js/data.js."));
      return;
    }
    MONTHS.forEach((month, i) => {
      timelineEl.appendChild(buildMonth(month, i));
    });
  }

  render();
})();