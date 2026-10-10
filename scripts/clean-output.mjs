import {rmSync} from 'node:fs';
// dist is generated output, never article source or Git history.
rmSync(new URL('../dist/',import.meta.url),{recursive:true,force:true});
