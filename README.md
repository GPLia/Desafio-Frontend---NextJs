# NextAuth Project

This project is a [Next.js](https://nextjs.org/) application that integrates authentication using [NextAuth.js](https://next-auth.js.org/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```sh
git clone https://github.com/GPLia/Next_Auth.git
cd Next_Auth
pnpm install
```

## Usage
To run the development server:

```sh
pnpm run dev
```

Open http://localhost:3000 with your browser to see the result.

Login: Teste
Password:123

## Configuration
Environment Variables
Create a .env.local file in the root of your project and add the following environment variables:

```sh
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

Generating the Secret Key
You can generate a secret key using one of the following methods:

Using OpenSSL (Terminal)

```sh
openssl rand -base64 32
```

## Providers
Configure your authentication providers in pages/api/auth/[...nextauth].ts. For example, to use GitHub as a provider:
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

```sh
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Add more providers here
  ],
  // Additional NextAuth.js configuration options
});
````

## Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
