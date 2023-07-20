import { request } from '../common/utils';

export interface renderCdkCardOptions {
  username: string;
}

export async function renderCdkCard(opts: renderCdkCardOptions) {
  const query = `
    {
      search(query: "repo:aws/aws-cdk is:pr is:merged author:${opts.username}", type: ISSUE, last:1) {
        issueCount
        edges {
          node {
            ... on PullRequest {
              url
              title
              createdAt
              labels(first:20) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;
  const res = await request(
    {
      query,
    },
    {
      Authorization: `bearer ${process.env.PAT_1}`,
    },
  );
  if (res.data.errors) return res;
  const issueCount = res.data.data.search.issueCount;
  console.log(issueCount);
  const issueCountLength = issueCount.toString().length * 65;
  const labels = res.data.data.search.edges[0].node.labels.nodes as { name: string }[];
  console.log(labels);
  let adjective = '';
  const contributorLabel = labels.filter((l) => l.name.includes('-contributor'));
  if (labels.filter((l) => l.name === 'contribution/core').length > 0) {
    adjective = 'Core';
  }
  if (contributorLabel.length > 0) {
    adjective = contributorLabel[0].name.split('-')[0];
  }
  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  console.log(adjective);
  const adjLength = adjective.length * 55;
  const adjSpacing = 800 - adjective.length * 23;

  return `
    <svg height="100" viewBox="0 0 2000 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="CDK Contributor Card">
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
      .icon svg {
        height: 1em;
        width: 1em;
      }
    </style>
    <title>CDK Contributor Card</title>
    <mask id="m"><rect width="2000" height="700" rx="50" fill="#FFF"/></mask>
    <g mask="url(#m)">
      <rect width="2000" height="700" class="bg"/>
      <rect width="2000" height="700" fill="url(#a)"/>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="130" y="138" class="primary" textLength="420" font-weight="500">AWS CDK</text>
      <text x="580" y="138" class="secondary" textLength="600" font-weight="650">Open Source</text>
      <text x="1210" y="138" class="primary" textLength="600" font-weight="500">Contributor</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="${870 - issueCountLength}" y="338" class="secondary" textLength="${issueCountLength}" font-weight="650">${issueCount}</text>
      <text x="900" y="338" class="primary" textLength="800" font-weight="500">Contributions</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="${adjSpacing}" y="538" class="secondary" textLength="${adjLength}" font-weight="650">${adjective}</text>
      <text x="${adjLength + adjSpacing + 30}" y="538" class="primary" textLength="700" font-weight="500">Contributor</text>
    </g>
    <svg x="130" y="138">
      <g transform="scale(6)">
        <path d="M68,39.3055249 C68,46.2347078 63.2662495,48.7760413 60.4452559,49.6748056 L59.8457203,47.7683056 C62.6597657,46.8725405 66.0147828,44.6771162 66.0147828,39.3055249 C66.0147828,32.5143058 60.4561746,30.8187505 58.0669656,30.404859 C57.5339348,30.3128831 57.1736179,29.8080155 57.2530266,29.2701566 L57.2530266,29.2701566 C57.0167857,26.175968 55.5775032,23.9505516 53.3907865,23.3067204 C51.5743127,22.7728604 49.6228442,23.4806748 48.4257582,25.1142464 C48.2083769,25.4111686 47.8411117,25.562129 47.4807948,25.5091429 C47.1175,25.455157 46.8137618,25.2022234 46.691671,24.8533149 C45.8668132,22.503931 44.6717124,20.5274493 43.1401173,18.9788554 C41.2601166,17.0793535 36.1025223,12.9944248 28.8128047,16.1016099 C24.6031515,17.8971391 21.3057057,23.0697826 21.3057057,27.8765221 C21.3057057,28.4113818 21.3374692,28.9502405 21.4009962,29.4791018 C21.4595601,29.9769712 21.1429179,30.4418493 20.6605101,30.5658168 C18.1670773,31.2066488 13.9852172,33.1821307 13.9852172,39.2215469 C13.9852172,39.4174955 13.9901803,39.6094452 14.0001064,39.7983956 C14.1867168,43.686376 17.0275626,47.0265001 20.9106475,47.923265 L20.4659588,49.871754 C15.7212897,48.7750416 12.2461669,44.674117 12.0168743,39.8983694 C12.004963,39.6804266 12,39.4524864 12,39.2215469 C12,32.3143583 16.6374674,29.7670263 19.352252,28.8692617 C19.3314072,28.5383485 19.3204885,28.2064355 19.3204885,27.8765221 C19.3204885,22.2340018 23.0685786,16.3805368 28.0395625,14.2600929 C33.8641899,11.7747446 40.0362302,13.0114203 44.5456511,17.5672256 C45.9482071,18.9848538 47.0976479,20.7044029 47.9741213,22.6948809 C49.6426964,21.2822513 51.8492653,20.7703856 53.9476399,21.3882236 C56.8262049,22.2350015 58.7528582,24.906301 59.1826577,28.5943338 C61.9986883,29.25716 68,31.5805507 68,39.3055249 L68,39.3055249 Z M56.8986653,61.3137534 L49.9633089,65.1997343 L49.9633089,56.5540016 L56.8986653,52.6120354 L56.8986653,61.3137534 Z M39.0078877,61.28876 L32.0874205,65.2767142 L32.0874205,56.5200105 L39.0078877,52.5900411 L39.0078877,61.28876 Z M31.091834,54.7904641 L24.1693816,50.9054829 L31.1037453,47.0205017 L37.9716043,50.8824889 L31.091834,54.7904641 Z M23.1211869,52.6060369 L30.1022032,56.5240095 L30.1022032,65.2817128 L23.1211869,61.2867605 L23.1211869,52.6060369 Z M40.029282,32.0534267 L46.9110375,35.8984184 L40.0004963,39.7634048 L33.1445486,35.9184131 L40.029282,32.0534267 Z M42.0323661,50.8844884 L48.9548186,47.0045059 L55.8653597,50.9034834 L48.9707003,54.8224557 L42.0323661,50.8844884 Z M40.9931049,52.5890414 L47.9780917,56.5540016 L47.9780917,65.1997343 L40.9931049,61.2807621 L40.9931049,52.5890414 Z M47.9641952,45.2719602 L40.9931049,49.1779359 L40.9931049,41.4949507 L47.9641952,37.5969729 L47.9641952,45.2719602 Z M32.0973465,37.6189672 L39.0078877,41.493951 L39.0078877,49.1749367 L32.0973465,45.2889558 L32.0973465,37.6189672 Z M58.3915486,50.0367107 C58.3865856,50.0337115 58.38063,50.0327118 58.3756669,50.0297126 L58.3766595,50.0277131 L49.9494124,45.2739597 L49.9494124,35.8984184 C49.9494124,35.5435114 49.7637946,35.2165972 49.4600564,35.0366444 C49.4521155,35.0326454 49.4451672,35.0306459 49.4372264,35.026647 L49.4392116,35.0236478 L40.5106971,30.0359558 C40.2089441,29.8689995 39.8436641,29.8689995 39.5458816,30.0369555 L30.6223301,35.045642 L30.6233228,35.0476415 C30.6163745,35.0516404 30.6084336,35.0526402 30.6014854,35.0566391 C30.2987397,35.2365919 30.1121293,35.5645059 30.1121293,35.9184131 L30.1121293,45.2869563 L21.6461705,50.0307123 L21.6481557,50.0327118 C21.6402148,50.0367107 21.632274,50.0387102 21.6253257,50.0427092 C21.3225801,50.2216622 21.1359697,50.550576 21.1359697,50.9044832 L21.1359697,61.8686079 C21.1359697,62.2285135 21.3275431,62.5604265 21.6382296,62.7373801 L30.5965223,67.8650354 L30.6044632,67.8700341 L30.6044632,67.8690343 C30.7573249,67.9560115 30.9260684,68 31.0948118,68 C31.2645479,68 31.4352766,67.9560115 31.5881383,67.8680346 L40.0074446,63.0163069 L48.4882925,67.7740593 L48.4892851,67.77106 C48.639169,67.855038 48.8039421,67.9000262 48.9707003,67.9000262 C49.136466,67.9000262 49.3032242,67.8580372 49.4531081,67.7740593 L58.3746743,62.7753701 C58.6893312,62.5984165 58.8838825,62.2645041 58.8838825,61.9015993 L58.8838825,50.9004842 C58.8838825,50.5445775 58.6972721,50.2166635 58.3915486,50.0367107 L58.3915486,50.0367107 Z" id="AWS-Cloud-Development-Kit_Icon_64_Squid" fill="#FFFFFF"></path>
      </g>
    </svg>
  </svg>
  `;
}
