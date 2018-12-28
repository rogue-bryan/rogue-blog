---
title: Hosting a Static Site on Github
slug: github
date: 06-26-2018
---

So, this Github thing, am I right? I had this idea that I'd want to store some code somewhere I didn't have to worry about losing it. [You really should version control your code someway, somehow!](https://mikemcquaid.com/2014/01/18/why-use-version-control/)

Now, I could have setup some server somewhere, but then I'd have to learn how to [_create a server_](http://lmgtfy.com/?q=how+to+create+a+git+server). Not that that's a hard thing to do, but there's other people who've figured out how to do this thing _wayyy_ better than I could. [Github](https://github.com) am I right?

Now, for my purposes, I also wanted to find a place to host a site. In this case, I was interested in finding a place to host a static website. [__HTML__](https://www.w3.org/TR/html5/) and [__CSS__](https://www.w3.org/TR/css-2017/). Maybe some [__JavaScript__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources). To do a blog. About technology.

I know its 2018, this hosting thing isn't all that new, but I wanted something simple. Turns out, Github has a thing called [Github Pages](https://pages.github.com/). Which also has some hooks for deploying automatically to it on a branch ([what's a branch?](http://lmgtfy.com/?q=git+branches)) called _gh-pages_. Using [Travis CI](https://travis-ci.org/). That is definitely on for [another post and another day](/blog/post/travis-ci).

So, back on topic. How do we start our very own code repository? As usual, there's quite a few options. We're going start with creating a repository on Github.

1. Create an account on [Github](https://github.com/join?source=header-home) if you haven't already.
2. You have [Git](https://git-scm.com/downloads) installed, right?
3. Next, [create a new repository](https://github.com/new). 
4. Open up your terminal. I know typing... But this is when it gets interesting.
5. There's going to be a button on your created Github repo in green labelled __Clone or download__. Click on that button and copy the link provided. The link provided will look like this https://github.com/[yourusername]/[yourreponame].git

```
        git clone [https://github.com/[yourusername]/[yourreponame].git
        cd [yourreponame]
```

Excellent! You've now gotten (gitten?) your first repo!

You can now at this point start buiding your own _thing_! If you're just looking to get up and running with something quick, use this:

Create a file in the directory you cloned above called _index.html_ with the following content _for example_
```html
<xmp>
<html>
    <head>
        <title>Hello Git Pages World</title>
    </head>
    <body>
        <div>
            <h1>Hello Git Pages World</h1>
        </div>
    </body>
</html>
</xmp>
```
Save this file, and at this point, we're almost there!

```
    git add --all
    git commit -m "Initial commit"
    git push -u origin master
```

At this point we are all setup! You should be able to browse to your page defined in the Github Pages on the internet!