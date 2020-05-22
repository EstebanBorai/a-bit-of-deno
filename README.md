<div align="center">
  <img 
    src="https://raw.githubusercontent.com/estebanborai/a-bit-of-deno/master/docs/deno.png"
    height="120"
    width="120"
  />
  <h1>a-bit-of-deno</h1>
  <span>🦕 A try on Deno's ecosystem with Oak framework for Web APIs</span>
</div>

## Usage

### Requirements
- [Deno](https://deno.land/#installation)

### Recomendations
[Visual Studio Code](https://github.com/microsoft/vscode) support is guaranteed for Deno and this project, so its highly recommended
to use Visual Studio Code in order to work with this project.

It is also recommended to install [justjavac](https://github.com/justjavac)'s extension [vscode_deno](https://github.com/denoland/vscode_deno) for Deno support.

### Running Locally

```sh
# runs the server locally
$ deno run -A Drakefile.ts start

# create a .env file for the project
$ deno run -A ./Drakefile.ts make-env
```

### Docker & MySQL

```sh
# build the docker image
sudo docker build -t mysql-bit-of-deno ./docker/

# run the docker image
sudo docker run --env-file ./.env mysql-bit-of-deno
```
