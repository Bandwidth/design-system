# Bandwidth Design System CDN

Add this line of code into the `<head>` of your application and you're off! Just add the HTML code, with the classes that are on the right side of each component, and you will have the Bandwidth style!
```bash
<link href="https://d3l0ifulerbodr.cloudfront.net/main.css" rel="stylesheet">
```


## Run Locally

To run the design system locally:

### Prereqs
* [Git](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git)
* [Node & NPM](https://nodejs.org/en/download/)
* [Python v2.7.*](https://www.python.org/downloads/)

#### 1. Install gitbook-cli

```bash
npm install -g gitbook-cli
```

#### 2. Clone Design System:

```bash
git clone https://github.com/Bandwidth/design-system.git
```

#### 3. Change folder to `design-system`

```bash
cd design-system
```

#### 4. Build The Design system

```bash
make
```

#### 5. Serve the Design system

```bash
make serve
```
