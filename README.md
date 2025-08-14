# This is any empty project, set up with a recommended structure for NodeJs Express apps.

## install

- create an empty repository on your GitHub
- Don't change the default settings -> no readme, no .gitignore, no license (This can be done later)

## Type into terminal
- clone this repository
- add a specific download path or leave it empty.
```
git clone https://github.com/OneMillionthUsername/RenameToYourProject <download-path>
```
- rename the folder `EmptyNodeJSStructureForProjects` to your projects name
- remove the old remote repository link
```
git remote remove origin
```

- add your newly created repository link
```
git remote add origin <url-to-your-new-repository>
git branch -M main
git push -u origin main
```

- create your package.json
```
npm init -y
npm install express
```

- You can write your own code now

# Done
