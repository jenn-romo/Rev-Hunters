import fs from 'fs';

let content = fs.readFileSync('pages/Home.tsx', 'utf-8');

const proofRegex = /\s*\{\/\* PROOF \*\/\}\s*<section className="py-24 bg-secondary-light border-y border-primary-navy\/10">[\s\S]*?<\/section>/;

const match = content.match(proofRegex);
if (match) {
  const proofSection = match[0];
  content = content.replace(proofSection, '');
  
  // Insert after the 3 PILLARS section
  const pillarsRegex = /(\{\/\* 3 PILLARS \*\/\}[\s\S]*?<\/section>)/;
  content = content.replace(pillarsRegex, '$1' + proofSection);
  
  fs.writeFileSync('pages/Home.tsx', content, 'utf-8');
  console.log("Successfully moved section!");
} else {
  console.log("PROOF section not found");
}
