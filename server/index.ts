import { Application } from "./app";

async function main() {
    // suggested in the Alpine docs:
    // make Alpine on window available for better DX
    const app = new Application();
    app.start();
}

main()