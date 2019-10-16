# Changelog

## October 15, 2019
### Travis CI Wierdness

- Really strange bug where some of the builds were passing in travis-ci.org but
failing in travis-ci.com
- See this PR for more info
- Turns out the issue might have been that the travis-ci.com builds didn't
have the correct environment variables so the
netlify-ci builds were "opening the browser" for authentication
 and obviously since this is happening in the ci server it was waiting indefinetely
 - Fix was to add the site id and authentication toke environment variables
  

## October 14, 2019
### Custom Travis Deploy Script

- Travis [won't let us deploy pull requests](https://github.com/travis-ci/travis-ci/issues/7338) so
I used [this script](https://gist.github.com/steffencrespo/829d0900f3314acffe462f2e552dd3f6) to deploy with netlify
## October 13, 2019

### Run tests and deploy to Netlify using travis-ci

- Created some basic landing page tests and automate the deployment
to Netlify using travis ci 