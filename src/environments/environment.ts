// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {

    apiKey: "AIzaSyA48EfHZvqlZkRDaxzWuaxP8DGMzV0sBqg",
    authDomain: "angular4-demo.firebaseapp.com",
    databaseURL: "https://angular4-demo.firebaseio.com",
    projectId: "angular4-demo",
    storageBucket: "angular4-demo.appspot.com",
    messagingSenderId: "115835651427"
  }
};
