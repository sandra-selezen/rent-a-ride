import{R as x,u as v,c as $,s as t,j as o,r as g,a as C,b as B,d as z,e as D}from"./index-5f23d28f.js";function u(e=x){const i=e===x?v:$(e);return function(){const{store:s}=i();return s}}const I=u();function W(e=x){const i=e===x?I:u(e);return function(){return i().dispatch}}const A=W(),F=t.li`
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
  stroke: ${({theme:e})=>e.colors.primaryWhite};
  fill: none;

  &.favorite {
    stroke: none;
    fill: ${({theme:e})=>e.colors.primaryAccent};
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
  color: ${({theme:e})=>e.colors.primaryBlack};
`,f=t.span`
  color: ${({theme:e})=>e.colors.primaryAccent};
`,P=t.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,H=t.ul`
  margin-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
`,r=t.li`
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
    background-color: ${({theme:e})=>e.colors.secondaryBlack};
  }
`,N=t.button`
  width: 100%;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.primaryWhite};
  background-color: ${({theme:e})=>e.colors.primaryAccent};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.secondaryAccent};
  }
`,b="/rent-a-ride/assets/dummy-955b0838.webp",j="/rent-a-ride/assets/icons-0650a926.svg",O=t.div`
  margin-bottom: 14px;
  border-radius: 14px;
`,Y=t.img`
  height: 248px;
  // width: 461px;
  object-fit: cover;
  border-radius: inherit;
`,q=t.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,G=t.ul`
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
`,J=t.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,K=t.div`
  margin-bottom: 24px;
`,Q=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,U=t.p``,V=t.div`
  margin-bottom: 24px;
`,X=t.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,Z=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,p=t.div`
  padding: 7px 14px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 35px;
  color: ${({theme:e})=>e.colors.tertiaryBlack};
  background-color: ${({theme:e})=>e.colors.tertiaryWhite};

  & span {
    font-weight: 600;
    color: ${({theme:e})=>e.colors.primaryAccent};
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
  color: ${({theme:e})=>e.colors.primaryWhite};
  background-color: ${({theme:e})=>e.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.secondaryAccent};
`,ee=({car:e})=>{const i=e.address.split(", "),c=i[1],s=i[2],a=e.rentalConditions.split(`
`),n=a[0].split(": ")[1],h=(l=>l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))(e.mileage);return o.jsxs(o.Fragment,{children:[o.jsx(O,{children:o.jsx(Y,{src:e.img?e.img:b,alt:e.make,width:"461px",loading:"lazy"})}),o.jsxs(q,{children:[e.make," ",o.jsx(f,{children:e.model}),", ",e.year]}),o.jsxs(G,{children:[o.jsx(r,{children:c}),o.jsx(r,{children:s}),o.jsxs(r,{children:["Id: ",e.id]}),o.jsxs(r,{children:["Year: ",e.year]}),o.jsxs(r,{children:["Type: ",e.type]}),o.jsxs(r,{children:["Fuel Consumption: ",e.fuelConsumption]}),o.jsxs(r,{children:["Engine Size: ",e.engineSize]})]}),o.jsx(J,{children:e.description}),o.jsxs(K,{children:[o.jsx(Q,{children:"Accessories and functionalities:"}),o.jsxs(U,{children:[e.accessories.join(" | ")," | ",e.functionalities.join(" | ")]})]}),o.jsxs(V,{children:[o.jsx(X,{children:"Rental Conditions:"}),o.jsxs(Z,{children:[o.jsxs(p,{children:["Minimum age: ",o.jsx("span",{children:n})]}),a.slice(1).map((l,m)=>o.jsx(p,{children:l},m)),o.jsxs(p,{children:["Mileage: ",o.jsx("span",{children:h})]}),o.jsxs(p,{children:["Price: ",o.jsx("span",{children:e.rentalPrice})]})]})]}),o.jsx(_,{href:"tel:+380730000000",children:"Rental car"})]})},oe=t.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.secondaryBlack};
  backdrop-filter: blur(1px);
`,te=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.primaryWhite};
  border-radius: 24px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    width: 541px;
  }
`,ie=t.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`,re=t.svg`
  stroke: ${({theme:e})=>e.colors.primaryBlack};
`,ne=document.getElementById("modal-root"),se=({isOpen:e,onClose:i,children:c})=>{g.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto";const n=d=>{d.code==="Escape"&&i()};return document.addEventListener("keydown",n),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",n)}},[e,i]);const s=n=>{e&&n.target===n.currentTarget&&i()},a=()=>{i()};return e?C.createPortal(o.jsx(oe,{onClick:s,children:o.jsxs(te,{children:[o.jsx(ie,{"aria-label":"Close modal window",onClick:a,children:o.jsx(re,{height:24,width:24,children:o.jsx("use",{href:j+"#icon-close"})})}),c]})}),ne):null},ce=()=>B(e=>e.favorites.favorites),ae=({car:e})=>{const[i,c]=g.useState(!1),s=ce().some(k=>k.id===e.id),a=s?"favorite":"",n=e.address.split(", "),d=n[1],h=n[2],l=A(),m=()=>{l(s?D(e):z(e))},y=()=>{c(!0)},w=()=>{c(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs(F,{children:[o.jsxs(M,{children:[o.jsx(E,{"aria-label":"Add to favorite",onClick:m,children:o.jsx(R,{height:18,width:18,className:a,children:o.jsx("use",{href:j+"#icon-heart"})})}),o.jsx(S,{src:e.img?e.img:b,width:"274px",alt:e.make,loading:"lazy"})]}),o.jsxs(T,{children:[o.jsxs(L,{children:[e.make," ",o.jsx(f,{children:e.model}),", ",e.year]}),o.jsx(P,{children:e.rentalPrice})]}),o.jsxs(H,{children:[o.jsx(r,{children:d}),o.jsx(r,{children:h}),o.jsx(r,{children:e.rentalCompany}),o.jsx(r,{children:e.type}),o.jsx(r,{children:e.id}),o.jsx(r,{children:e.accessories[0]})]}),o.jsx(N,{onClick:y,children:"Learn more"})]}),o.jsx(se,{isOpen:i,onClose:w,children:o.jsx(ee,{car:e})})]})},le=t.ul`
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
`,pe=({cars:e})=>o.jsx(le,{children:e.map(i=>o.jsx(ae,{car:i},i.id))});export{pe as C,j as a,ce as u};
