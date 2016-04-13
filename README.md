# Browserify on Rails example application (with server rendering)
Minimal and Simple setup to use Browserify with Rails asset pipeline using `browserify-rails` gem

Check out the `app/assets/javascripts` folder
```bash
components: Contains all react components splitted in directories (same namespace as rails views)
components.js: components manifest
```
## Features
* React with ES6 syntax
* Babel transpiler
* Basic ActionCable integration
* NPM support

## Running
```bash
git clone git@github.com:gauravtiwari/browserify_on_rails.git
cd browserify_on_rails
bundle install
chmod 777 start
./start
# Or Alternatively
bundle exec foreman start
```
