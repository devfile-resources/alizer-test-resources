// https://heroicons.com/
const {html} = lib;

export const BankNotesOutline = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
`;

export const EnvelopeOutline = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>

`;

export const LightHouse = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xmlSpace="preserve">
    <path d="M477.03 30.1v20.1l-49.19 36.75-49 36.94 18.37.57 18.57.57v91.69h-61.25v130.16h12.44c9.57 0 12.44.57 12.44 2.87 0 4.21-24.69 489.43-26.8 528.09-.96 18.95-1.91 36.37-1.91 38.86 0 4.02-.77 4.4-9.57 4.4h-9.57V990h336.88v-68.9h-9.57c-5.17 0-9.57-.57-9.57-1.53 0-.77-6.51-128.43-14.36-283.66-7.85-155.23-14.36-283.86-14.36-285.77 0-2.68 1.91-3.25 12.44-3.25h12.44V216.72H584.2v-91.69l18.57-.57 18.38-.57-49-36.94-49.18-36.75V10h-45.94v20.1zm6.7 113.69c-29.67 13.78-31.77 51.87-3.83 69.29l5.74 3.64H446.41v-76.56H491.4l-7.67 3.63zm69.86 34.65v38.28H512.44l5.74-3.64c11.67-6.89 20.1-21.25 20.1-33.69 0-13.97-10.53-29.67-23.93-35.6l-7.66-3.64h46.89v38.29zm-45.74-12.83c8.61 6.51 9.57 17.8 2.49 25.07-10.53 10.53-27.56 3.45-27.56-11.29-.01-12.63 15.5-21.24 25.07-13.78zM400.47 281.8v34.45h-15.32v-68.9h15.32v34.45zm53.59 0v34.45h-30.62v-68.9h30.62v34.45zm68.91 0v34.45h-45.94v-68.9h45.94v34.45zm53.59 0v34.45h-30.62v-68.9h30.62v34.45zm38.28 0v34.45h-15.32v-68.9h15.32v34.45zm-24.11 81.73c.57 9.38 1.53 26.8 2.1 38.86.57 12.06 1.53 28.71 2.1 36.75l1.15 14.93H403.91l1.15-14.93c.57-8.04 1.53-25.46 2.11-38.66s1.53-30.63 2.11-38.85l1.15-14.74H589.58l1.15 16.64zm10.72 209.59c0 2.49 1.34 27.18 2.87 55.12s2.87 51.87 2.87 53.02c0 1.91-22.78 2.49-107.19 2.49-100.87 0-107.19-.19-107.19-3.45 0-1.72 1.34-25.65 2.87-53.02s2.87-51.68 2.87-54.17v-4.21h202.9v4.22zm11.48 227.77c0 1.34 1.34 25.27 2.87 53.21s2.87 54.36 2.87 58.76v8.23H381.33v-9.19c0-4.98 1.34-31.39 2.87-58.76 1.53-27.37 2.87-50.91 2.87-52.25 0-3.44 225.86-3.44 225.86 0z" />
    <path d="M489.09 365.06c-10.34 4.4-12.06 10.53-12.06 44.02v29.67h45.94v-29.67c0-33.88-1.53-39.62-12.44-44.21-8.04-3.26-13.59-3.26-21.44.19zM491.39 585.94c-2.11.96-5.93 4.02-8.61 6.89-4.79 4.98-4.79 5.74-5.36 40.39l-.57 35.22h46.31l-.57-35.41-.57-35.41-5.93-5.93c-6.33-6.32-17.62-8.81-24.7-5.75zM491.39 815.63c-2.11.96-5.93 4.02-8.61 6.89-4.79 4.98-4.79 5.74-5.36 40.39l-.57 35.22h46.31l-.57-35.41-.57-35.41-5.93-5.93c-6.33-6.33-17.62-8.81-24.7-5.75z" />
  </svg>
`;

export const ShoppingCart = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
`;

export const TruckIcon = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
  </svg>

`;

export const UserGroup = ({...props}) => html`
  <svg ...${props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
  </svg>
`;
