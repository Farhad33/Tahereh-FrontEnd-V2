import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'


import logoSrc from './logo.png';


const Header = () => {
    return (
        <NavStyle>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home??MM</a>
                    </Link>
                </li>
                <spam>|</spam>
                <li>
                    <Link href="/Aboutme">
                        <a>About me</a>
                    </Link>
                </li>
                <spam>|</spam>
                <li>
                    <Link href="/Collection">
                        <a>Collection</a>
                    </Link>
                </li>
                <spam>|</spam>
                <li>
                    <Link href="/Contactme">
                        <a>Contact me</a>
                    </Link>
                </li>
            </ul>
            <Link href="/">
                <a>
                    <Image
                        src="/logo.png"
                        alt="Picture of the author"
                        width={120}
                        height={70}
                    />
                </a>
            </Link>
        </NavStyle>
    )
}

export default Header

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 144px;
    ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            li {
                padding-right: 10px;
                padding-left: 10px;
            }
            spam {
                font-size: 55px;
                color: #828282;
            }
    }
  a {
    color: #828282;
    font-weight: 400;
    font-style: normal;
    font-size: 34px;    
    text-decoration: none;


    &[aria-current] {
      /* background-color: #faf9f4; */
      color: #828282;
    }
  }
`;



// const HeaderContainer = styled.div`
//       display: flex;
//       justify-content: space-between;
//       padding: 55px 144px;
//       `

// const Navbar = styled.ul`
//       list-style-type: none;
//       display: flex;
//       align-items: center;
//       li {
//             padding-right: 20px     ;
//       }
//       a {
//             font-weight: 400;
//             font-style: normal;
//             font-size: 24px;
//             text-decoration: none;
//             color: blue;

//       }
// `


// const StyledLink = styled(Link)`
//       font-weight: 400;
//       font-style: normal;
//       font-size: 34px;
//       text-decoration: none;
//       color: red;
// `;
