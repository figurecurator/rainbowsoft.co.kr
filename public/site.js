
    document.querySelector(".video-launch").addEventListener("click", () => {
      const player = document.createElement("iframe");
      player.src = "https://www.youtube-nocookie.com/embed/s3IlkEXugUM?autoplay=1";
      player.title = "Oshi Atlas 소개 영상";
      player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      player.allowFullscreen = true;
      player.referrerPolicy = "strict-origin-when-cross-origin";
      document.getElementById("video-frame").replaceChildren(player);
      player.focus();
    });
    document.querySelectorAll("[data-copy-target]").forEach((button) => {
      const target = document.getElementById(button.dataset.copyTarget);
      const status = button.closest(".agent-setup").querySelector(".copy-status");
      let timer;
      const show = (label, message) => {
        button.textContent = label;
        status.textContent = message;
        clearTimeout(timer);
        timer = setTimeout(() => { button.textContent = "복사"; status.textContent = ""; }, 2500);
      };
      const selectText = () => {
        const range = document.createRange();
        range.selectNodeContents(target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        target.focus();
        show("복사", "자동 복사를 쓸 수 없어 문장을 선택했습니다. Ctrl+C 또는 ⌘C로 복사하세요.");
      };
      button.addEventListener("click", async () => {
        const text = target.textContent;
        if (!navigator.clipboard || !window.isSecureContext) return selectText();
        try {
          await navigator.clipboard.writeText(text);
          show("복사됨", "설치 명령어를 클립보드에 복사했습니다.");
        } catch {
          selectText();
        }
      });
    });
  
