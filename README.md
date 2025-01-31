# My Blog

My blog website built with Astro framework. See [here](https://blog.jyylab.com)

Hosted on AWS with Amplify + S3 and integrated with Cloudflare DNS with Cloudflare providing CDN and SSL cert.

## Tech Stack

Using Astro Web Framework with some CSS and Typescript, blogs written with markdown. Deployed with Terraform to AWS amplify + S3 and DNS managed with Cloudfalre.

## Setup Instructions

- Clone repo `git clone repo`

- For dev, install dependencies with `npm install`, run `npm run dev` for live changes

- For deployment, build with `npm run build`

- Hosting options
  - self-host w/ VPS/Linux machine
  - copy to S3 bucket with `aws s3 cp dist/ s3://<BUCKET_NAME>/ --recursive`
  - use amplify
  - [other methods](https://docs.astro.build/en/guides/deploy/)
