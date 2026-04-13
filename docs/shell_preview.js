(function () {
  // ── Active page from body attribute ─────────────────────────
  const activePage = document.body.dataset.page || '';

  // ── CSS ──────────────────────────────────────────────────────
  const css = `
    .bn-shell{
      display:flex;align-items:center;
      background:#fff;
      padding:8px 48px 8px 14px;
      gap:120px;
      flex-shrink:0;
      box-shadow:0 0 2px rgba(34,54,73,.2),0 2px 4px rgba(34,54,73,.2);
      z-index:100;
      position:relative;
      box-sizing:border-box;
    }
    .bn-shell-left{display:flex;align-items:center;gap:16px;height:52px;flex-shrink:0;}
    .bn-shell-logo-wrap{display:flex;align-items:center;flex-shrink:0;}
    .bn-shell-menu-btn{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;border:none;
      background:transparent;cursor:pointer;flex-shrink:0;
    }
    .bn-shell-menu-btn:hover{background:rgba(0,0,0,.06);}
    .bn-shell-brand-btn{
      display:flex;align-items:center;justify-content:center;gap:6px;
      min-height:36px;padding:10px;border-radius:8px;
      border:1px solid transparent;background:transparent;
      cursor:pointer;white-space:nowrap;flex-shrink:0;
    }
    .bn-shell-brand-btn:hover{background:rgba(0,0,0,.05);}
    .bn-shell-brand-text{
      font-family:"72","72full",Arial,sans-serif;
      font-size:16px;font-weight:700;color:#002a86;line-height:1;
    }
    .bn-shell-brand-arrow{width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .bn-test-tag{
      display:flex;align-items:center;
      background:#f8d6ff;border:1px solid #f8d6ff;
      color:#a100c2;font-size:12px;font-weight:700;
      font-family:"72","72full",Arial,sans-serif;
      border-radius:8px;padding:3px 8px;
      white-space:nowrap;flex-shrink:0;line-height:16px;
    }
    .bn-shell-center{
      position:absolute;left:0;right:0;
      display:flex;justify-content:center;
      pointer-events:none;
    }
    .bn-search-wrap{
      width:400px;display:flex;align-items:center;
      background:#eff1f2;border-radius:18px;
      box-shadow:inset 0 0 0 1px rgba(85,107,129,.25);
      padding:4px 4px 4px 0;height:36px;box-sizing:border-box;
      pointer-events:all;
    }
    .bn-search-menu-btn{display:flex;align-items:center;justify-content:flex-end;padding-right:5px;width:100px;flex-shrink:0;}
    .bn-search-select-inner{
      display:flex;align-items:center;gap:6px;
      min-height:26px;padding:5px 8px;
      border-radius:8px;border:1px solid transparent;
      background:transparent;cursor:pointer;
    }
    .bn-search-select-inner:hover{background:rgba(0,0,0,.05);}
    .bn-search-select-text{font-family:"72","72full",Arial,sans-serif;font-size:14px;color:#556b82;flex:1;min-width:0;}
    .bn-search-select-arrow{width:16px;height:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .bn-search-sep{width:1px;height:24px;background:#556b81;border-radius:12px;flex-shrink:0;}
    .bn-search-input{
      flex:1;border:none;background:transparent;outline:none;
      font-family:"72","72full",Arial,sans-serif;
      font-size:14px;font-style:italic;color:#556b82;padding:0 8px;
    }
    .bn-search-btn{
      background:transparent;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;flex-shrink:0;
    }
    .bn-search-btn:hover{background:rgba(0,0,0,.06);}
    .bn-shell-right{display:flex;align-items:center;justify-content:flex-end;gap:16px;margin-left:auto;flex-shrink:0;}
    .bn-shell-enterprise-wrap{display:flex;align-items:center;gap:16px;flex-shrink:0;}
    .bn-shell-enterprise{font-family:"72","72full",Arial,sans-serif;font-size:14px;color:#556b82;white-space:nowrap;}
    .bn-shell-divider{width:1px;height:24px;background:#d9d9d9;flex-shrink:0;}
    .bn-shell-actions{display:flex;align-items:center;gap:8px;}
    .bn-icon-btn{
      background:transparent;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      width:44px;height:44px;border-radius:8px;flex-shrink:0;
    }
    .bn-icon-btn:hover{background:rgba(0,0,0,.06);}
    .bn-avatar{
      width:32px;height:32px;border-radius:50%;
      background:#e76500;color:#fff;
      font-family:"72","72full",Arial,sans-serif;
      font-size:12px;font-weight:700;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;position:relative;flex-shrink:0;
    }
    .bn-avatar-dot{
      position:absolute;bottom:0;right:0;
      width:10px;height:10px;background:#6bb700;border-radius:50%;
      border:2px solid #fff;
    }
    .app-body{display:flex;flex:1;min-height:0;}
    .bn-sidenav{
      width:62px;min-width:62px;background:#fff;
      display:flex;flex-direction:column;justify-content:space-between;
      box-shadow:0 0 2px rgba(34,53,72,.2),0 2px 4px rgba(34,53,72,.2);
      z-index:5;flex-shrink:0;height:100%;
    }
    .bn-sidenav-content{flex:1;display:flex;flex-direction:column;gap:4px;padding:8px 8px 0 8px;}
    .bn-nav-item{
      display:flex;align-items:center;
      width:48px;height:32px;
      padding-left:2px;padding-right:14px;
      border-radius:8px;border:none;background:#fff;
      cursor:pointer;position:relative;overflow:hidden;
      flex-shrink:0;box-sizing:border-box;
    }
    .bn-nav-item:hover{background:#f5f5f5;}
    .bn-nav-item.active{background:#ebf8ff;}
    .bn-nav-item.active .bn-nav-indicator{display:block;}
    .bn-nav-indicator{display:none;position:absolute;left:0;top:0;bottom:0;width:3px;background:#0064d9;}
    .bn-nav-icon-wrap{
      display:flex;align-items:center;justify-content:center;
      width:44px;height:100%;flex-shrink:0;
      padding:8px 14px;margin-right:-12px;box-sizing:border-box;color:#556b82;
    }
    .bn-nav-item.active .bn-nav-icon-wrap{margin-right:-3px;color:#0064d9;}
    .bn-nav-arrow{
      display:none;align-items:center;justify-content:center;
      width:12px;height:12px;flex-shrink:0;margin-right:-12px;color:#556b82;
    }
    .bn-nav-item.has-arrow .bn-nav-arrow{display:flex;}
    .bn-nav-item.active .bn-nav-arrow{margin-right:-3px;}
    .bn-sidenav-footer{
      display:flex;flex-direction:column;gap:4px;align-items:center;
      padding:4px 0 8px 0;flex-shrink:0;width:62px;
    }
    .bn-sidenav-sep{height:1px;background:#d9d9d9;width:46px;margin:0 8px;}
    .bn-footer-write{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;
      border:1px solid #bcc3ca;background:#fff;cursor:pointer;
      box-sizing:border-box;color:#556b82;
    }
    .bn-footer-write:hover{background:#f5f5f5;}
    .bn-footer-icon{
      display:flex;align-items:center;justify-content:center;
      width:32px;height:32px;border-radius:8px;
      border:none;background:#fff;cursor:pointer;
      box-sizing:border-box;color:#556b82;
    }
    .bn-footer-icon:hover{background:#f5f5f5;}
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Shell Bar HTML ────────────────────────────────────────────
  const shellHTML = `
<div class="bn-shell">
  <div class="bn-shell-left">
    <div class="bn-shell-logo-wrap">
      <button class="bn-shell-menu-btn" title="Main menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.25 12.5C15.664 12.5003 16 12.8359 16 13.25C16 13.6641 15.664 13.9997 15.25 14H0.75C0.335786 14 0 13.6642 0 13.25C0 12.8358 0.335786 12.5 0.75 12.5H15.25ZM15.25 7C15.664 7.00026 16 7.33595 16 7.75C16 8.16405 15.664 8.49974 15.25 8.5H0.75C0.335786 8.5 0 8.16421 0 7.75C0 7.33579 0.335786 7 0.75 7H15.25ZM15.25 2C15.664 2.00026 16 2.33595 16 2.75C16 3.16405 15.664 3.49974 15.25 3.5H0.75C0.335786 3.5 0 3.16421 0 2.75C0 2.33579 0.335786 2 0.75 2H15.25Z" fill="#131E29"/></svg>
      </button>
      <svg width="60" height="29" viewBox="0 0 60 29" fill="none" style="display:block;margin-left:2px;" aria-label="SAP">
        <g clip-path="url(#sap-clip-sh)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 29.3478H29.983L59.3257 0H0V29.3478Z" fill="url(#sap-grad-sh)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2068 5.86961H29.3477L29.3673 19.65L24.2653 5.86504H19.2064L14.8512 17.3779C14.3881 14.4483 11.3594 13.4374 8.97639 12.6803C7.40269 12.1748 5.73247 11.4313 5.74943 10.6096C5.76247 9.93526 6.64291 9.30983 8.39269 9.40309C9.5666 9.46635 10.6036 9.56091 12.6664 10.5574L14.6946 7.02265C12.8138 6.06526 10.2129 5.4607 8.0803 5.45874H8.06726C5.58052 5.45874 3.50986 6.26418 2.22639 7.59135C1.3316 8.51744 0.848995 9.69526 0.829429 10.9977C0.796821 12.7898 1.45356 14.0603 2.83356 15.0757C3.99965 15.93 5.49117 16.4844 6.8053 16.8913C8.42595 17.3935 9.74986 17.8305 9.73356 18.7605C9.72052 19.0996 9.59269 19.4166 9.34878 19.6722C8.94443 20.0896 8.32486 20.2461 7.46726 20.2631C5.81269 20.2983 4.5866 20.0381 2.63269 18.8831L0.828125 22.4635C2.78008 23.5735 4.85204 24.1305 7.20639 24.1305L7.73595 24.1266C9.78508 24.0894 11.4481 23.5983 12.7694 22.5353C12.8451 22.4746 12.9129 22.4133 12.9833 22.3513L12.7616 23.494L17.7051 23.4783L18.592 21.2074C19.5246 21.5257 20.5851 21.7018 21.7107 21.7018C22.8077 21.7018 23.8394 21.5348 24.7544 21.2348L25.3727 23.4783L34.2423 23.4868L34.2638 18.3098H36.1512C40.7131 18.3098 43.4099 15.9881 43.4099 12.0946C43.4086 7.75831 40.7868 5.86961 35.2068 5.86961ZM21.7107 17.6492C21.0292 17.6492 20.3901 17.5305 19.8403 17.3218L21.6899 11.4816H21.7257L23.5453 17.3381C22.9975 17.5337 22.3733 17.6492 21.7101 17.6492H21.7107ZM35.5499 14.2937H34.2625V9.587H35.5505C37.2657 9.587 38.6353 10.1583 38.6353 11.91C38.634 13.7231 37.2657 14.2937 35.5505 14.2937" fill="white"/>
        </g>
        <defs>
          <linearGradient id="sap-grad-sh" x1="29.6628" y1="0" x2="29.6628" y2="29.3485" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00AEEF"/><stop offset="0.212" stop-color="#0097DC"/>
            <stop offset="0.519" stop-color="#007CC5"/><stop offset="0.792" stop-color="#006CB8"/>
            <stop offset="1" stop-color="#0066B3"/>
          </linearGradient>
          <clipPath id="sap-clip-sh"><rect width="60" height="29" fill="white"/></clipPath>
        </defs>
      </svg>
      <button class="bn-shell-brand-btn" title="Business Network">
        <span class="bn-shell-brand-text">Business Network</span>
        <span class="bn-shell-brand-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.8292 6.27342C13.0923 6.59309 13.0462 7.06578 12.7267 7.32909L8.4796 10.8291C8.20272 11.0572 7.8025 11.0571 7.5255 10.8291L3.27355 7.32909C2.95375 7.06587 2.90782 6.59324 3.17101 6.27342C3.43423 5.95363 3.90686 5.9077 4.22667 6.17088L8.00206 9.27831L11.7735 6.17088C12.0932 5.90781 12.5659 5.95387 12.8292 6.27342Z" fill="#131E29"/></svg>
        </span>
      </button>
    </div>
    <span class="bn-test-tag">Test Mode</span>
  </div>

  <div class="bn-shell-center">
    <div class="bn-search-wrap">
      <div class="bn-search-menu-btn">
        <div class="bn-search-select-inner">
          <span class="bn-search-select-text">Select</span>
          <span class="bn-search-select-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.8292 6.27342C13.0923 6.59309 13.0462 7.06578 12.7267 7.32909L8.4796 10.8291C8.20272 11.0572 7.8025 11.0571 7.5255 10.8291L3.27355 7.32909C2.95375 7.06587 2.90782 6.59324 3.17101 6.27342C3.43423 5.95363 3.90686 5.9077 4.22667 6.17088L8.00206 9.27831L11.7735 6.17088C12.0932 5.90781 12.5659 5.95387 12.8292 6.27342Z" fill="#131E29"/></svg>
          </span>
        </div>
      </div>
      <div class="bn-search-sep"></div>
      <input class="bn-search-input" placeholder="Search" />
      <button class="bn-search-btn" title="Search">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7 1C10.3137 1 13 3.68629 13 7C13 8.38646 12.528 9.66175 11.7383 10.6777L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L10.6777 11.7383C9.66175 12.528 8.38646 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1ZM7 2.5C4.51472 2.5 2.5 4.51472 2.5 7C2.5 9.48528 4.51472 11.5 7 11.5C9.48528 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48528 2.5 7 2.5Z" fill="#131E29"/></svg>
      </button>
    </div>
  </div>

  <div class="bn-shell-right">
    <div class="bn-shell-enterprise-wrap">
      <span class="bn-shell-enterprise">Enterprise</span>
      <div class="bn-shell-divider"></div>
    </div>
    <div class="bn-shell-actions">
      <button class="bn-icon-btn" title="Joule">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#da-clip-sh)"><path d="M12 0C12.2475 2.04033e-05 12.4794 0.121993 12.6192 0.326274L15.8692 5.07776C16.05 5.34206 16.0426 5.69214 15.8516 5.94913L8.60158 15.7022C8.30639 16.0993 7.69364 16.0993 7.39844 15.7022L0.148377 5.94913C-0.0426493 5.69213 -0.0499916 5.34207 0.130799 5.07776L3.43747 0.253986C3.57884 0.0936257 3.78332 0 3.99997 0H12ZM1.67085 5.48414L8.00001 13.9976L14.3282 5.48414L11.6045 1.50047H4.39548L1.67085 5.48414ZM9.16994 3.23441C9.27994 2.92338 9.7201 2.92338 9.83011 3.23441C10.2001 4.31779 10.68 4.8094 11.7598 5.17057C12.0798 5.28093 12.0798 5.73255 11.7598 5.83288C10.68 6.20408 10.1901 6.68566 9.83011 7.76904C9.7201 8.08007 9.27994 8.08007 9.16994 7.76904C8.79998 6.68567 8.31999 6.19405 7.24024 5.83288C6.92024 5.72252 6.92024 5.2709 7.24024 5.17057C8.31999 4.79937 8.80998 4.31778 9.16994 3.23441Z" fill="#131E29"/></g><defs><clipPath id="da-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <button class="bn-icon-btn bn-notif-btn" id="bn-notif-btn" title="Notifications" style="position:relative;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.99993 1C10.2093 1 11.6281 1.95567 12.4515 3.31543C13.2398 4.61717 13.4415 6.21709 13.4415 7.50488V8.14062C13.4415 9.2129 13.7823 10.1174 14.1324 10.7617C14.3206 11.1078 14.5411 11.4387 14.8009 11.7354C15.2431 12.204 14.8992 13 14.2546 13H10.4178C10.1367 14.15 9.16176 15 7.99993 15C6.83815 14.9999 5.86314 14.1499 5.5821 13H1.74524C1.09932 12.9998 0.756212 12.2016 1.20089 11.7334C1.23 11.7017 1.55014 11.3454 1.8674 10.7617C2.21754 10.1174 2.55835 9.21295 2.55835 8.14062V7.50488C2.55835 6.21712 2.76013 4.61716 3.54835 3.31543C4.37175 1.95566 5.79064 1.00006 7.99993 1ZM7.99993 2.5C6.30536 2.50006 5.37854 3.19013 4.83251 4.0918C4.25135 5.05158 4.05947 6.32926 4.05947 7.50488V8.14062C4.05947 9.54499 3.6099 10.7045 3.17405 11.5H12.8258C12.3897 10.7046 11.9404 9.54493 11.9404 8.14062V7.50488C11.9404 6.32922 11.7485 5.05159 11.1673 4.0918C10.6213 3.19014 9.69456 2.5 7.99993 2.5Z" fill="#131E29"/></svg>
        <span style="position:absolute;top:8px;right:8px;width:7px;height:7px;background:#bb0000;border-radius:50%;border:1.5px solid #fff;"></span>
      </button>
      <button class="bn-icon-btn" title="Campaigns">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#mc-clip-sh)"><path d="M14.8516 1.11612C15.1172 0.960815 15.3746 0.963672 15.6133 1.09561C15.8519 1.22771 16 1.47909 16 1.75186V12.2519C16 12.5247 15.8519 12.776 15.6133 12.9081C15.3745 13.0402 15.0827 13.0317 14.8516 12.8866C13.984 12.342 13.066 11.8656 12.1396 11.4306C10.882 10.84 9.44833 10.2908 8.19531 10.0868L8.7334 12.5946C8.7867 12.8434 8.71015 13.1023 8.53027 13.2821L7.03027 14.7821C6.8598 14.9526 6.61785 15.0307 6.37988 14.9921C6.14192 14.9535 5.93692 14.8025 5.8291 14.5868L3.53613 10.0019H3C1.34315 10.0019 0 8.65872 0 7.00187C2.73161e-05 5.34503 1.34316 4.00186 3 4.00186H7.25C8.68175 4.00186 10.5509 3.31917 12.1396 2.57315C12.1396 2.57315 14.5859 1.27142 14.8516 1.11612ZM3 5.50186C2.17159 5.50186 1.50003 6.17346 1.5 7.00187C1.5 7.83029 2.17157 8.50187 3 8.50187H4C4.28406 8.50187 4.54385 8.66284 4.6709 8.91691L6.70508 12.9853L7.18066 12.5097L6.5 9.25187V5.50186H3ZM14.5 3.05167C14.0282 3.31067 13.4369 3.62084 12.7773 3.93057C11.3909 4.58162 9.61242 5.27842 8 5.45694V8.54679C9.61241 8.72531 11.3909 9.42211 12.7773 10.0732C13.4367 10.3828 14.0283 10.6921 14.5 10.9511V3.05167Z" fill="#131E29"/></g><defs><clipPath id="mc-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <button class="bn-icon-btn" title="Messages">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.083 0C11.1389 0 12 0.861485 12 1.91782V3.0013H14.083C15.1389 3.0013 16 3.86278 16 4.91912V14.2562C16 14.9234 15.1554 15.2555 14.7012 14.7671L12.5889 12.4966H5.91699C4.86118 12.4966 4.00011 11.636 4 10.5798V9.49531H3.41113L1.29883 11.7658C0.844568 12.2542 0 11.9221 0 11.2549V1.91782C0 0.861484 0.861112 0 1.91699 0H10.083ZM12 7.57847C11.9999 8.63472 11.1388 9.49531 10.083 9.49531H5.5V10.5798C5.50011 10.8072 5.68961 10.996 5.91699 10.996H12.917C13.1251 10.9961 13.324 11.0829 13.4658 11.2353L14.5 12.3471V4.91912C14.5 4.69157 14.3105 4.50195 14.083 4.50195H12V7.57847ZM1.91699 1.50065C1.68954 1.50065 1.5 1.69027 1.5 1.91782V9.34583L2.53418 8.23403C2.67598 8.08163 2.87489 7.99476 3.08301 7.99467H10.083C10.3104 7.99467 10.4999 7.80593 10.5 7.57847V1.91782C10.5 1.69027 10.3105 1.50065 10.083 1.50065H1.91699Z" fill="#131E29"/></svg>
      </button>
      <button class="bn-icon-btn" title="Help">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#help-clip-sh)"><path d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8 11C8.55229 11 9 11.4477 9 12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11ZM8 3C9.65902 3 11 4.33149 11 5.99121C10.9998 7.39121 10.0445 8.55335 8.75 8.88379V9.25C8.74998 9.6642 8.4142 10 8 10C7.5858 10 7.25002 9.6642 7.25 9.25C7.25 9.25 7.25 8.62922 7.25 8.23145C7.25 7.68359 7.65701 7.51544 8.1543 7.47363C8.65158 7.43183 9.5 6.9344 9.5 5.99121C9.5 5.16574 8.83643 4.5 8 4.5C7.11719 4.5 6.58594 5.08203 6.49609 6.06738C6.45771 6.44565 6.13834 6.74121 5.75 6.74121C5.33594 6.74121 5.00025 6.40521 5 5.99121C5 4.33149 6.34098 3 8 3Z" fill="#131E29"/></g><defs><clipPath id="help-clip-sh"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
      </button>
      <div class="bn-avatar" title="Sarah Rogers">SR<span class="bn-avatar-dot"></span></div>
    </div>
  </div>
</div>`;

  // ── Nav items config ─────────────────────────────────────────
  const navItems = [
    { key: 'home', title: 'Home', href: 'SBN_home.html', icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6.121.734A2.77 2.77 0 0 1 9.673.562s4.201 3.793 4.642 4.296A2.76 2.76 0 0 1 15 6.683v6.567A2.746 2.746 0 0 1 12.25 16h-8.5A2.746 2.746 0 0 1 1 13.25v-6.5c0-.745.3-1.556.886-2.098L6.12.735h.001Zm2.74 1.102a1.272 1.272 0 0 0-1.723 0L2.905 5.754c-.24.223-.404.615-.404.997v6.5c0 .694.556 1.25 1.25 1.25H5V9.75C5 8.776 5.79 8 6.75 8h2.5c.96 0 1.75.776 1.75 1.75v4.75h1.25c.694 0 1.25-.556 1.25-1.25V6.683c0-.312-.111-.607-.313-.836L8.861 1.836ZM6.75 9.5c-.14 0-.25.11-.25.25v4.75h3V9.75c0-.14-.11-.25-.25-.25h-2.5Z"/></svg>` },
    { key: 'favorites', title: 'Orders', href: null, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.25 0C10.216 0 11 .784 11 1.75V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V3.75C2 2.784 2.784 2 3.75 2H5v-.25C5 .784 5.784 0 6.75 0h2.5Zm4.5 6.5a.75.75 0 0 1 .75.75V8h.75a.75.75 0 0 1 0 1.5h-2.285c-.304 0-.465.316-.465.5 0 .18.136.508.465.508.39 0 .885-.008.885-.008.638 0 1.188.215 1.58.607.78.782.757 2.05-.014 2.801-.25.244-.562.415-.916.509v.833a.75.75 0 0 1-1.5 0v-.75h-1.25a.75.75 0 0 1 0-1.5s1.343.017 2.163.017c.353 0 .587-.212.587-.512 0-.29-.256-.505-.605-.505h-.945C11.79 12 11 10.994 11 10c0-.987.78-2 2-2v-.75a.75.75 0 0 1 .75-.75Zm-7-5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25h-2.5ZM3.5 3.5v10.75c0 .138.112.25.25.25h7V3.5H3.5Z"/></svg>` },
    { key: 'present', title: 'Suppliers', href: null, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a4 4 0 1 1 0 8A4 4 0 0 1 8 0Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.25 9h9.5a2.75 2.75 0 0 1 2.75 2.75v.5A3.75 3.75 0 0 1 11.75 16h-7.5A3.75 3.75 0 0 1 .5 12.25v-.5A2.75 2.75 0 0 1 3.25 9Zm0 1.5c-.69 0-1.25.56-1.25 1.25v.5A2.25 2.25 0 0 0 4.25 14.5h7.5a2.25 2.25 0 0 0 2.25-2.25v-.5c0-.69-.56-1.25-1.25-1.25h-9.5Z"/></svg>` },
    { key: 'scexceptions', title: 'Exception Management', href: 'exception_management_card.html', hasArrow: true, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6.491 1.856a1.75 1.75 0 0 1 3.01-.001l6.248 10.504c.694 1.166-.147 2.644-1.504 2.644H1.752c-1.357 0-2.197-1.478-1.504-2.644L6.491 1.856Zm1.72.766a.25.25 0 0 0-.43 0L1.536 13.126a.25.25 0 0 0 .215.377h12.493a.25.25 0 0 0 .215-.377L8.211 2.622ZM8 10.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8 5a.75.75 0 0 1 .75.75v2.993A.756.756 0 0 1 8 9.5a.755.755 0 0 1-.756-.75l.006-3A.75.75 0 0 1 8 5Z"/></svg>` },
    { key: 'forecast', title: 'Forecast', href: 'forecast_detail.html', hasArrow: true, icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15.25 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V5.729l-5.182 6.01a.757.757 0 0 1-1.08.058c-.139-.13-2.557-2.975-2.557-2.975l-4.429 3.986a.75.75 0 0 1-1.004-1.116l5-4.5a.773.773 0 0 1 1.071.07L8.751 10.1l4.828-5.6H11.75a.75.75 0 0 1 0-1.5h3.5Z"/></svg>` },
  ];

  const arrowSVG = `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6.27342 3.17088C6.59309 2.90781 7.06578 2.95387 7.32909 3.27342L10.8291 7.52049C11.0572 7.79737 11.0571 8.19759 10.8291 8.47459L7.32909 12.7265C7.06587 13.0463 6.59324 13.0923 6.27342 12.8291C5.95363 12.5659 5.9077 12.0932 6.17088 11.7734L9.27831 7.99803L6.17088 4.22655C5.90781 3.90688 5.95387 3.43419 6.27342 3.17088Z" fill="#131E29"/></svg>`;

  function buildNavItem(item) {
    const isActive = item.key === activePage;
    const classes = ['bn-nav-item', isActive ? 'active' : '', item.hasArrow ? 'has-arrow' : ''].filter(Boolean).join(' ');
    const clickHandler = item.href ? `onclick="window.location='${item.href}'"` : '';
    return `
      <button class="${classes}" title="${item.title}" data-key="${item.key}" ${clickHandler}>
        <span class="bn-nav-indicator"></span>
        <span class="bn-nav-icon-wrap">${item.icon}</span>
        ${item.hasArrow ? `<span class="bn-nav-arrow">${arrowSVG}</span>` : ''}
      </button>`;
  }

  const sidenavHTML = `
<div class="bn-sidenav">
  <div class="bn-sidenav-content">
    ${navItems.map(buildNavItem).join('')}
  </div>
  <div class="bn-sidenav-footer">
    <div class="bn-sidenav-sep"></div>
    <button class="bn-nav-item${activePage === 'admin' ? ' active' : ''}" title="Admin" style="width:48px;height:32px;${activePage === 'admin' ? 'background:#ebf8ff;' : ''}">
        <span class="bn-nav-indicator"></span>
        <span class="bn-nav-icon-wrap">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
        </span>
      </button>
  </div>
</div>`;

  // ── Inject into page ─────────────────────────────────────────
  const shellRoot = document.getElementById('bn-shell-root');
  const sidenavRoot = document.getElementById('bn-sidenav-root');
  if (shellRoot) shellRoot.outerHTML = shellHTML;
  if (sidenavRoot) sidenavRoot.outerHTML = sidenavHTML;

  // ── Watermark ─────────────────────────────────────────────────
  const wm = document.createElement('div');
  wm.style.cssText = 'position:fixed;bottom:18px;right:24px;z-index:9999;pointer-events:none;';
  wm.innerHTML = `
    <div style="
      background:rgba(107,63,160,0.08);
      border:1px solid rgba(107,63,160,0.25);
      border-radius:6px;
      padding:5px 12px;
      text-align:center;
      line-height:1.5;
    ">
      <div style="font-size:11px;font-weight:700;color:#6b3fa0;letter-spacing:.3px;">In Progress · Ideation</div>
      <div style="font-size:10px;color:#8a6ab0;">SAP BN × Aera</div>
    </div>
  `;
  document.body.appendChild(wm);
})();
