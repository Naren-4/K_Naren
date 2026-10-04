const weeks=[
['01','Java Basics & Installation','Language comparison, JDK setup and Hello World execution.',['JDK','Java Basics','Hello World']],
['02','Basic Java Operations','Primitive types, variables, casting, operators and control statements.',['Data Types','Casting','Control Flow']],
['03','Classes & Objects','Class fundamentals, object creation, reference variables and methods.',['Classes','Objects','Methods']],
['04','Constructors & Object Lifecycle','Constructors, this keyword, chaining and garbage collection.',['Constructors','this','GC']],
['05','Overloading & Objects','Method overloading, objects as parameters and object-based programs.',['Overloading','Objects','Methods']],
['06','Static, Final & Inner Classes','Static members, final keyword and nested/inner class programs.',['static','final','Inner Classes']],
['07','Strings & Inheritance','String constructors, StringBuffer, StringTokenizer and inheritance.',['String','StringBuffer','Inheritance']],
['08','Advanced Inheritance','Advanced inheritance concepts, overriding and polymorphism.',['super','Overriding','Polymorphism']],
['09','Packages & Interfaces','User-defined packages, imports, access modifiers, CLASSPATH and interfaces.',['Packages','Interfaces','CLASSPATH']],
['10','Exception Handling','Try-catch, multiple catch, throw, throws, finally and custom exceptions.',['Exceptions','try/catch','Custom']],
['11','Character Streams & Threads','Reader/Writer, FileReader/FileWriter and Java multithreading programs.',['Streams','Threads','Reader/Writer']]
];
const available=new Set(['01','02','03','04','05','06','07','08','09','10','11']);
const grid=document.getElementById('weekGrid');
weeks.forEach(([n,title,desc,tags])=>{
 const card=document.createElement('article'); card.className='card';
 let actions;
 if(available.has(n)){const url=`week-${n}.pdf`;actions=`<a class="open" href="${url}" target="_blank">Open PDF</a><a class="download" href="${url}" download>Download</a>`}
 else {const label=n==='09'?'Empty':'Coming Soon';actions=`<span class="status">${label}</span>`}
 card.innerHTML=`<div class="num">WEEK ${n}</div><h3>${title}</h3><p>${desc}</p><div class="tags">${tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="actions">${actions}</div>`;
 grid.appendChild(card);
});
function toggleTheme(){document.body.classList.toggle('light')}
