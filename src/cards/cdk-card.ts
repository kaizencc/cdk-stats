export interface renderCdkCardOptions {
  username: string;
}

export function renderCdkCard(opts: renderCdkCardOptions) {
  const cdkIcon = `
    <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
        <title>Icon-Architecture/64/Arch_AWS-Cloud-Development-Kit_64</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
                <stop stop-color="#2E27AD" offset="0%"></stop>
                <stop stop-color="#527FFF" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Icon-Architecture/64/Arch_AWS-Cloud-Development-Kit_64" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Icon-Architecture-BG/64/Developer-Tools" fill="url(#linearGradient-1)">
                <rect id="Rectangle" x="0" y="0" width="80" height="80"></rect>
            </g>
            <path d="M68,39.3055249 C68,46.2347078 63.2662495,48.7760413 60.4452559,49.6748056 L59.8457203,47.7683056 C62.6597657,46.8725405 66.0147828,44.6771162 66.0147828,39.3055249 C66.0147828,32.5143058 60.4561746,30.8187505 58.0669656,30.404859 C57.5339348,30.3128831 57.1736179,29.8080155 57.2530266,29.2701566 L57.2530266,29.2701566 C57.0167857,26.175968 55.5775032,23.9505516 53.3907865,23.3067204 C51.5743127,22.7728604 49.6228442,23.4806748 48.4257582,25.1142464 C48.2083769,25.4111686 47.8411117,25.562129 47.4807948,25.5091429 C47.1175,25.455157 46.8137618,25.2022234 46.691671,24.8533149 C45.8668132,22.503931 44.6717124,20.5274493 43.1401173,18.9788554 C41.2601166,17.0793535 36.1025223,12.9944248 28.8128047,16.1016099 C24.6031515,17.8971391 21.3057057,23.0697826 21.3057057,27.8765221 C21.3057057,28.4113818 21.3374692,28.9502405 21.4009962,29.4791018 C21.4595601,29.9769712 21.1429179,30.4418493 20.6605101,30.5658168 C18.1670773,31.2066488 13.9852172,33.1821307 13.9852172,39.2215469 C13.9852172,39.4174955 13.9901803,39.6094452 14.0001064,39.7983956 C14.1867168,43.686376 17.0275626,47.0265001 20.9106475,47.923265 L20.4659588,49.871754 C15.7212897,48.7750416 12.2461669,44.674117 12.0168743,39.8983694 C12.004963,39.6804266 12,39.4524864 12,39.2215469 C12,32.3143583 16.6374674,29.7670263 19.352252,28.8692617 C19.3314072,28.5383485 19.3204885,28.2064355 19.3204885,27.8765221 C19.3204885,22.2340018 23.0685786,16.3805368 28.0395625,14.2600929 C33.8641899,11.7747446 40.0362302,13.0114203 44.5456511,17.5672256 C45.9482071,18.9848538 47.0976479,20.7044029 47.9741213,22.6948809 C49.6426964,21.2822513 51.8492653,20.7703856 53.9476399,21.3882236 C56.8262049,22.2350015 58.7528582,24.906301 59.1826577,28.5943338 C61.9986883,29.25716 68,31.5805507 68,39.3055249 L68,39.3055249 Z M56.8986653,61.3137534 L49.9633089,65.1997343 L49.9633089,56.5540016 L56.8986653,52.6120354 L56.8986653,61.3137534 Z M39.0078877,61.28876 L32.0874205,65.2767142 L32.0874205,56.5200105 L39.0078877,52.5900411 L39.0078877,61.28876 Z M31.091834,54.7904641 L24.1693816,50.9054829 L31.1037453,47.0205017 L37.9716043,50.8824889 L31.091834,54.7904641 Z M23.1211869,52.6060369 L30.1022032,56.5240095 L30.1022032,65.2817128 L23.1211869,61.2867605 L23.1211869,52.6060369 Z M40.029282,32.0534267 L46.9110375,35.8984184 L40.0004963,39.7634048 L33.1445486,35.9184131 L40.029282,32.0534267 Z M42.0323661,50.8844884 L48.9548186,47.0045059 L55.8653597,50.9034834 L48.9707003,54.8224557 L42.0323661,50.8844884 Z M40.9931049,52.5890414 L47.9780917,56.5540016 L47.9780917,65.1997343 L40.9931049,61.2807621 L40.9931049,52.5890414 Z M47.9641952,45.2719602 L40.9931049,49.1779359 L40.9931049,41.4949507 L47.9641952,37.5969729 L47.9641952,45.2719602 Z M32.0973465,37.6189672 L39.0078877,41.493951 L39.0078877,49.1749367 L32.0973465,45.2889558 L32.0973465,37.6189672 Z M58.3915486,50.0367107 C58.3865856,50.0337115 58.38063,50.0327118 58.3756669,50.0297126 L58.3766595,50.0277131 L49.9494124,45.2739597 L49.9494124,35.8984184 C49.9494124,35.5435114 49.7637946,35.2165972 49.4600564,35.0366444 C49.4521155,35.0326454 49.4451672,35.0306459 49.4372264,35.026647 L49.4392116,35.0236478 L40.5106971,30.0359558 C40.2089441,29.8689995 39.8436641,29.8689995 39.5458816,30.0369555 L30.6223301,35.045642 L30.6233228,35.0476415 C30.6163745,35.0516404 30.6084336,35.0526402 30.6014854,35.0566391 C30.2987397,35.2365919 30.1121293,35.5645059 30.1121293,35.9184131 L30.1121293,45.2869563 L21.6461705,50.0307123 L21.6481557,50.0327118 C21.6402148,50.0367107 21.632274,50.0387102 21.6253257,50.0427092 C21.3225801,50.2216622 21.1359697,50.550576 21.1359697,50.9044832 L21.1359697,61.8686079 C21.1359697,62.2285135 21.3275431,62.5604265 21.6382296,62.7373801 L30.5965223,67.8650354 L30.6044632,67.8700341 L30.6044632,67.8690343 C30.7573249,67.9560115 30.9260684,68 31.0948118,68 C31.2645479,68 31.4352766,67.9560115 31.5881383,67.8680346 L40.0074446,63.0163069 L48.4882925,67.7740593 L48.4892851,67.77106 C48.639169,67.855038 48.8039421,67.9000262 48.9707003,67.9000262 C49.136466,67.9000262 49.3032242,67.8580372 49.4531081,67.7740593 L58.3746743,62.7753701 C58.6893312,62.5984165 58.8838825,62.2645041 58.8838825,61.9015993 L58.8838825,50.9004842 C58.8838825,50.5445775 58.6972721,50.2166635 58.3915486,50.0367107 L58.3915486,50.0367107 Z" id="AWS-Cloud-Development-Kit_Icon_64_Squid" fill="#FFFFFF"></path>
        </g>
    </svg>
  `;

  return `
    <svg height="100" viewBox="0 0 1600 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="View on Construct Hub">
    <style>
      rect.bg {
        fill: rgb(237, 242, 247);
      }
      text.primary {
        fill: rgb(26, 32, 44);
      }
      text.secondary {
        fill: rgb(300, 150, 112);
      }
      @media (prefers-color-scheme: dark) {
        rect.bg {
          fill: rgb(40, 43, 52);
        }
        text.primary {
          fill: rgb(212, 213, 214);
        }
      }
    </style>
    <title>CDK Contributor Card</title>
    <mask id="m"><rect width="1600" height="500" rx="50" fill="#FFF"/></mask>
    <g mask="url(#m)">
      <rect width="1600" height="500" class="bg"/>
      <rect width="1600" height="500" fill="url(#a)"/>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="110" y="138" class="primary" textLength="420" font-weight="500">AWS CDK</text>
      <text x="560" y="138" class="secondary" textLength="600" font-weight="650">Contributor</text>
      <text x="1190" y="138" class="primary" textLength="230" font-weight="500">Card</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="220" y="338" class="primary" textLength="1000" font-weight="500">23 Contributions</text>
    </g>
  </svg>
  `;
}
  
  
//   return `
//   <svg
//   width="467"
//   height="195"
//   viewBox="0 0 467 195"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
//   role="img"
//   aria-labelledby="descId"
//   >
//   <title id="titleId">${opts.username}'s GitHub Stats, Rank: A++</title>
//   <desc id="descId">Total Stars Earned: 13, Total Commits in 2023 : 13, Total PRs: 460, Total Issues: 114, Contributed to (last year): 31</desc>
//   <style>
//     .header {
//       font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
//       fill: #fe428e;
//       animation: fadeInAnimation 0.8s ease-in-out forwards;
//     }
//     @supports(-moz-appearance: auto) {
//       /* Selector detects Firefox */
//       .header { font-size: 15.5px; }
//     }
    
