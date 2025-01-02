# cdk-stats

Welcome to CDK Stats! This is my side project that provides a dynamic .svg file that can be embedded into your GitHub profile.

The url to hit is: [https://cdk-stats.vercel.app/api?username=kaizencc](https://cdk-stats.vercel.app/api?username=kaizencc)

You should replace your GitHub username in the url to access your specific stats.

Then, you can add it to your personal GitHub README page. Just add the following line to a markdown file:

```
<img align="center" src="https://cdk-stats.vercel.app/api?username=kaizencc"/>
```

Now, your markdown file will dynamically render your personal stats, which will update every time you contribute to the
[aws-cdk](https://github.com/aws/aws-cdk). Thanks for contributing to that open source project!

## Development

To run this library on a local server, you must have a GitHub PAT capable of accessing data
related to the `aws/aws-cdk` repository.

```bash
echo PAT_1=<github-access-token>
```

To start the server, run:

```bash
yarn install
yarn start
```

Then you can hit the API via http://localhost:8080 (or at a different port provided via the `PORT` environment variable).

## Vercel

This app is deployed on Vercel, because I wanted to try out the service. It was extremely easy to
set up, and I recommend it :). It integrates with GitHub seamlessly.

The application will automatically re-deploy whenever I push to the `main` branch.

I use my personal GitHub access token that is stored in Vercel. This needs to be updated every 90 days.

## Contributing

Please do! If you are a experienced in frontend and think you can render a better .svg file, I would looove your help.
If you have a feature request or good idea please cut a GitHub issue and I will do my best :).
