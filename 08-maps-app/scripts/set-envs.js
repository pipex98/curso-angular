
const { writeFileSync, mkdirSync } = require( 'fs' );

require('dotenv').config();

const maplibreKey = process.env['MAPLIBRE_KEY'];

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

if ( !maplibreKey ) {
  throw new Error('MAPLIBRE_KEY is not set');
}

const envFileContent = `
export const environment = {
  maplibreKey: "${ maplibreKey }"
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );
writeFileSync( targetPathDev, envFileContent );


