import{s as r,N as c,j as e}from"./index-ea4f8eee.js";const l=[{id:1,title:"Massive Fleet",text:"Endless options from economical cars to luxury automobiles."},{id:2,title:"Instant Booking",text:"Get your desired vehicle within minutes, hassle-free!"},{id:3,title:"Affordable Rates",text:"Competitive pricing to keep your wallet happy."},{id:4,title:"Premium Service",text:"Experienced staff ready to make your journey seamless."},{id:5,title:"Flexible Rentals",text:"From hourly drives to monthly bookings, we cater to all."},{id:6,title:"Safety First",text:"Regularly maintained cars and insurance coverage."}],d=[{id:1,text:"Why settle for a dull ride when you can rent one of our stylish and comfortable cars, perfect for any occasion."},{id:2,text:"From snazzy sports cars to budget-friendly road warriors, we have a great selection to make your trip truly unforgettable."},{id:3,text:"Our top-notch customer service and incredible fleet are here to make your car rental experience absolutely smashing!"}],p="/rent-a-ride/assets/hero-0462ee0c.webp",x="/rent-a-ride/assets/main-page-74b0c684.webp",g=r.section`
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${({theme:t})=>t.colors.primaryBlack};
  background-image: url(${p});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
  border-radius: 20px;
`,n=r.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(18, 20, 23, 0.20);
`,a=r.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: ${({theme:t})=>t.colors.primaryWhite};
`,s=r.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`,o=r.section`
  padding-top: 40px;
  padding-bottom: 40px;
`,i=r.h2`
  margin-bottom: 24px;
  text-align: center;
  color: ${({theme:t})=>t.colors.primaryBlack};
`,m=r.section`
  height: 500px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${({theme:t})=>t.colors.primaryBlack};
  background-image: url(${x});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // -webkit-filter: grayscale(40%);
  filter: grayscale(40%);
  border-radius: 20px;
`,u=r.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,h=r.li`
  padding: 14px;
`,b=r.p`
  color: ${({theme:t})=>t.colors.primaryBlack};
`,y=r.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 925px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }
`,f=r.li`
  padding: 14px;
`,j=r.h3`
  margin-bottom: 8px;
  color: ${({theme:t})=>t.colors.primaryBlack};
`,k=r.p`
  color: ${({theme:t})=>t.colors.primaryBlack};
`,w=r.div`
  text-align: center;
`,v=r(c)`
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  color: ${({theme:t})=>t.colors.primaryWhite};
  background-color: ${({theme:t})=>t.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:t})=>t.colors.secondaryAccent};
`,A=()=>e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(n,{children:e.jsxs(a,{children:[e.jsx(s,{children:"Rent a Ride"})," is here to redefine your driving experience!"]})})}),e.jsx(o,{children:e.jsxs(i,{children:["Welcome to ",e.jsx(s,{children:"Rent a Ride"}),", the coolest car rental service in Ukraine! ",e.jsx("br",{}),"Forget the boring car agencies you used to deal with. ",e.jsx("br",{}),"We’re here to make your journey ridiculously fun!"]})}),e.jsxs(o,{children:[e.jsx(i,{children:"Ride in Style"}),e.jsx(u,{children:d.map(t=>e.jsx(h,{children:e.jsx(b,{children:t.text})},t.id))})]}),e.jsx(m,{children:e.jsx(n,{children:e.jsx(a,{children:"Get ready for the ride!"})})}),e.jsxs(o,{children:[e.jsx(i,{children:"Why Choose Us?"}),e.jsx(y,{children:l.map(t=>e.jsxs(f,{children:[e.jsx(j,{children:t.title}),e.jsx(k,{children:t.text})]},t.id))})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Ready to hit the road? Start your adventure today!"}),e.jsx(w,{children:e.jsx(v,{to:"/catalog",children:"Browse car"})})]})]}),B=()=>e.jsx(A,{});export{B as default};
