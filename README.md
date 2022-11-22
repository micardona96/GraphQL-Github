# Github GraphQL v1.0.0

![demo](public/demo.gif?raw=true "demostration-fast")

## App

App to search repositories based on topics, and visually filtering by the number of stars.

# Authenticating with GraphQL

[Link to information](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)

The GraphQL API only supports authentication using a personal access token (classic). For more information, see "Creating a personal access token ."

To communicate with the GraphQL server, you'll need a personal access token with the right scopes.

Follow the steps in "Creating a personal access token" to create a token. The scopes you require depends on the type of data you're trying to request. For example, select the User scopes to request user data. If you need access to repository information, select the appropriate Repository scopes.

To match the behavior of the GraphQL Explorer, request the following scopes:

```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

# Creating a personal access token (classic) 
[Link to tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

1. Verify your email address, if it hasn't been verified yet.

2. In the upper-right corner of any page, click your profile photo, then click Settings.

3. Settings icon in the user bar

4. In the left sidebar, click  Developer settings.

5. In the left sidebar, under  Personal access tokens, click Tokens (classic).

6. Select Generate new token, then click Generate new token (classic).

7. Give your token a descriptive name. Token description field

8. To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker. Token expiration field

9. Select the scopes you'd like to grant this token. To use your token to access repositories from the command line, select repo. A token with no assigned scopes can only access public information. For more information, see "Available scopes".

10. Selecting token scopes

11. Click Generate token. Generate token button

12. Newly created token

13. To use your token to access resources owned by an organization that uses SAML single sign-on, authorize the token. For more information, see "Authorizing a personal access token for use with SAML single sign-on" in the GitHub Enterprise Cloud documentation.


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