//   .stat {
//   font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #a9fef7;
//   }
//   @supports(-moz-appearance: auto) {
//   /* Selector detects Firefox */
//   .stat { font-size:12px; }
//   }
//   .stagger {
//   opacity: 0;
//   animation: fadeInAnimation 0.3s ease-in-out forwards;
//   }
//   .rank-text {
//   font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #a9fef7;
//   animation: scaleInAnimation 0.3s ease-in-out forwards;
//   }
//   .rank-percentile-header {
//   font-size: 14px;
//   }
//   .rank-percentile-text {
//   font-size: 16px;
//   }
  
//   .not_bold { font-weight: 400 }
//   .bold { font-weight: 700 }
//   .icon {
//   fill: #f8d847;
//   display: block;
//   }
  
//   .rank-circle-rim {
//   stroke: #fe428e;
//   fill: none;
//   stroke-width: 6;
//   opacity: 0.2;
//   }
//   .rank-circle {
//   stroke: #fe428e;
//   stroke-dasharray: 250;
//   fill: none;
//   stroke-width: 6;
//   stroke-linecap: round;
//   opacity: 0.8;
//   transform-origin: -10px 8px;
//   transform: rotate(-90deg);
//   animation: rankAnimation 1s forwards ease-in-out;
//   }
  
