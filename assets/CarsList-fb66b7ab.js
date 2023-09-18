import{R as x,u as v,c as $,s as t,j as e,r as g,a as C,b as B,d as z,e as D}from"./index-61b6bc7a.js";function u(o=x){const i=o===x?v:$(o);return function(){const{store:r}=i();return r}}const I=u();function W(o=x){const i=o===x?I:u(o);return function(){return i().dispatch}}const A=W(),F=t.li`
  width: 274px;
  display: flex;
  flex-direction: column;
`,M=t.div`
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
`,E=t.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background-color: transparent;
`,R=t.svg`
  stroke: ${({theme:o})=>o.colors.primaryWhite};
  fill: none;

  &.favorite {
    stroke: none;
    fill: ${({theme:o})=>o.colors.primaryAccent};
  }
`,S=t.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: inherit;
`,T=t.div`
  margin-bottom: 8px;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: flex-start;
`,L=t.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,f=t.span`
  color: ${({theme:o})=>o.colors.primaryAccent};
`,P=t.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,H=t.ul`
  margin-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
`,l=t.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 6px;
  }

  &::after {
    position: absolute;
    content: '';
    height: 16px;
    width: 1px;
    margin-left: 3px;
  }

  &:not(:last-child)&::after {
    background-color: ${({theme:o})=>o.colors.secondaryBlack};
  }
`,N=t.button`
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
`,b="/rent-a-ride/assets/dummy-955b0838.webp",j="/rent-a-ride/assets/icons-0650a926.svg",O=t.div`
  margin-bottom: 14px;
  border-radius: 14px;
`,Y=t.img`
  height: 248px;
  width: 461px;
  object-fit: cover;
  border-radius: inherit;
`,q=t.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,G=t.div`
margin-bottom: 14px;
`,J=t.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,K=t.div`
  margin-bottom: 24px;
`,Q=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,U=t.p``,V=t.div`
  margin-bottom: 24px;
`,X=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:o})=>o.colors.primaryBlack};
`,Z=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,p=t.div`
  padding: 7px 14px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 35px;
  color: ${({theme:o})=>o.colors.tertiaryBlack};
  background-color: ${({theme:o})=>o.colors.tertiaryWhite};

  & span {
    font-weight: 600;
    color: ${({theme:o})=>o.colors.primaryAccent};
  }
`,_=t.a`
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
`,oo=({car:o})=>{const i=o.address.split(", "),s=i[1],r=i[2],c=o.rentalConditions.split(`
`),n=c[0].split(": ")[1],h=(a=>a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))(o.mileage);return e.jsxs(e.Fragment,{children:[e.jsx(O,{children:e.jsx(Y,{src:o.img?o.img:b,alt:o.make,loading:"lazy"})}),e.jsxs(q,{children:[o.make," ",e.jsx(f,{children:o.model}),", ",o.year]}),e.jsxs(G,{children:[s," | ",r," | Id: ",o.id," | Year: ",o.year," | Type: ",o.type," | Fuel Consumption: ",o.fuelConsumption," | Engine Size: ",o.engineSize," "]}),e.jsx(J,{children:o.description}),e.jsxs(K,{children:[e.jsx(Q,{children:"Accessories and functionalities:"}),e.jsxs(U,{children:[o.accessories.join(" | ")," | ",o.functionalities.join(" | ")]})]}),e.jsxs(V,{children:[e.jsx(X,{children:"Rental Conditions:"}),e.jsxs(Z,{children:[e.jsxs(p,{children:["Minimum age: ",e.jsx("span",{children:n})]}),c.slice(1).map((a,m)=>e.jsx(p,{children:a},m)),e.jsxs(p,{children:["Mileage: ",e.jsx("span",{children:h})]}),e.jsxs(p,{children:["Price: ",e.jsx("span",{children:o.rentalPrice})]})]})]}),e.jsx(_,{href:"tel:+380730000000",children:"Rental car"})]})},eo=t.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:o})=>o.colors.secondaryBlack};
  backdrop-filter: blur(1px);
`,to=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  background-color: ${({theme:o})=>o.colors.primaryWhite};
  border-radius: 24px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    width: 541px;
  }
`,io=t.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`,no=t.svg`
  stroke: ${({theme:o})=>o.colors.primaryBlack};
`,ro=document.getElementById("modal-root"),so=({isOpen:o,onClose:i,children:s})=>{g.useEffect(()=>{o?document.body.style.overflow="hidden":document.body.style.overflow="auto";const n=d=>{d.code==="Escape"&&i()};return document.addEventListener("keydown",n),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",n)}},[o,i]);const r=n=>{o&&n.target===n.currentTarget&&i()},c=()=>{i()};return o?C.createPortal(e.jsx(eo,{onClick:r,children:e.jsxs(to,{children:[e.jsx(io,{"aria-label":"Close modal window",onClick:c,children:e.jsx(no,{height:24,width:24,children:e.jsx("use",{href:j+"#icon-close"})})}),s]})}),ro):null},co=()=>B(o=>o.favorites.favorites),ao=({car:o})=>{const[i,s]=g.useState(!1),r=co().some(k=>k.id===o.id),c=r?"favorite":"",n=o.address.split(", "),d=n[1],h=n[2],a=A(),m=()=>{a(r?D(o):z(o))},y=()=>{s(!0)},w=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsxs(M,{children:[e.jsx(E,{"aria-label":"Add to favorite",onClick:m,children:e.jsx(R,{height:18,width:18,className:c,children:e.jsx("use",{href:j+"#icon-heart"})})}),e.jsx(S,{src:o.img?o.img:b,width:"274px",height:"268px",alt:o.make,loading:"lazy"})]}),e.jsxs(T,{children:[e.jsxs(L,{children:[o.make," ",e.jsx(f,{children:o.model}),", ",o.year]}),e.jsx(P,{children:o.rentalPrice})]}),e.jsxs(H,{children:[e.jsx(l,{children:d}),e.jsx(l,{children:h}),e.jsx(l,{children:o.rentalCompany}),e.jsx(l,{children:o.type}),e.jsx(l,{children:o.id}),e.jsx(l,{children:o.accessories[0]})]}),e.jsx(N,{onClick:y,children:"Learn more"})]}),e.jsx(so,{isOpen:i,onClose:w,children:e.jsx(oo,{car:o})})]})},lo=t.ul`
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
`,xo=({cars:o})=>e.jsx(lo,{children:o.map(i=>e.jsx(ao,{car:i},i.id))});export{xo as C,j as a,co as u};
