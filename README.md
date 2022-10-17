# example-ts-react

An example TypeScript React app built using Reflame.

Reflame only handles deployment and does not actually typecheck (yet). So for typechecking, we'll need to install packages locally using a package.json like we've done here: 

- For packages that don't have types integrated, such as react and react-dom, we install their corresponding @types/* package.
- For packages that do have types integrated, we install the packages directly.
  
Note that we've installed them all as [devDependencies](https://github.com/reflame/example-ts-react/blob/d76b09588b7016ba6ceea1105f9a9821d736badc/package.json#L17) to indicate that they have no effect on runtime behavior. Runtime dependencies still need to be installed separately through [.reflame.config.jsonc](https://github.com/reflame/example-ts-react/blob/main/.reflame.config.jsonc). 

We can also set up a non-blocking typecheck step using traditional CI providers such as CircleCI or GitHub actions to notify us when a change might need to be reverted. 

Reflame won't support blocking deploys on external processes for the foreseeable future since that would slow down deploys by many orders of magnitudes, and negate most of the benefit of Reflame's instant deploys. Plus, rolling forward and backwards in Reflame is always instant, so we can deploy fixes immediately, significantly limiting scope of impact.

We are however working on an integrated testing platform, capable of running an arbitrary number of browser-based tests within 1-2 seconds, that could be used to gain confidence in your changes. Let us know if this is something you're interested in getting early access to!
