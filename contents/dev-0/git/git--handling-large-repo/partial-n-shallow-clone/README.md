# Use partial clone instead of shallow clone  

Reading note for  [Get up to speed with partial clone and shallow clone - The GitHub Blog](https://github.blog/open-source/git/get-up-to-speed-with-partial-clone-and-shallow-clone/) 

## TL;DR: 

If you are cloning for CI builds, use **shallow clone**:

```
git clone --depth=1 <url>
```

If your repos is large use **partial blobless clone**:

```
`git clone --filter=blob:none <url>`
```

Don't use partial treeless clone.

 

## Introduction

Often when cloninging a large repository with long history, not only it takes long time to clone,  the repository also take up a lot of space on our compouter.  Often we just want to clone the reposity quickly and get starting working.  There is no need to download every version of every file in the entire git history.  To achieve this we were often told to use **shallow clone**. However, this article advise not to use shallow clone. Instead, it is advised that we use **partial clone**. 

## What is shallow clone? 

Shallow clones use the [`--depth=parameter`](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt-code--depthcodeemltdepthgtem) of `git clone` to truncate the commit history when depth is one:

```
git clone --depth=1 <url>
```

It copies only the content under the *root tree* of HEAD commit.  Connection to its parents (ie., the history) is severed. 

![object-model-shallow](./assets/object-model-shallow.webp)

### Why don't use shallow clone? 

When you shallow clone a repository, some git functionalities in your shallow cloned repository may have different behaviours. 

Commands such as `git merge-base`, `git blame`  or `git log` will give you false results, because the history is not present locally. 

The command `git fetch` will take longer to execuse because it may have to download almost a full history if a newer topic branch to fetch from remote is based historical commit. The following diatram illustrated this:

![expansive-git-shallow-clone](./assets/expansive-git-shallow-clone.png)

### When to use shallow clone?

Athough the article discouraged the use of shallow clone, it does points out its ideal use case during a CI build. To Quoted from the article:

>  In workflows such as CI builds when there is a need to do a single clone and delete the repository immediately, shallow clones are a good option. **Shallow clones are the fastest way to get a copy of the working directory at the tip commit**

Thus, to summarize, use shallow clone when you: 

- only want to get a copy of the working directory at the tip commit

- do not plan to use any of git's distributed workflow and functionality



## What are partial clones?

Partial clone are achieved with the  the [`--filter` option](https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---filterltfilter-specgt)  in your `git clone` command. The article mentions two type of partial clone: 

1. blobless partial clone: `git clone --filter=blob:none <url>`
2. Treeless partial clone:  `git clone --filter=tree:0 <url>`



## Blobless partial clone

Blobless clones will download all reachable commits and trees, but only the blobs under the *root tree* of HEAD commit (red in the illustration below): 

![object-model-partial-blob-clone](./assets/object-model-partial-blob-clone.webp)

Although blobs contain under the history commits are not download; later, when you perform `git checkout` they are downloaded.  However, the download is only for the **blobs under the commit you checkout** .  Similary, when running `git fetch`,  only remote **commit at the tip** point to by the HEAD will be downloaded:

![fetch-in-a-blobless-clone](./assets/fetch-in-a-blobless-clone.jpg)

Since all trees in the history were present In a blobless clone, commands like `git merge-base`, `git log`, or even `git log -- <path>` work just like you had a full clone repository.  This is because trees contains path entries and the object ID for the objects at the required paths.  This information is sufficient for the  detections of which commits changed at a given path to enable these commands to functions fully.

When using a blobless clone, you will trigger a blob download whenever you need the *contents* of a file. For example commands like `git diff` or `git blame <path>` require the contents to calculate their results, and thus blobs download are triggered.  However, download only happen onces.  There is no need to download them again when you run these command again. 

### When to use blobless partial clone?

Use it when your repository take long time to clone because:

- It has built up large amount of codes due to a long history.
- it is a monorepo that contain many projects

- it contains many large blobs assets such as games


**Trade-off :** 

Some commands such as `git checkout`, `git diff`, or `git blame` will take longer because they require downloading  blob data.



## Treeless partial clone

Treeless clones is similar to blobless clone, but only commits are download in the history. Historical trees are not downloaded.  This father improve cloning speed and space saved locally. 

![object-model-tree0](./assets/object-model-tree0.webp)

The missing trees and blobs will be requested when needed, but currently this could take long time to download because requesting for missing trees could trigger many unnecessary request.  For example, during `git checkout` operation, git client does not tell the server it already has some of the required root trees, so the server might send the trees again unnecessary. 

Some operation such as `git merge-base` or basic `git log` does not required historical tree, and will perform efficiently like that in blobless clone.  However, `git log -- <path>` and `git blame` will trigger downloading root trees for all commit in the histrory indescriminately.  

The article also mentioned the `git fetch` operation in a repositories contain submoduleswill can also trigger tree request for all new commits, but this can be avoid if  you configure your git with `git config fetch.recurseSubmodules false`.

### When to use treeless partial clone?

Due to the fact that the server might send the trees again unnecessary to cause very slow performance on some commands, the article discourage usind treeless clones for daily development work. 

## Comparison of size used in various clone

I made some tests cloning [git/git](https://github.com/git/git)  with all four method: 

```
git clone git@github.com:git/git.git
git clone --filter=blob:none git@github.com:git/git.git
git clone --filter=tree:0 git@github.com:git/git.git
git clone --depth=1 git@github.com:git/git.git
```

Here is the comparison of size using  [DaisyDisk | Home](https://daisydiskapp.com/), here is the result:

![content-used-in-various-clone](./assets/content-used-in-various-clone.png)



## When to use full clone? 

This article does not mean to tell you never using full clone:

> If you need to have a distributed workflow and want all of the data in your local repository, then you should continue using full clones. If you are a developer focused on a single repository and your repository is reasonably-sized, the best approach is to do a full clone.





## Related reading:

[Commits are snapshots, not diffs - The GitHub Blog](https://github.blog/open-source/git/commits-are-snapshots-not-diffs/) 

[Git clone: a data-driven study on cloning behaviors - The GitHub Blog](https://github.blog/open-source/git/git-clone-a-data-driven-study-on-cloning-behaviors/) 

[Counting Objects - The GitHub Blog](https://github.blog/open-source/git/counting-objects/) 

[Git - Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) 



[Optimize your monorepo experience - GitHub Universe 2020 - YouTube](https://www.youtube.com/watch?v=RcqLV1lU408&t=740s) 

[How to clone only some directories from a git repository? - Ask Ubuntu](https://askubuntu.com/questions/460885/how-to-clone-only-some-directories-from-a-git-repository) 
