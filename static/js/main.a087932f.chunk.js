(this["webpackJsonpeuangordon.me"]=this["webpackJsonpeuangordon.me"]||[]).push([[0],{38:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var i,a,r,c,o,s,d,l,h,m,j,p,u,b,x,g,f,O,w,v,y,k,S,T,A,F,C,E,I=t(0),z=t.n(I),N=t(17),H=t.n(N),R=(t(38),t(5)),B=t(2),L=t(3),P=L.a.h1(i||(i=Object(B.a)(["\n  user-select: none;\n  padding: 0;\n  margin: 0;\n\n  @media (max-width: 1240px) {\n    font-size: 4em;\n  }\n\n  @media (max-width: 800px) {\n    font-size: 3em;\n  }\n\n  @media (max-width: 500px) {\n    align-self: flex-start;\n    font-size: 2em;\n  }\n"]))),_=L.a.p(a||(a=Object(B.a)(['\n  font-family: "mont-light";\n  margin: 0 0 1% 0;\n  padding: 0;\n  font-size: 1em;\n  @media (max-width: 1240px) {\n    margin: 2% 0;\n  }\n\n  @media (max-width: 800px) {\n    margin: 4% 0;\n  }\n\n  @media (max-width: 500px) {\n    line-height: 1.5;\n    font-size: 0.9em;\n  }\n']))),K=L.a.div(r||(r=Object(B.a)(["\n  height: 80vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n\n  @media (max-width: 400px) {\n    height: 100vh;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),U=L.a.div(c||(c=Object(B.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  width: 20%;\n\n  @media (max-width: 1030px) {\n    width: 60%;\n  }\n\n  @media (max-width: 800px) {\n    width: 50%;\n  }\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"]))),V=L.a.div(o||(o=Object(B.a)(["\n  margin: 2% 0;\n  @media (max-width: 500px) {\n    margin: 5% 0;\n  }\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  width: 70%;\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"]))),D=t(1),M=L.a.a(s||(s=Object(B.a)(["\n  @media (max-widith: 500px) {\n    margin: 0% 2%;\n    width: 30%;\n  } ;\n"]))),W=function(n){return Object(D.jsx)(M,{href:n.link,children:Object(D.jsx)(D.Fragment,{children:n.element})})},G=t(16),J=G.c,Y=function(){var n=J((function(n){return n.social.data}));return Object(D.jsx)(V,{children:Object(D.jsx)(U,{children:n.map((function(n){var e=n.id,t=n.link,i=n.element;return Object(D.jsx)(W,{link:t,element:i},e)}))})})},q=t(15),Q=L.a.button(d||(d=Object(B.a)(['\n  padding: 15px 60px;\n  border: 1px solid var(--accent-color);\n  font-family: "mont-black";\n  background-color: transparent;\n  outline: none;\n  font-size: 0.5em;\n  transition: all 0.2s ease-in-out;\n  border-radius: 20px;\n  color: var(--accent-color);\n\n  :hover {\n    cursor: pointer;\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n    border: none;\n    box-shadow: 0 8px 20px #000000;\n  }\n']))),X=function(n){return Object(D.jsx)(q.b,{to:n.link,children:Object(D.jsx)(Q,{children:n.title})})},Z=function(){return Object(D.jsxs)(K,{children:[Object(D.jsx)(P,{children:"Software Engineer"}),Object(D.jsx)(_,{children:"Hi, I'm Euan, a Graduate Software Engineer working at Arch."}),Object(D.jsx)(_,{children:"At Arch, I'm a backend engineer who's specialised in Serverless AWS development, TypeScript and Node.js."}),Object(D.jsx)(Y,{}),Object(D.jsx)(X,{title:"About Me",link:"/about"})]})},$=L.a.div(l||(l=Object(B.a)(["\n  padding: 0 2% 0 0;\n  margin: 3% 0;\n"]))),nn=function(n){return Object(D.jsx)($,{children:Object(D.jsx)("a",{href:n.link,children:Object(D.jsx)("h5",{children:n.name})})})},en=L.a.div(h||(h=Object(B.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  width: 60%;\n  @media (max-width: 500px) {\n    width: 50%;\n  }\n"]))),tn=function(){var n=J((function(n){return n.mates.data}));return Object(D.jsx)(en,{children:n.map((function(n){var e=n.id,t=n.name,i=n.link;return Object(D.jsx)(nn,{name:t,link:i},e)}))})},an=L.a.div(m||(m=Object(B.a)(["\n  margin: 2% 0 7% 0;\n  @media (max-width: 500px) {\n    margin: 5% 0 30% 0;\n  }\n"]))),rn=L.a.h3(j||(j=Object(B.a)(["\n  margin-bottom: 1%;\n"]))),cn=function(){return Object(D.jsxs)(an,{children:[Object(D.jsx)(rn,{children:"Some of the Boys"}),Object(D.jsx)(tn,{})]})},on=t(13),sn=t(24),dn=t.n(sn),ln=t(30),hn="FETCH_KANYE_START",mn="FETCH_KANYE_SUCCESS",jn="FETCH_KANYE_FAIL",pn={data:"",isFetching:!1,errorMessage:void 0},un=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case hn:return Object(on.a)(Object(on.a)({},n),{},{isFetching:!0});case mn:return Object(on.a)(Object(on.a)({},n),{},{isFetching:!1,data:e.payload});case jn:return Object(on.a)(Object(on.a)({},n),{},{isFetching:!1,errorMessage:e.payload});default:return n}},bn=L.a.div(p||(p=Object(B.a)(["\n  margin: 2% 0 7% 0;\n  @media (max-width: 500px) {\n    margin: 5% 0 30% 0;\n  }\n"]))),xn=L.a.p(u||(u=Object(B.a)(["\n  font-style: italic;\n  margin: 1% 0;\n  font-size: 0.9em;\n"]))),gn=L.a.span(b||(b=Object(B.a)(["\n  font-style: normal;\n  padding-left: 2%;\n"]))),fn=function(){var n=J((function(n){return n.kanye.data}));return console.log(n),Object(D.jsxs)(bn,{children:[Object(D.jsx)("h3",{children:"If Kanye Was Here:"}),Object(D.jsxs)(xn,{children:[n.quote," ",Object(D.jsx)(gn,{children:"- Kanye"})]})]})},On=function(){var n=Object(G.b)();return Object(I.useEffect)((function(){n(function(){var n=Object(ln.a)(dn.a.mark((function n(e){return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:hn}),n.next=3,fetch("https://api.kanye.rest/",{method:"GET"}).then((function(n){return n.json()})).then((function(n){return e({type:mn,payload:n})})).catch((function(n){return e({type:jn,payload:n})}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[]),Object(D.jsxs)("div",{children:[Object(D.jsx)(Z,{}),Object(D.jsx)(fn,{}),Object(D.jsx)(cn,{})]})},wn=L.a.div(x||(x=Object(B.a)(["\n  margin: 2% 0 5% 0;\n\n  @media (max-width: 1030px) {\n    margin: 5% 0 8% 0;\n  }\n\n  @media (max-width: 500px) {\n    margin: 10% 0 10% 0;\n  }\n"]))),vn=L.a.p(g||(g=Object(B.a)(["\n  margin: 0.5% 0;\n"]))),yn=function(n){var e=n.skills;return Object(D.jsx)(wn,{children:e.map((function(n){return Object(D.jsx)(vn,{children:n},e.indexOf(n))}))})},kn=L.a.button(f||(f=Object(B.a)(['\n  padding: 15px 60px;\n  border: 1px solid var(--accent-color);\n  font-family: "mont-black";\n  background-color: transparent;\n  outline: none;\n  font-size: 0.5em;\n  transition: all 0.2s ease-in-out;\n  border-radius: 20px;\n  color: var(--accent-color);\n\n  :hover {\n    cursor: pointer;\n    color: var(--secondary-color);\n    background-color: var(--accent-color);\n    border: none;\n    box-shadow: 0 8px 20px #000000;\n  }\n']))),Sn=function(n){return Object(D.jsx)("a",{href:n.link,children:Object(D.jsx)(kn,{children:n.title})})},Tn=L.a.p(O||(O=Object(B.a)(["\n  margin: 1% 50% 1% 0;\n  line-height: 1.5;\n\n  @media (max-width: 1200px) {\n    margin: 1% 30% 1% 0;\n  }\n\n  @media (max-width: 800px) {\n    margin: 1% 20% 1% 0;\n  }\n\n  @media (max-width: 500px) {\n    margin: 5% 0;\n  }\n"]))),An=L.a.div(w||(w=Object(B.a)(["\n  margin: 0 0 10% 0;\n  @media (max-width: 500px) {\n    margin: 5% 0 30% 0;\n  }\n"]))),Fn=L.a.h4(v||(v=Object(B.a)(["\n  margin-bottom: 1%;\n"]))),Cn=L.a.p(y||(y=Object(B.a)(["\n  margin-top: 2%;\n"]))),En=function(n){return Object(D.jsxs)(An,{children:[Object(D.jsx)(Fn,{children:n.title}),Object(D.jsx)("div",{children:Object(D.jsx)(Tn,{children:n.description})}),Object(D.jsx)(Cn,{children:"This project was developed with:"}),Object(D.jsx)(yn,{skills:n.skills}),Object(D.jsx)("div",{children:Object(D.jsx)(Sn,{title:n.title,link:n.link})})]})},In=L.a.div(k||(k=Object(B.a)(["\n  margin: 2% 0 7% 0;\n"]))),zn=L.a.h3(S||(S=Object(B.a)(["\n  margin-bottom: 1%;\n"]))),Nn=function(n){var e=n.projectname,t=n.projectarray;return Object(D.jsxs)(In,{children:[Object(D.jsx)(zn,{children:e}),t.map((function(n){var e=n.id,t=n.title,i=n.description,a=n.link,r=n.skills;return Object(D.jsx)(En,{title:t,description:i,link:a,skills:r},e)}))]})},Hn=L.a.h1(T||(T=Object(B.a)(["\n  user-select: none;\n  padding: 0;\n\n  @media (max-width: 1240px) {\n    font-size: 4em;\n  }\n\n  @media (max-width: 800px) {\n    font-size: 3em;\n  }\n\n  @media (max-width: 500px) {\n    font-size: 2em;\n  }\n"]))),Rn=L.a.div(A||(A=Object(B.a)(["\n  margin: 2% 0 7% 0;\n  @media (max-width: 500px) {\n    margin: 5% 0 30% 0;\n  }\n"]))),Bn=L.a.h3(F||(F=Object(B.a)(["\n  margin-bottom: 1%;\n"]))),Ln=L.a.p(C||(C=Object(B.a)(["\n  margin: 1% 0;\n  @media (max-width: 500px) {\n    font-size: 0.9em;\n  }\n"]))),Pn=L.a.div(E||(E=Object(B.a)(["\n  @media (max-width: 500px) {\n    margin: 20% 0;\n  }\n"]))),_n=function(){var n=J((function(n){return n.work.data})),e=J((function(n){return n.projects.uni})),t=J((function(n){return n.projects.additional}));return Object(D.jsxs)(Pn,{children:[Object(D.jsx)(Hn,{children:"Experience"}),Object(D.jsxs)(Rn,{children:[Object(D.jsx)(Bn,{children:"Work Experience"}),Object(D.jsx)(Ln,{children:"Currently working in app development. Not much more I can say really ;)"}),Object(D.jsx)(Ln,{children:"By working with Arch I have gained a massive amount of experience in modern web technologies:"}),Object(D.jsx)(yn,{skills:n.languages})]}),Object(D.jsx)(Nn,{projectname:"University",projectarray:e}),Object(D.jsx)(Nn,{projectname:"Additional Projects",projectarray:t})]})},Kn=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(_n,{})})},Un=function(){return Object(D.jsx)("div",{children:Object(D.jsxs)(R.c,{children:[Object(D.jsx)(R.a,{exact:!0,path:"/",component:On}),Object(D.jsx)(R.a,{exact:!0,path:"/about",component:Kn})]})})},Vn=function(){return Object(D.jsx)(Un,{})},Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))},Mn=t(31),Wn=t(10),Gn=t(18),Jn=(t(46),t(32)),Yn=t(33),qn=t.n(Yn),Qn=t(19),Xn=[{id:1,name:"twitter",link:"https://twitter.com/Cheerypal_",element:Object(D.jsx)(Qn.c,{})},{id:2,name:"github",link:"https://github.com/Cheerypal",element:Object(D.jsx)(Qn.a,{})},{id:3,name:"linkedin",link:"https://www.linkedin.com/in/euan-gordon-8b984b151/",element:Object(D.jsx)(Qn.b,{})}],Zn={data:{languages:["React","React-Native","AWS","Redux/Redux-Persist","TypeScript"]}},$n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zn,e=arguments.length>1?arguments[1]:void 0;return e.type,n},ne={uni:[{id:1,title:"TrustBLK",description:"For my honours project I developed a trustworthy yet fair ad-blocker that you can use with Google Chrome. The project highlighted that there is potential to automate the process of highlighting acceptable ads (ads that don't completely ruin the internet). The ad-blocker developed showed these ads to the end user where they made the final call on if the ad should be blocked.",skills:["Vanilla JavaScript"],link:"https://github.com/cheerypal/TrustBLK"},{id:2,title:"F20DB",description:"I have implemented a multi-layer neural network that trained using Particle Swarm Optimisation. The ANN made use of multiple activation functions that were easily configurable depending on the task the NN had to complete. The neural network accurately predicted several tests when given test data and expected outputs.",skills:["Python"],link:"https://github.com/amaan-akram/F20BC"},{id:3,title:"Uplink",description:"Uplink was a project undertaken in my 3rd year of university as part of the software engineering course I had taken. The task was develop a Smart Home Hub System to control and monitor smart device energy usage within the home. Users could control the smart devices they had connected, set schedules and automate tasks. The system could send push notifications to the user if a device was consuming too much energy. The system was developed using the SCRUM development process.",skills:["Vue.js","Node.js","SQLite"],link:"https://github.com/HutchieV/F29SO-Sinderet-Green"}],additional:[{id:1,title:"VIROLL",description:"Developed a COVID-19 stats comparison webapp. The webapp was a PWA therefore the user can download and install it on their phone via supporting browsers",skills:["Vue.js"],link:"https://viroll.herokuapp.com"},{id:2,title:"Personal Site",description:"Developed this very site to display my projects, experience and other things I find interesting.",skills:["TypeScript","React","Redux"],link:"https://github.com/cheerypal/euangordon.me"}]},ee=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,e=arguments.length>1?arguments[1]:void 0;return e.type,n},te={data:[{id:1,name:"Amaan",link:"https://twitter.com/amaan_akram/"},{id:2,name:"Adithya",link:"https://www.instagram.com/aydee.wav/"},{id:3,name:"Alakbar",link:"https://alak.bar/"},{id:4,name:"Abdelrahman",link:"https://elkabbany.xyz/"},{id:5,name:"Humiad",link:"https://humaidq.ae/"}]},ie=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,e=arguments.length>1?arguments[1]:void 0;return e.type,n},ae={data:Xn},re=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,e=arguments.length>1?arguments[1]:void 0;return e.type,n},ce={key:"root",storage:qn.a,whitelist:[""]},oe=Object(Wn.b)({work:$n,projects:ee,mates:ie,social:re,kanye:un}),se=Object(Gn.a)(ce,oe);var de=Object(Wn.c)(se,Wn.a.apply(void 0,[].concat([Jn.a]))),le=Object(Gn.b)(de);H.a.render(Object(D.jsx)(z.a.StrictMode,{children:Object(D.jsx)(q.a,{children:Object(D.jsx)(G.a,{store:de,children:Object(D.jsx)(Mn.a,{persistor:le,children:Object(D.jsx)(Vn,{})})})})}),document.getElementById("root")),Dn()}},[[49,1,2]]]);
//# sourceMappingURL=main.a087932f.chunk.js.map