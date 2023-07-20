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
  const adjSpacing = 500 - adjective.length * 23;

  return `
    <svg height="100" viewBox="0 0 1800 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" aria-label="CDK Contributor Card">
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
    <mask id="m"><rect width="1800" height="700" rx="50" fill="#FFF"/></mask>
    <g mask="url(#m)">
      <rect width="1800" height="700" class="bg"/>
      <rect width="1800" height="700" fill="url(#a)"/>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="130" y="138" class="primary" textLength="420" font-weight="500">AWS CDK</text>
      <text x="580" y="138" class="secondary" textLength="600" font-weight="650">Open Source</text>
      <text x="1210" y="138" class="primary" textLength="500" font-weight="500">Contributor</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="${570 - issueCountLength}" y="338" class="secondary" textLength="${issueCountLength}" font-weight="650">${issueCount}</text>
      <text x="600" y="338" class="primary" textLength="800" font-weight="500">Contributions</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <text x="${adjSpacing}" y="538" class="secondary" textLength="${adjLength}" font-weight="650">${adjective}</text>
      <text x="${adjLength + adjSpacing + 30}" y="538" class="primary" textLength="700" font-weight="500">Contributor</text>
    </g>
    <g aria-hidden="true" text-anchor="start" font-family='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' font-size="100">
      <image x="130" y="238" width="1000" xlink:href="https://cdk-stats.vercel.app/icon"></image>
    </g>
  </svg>
  `;
}