//   @keyframes rankAnimation {
//   from {
//   stroke-dashoffset: 251.32741228718345;
//   }
//   to {
//   stroke-dashoffset: 100.09182324379408;
//   }
//   }
  
  
  
    
//   /* Animations */
//   @keyframes scaleInAnimation {
//   from {
//   transform: translate(-5px, 5px) scale(0);
//   }
//   to {
//   transform: translate(-5px, 5px) scale(1);
//   }
//   }
//   @keyframes fadeInAnimation {
//   from {
//   opacity: 0;
//   }
//   to {
//   opacity: 1;
//   }
//   }
//   </style>
  
  
  
//   <rect
//     data-testid="card-bg"
//     x="0.5"
//     y="0.5"
//     rx="4.5"
//     height="99%"
//     stroke="#e4e2e2"
//     width="466"
//     fill="#141321"
//     stroke-opacity="0"
//   />
  
  
//   <g
//   data-testid="card-title"
//   transform="translate(25, 35)"
//   >
//   <g transform="translate(0, 0)">
//   <text
//   x="0"
//   y="0"
//   class="header"
//   data-testid="header"
//   >${opts.username}'s GitHub Stats</text>
//   </g>
//   </g>
  
  
//   <g
//     data-testid="main-card-body"
//     transform="translate(0, 55)"
//   >
    
//   <g data-testid="rank-circle"
//     transform="translate(390.5, 47.5)">
//   <circle class="rank-circle-rim" cx="-10" cy="8" r="40" />
//   <circle class="rank-circle" cx="-10" cy="8" r="40" />
//   <g class="rank-text">
    
//   <text x="-5" y="3" alignment-baseline="central" dominant-baseline="central" text-anchor="middle" data-testid="level-rank-icon">
//     A++
//   </text>
  
//   </g>
//   </g>
//   <svg x="0" y="0">
//   <g transform="translate(0, 0)">
//   <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
  
//   <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
//   <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
//   </svg>
  
//   <text class="stat  bold" x="25" y="12.5">Total Stars Earned:</text>
//   <text
//   class="stat  bold"
//   x="219.01"
//   y="12.5"
//   data-testid="stars"
//   >13</text>
//   </g>
//   </g><g transform="translate(0, 25)">
//   <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
  
//   <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
//   <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>
//   </svg>
  
//   <text class="stat  bold" x="25" y="12.5">Total Commits (2023):</text>
//   <text
//   class="stat  bold"
//   x="219.01"
//   y="12.5"
//   data-testid="commits"
//   >299</text>
//   </g>
//   </g><g transform="translate(0, 50)">
//   <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
  
//   <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
//   <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
//   </svg>
  
//   <text class="stat  bold" x="25" y="12.5">Total PRs:</text>
//   <text
//   class="stat  bold"
//   x="219.01"
//   y="12.5"
//   data-testid="prs"
//   >460</text>
//   </g>
//   </g><g transform="translate(0, 75)">
//   <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
  
//   <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
//   <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>
//   </svg>
  
//   <text class="stat  bold" x="25" y="12.5">Total Issues:</text>
//   <text
//   class="stat  bold"
//   x="219.01"
//   y="12.5"
//   data-testid="issues"
//   >114</text>
//   </g>
//   </g><g transform="translate(0, 100)">
//   <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">
  
//   <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
//   <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
//   </svg>
  
//   <text class="stat  bold" x="25" y="12.5">Contributed to (last year):</text>
//   <text
//   class="stat  bold"
//   x="219.01"
//   y="12.5"
//   data-testid="contribs"
//   >31</text>
//   </g>
//   </g>
//   </svg>
  
//   </g>
//   </svg>
//   `;
// }