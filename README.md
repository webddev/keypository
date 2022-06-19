# Overview

This repo contains sites:
- keypository.com
- keypository.ru

Sites built on top of HUGO framework

Just commit changed files for publish.

# Local development

* Clone git repository
* Run docker image with hugo generator
  ```
  docker run -it --rm -v "`pwd`:/src" -u `id -u` -p 1313:1313 klakegg/hugo:latest-ext server --config keypository.ru.yaml
  ```
* Change files
* Check results on http://localhost:1313
