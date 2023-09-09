import{R as p,u as w,c as v,s as t,j as e,r as x,a as C,b as $,d as z,e as B}from"./index-bec6eaa1.js";function g(o=p){const i=o===p?w:v(o);return function(){const{store:r}=i();return r}}const W=g();function A(o=p){const i=o===p?W:g(o);return function(){return i().dispatch}}const D=A(),F=t.li`
  width: 274px;
`,I=t.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%);
`,M=t.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background-color: transparent;
`,E=t.svg`
  stroke: ${({theme:o})=>o.colors.primaryWhite};
  fill: none;

  &.favorite {
    stroke: none;
    fill: ${({theme:o})=>o.colors.primaryAccent};
  }
`,R=t.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: inherit;
`,S=t.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,T=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,u=t.span`
  color: ${({theme:o})=>o.colors.primaryAccent};
`,L=t.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,P=t.div`
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`,H=t.button`
  width: 100%;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  color: ${({theme:o})=>o.colors.primaryWhite};
  background-color: ${({theme:o})=>o.colors.primaryAccent};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:o})=>o.colors.secondaryAccent};
  }
`,f="/rent-a-ride/assets/dummy-955b0838.webp",b="/rent-a-ride/assets/icons-0650a926.svg",N=t.div`
  margin-bottom: 14px;
  border-radius: 14px;
`,O=t.img`
  height: 248px;
  width: 461px;
  object-fit: cover;
  border-radius: inherit;
`,Y=t.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,q=t.div`
margin-bottom: 14px;
`,G=t.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,J=t.div`
  margin-bottom: 24px;
`,K=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,Q=t.p``,U=t.div`
  margin-bottom: 24px;
`,V=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,X=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,d=t.div`
  padding: 7px 14px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 35px;
  color: ${({theme:o})=>o.colors.tertiaryBlack};
  background-color: ${({theme:o})=>o.colors.tertiaryWhite};

  & span {
    font-weight: 600;
    color: ${({theme:o})=>o.colors.primaryAccent};
  }
`,Z=t.a`
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme:o})=>o.colors.primaryWhite};
  background-color: ${({theme:o})=>o.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:o})=>o.colors.secondaryAccent};
`,_=({car:o})=>{const i=o.address.split(", "),s=i[1],r=i[2],c=o.rentalConditions.split(`
`),n=c[0].split(": ")[1],m=(a=>a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))(o.mileage);return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(O,{src:o.img?o.img:f,alt:o.make,loading:"lazy"})}),e.jsxs(Y,{children:[o.make," ",e.jsx(u,{children:o.model}),", ",o.year]}),e.jsxs(q,{children:[s," | ",r," | Id: ",o.id," | Year: ",o.year," | Type: ",o.type," | Fuel Consumption: ",o.fuelConsumption," | Engine Size: ",o.engineSize," "]}),e.jsx(G,{children:o.description}),e.jsxs(J,{children:[e.jsx(K,{children:"Accessories and functionalities:"}),e.jsxs(Q,{children:[o.accessories.join(" | ")," | ",o.functionalities.join(" | ")]})]}),e.jsxs(U,{children:[e.jsx(V,{children:"Rental Conditions:"}),e.jsxs(X,{children:[e.jsxs(d,{children:["Minimum age: ",e.jsx("span",{children:n})]}),c.slice(1).map((a,h)=>e.jsx(d,{children:a},h)),e.jsxs(d,{children:["Mileage: ",e.jsx("span",{children:m})]}),e.jsxs(d,{children:["Price: ",e.jsx("span",{children:o.rentalPrice})]})]})]}),e.jsx(Z,{href:"tel:+380730000000",children:"Rental car"})]})},oo=t.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:o})=>o.colors.secondaryBlack};
  backdrop-filter: blur(1px);
`,eo=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  padding: 40px;
  background-color: ${({theme:o})=>o.colors.primaryWhite};
  border-radius: 24px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,to=t.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`,io=t.svg`
  stroke: ${({theme:o})=>o.colors.primaryBlack};
`,no=document.getElementById("modal-root"),ro=({isOpen:o,onClose:i,children:s})=>{x.useEffect(()=>{o?document.body.style.overflow="hidden":document.body.style.overflow="auto";const n=l=>{l.code==="Escape"&&i()};return document.addEventListener("keydown",n),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",n)}},[o,i]);const r=n=>{o&&n.target===n.currentTarget&&i()},c=()=>{i()};return o?C.createPortal(e.jsx(oo,{onClick:r,children:e.jsxs(eo,{children:[e.jsx(to,{"aria-label":"Close modal window",onClick:c,children:e.jsx(io,{height:24,width:24,children:e.jsx("use",{href:b+"#icon-close"})})}),s]})}),no):null},so=()=>$(o=>o.favorites.favorites),co=({car:o})=>{const[i,s]=x.useState(!1),r=so().some(k=>k.id===o.id),c=r?"favorite":"",n=o.address.split(", "),l=n[1],m=n[2],a=D(),h=()=>{a(r?B(o):z(o))},j=()=>{s(!0)},y=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsxs(I,{children:[e.jsx(M,{"aria-label":"Add to favorite",onClick:h,children:e.jsx(E,{height:18,width:18,className:c,children:e.jsx("use",{href:b+"#icon-heart"})})}),e.jsx(R,{src:o.img?o.img:f,alt:o.make,loading:"lazy"})]}),e.jsxs(S,{children:[e.jsxs(T,{children:[o.make," ",o.model.length<9&&e.jsx(u,{children:o.model}),", ",o.year]}),e.jsx(L,{children:o.rentalPrice})]}),e.jsx(P,{children:e.jsxs("p",{children:[l," | ",m," | ",o.rentalCompany," | ",o.type," | ",o.id," | ",o.accessories[0]]})}),e.jsx(H,{onClick:j,children:"Learn more"})]}),e.jsx(ro,{isOpen:i,onClose:y,children:e.jsx(_,{car:o})})]})},ao=t.ul`
  margin-bottom: 100px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 925px) and (max-width: 1279px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 50px;
  }
`,po=({cars:o})=>e.jsx(ao,{children:o.map(i=>e.jsx(co,{car:i},i.id))});export{po as C,b as a,so as u};
