import fs from "node:fs";
import yaml from "js-yaml";
const escape = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
fs.mkdirSync("dist/static", {recursive:true});
for (const lang of ["ko","en"]) {
  const data = yaml.load(fs.readFileSync("public/locales/"+lang+".yml","utf8"));
  const sections = ["experiences","featured","careers","portfolio","labs","education","certificates"].map(key => {
    const section = data[key];
    return "<section><h2>"+escape(section.title)+"</h2>"+section.contents.map(item=>"<article><h3>"+escape(item.name)+"</h3><p>"+escape(item.position)+" · "+escape(item.date.from)+" "+escape(item.date.to)+"</p><p>"+escape(item.tools)+"</p><ul>"+(item.descriptions??[]).map(d=>"<li>"+escape(d)+"</li>").join("")+"</ul></article>").join("")+"</section>";
  }).join("");
  const skills = "<section><h2>"+escape(data.skill.title)+"</h2>"+data.skill.contents.map(s=>"<p><strong>"+escape(s.title)+"</strong>: "+s.items.map(i=>escape(i.title)).join(", ")+"</p>").join("")+"</section>";
  const html = '<!doctype html><html lang="'+lang+'"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escape(data.profile.name)+' | Resume</title><meta name="description" content="'+escape(data.profile.description)+'"><style>body{font-family:system-ui,sans-serif;max-width:850px;margin:2rem auto;padding:0 1rem;line-height:1.6;color:#222}article{break-inside:avoid}h2{border-bottom:1px solid #aaa}h3{margin-bottom:0}p{margin:.3rem 0}@media print{nav{display:none}@page{size:A4;margin:13mm}}</style><nav><a href="../">Interactive resume</a> · <a href="'+(lang==="ko"?"en":"ko")+'.html">'+(lang==="ko"?"English":"한국어")+'</a></nav><h1>'+escape(data.profile.name)+'</h1><p>'+escape(data.profile.position)+'</p><p>'+escape(data.profile.description)+'</p><p><a href="'+escape(data.profile.github)+'">GitHub</a> · <a href="'+escape(data.profile.blog)+'">Blog</a></p>'+sections+skills+'</html>';
  fs.writeFileSync("dist/static/"+lang+".html",html);
}
fs.writeFileSync("dist/sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+["","static/ko.html","static/en.html"].map(p=>"<url><loc>https://0plan.github.io/resume/"+p+"</loc></url>").join("")+"</urlset>");
