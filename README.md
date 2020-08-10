# shopify-stripe-spike

Exploring how well Stripe subscriptions (via Checkout API) can be combined with a Shopify store

Built off a fork of [gatsby-shopify-starter](https://github.com/AlexanderProd/gatsby-shopify-starter)

## Getting Started

1. Log into your Shopify store and generate a storefront API access token.
2. Log into your Stripe dashboard and generate and API access token.
2. Create a `.env.development` file alongside the other `.env` files, and paste your API tokens into it:
    ```dotenv
    SHOP_NAME=XXXXXXX
    SHOPIFY_ACCESS_TOKEN=XXXXXXX
    GATSBY_STRIPE_API_KEY=XXXXXXX
    GATSBY_STRIPE_SECRET_KEY=XXXXXXX
    ```
3. Run `yarn && yarn start`. This runs the site locally and opens the home page in your system’s default browser.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.
